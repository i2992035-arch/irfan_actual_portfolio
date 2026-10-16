import { useState } from 'react';
import PageHeading from '../components/PageHeading';

type ProjectCategory = 'client' | 'design';

interface ProjectItem {
  number: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  linkText: string;
  href: string;
}

const showcaseProjects: ProjectItem[] = [
  {
    number: '01',
    title: 'OmniStore — Headless E-Commerce Platform',
    category: 'client',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    description: 'High-speed headless e-commerce storefront featuring fluid cart transitions, instant search, and optimized payment flows.',
    linkText: 'Explore case study',
    href: '#contact',
  },
  {
    number: '02',
    title: 'PulseAnalytics — Real-time Telemetry Dashboard',
    category: 'client',
    tags: ['Next.js', 'Node.js', 'WebSockets', 'Chart.js'],
    description: 'Mission-critical observability platform visualizing microservice latencies and system metrics with sub-second live streaming.',
    linkText: 'View live demo',
    href: '#contact',
  },
  {
    number: '03',
    title: 'Aura Studio — Creative Agency Showcase',
    category: 'client',
    tags: ['Three.js', 'WebGL', 'GSAP', 'Interactive UI'],
    description: 'Award-nominated digital agency portfolio featuring WebGL image distortions, kinetic typography, and smooth page transitions.',
    linkText: 'Launch experience',
    href: '#contact',
  },
  {
    number: '04',
    title: 'FinEdge — Neo-Banking Mobile App Experience',
    category: 'design',
    tags: ['Figma', 'Mobile UI', 'Design System', 'Micro-interactions'],
    description: 'End-to-end product design for a modern fintech app featuring biometric security, smart budgeting flows, and dark-mode elegance.',
    linkText: 'View Figma prototype',
    href: '#contact',
  },
  {
    number: '05',
    title: 'Verve — Multi-Platform Component Design System',
    category: 'design',
    tags: ['Design Tokens', 'Accessibility', 'Figma Variants', 'Documentation'],
    description: 'Comprehensive design system with over 200 components, accessible color contrast pairings, and responsive auto-layout primitives.',
    linkText: 'Inspect design system',
    href: '#contact',
  },
  {
    number: '06',
    title: 'Nebula AI — Generative Workflow Canvas',
    category: 'design',
    tags: ['Interaction Design', 'Canvas UI', 'UX Research', 'AI Tooling'],
    description: 'Node-based visual automation workspace designed for creators, featuring frictionless zooming, gestures, and contextual quick-actions.',
    linkText: 'View UX case study',
    href: '#contact',
  },
];

const categoryLabels: Record<ProjectCategory, { number: string; label: string }> = {
  client: { number: '01', label: 'Client / Coded Projects' },
  design: { number: '02', label: 'UI/UX Designs' },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('client');

  const filteredProjects = showcaseProjects.filter((p) => p.category === activeCategory);

  return (
    <article className="interior-page projects-section" id="projects" aria-labelledby="projects-title">
      <PageHeading
        index="01"
        eyebrow="SELECTED WORK"
        title="Projects"
        description="Two distinct collections: client projects built with code, and UI/UX design work."
      />

      <section className="page-content-section" aria-label="Project collections">
        <div className="project-filters" role="group" aria-label="Choose a project type">
          {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
            <button
              className={`project-filter${activeCategory === category ? ' is-active' : ''}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              <span className="filter-index">{categoryLabels[category].number}</span>
              <span>{categoryLabels[category].label}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid" role="list">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.number} role="listitem">
              <div className="project-card-header">
                <span className="project-card-index">{project.number}</span>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="body-copy">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <a className="text-link" href={project.href}>
                  {project.linkText} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta-banner">
          <div>
            <p className="content-eyebrow">HAVE A CUSTOM PROJECT?</p>
            <h3 className="projects-cta-heading">Need a bespoke web experience or custom design system?</h3>
          </div>
          <a className="project-cta" href="#contact">
            <span>Start a project</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </article>
  );
}
