import { architectureHighlights } from "@/data/portfolio";

export default function Architecture() {
  return (
    <section className="wrap" id="architecture">
      <div className="section-head">
        <span className="section-eyebrow">Engineering Standards</span>
        <h2>Mobile Architecture & Core Competencies</h2>
        <p className="lead muted">
          How I design, scale, and optimize mission-critical React Native and Android applications for production stability, rapid startup, and zero-drop 60 FPS interfaces.
        </p>
      </div>

      <div className="arch-grid">
        {architectureHighlights.map((item, idx) => (
          <div key={item.title} className="arch-card">
            <div className="arch-card-top">
              <span className="arch-badge">{item.badge}</span>
              <span className="arch-idx">0{idx + 1}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="arch-summary">{item.summary}</p>
            <div className="arch-chips">
              {item.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
