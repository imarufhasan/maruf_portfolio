const apps = [
  { n: "Smart Academic System", t: "School management", id: "com.smartsoftware.sas", d: "Attendance, exams, reports and role-based access for admins, teachers, students and guardians." },
  { n: "BDJobs Live", t: "Job portal", id: "com.smartsoftware.bdjobslive", d: "Job listings, search, career opportunities and notifications." },
  { n: "Islamic Life", t: "Lifestyle", id: "com.smartsoftware.islamiclife", d: "Prayer times, Quran access, Qibla direction and daily tools." },
  { n: "Smart Restaurant", t: "POS", id: "com.smartsoftwareltd.restaurant", d: "POS, order management and billing for restaurants." },
  { n: "Smart Hotel", t: "Hospitality", id: "com.smartsoftware.hotel", d: "Reservations, billing and guest management." },
  { n: "Skill Care", t: "Education", id: "com.skillcare.smart", d: "Online exams, quizzes, attendance and learning management." },
];

const skills = [
  ["Mobile", "React Native, Expo, React Native CLI, TypeScript, Kotlin, Java, Android SDK, Gradle"],
  ["Architecture and state", "Component-based architecture, modular structure, Redux Toolkit, RTK Query, Context API"],
  ["Navigation and APIs", "React Navigation, Expo Router, Native Modules, REST APIs, JSON, JWT authentication"],
  ["Backend and data", "Firebase, PHP, MySQL, SQLite"],
  ["Testing and delivery", "Jest, React Native Testing Library, automated build and deployment, Google Play deployment"],
  ["Tools", "Git, GitHub, GitLab, Android Studio, VS Code"],
];

const jobs = [
  { r: "Mobile App Developer", c: "Sparktech Agency", w: "Feb 2025 to Present", p: ["Lead end-to-end development of scalable production apps with React Native and TypeScript.", "Own frontend architecture, state management, API integration and performance.", "Work with backend teams, designers and international clients.", "Manage releases and maintenance on Google Play and the App Store."] },
  { r: "React Native Developer", c: "Smart Software Ltd", w: "May 2025 to Jan 2026", p: ["Built and maintained production apps with responsive, performance-focused UI.", "Integrated REST APIs, authentication and real-time features.", "Published and maintained apps on Google Play."] },
  { r: "Junior Programmer, then Intern and Trainee", c: "Ascent Group", w: "Aug 2019 to Jun 2024", p: ["Migrated legacy Android (Java) apps to React Native.", "Implemented APIs, authentication, local databases, chat, file transfer and task management.", "Improved performance, stability and UX through development and QA testing."] },
  { r: "Mobile App Developer", c: "Xubisoft Ltd.", w: "Feb 2019 to Apr 2019", p: ["Built a native Android app in Java with a PHP and MySQL backend, including service listings and course purchasing."] },
];

const edu = [
  ["BSc in Computer Science & Engineering", "Dhaka International University, 2024", "CGPA 3.78 / 4.00"],
  ["Diploma in Computer Technology", "Sylhet Polytechnic Institute, 2019", "CGPA 3.16 / 4.00"],
  ["SSC", "A. H. C. Taranga Pre-Cadet & High School, 2015", "GPA 4.89 / 5.00"],
];

const links = [
  ["Email", "marufhasan.cse@gmail.com", "mailto:marufhasan.cse@gmail.com"],
  ["Phone", "+880 1679 663160", "tel:+8801679663160"],
  ["LinkedIn", "imarufhasan", "https://linkedin.com/in/imarufhasan"],
  ["GitHub", "imarufhasan", "https://github.com/imarufhasan"],
  ["Codeforces", "Marufm", "https://codeforces.com/profile/Marufm"],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">MMH</a>
        <nav>
          <a href="#apps">Apps</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <p className="muted">Mobile app developer, Dhaka</p>
            <h1>Md Maruf Hasan</h1>
            <p className="lead">
              I build React Native and Android apps, and ship them to Google Play and the App Store.
              4+ years across education, jobs, ERP and hospitality products.
            </p>
            <div className="cta">
              <a className="btn primary" href="#apps">See live apps</a>
              <a className="btn" href="mailto:marufhasan.cse@gmail.com">Email me</a>
            </div>
          </div>

          <div className="phone" aria-label="Apps published on Google Play">
            <div className="notch" />
            <p className="phone-title">Published apps</p>
            {apps.map((a, i) => (
              <a key={a.id} className="row" style={{ "--i": i }} href={`https://play.google.com/store/apps/details?id=${a.id}`} target="_blank" rel="noreferrer">
                <span className="ico">{a.n[0]}</span>
                <span><b>{a.n}</b><small>{a.t}</small></span>
                <span className="get">Open</span>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap" id="apps">
          <h2>Apps in production</h2>
          <div className="grid">
            {apps.map((a) => (
              <a key={a.id} className="card" href={`https://play.google.com/store/apps/details?id=${a.id}`} target="_blank" rel="noreferrer">
                <h3>{a.n}</h3>
                <p>{a.d}</p>
                <code>{a.id}</code>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap" id="experience">
          <h2>Experience</h2>
          <ol className="timeline">
            {jobs.map((j) => (
              <li key={j.c + j.w}>
                <div className="when">{j.w}</div>
                <div>
                  <h3>{j.r}</h3>
                  <p className="muted">{j.c}</p>
                  <ul>{j.p.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap" id="skills">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>

        <section className="wrap two">
          <div>
            <h2>Education</h2>
            {edu.map(([a, b, c]) => (
              <p className="edu" key={a}><b>{a}</b><span>{b}</span><span className="muted">{c}</span></p>
            ))}
          </div>
          <div>
            <h2>Community and contests</h2>
            <ul className="plain">
              <li>Founding member, Community of Engineers</li>
              <li>Former president, IT Club, Sylhet Polytechnic Institute</li>
              <li>Former advisor, SPICC Computer Club</li>
              <li>Winner, Intra Programming Contest 2017 and Winter Programming Contest 2017</li>
              <li>ACM ICPC Dhaka Regional 2018 and National Collegiate Programming Contest 2018</li>
            </ul>
          </div>
        </section>

        <section className="wrap contact" id="contact">
          <h2>Have an app to build or ship?</h2>
          <ul>
            {links.map(([k, v, h]) => (
              <li key={k}><span className="muted">{k}</span><a href={h}>{v}</a></li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="wrap foot muted">Md Maruf Hasan, Dhaka, Bangladesh</footer>
    </>
  );
}
