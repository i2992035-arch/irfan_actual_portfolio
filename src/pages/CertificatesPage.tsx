import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PageHeading from '../components/PageHeading';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  category: 'hackathon' | 'ai';
  awardBadge?: string;
  badgeType?: 'gold' | 'purple' | 'cyan';
  recipient?: string;
  team?: string;
  description: string;
  image?: string;
  fullImage?: string;
}

type FilterCategory = 'all' | 'hackathon' | 'ai';

const categoryLabels: Record<FilterCategory, { number: string; label: string }> = {
  all: { number: '01', label: 'All Credentials' },
  hackathon: { number: '02', label: 'Hackathons & Awards' },
  ai: { number: '03', label: 'AI & Machine Learning' },
};

const certificates: CertificateItem[] = [
  {
    id: '01',
    title: 'Idea to Impact Award — Certificate of Innovation',
    issuer: 'NIT-CodeX Hackathon 2026 • Season 1',
    date: '23 May 2026',
    credentialId: 'NIT-CODEX-2026-S1-042',
    recipient: 'Mohd Irfan Shaikh',
    team: 'Errorists',
    category: 'hackathon',
    awardBadge: '🏆 Idea to Impact Award',
    badgeType: 'gold',
    description: 'Awarded for outstanding creativity and innovation during the Hackathon event. Recognized for turning ambitious ideas into impactful digital solutions with strong creative problem-solving and rapid engineering.',
    skills: ['Hackathon Winner', 'Innovation', 'Creative Thinking', 'Rapid Prototyping', 'Problem Solving'],
    image: '/certificates/nit-codex-hackathon.png',
    fullImage: '/certificates/nit-codex-hackathon-doc.png',
  },
  {
    id: '02',
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    date: 'Completed 2026',
    credentialId: 'ANTHROPIC-AIFS-2026',
    recipient: 'Irfan Shaikh',
    category: 'ai',
    awardBadge: '💡 Anthropic Certified',
    badgeType: 'purple',
    description: 'Completed in-depth curriculum by Anthropic (partnered with UCC, Ringling College of Art + Design, and HEA) covering effective, practical, and responsible artificial intelligence usage and LLM integration.',
    skills: ['Anthropic Claude', 'AI Fluency', 'Prompt Engineering', 'Responsible AI', 'Model Literacy'],
    image: '/certificates/anthropic-ai-fluency.png',
    fullImage: '/certificates/anthropic-ai-fluency-post.png',
  },
  {
    id: '03',
    title: 'AI For All: AI Appreciate Stage',
    issuer: 'Intel & Digital India • CBSE',
    date: '06 January 2026',
    credentialId: 'INTEL-AI4ALL-APPRECIATE-0126',
    recipient: 'Irfan Shaikh',
    category: 'ai',
    awardBadge: '⚡ Intel AI Certified',
    badgeType: 'cyan',
    description: 'Certified stage completion under the national AI For All initiative by Intel and CBSE / Digital India. Validating core competencies in AI appreciation, machine learning awareness, and human-centric application design.',
    skills: ['Intel AI For All', 'AI Appreciation', 'Machine Learning Foundations', 'Digital India', 'CBSE'],
    image: '/certificates/intel-ai-appreciate.png',
    fullImage: '/certificates/intel-ai-for-all-both.png',
  },
  {
    id: '04',
    title: 'AI For All: AI Aware Stage',
    issuer: 'Intel & Digital India • CBSE',
    date: '06 January 2026',
    credentialId: 'INTEL-AI4ALL-AWARE-0126',
    recipient: 'Irfan Shaikh',
    category: 'ai',
    awardBadge: '⚡ Intel AI Certified',
    badgeType: 'cyan',
    description: 'Certified stage completion demonstrating thorough understanding of artificial intelligence capabilities, data governance, algorithmic awareness, and responsible AI ethics within modern digital ecosystems.',
    skills: ['Intel AI For All', 'AI Awareness', 'Ethical AI', 'Technology Literacy', 'Data Governance'],
    image: '/certificates/intel-ai-aware.png',
    fullImage: '/certificates/intel-ai-for-all-both.png',
  },
];

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const filteredCertificates = certificates.filter(
    (cert) => activeCategory === 'all' || cert.category === activeCategory
  );

  return (
    <article className="interior-page certificates-section" id="certificates" aria-labelledby="certificates-title">
      <PageHeading
        index="04"
        eyebrow="LEARNING & CREDENTIALS"
        title="Certificates & Awards"
        description="Official credentials, hackathon honors, and verified certifications across Artificial Intelligence and Machine Learning."
      />

      <section className="page-content-section" aria-label="Completed certificates and awards">
        {/* Category Filters */}
        <div className="project-filters certificate-filters" role="group" aria-label="Filter credentials by domain">
          {(Object.keys(categoryLabels) as FilterCategory[]).map((category) => {
            const count =
              category === 'all'
                ? certificates.length
                : certificates.filter((c) => c.category === category).length;

            return (
              <button
                className={`project-filter certificate-filter${activeCategory === category ? ' is-active' : ''}`}
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                <span className="filter-index">{categoryLabels[category].number}</span>
                <span className="filter-label-group">
                  <span>{categoryLabels[category].label}</span>
                  <span className="filter-count">({count})</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid" role="list">
          {filteredCertificates.map((cert) => (
            <article
              className={`certificate-card${cert.awardBadge ? ' is-highlighted' : ''}`}
              key={cert.id}
              role="listitem"
            >
              {/* Card Top */}
              <div className="certificate-card-top">
                <div className="cert-top-left">
                  <span className="certificate-index">{cert.id}</span>
                  <span className="certificate-date">{cert.date}</span>
                </div>
                {cert.awardBadge && (
                  <span className={`certificate-award-badge badge-${cert.badgeType || 'gold'}`}>
                    {cert.awardBadge}
                  </span>
                )}
              </div>

              {/* Certificate Image Preview (if present) */}
              {cert.image && (
                <div
                  className="certificate-image-wrapper"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View certificate for ${cert.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} awarded to ${cert.recipient || 'Irfan Shaikh'}`}
                    className="certificate-image-thumb"
                    loading="lazy"
                  />
                  <div className="certificate-image-overlay">
                    <span className="certificate-view-prompt">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      Click to Preview
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="certificate-card-body">
                <span className="certificate-issuer">{cert.issuer}</span>
                <h3 className="certificate-title">{cert.title}</h3>

                {cert.recipient && (
                  <div className="certificate-recipient-row">
                    <span className="recipient-label">Candidate:</span>
                    <span className="recipient-name">
                      {cert.recipient}
                      {cert.team && <span className="team-badge"> ({cert.team})</span>}
                    </span>
                  </div>
                )}

                <p className="certificate-description">{cert.description}</p>

                <div className="certificate-skills">
                  {cert.skills.map((skill) => (
                    <span className="certificate-skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="certificate-card-footer">
                <div className="cert-footer-left">
                  <span className="certificate-id-label">Credential ID</span>
                  <code className="certificate-id-code">{cert.credentialId}</code>
                </div>

                <div className="cert-footer-actions">
                  {cert.image && (
                    <button
                      type="button"
                      className="cert-preview-button"
                      onClick={() => setSelectedCert(cert)}
                      aria-label={`Open certificate document for ${cert.title}`}
                    >
                      View Doc ↗
                    </button>
                  )}
                  <span className="verified-badge">
                    <span className="verified-check" aria-hidden="true">✓</span> Verified
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCert &&
        createPortal(
          <div
            className="cert-modal-backdrop"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="cert-modal-header">
                <div className="cert-modal-header-text">
                  <span className="certificate-issuer">{selectedCert.issuer}</span>
                  <h3 id="cert-modal-title" className="cert-modal-title">
                    {selectedCert.title}
                  </h3>
                  {selectedCert.awardBadge && (
                    <span className={`certificate-award-badge badge-${selectedCert.badgeType || 'gold'}`}>
                      {selectedCert.awardBadge}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="cert-modal-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate preview"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image Frame */}
              <div className="cert-modal-image-frame">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate document`}
                  className="cert-modal-image"
                />
              </div>

              {/* Modal Footer */}
              <div className="cert-modal-footer">
                <div className="cert-modal-meta">
                  <div className="meta-item">
                    <span className="meta-muted">Recipient:</span>
                    <strong>{selectedCert.recipient || 'Mohd Irfan Shaikh'}</strong>
                  </div>
                  {selectedCert.team && (
                    <div className="meta-item">
                      <span className="meta-muted">Team:</span>
                      <strong>{selectedCert.team}</strong>
                    </div>
                  )}
                  <div className="meta-item">
                    <span className="meta-muted">Issue Date:</span>
                    <strong>{selectedCert.date}</strong>
                  </div>
                  <div className="meta-item">
                    <span className="meta-muted">ID:</span>
                    <code>{selectedCert.credentialId}</code>
                  </div>
                </div>

                <div className="cert-modal-actions">
                  {selectedCert.fullImage && (
                    <a
                      href={selectedCert.fullImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-modal-external-link"
                    >
                      Open Full Image ↗
                    </a>
                  )}
                  <button
                    type="button"
                    className="cert-modal-done-btn"
                    onClick={() => setSelectedCert(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
}
