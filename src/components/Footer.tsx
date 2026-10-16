export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner mx-auto max-w-[1340px] px-[15px]">
        <div className="footer-left">
          <a className="brand-link" href="#top" onClick={scrollToTop}>
            Irfan<span>.</span>
          </a>
          <p className="footer-copy">Creative Portfolio — Designed & engineered with purpose.</p>
        </div>

        <div className="footer-right">
          <p className="copyright-text">© {new Date().getFullYear()} Irfan. All rights reserved.</p>
          <button type="button" className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
