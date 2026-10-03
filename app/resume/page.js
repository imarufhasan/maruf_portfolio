import Link from "next/link";
import { profile, jobs, apps, skillsGrouped, education, community, links } from "@/data/portfolio";

export const metadata = {
  title: "Resume | Md Maruf Hasan - Senior Mobile Application Engineer",
  description: "Curriculum Vitae of Md Maruf Hasan, Mobile Application Engineer specializing in React Native and Android.",
};

export default function ResumePage() {
  return (
    <div className="resume-container">
      <div className="resume-actions no-print">
        <Link href="/" className="btn btn-outline btn-sm">
          ← Back to Portfolio
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href="/Md_Maruf_Hasan_Resume.pdf"
            download="Md_Maruf_Hasan_Resume.pdf"
            className="btn primary btn-sm"
            id="download-cv-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </div>

      <article className="resume-paper">
        {/* Header */}
        <header className="resume-header">
          <div>
            <h1 className="resume-name">{profile.name}</h1>
            <p className="resume-title">{profile.role} (React Native & Android)</p>
          </div>
          <div className="resume-contact">
            <div>📍 Dhaka, Bangladesh</div>
            <div>✉️ <a href="mailto:marufhasan.cse@gmail.com">marufhasan.cse@gmail.com</a></div>
            <div>📞 <a href="tel:+8801679663160">+880 1679 663160</a></div>
            <div>🔗 <a href="https://linkedin.com/in/imarufhasan" target="_blank" rel="noreferrer">linkedin.com/in/imarufhasan</a></div>
            <div>🐙 <a href="https://github.com/imarufhasan" target="_blank" rel="noreferrer">github.com/imarufhasan</a></div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="resume-sec">
          <h2 className="resume-sec-title">Professional Summary</h2>
          <p className="resume-text">{profile.intro}</p>
        </section>

        {/* Core Skills */}
        <section className="resume-sec">
          <h2 className="resume-sec-title">Technical Expertise</h2>
          <div className="resume-skills-grid">
            {skillsGrouped.map((g) => (
              <div key={g.category} className="resume-skill-row">
                <b>{g.category}:</b>
                <span>{g.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="resume-sec">
          <h2 className="resume-sec-title">Work Experience</h2>
          <div className="resume-timeline">
            {jobs.map((j) => (
              <div key={j.company + j.period} className="resume-job">
                <div className="job-top">
                  <div>
                    <h3 className="job-role">{j.role}</h3>
                    <span className="job-company">{j.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className="job-period">{j.period}</span>
                    <span className="job-loc">{j.location}</span>
                  </div>
                </div>
                <ul className="job-points">
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Shipped Apps */}
        <section className="resume-sec">
          <h2 className="resume-sec-title">Key Shipped Mobile Applications</h2>
          <div className="resume-apps-grid">
            {apps.map((a) => (
              <div key={a.id} className="resume-app-card">
                <div className="app-top">
                  <b>{a.n}</b>
                  <span className="app-cat">({a.category})</span>
                </div>
                <p className="app-d">{a.d}</p>
                <div className="app-t">
                  <b>Stack:</b> {a.tech.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="resume-sec">
          <h2 className="resume-sec-title">Education</h2>
          <div className="resume-edu-list">
            {education.map((e) => (
              <div key={e.degree} className="edu-row">
                <div>
                  <b>{e.degree}</b> — {e.institution}
                </div>
                <div className="edu-meta-right">
                  <span>{e.grade}</span> | <span>{e.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community & Achievements */}
        <section className="resume-sec">
          <h2 className="resume-sec-title">Honors, Contests & Leadership</h2>
          <ul className="resume-bullets">
            {community.map((c) => (
              <li key={c.title}>
                <b>{c.title}:</b> {c.desc}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <style dangerouslySetInnerHTML={{ __html: `
        .resume-container {
          max-width: 900px;
          margin: 40px auto 80px;
          padding: 0 20px;
        }
        .resume-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .resume-paper {
          background: #ffffff;
          color: #0f172a;
          padding: 48px;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          font-family: var(--font-open-sans), "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.5;
        }
        .resume-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 20px;
          margin-bottom: 24px;
          gap: 20px;
        }
        .resume-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .resume-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #4f46e5;
          margin-top: 4px;
        }
        .resume-contact {
          font-size: 0.88rem;
          text-align: right;
          color: #334155;
          line-height: 1.6;
        }
        .resume-contact a {
          color: #4f46e5;
          text-decoration: underline;
        }
        .resume-sec {
          margin-bottom: 24px;
        }
        .resume-sec-title {
          font-size: 1.15rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1.5px solid #cbd5e1;
          padding-bottom: 6px;
          margin-bottom: 12px;
          color: #1e293b;
        }
        .resume-text {
          font-size: 0.95rem;
          color: #334155;
        }
        .resume-skill-row {
          font-size: 0.9rem;
          margin-bottom: 6px;
          color: #334155;
        }
        .resume-skill-row b {
          color: #0f172a;
        }
        .resume-job {
          margin-bottom: 18px;
        }
        .job-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
        }
        .job-role {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }
        .job-company {
          font-size: 0.95rem;
          color: #4f46e5;
          font-weight: 600;
        }
        .job-meta {
          text-align: right;
          font-size: 0.88rem;
          color: #64748b;
        }
        .job-points {
          margin: 0;
          padding-left: 20px;
          font-size: 0.92rem;
          color: #334155;
          display: grid;
          gap: 4px;
        }
        .resume-apps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .resume-app-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.88rem;
        }
        .app-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .app-cat {
          font-size: 0.78rem;
          color: #64748b;
        }
        .app-d {
          color: #475569;
          font-size: 0.82rem;
          margin-bottom: 6px;
        }
        .app-t {
          font-size: 0.8rem;
          color: #0f172a;
        }
        .edu-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.92rem;
          margin-bottom: 8px;
          color: #334155;
        }
        .resume-bullets {
          margin: 0;
          padding-left: 20px;
          font-size: 0.9rem;
          color: #334155;
          display: grid;
          gap: 6px;
        }
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .no-print, .nav, .footer {
            display: none !important;
          }
          .resume-container {
            margin: 0 !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
          .resume-paper {
            padding: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      ` }} />
    </div>
  );
}
