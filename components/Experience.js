import { jobs } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="wrap" id="experience">
      <div className="section-head">
        <span className="section-eyebrow">Career Timeline</span>
        <h2>Work Experience & Track Record</h2>
        <p className="lead muted">
          Over 4+ years of professional software engineering, transitioning legacy codebases, architecting modern React Native mobile apps, and collaborating with international cross-functional teams.
        </p>
      </div>

      <div className="timeline-wrapper">
        <ol className="timeline">
          {jobs.map((j) => (
            <li key={j.company + j.period} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-aside">
                <span className="timeline-period">{j.period}</span>
                <span className="timeline-type">{j.type}</span>
                <span className="timeline-loc">{j.location}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">{j.role}</h3>
                  <span className="timeline-company">{j.company}</span>
                </div>
                <ul className="timeline-points">
                  {j.points.map((p) => (
                    <li key={p}>
                      <span className="point-bullet">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
