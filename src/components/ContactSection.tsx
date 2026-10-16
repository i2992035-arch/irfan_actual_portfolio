import { useState } from 'react';
import PageHeading from './PageHeading';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'web', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'izukimidoriya1357@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <article className="interior-page contact-page" id="contact" aria-labelledby="contact-title">
      <PageHeading
        index="05"
        eyebrow="GET IN TOUCH"
        title="Contact"
        description="Have a project in mind, an idea to bring to life, or want to collaborate? Let's connect."
      />

      <section className="page-content-section contact-container" aria-label="Contact information and inquiry form">
        <div className="contact-details-card">
          <div>
            <p className="content-eyebrow">DIRECT INQUIRIES</p>
            <h2 className="contact-headline">Let's craft something bold together.</h2>
            <p className="body-copy">
              I'm always excited to hear about new projects, creative challenges, and opportunities to build memorable digital products.
            </p>
          </div>

          <div className="contact-meta-group">
            <div className="contact-meta-item">
              <span className="meta-label">EMAIL ADDRESS</span>
              <div className="meta-value-row">
                <a href={`mailto:${email}`} className="email-link">
                  {email}
                </a>
                <button
                  type="button"
                  className="copy-badge"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="contact-meta-item">
              <span className="meta-label">CURRENT STATUS</span>
              <div className="status-badge">
                <span className="status-pulse-dot" aria-hidden="true" />
                <span>Available for select projects</span>
              </div>
            </div>

            <div className="contact-meta-item">
              <span className="meta-label">LOCATION & TIMEZONE</span>
              <p className="meta-text">Available worldwide (Remote)</p>
            </div>
          </div>

          <div className="contact-socials" aria-label="Social and code profiles">
            <a href="https://github.com/i2992035-arch" target="_blank" rel="noopener noreferrer" className="social-pill">
              <span className="social-pill-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </span>
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/irfan-shaikh-24a459379" target="_blank" rel="noopener noreferrer" className="social-pill">
              <span className="social-pill-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              LinkedIn ↗
            </a>
            <a href="https://instagram.com/irfanoirr" target="_blank" rel="noopener noreferrer" className="social-pill social-pill--instagram">
              <span className="social-pill-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </span>
              Instagram ↗
            </a>
            <a href="mailto:izukimidoriya1357@gmail.com" className="social-pill social-pill--gmail">
              <span className="social-pill-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </span>
              Gmail ↗
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <p className="content-eyebrow">SEND A MESSAGE</p>
          {submitted ? (
            <div className="form-success-state" role="status">
              <span className="success-icon" aria-hidden="true">✓</span>
              <h3>Message sent successfully</h3>
              <p className="body-copy">
                Thank you, {formData.name}. I've received your note and will get back to you promptly.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', service: 'web', message: '' });
                }}
              >
                Send another message <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-service">Project Type</label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="web">Web Development & Code</option>
                  <option value="design">UI/UX & Product Design</option>
                  <option value="mobile-ios">iOS App (Swift / React Native)</option>
                  <option value="mobile-android">Android App (Kotlin / React Native)</option>
                  <option value="cross-platform">Cross-Platform App (Flutter / Expo)</option>
                  <option value="pwa">Progressive Web App (PWA)</option>
                  <option value="full">Full Brand & Web Experience</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="project-cta form-submit-btn">
                <span>Send message</span>
                <span className="cta-arrow" aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </article>
  );
}
