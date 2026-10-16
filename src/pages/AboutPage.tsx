import PageHeading from '../components/PageHeading';

export default function AboutPage() {
  return (
    <article className="interior-page about-section" id="about" aria-labelledby="about-title">
      <PageHeading
        index="03"
        eyebrow="ABOUT"
        title="About"
        description="A little about Irfan and the creative approach behind the work."
      />

      <section className="page-content-section about-copy" aria-labelledby="about-statement">
        <p className="content-eyebrow">THE APPROACH</p>
        <h2 id="about-statement" className="about-statement">
          I’m Irfan. I craft bold brands and modern websites with purpose.
        </h2>

        <p className="body-copy about-summary">
          I operate at the intersection of creative design and engineering rigor. With a deep passion for aesthetics, performance, and interaction design, I help brands, startups, and clients bring ambitious digital visions to life.
        </p>

        <p className="body-copy about-summary">
          Whether constructing scalable web applications or crafting cohesive design systems, every detail is considered—from typography and subtle motion to code architecture and accessibility.
        </p>

        <div className="about-focus-list" aria-label="Portfolio focus areas">
          <a className="about-focus-row" href="#projects" aria-label="Explore client projects built with code">
            <span className="focus-index">01</span>
            <span className="focus-name">Client projects, built with code</span>
            <span className="focus-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="about-focus-row" href="#projects" aria-label="Explore UI and UX designs">
            <span className="focus-index">02</span>
            <span className="focus-name">UI/UX designs & systems</span>
            <span className="focus-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="about-focus-row" href="#contact" aria-label="Get in touch with Irfan">
            <span className="focus-index">03</span>
            <span className="focus-name">Available for new opportunities</span>
            <span className="focus-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </article>
  );
}
