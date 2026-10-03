import { skillsGrouped } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <div className="section-head">
        <span className="section-eyebrow">Technical Mastery</span>
        <h2>Skills & Technology Stack</h2>
        <p className="lead muted">
          Specialized toolkit honed over years of writing production mobile applications, performance profiling, and maintaining native bridges.
        </p>
      </div>

      <div className="skills-grid">
        {skillsGrouped.map((grp) => (
          <div key={grp.category} className="skill-category-card">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">⚙️</span>
              <h3>{grp.category}</h3>
            </div>
            <div className="skill-pills">
              {grp.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
