import { heroProjects } from '../data/portfolioVideos';

export default function PortfolioBackdrop() {
  return (
    <div className="portfolio-backdrop" aria-hidden="true">
      <video
        className="portfolio-backdrop-video"
        src={heroProjects[0].video}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
      />
      <div className="portfolio-backdrop-scrim" />
    </div>
  );
}
