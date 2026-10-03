"use client";

import { useState } from "react";
import { apps, playUrl } from "@/data/portfolio";

export default function Apps() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Apps (6)" },
    { id: "erp", label: "ERP & Systems" },
    { id: "jobs", label: "Job Portal" },
    { id: "pos", label: "POS & Hospitality" },
    { id: "lifestyle", label: "Lifestyle" },
  ];

  const filteredApps = apps.filter((app) => {
    if (filter === "all") return true;
    if (filter === "erp") return app.mockType === "academic" || app.mockType === "skillcare";
    if (filter === "jobs") return app.mockType === "jobs";
    if (filter === "pos") return app.mockType === "restaurant" || app.mockType === "hotel";
    if (filter === "lifestyle") return app.mockType === "islamic";
    return true;
  });

  return (
    <section className="wrap" id="apps">
      <div className="section-head">
        <span className="section-eyebrow">Shipped Products</span>
        <h2>Apps Live in Production</h2>
        <p className="lead muted">
          Battle-tested cross-platform and Android mobile applications actively serving thousands of concurrent users across education, recruitment, POS, and hospitality.
        </p>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Filter applications by domain">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-btn ${filter === cat.id ? "active" : ""}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="apps-grid">
        {filteredApps.map((a) => (
          <div key={a.id} className="app-card">
            <div className="app-card-top">
              <div
                className="app-icon"
                style={{
                  background: a.gradient,
                  boxShadow: `0 8px 24px -6px ${a.accent}66`,
                }}
              >
                <span>{a.n.charAt(0)}</span>
              </div>
              <div className="app-badges">
                <span className="meta-badge rating">{a.rating}</span>
                <span className="platform-tag">Google Play</span>
              </div>
            </div>

            <div className="app-info">
              <span className="app-category">{a.category}</span>
              <h3 className="app-title">{a.n}</h3>
              <p className="app-desc">{a.d}</p>
            </div>

            <div className="app-tech-list">
              {a.tech.map((t) => (
                <span key={t} className="tech-chip-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="app-footer">
              <a
                className="play-store-btn"
                href={playUrl(a.id)}
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a2.44 2.44 0 0 1-.22-.382V2.196c.07-.132.144-.26.22-.382zm11.242 11.242L4.697.777C4.857.708 5.03.667 5.21.667c.725 0 1.408.337 2.057.734l9.584 5.533-2 6.122zm0-2.112L16.85 4.82l2.36 1.363c1.07.618 1.07 1.63 0 2.248l-2.36 1.362-2-2.849zm-2 2.848l2 6.122-9.584 5.534c-.649.397-1.332.734-2.057.734-.18 0-.353-.041-.513-.11l10.154-12.28z" />
                </svg>
                <span>View on Google Play</span>
              </a>
              <span className="app-id-code">
                <code>{a.id}</code>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
