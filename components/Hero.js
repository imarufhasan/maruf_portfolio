import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-text">
        <div className="status-pill">
          <span className="radar-dot">
            <span className="radar-ping" />
            <span className="radar-core" />
          </span>
          <span>{profile.availability}</span>
        </div>

        <p className="hero-role">{profile.titleBadge}</p>

        <h1 className="hero-title">
          Architecting High-Impact <span className="gradient-text">Mobile Experiences</span>.
        </h1>

        <p className="lead">{profile.intro}</p>

        <div className="cta">
          <a className="btn primary" href="#apps">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            <span>Explore Live Apps</span>
          </a>

          <a
            className="btn glass"
            href={profile.resumePdf || "/Md_Maruf_Hasan_Resume.pdf"}
            download="Md_Maruf_Hasan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Resume</span>
          </a>

          <a className="btn whatsapp-btn" href={profile.whatsappUrl} target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Floating tech badges */}
        <div className="badge-float badge-top-left">
          <span>⚡</span> React Native & Expo
        </div>
        <div className="badge-float badge-top-right">
          <span>🤖</span> Android SDK & Kotlin
        </div>
        <div className="badge-float badge-bottom-left">
          <span>🚀</span> 60 FPS UI Engine
        </div>

        <figure className="phone-hero">
          <div className="phone-notch" />
          <div className="phone-screen-wrap">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={420}
              height={520}
              priority
              unoptimized
              className="portrait-img"
            />
            <div className="portrait-overlay" />
            <div className="portrait-caption">
              <b>{profile.name}</b>
              <span className="caption-role">{profile.role}</span>
            </div>
          </div>
        </figure>

        {/* Hero metrics grid */}
        <div className="hero-stats-grid">
          {profile.stats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-val">{s.value}</span>
              <span className="stat-lbl">{s.label}</span>
              <span className="stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
