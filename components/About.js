import { education, community } from "@/data/portfolio";

export default function About() {
  return (
    <section className="wrap" id="about">
      <div className="section-head">
        <span className="section-eyebrow">Background</span>
        <h2>Education & Engineering Community</h2>
        <p className="lead muted">
          Academic foundation in Computer Science and an active history of competitive programming and developer community leadership.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-column">
          <div className="about-col-head">
            <span className="col-icon">🎓</span>
            <h3>Formal Education</h3>
          </div>
          <div className="edu-cards">
            {education.map((edu) => (
              <div key={edu.degree} className="edu-card">
                <span className="edu-badge">{edu.badge}</span>
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-inst">{edu.institution}</p>
                <div className="edu-meta">
                  <span className="edu-year">{edu.year}</span>
                  <span className="edu-grade">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-column">
          <div className="about-col-head">
            <span className="col-icon">🏆</span>
            <h3>Leadership & Contests</h3>
          </div>
          <div className="community-cards">
            {community.map((comm) => (
              <div key={comm.title} className="community-card">
                <h4 className="community-title">{comm.title}</h4>
                <p className="community-desc">{comm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
