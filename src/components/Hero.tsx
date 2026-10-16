import { useEffect, useRef, useState } from 'react';
import { heroProjects as projects } from '../data/portfolioVideos';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoSources, setVideoSources] = useState<string[]>(projects.map((project) => project.video));
  const [revealed, setRevealed] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const objectUrls: string[] = [];
    let disposed = false;

    projects.forEach(async ({ video }, index) => {
      try {
        const response = await fetch(video, { signal: controller.signal, cache: 'force-cache' });
        if (!response.ok) throw new Error(`Unable to preload video (${response.status})`);
        const objectUrl = URL.createObjectURL(await response.blob());
        if (disposed) {
          URL.revokeObjectURL(objectUrl);
          return;
        }
        objectUrls.push(objectUrl);
        setVideoSources((current) => current.map((source, sourceIndex) => sourceIndex === index ? objectUrl : source));
      } catch {
        // The original URL remains in state if fetch, CORS, or blob decoding fails.
      }
    });

    return () => {
      disposed = true;
      controller.abort();
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  useEffect(() => {
    const node = revealRef.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      className={`hero-section ${activeIndex === 0 ? 'is-pink' : 'is-white'}`}
      aria-label="Irfan creative portfolio"
    >
      <div className="hero-video-stack" aria-hidden="true">
        {projects.map((project, index) => (
          <video
            key={project.label}
            className={`hero-video${activeIndex === index ? ' is-active' : ''}`}
            src={videoSources[index]}
            muted
            autoPlay
            playsInline
            loop
            preload="auto"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="hero-video-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-upper">
          <div className="project-switcher" role="group" aria-label="Select portfolio video">
            {projects.map((project, index) => (
              <button
                className={`project-option role-link${activeIndex === index ? ' is-active' : ''}`}
                type="button"
                key={project.label}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <span className="project-number">0{index + 1}</span>
                <span aria-hidden="true">/</span>
                <span>{project.label}</span>
              </button>
            ))}
          </div>

          <div className="availability" role="status" aria-label="Available for work">
            <span className="availability-dot" aria-hidden="true" />
            <span>Available for work</span>
          </div>
        </div>

        <div ref={revealRef} className={`hero-lower${revealed ? ' is-revealed' : ''}`}>
          <h1 className="hero-name reveal-up">
            Irfan<span className="name-period">.</span>
          </h1>
          <div className="hero-intro">
            <p className="intro-copy reveal-right">
              I craft bold brands and modern websites with purpose.
            </p>
            <a className="project-cta reveal-right" href="#contact">
              <span>start a project</span>
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
