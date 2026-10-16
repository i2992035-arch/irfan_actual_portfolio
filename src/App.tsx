import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'Irfan — Creative Portfolio';

    // Support direct anchor navigation on page load
    const hash = window.location.hash.replace('#', '');
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const target = hash || path;

    if (target && target !== 'top') {
      setTimeout(() => {
        const elem = document.getElementById(target);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="portfolio-page" id="top">
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <div className="portfolio-sections-container">
          <ProjectsPage />
          <SkillsPage />
          <AboutPage />
          <CertificatesPage />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
