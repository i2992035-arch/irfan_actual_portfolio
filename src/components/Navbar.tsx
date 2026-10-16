import { useEffect, useState } from 'react';

const links = [
  { number: '01', label: 'Projects', targetId: 'projects' },
  { number: '02', label: 'Skills', targetId: 'skills' },
  { number: '03', label: 'About', targetId: 'about' },
  { number: '04', label: 'Certificates', targetId: 'certificates' },
  { number: '05', label: 'Contact', targetId: 'contact' },
];

const clockFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});

interface NavLinksProps {
  activeSection: string;
  onNavigate?: (targetId: string) => void;
}

function NavigationLinks({ activeSection, onNavigate }: NavLinksProps) {
  return (
    <>
      {links.map(({ number, label, targetId }) => {
        const isCurrent = activeSection === targetId;
        return (
          <a
            className={`nav-link${isCurrent ? ' is-current' : ''}`}
            href={`#${targetId}`}
            key={number}
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(targetId);
            }}
            aria-current={isCurrent ? 'true' : undefined}
          >
            <span className="nav-index">{number}</span>
            <span className="nav-label">{label}</span>
          </a>
        );
      })}
    </>
  );
}

export default function Navbar() {
  const [time, setTime] = useState(() => clockFormatter.format(new Date()));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const timer = window.setInterval(() => setTime(clockFormatter.format(new Date())), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['contact', 'certificates', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (targetId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-frame mx-auto max-w-[1340px] px-[15px] py-9">
        <div className="nav-bar">
          <a className="brand-link" href="#top" onClick={scrollToTop} aria-label="Irfan — home">
            Irfan<span>.</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavigationLinks activeSection={activeSection} onNavigate={handleNavigate} />
          </nav>

          <div className="nav-meta">
            <a className="contact-email" href="#contact" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }}>
              izukimidoriya1357@gmail.com
            </a>
            <p className="live-clock" aria-label={`Current CUP time ${time}`}>
              <span>CUP</span>
              <time>{time}</time>
            </p>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-label">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className={`menu-glyph${menuOpen ? ' is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-nav-grid${menuOpen ? ' is-open' : ''}`}
          inert={!menuOpen}
        >
          <nav className="mobile-nav-inner" aria-label="Mobile primary navigation">
            <NavigationLinks activeSection={activeSection} onNavigate={handleNavigate} />
            <div className="mobile-nav-footer">
              <a
                href="#contact"
                className="mobile-nav-email"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate('contact');
                }}
              >
                izukimidoriya1357@gmail.com ↗
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
