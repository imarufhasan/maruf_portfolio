"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { apps, playUrl } from "@/data/portfolio";

const PhoneScene = dynamic(() => import("./PhoneScene"), {
  ssr: false,
  loading: () => (
    <div className="stage-skeleton">
      <div className="skeleton-spinner" />
      <span>Loading 3D Phone Simulator...</span>
    </div>
  ),
});

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const [unsupported, setUnsupported] = useState(false);
  const app = apps[index];

  return (
    <section className="wrap" id="showcase">
      <div className="section-head">
        <span className="section-eyebrow">Interactive 3D Engine</span>
        <h2>Inspect Production Mobile Screens</h2>
        <p className="lead muted">
          Rotate and tilt the 3D phone in real time. Switch between apps below to inspect live screen layouts, UX workflows, and architecture stacks.
        </p>
      </div>

      <div className="showcase">
        <div className="stage-wrap">
          {unsupported ? (
            <div className="stage-fallback">
              <p>3D WebGL preview is not available on this device.</p>
              <small className="muted">Please inspect the app details and Google Play links below.</small>
            </div>
          ) : (
            <PhoneScene app={app} onUnsupported={() => setUnsupported(true)} />
          )}
          <div className="stage-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 0 0 0 12h3" />
            </svg>
            <span>Hover or drag pointer over phone to tilt in 3D</span>
          </div>
        </div>

        <div className="picker">
          <div className="tabs" role="tablist" aria-label="Select production app">
            {apps.map((a, i) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                className={`tab ${i === index ? "active" : ""}`}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                style={{
                  "--tab-accent": a.accent,
                }}
              >
                <span className="tab-dot" style={{ backgroundColor: a.accent }} />
                <span className="tab-title">{a.n}</span>
              </button>
            ))}
          </div>

          <div className="detail" aria-live="polite">
            <div className="detail-header">
              <div>
                <span className="detail-category">{app.category}</span>
                <h3>{app.n}</h3>
              </div>
              <div className="detail-meta">
                <span className="meta-badge rating">{app.rating}</span>
                <span className="meta-badge installs">{app.installs}</span>
              </div>
            </div>

            <p className="detail-desc">{app.d}</p>

            <div className="detail-tech">
              <span className="detail-section-title">Core Stack:</span>
              <div className="tech-chips">
                {app.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-features">
              <span className="detail-section-title">Key Capabilities:</span>
              <ul className="feature-list">
                {app.features.map((feat) => (
                  <li key={feat}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-actions">
              <a
                className="btn primary store-btn"
                href={playUrl(app.id)}
                target="_blank"
                rel="noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a2.44 2.44 0 0 1-.22-.382V2.196c.07-.132.144-.26.22-.382zm11.242 11.242L4.697.777C4.857.708 5.03.667 5.21.667c.725 0 1.408.337 2.057.734l9.584 5.533-2 6.122zm0-2.112L16.85 4.82l2.36 1.363c1.07.618 1.07 1.63 0 2.248l-2.36 1.362-2-2.849zm-2 2.848l2 6.122-9.584 5.534c-.649.397-1.332.734-2.057.734-.18 0-.353-.041-.513-.11l10.154-12.28z" />
                </svg>
                <span>Get on Google Play</span>
              </a>

              <span className="app-id-tag">
                <code>{app.id}</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}