"use client";

import { useState } from "react";
import { links, profile } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "marufhasan.cse@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="wrap contact-section" id="contact">
      <div className="contact-box">
        <div className="contact-glow" />

        <div className="contact-header">
          <span className="section-eyebrow">Get in Touch</span>
          <h2>Have an App to Architect, Build, or Ship?</h2>
          <p className="lead muted">
            Whether you need end-to-end React Native development, native Android performance tuning, or automated Google Play & App Store release pipelines, let&apos;s talk.
          </p>
        </div>

        <div className="contact-channels">
          {/* Email Card with Copy button */}
          <div className="channel-card primary-channel">
            <div className="channel-info">
              <span className="channel-label">Direct Email</span>
              <a href={`mailto:${email}`} className="channel-val">
                {email}
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline copy-btn"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Action */}
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="channel-card whatsapp-channel"
          >
            <div className="channel-info">
              <span className="channel-label">Instant Messaging</span>
              <span className="channel-val">+880 1679 663160</span>
            </div>
            <span className="channel-action">Chat on WhatsApp ➔</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="social-links-grid">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="social-pill"
            >
              <span className="social-label">{l.label}</span>
              <span className="social-val">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
