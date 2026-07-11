import {
  personalInfo,
  education,
  experience,
  skills,
  projects,
  achievements,
  certifications,
  activities,
} from "@/constants/data";

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4 sm:px-6">
      <div
        className="resume-sheet mx-auto bg-white rounded-sm"
        style={{
          maxWidth: "850px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
          padding: "56px 60px",
        }}
      >
        {/* ========== HEADER ========== */}
        <header style={{ textAlign: "center", paddingBottom: "20px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em", color: "#111827", margin: 0 }}>
            {personalInfo.name}
          </h1>
          <p style={{ marginTop: "10px", fontSize: "13px", color: "#6b7280", lineHeight: 1.8 }}>
            {personalInfo.phone}
            {" | "}
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            {" | "}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">github.com/PraveenUppar</a>
            {" | "}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/praveen-uppar-5b0565277</a>
            {" | "}
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">pavicodes.in</a>
          </p>
        </header>

        {/* ========== EDUCATION ========== */}
        <ResumeSection title="Education">
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: "10px" }}>
              <Row
                left={<strong>{edu.institution}</strong>}
                right={<span style={{ fontWeight: 600 }}>{edu.duration}</span>}
              />
              <Row
                left={
                  <em style={{ color: "#4b5563" }}>
                    {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                  </em>
                }
                right={<span>{edu.scoreType}: {edu.score}</span>}
              />
              {edu.board && (
                <div style={{ fontSize: "13px", color: "#6b7280", fontStyle: "italic" }}>
                  {edu.board}
                </div>
              )}
            </div>
          ))}
        </ResumeSection>

        {/* ========== EXPERIENCE ========== */}
        <ResumeSection title="Experience">
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: "12px" }}>
              <Row
                left={<strong>{exp.company}</strong>}
                right={<span style={{ fontWeight: 600 }}>{exp.startDate} – {exp.endDate}</span>}
              />
              <Row
                left={<em style={{ color: "#4b5563" }}>{exp.role} – {exp.location}</em>}
                right={<em style={{ color: "#6b7280" }}>({exp.duration} · {exp.type})</em>}
              />
              <BulletList items={exp.description} />
            </div>
          ))}
        </ResumeSection>

        {/* ========== SKILLS ========== */}
        <ResumeSection title="Skills">
          {skills.map((s) => (
            <p key={s.category} style={{ fontSize: "13.5px", marginBottom: "3px", color: "#374151" }}>
              <strong style={{ color: "#111827" }}>{s.category}:</strong>{" "}
              {s.items.join(", ")}
            </p>
          ))}
        </ResumeSection>

        {/* ========== ACHIEVEMENTS ========== */}
        <ResumeSection title="Achievements">
          <BulletList items={achievements.map((a) => a.description)} />
        </ResumeSection>

        {/* ========== PROJECTS ========== */}
        <ResumeSection title="Projects">
          {projects.map((project) => (
            <div key={project.id} style={{ marginBottom: "14px" }}>
              <Row
                left={
                  <span>
                    <strong>{project.name}: {project.tagline}</strong>
                    {" | "}
                    <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px" }}>GitHub</a>
                    {" | "}
                    <a href={project.demo || "#"} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px" }}>Demo</a>
                  </span>
                }
                right={<span style={{ fontWeight: 600 }}>{project.date}</span>}
              />
              <BulletList items={project.features} />
            </div>
          ))}
        </ResumeSection>

        {/* ========== CERTIFICATIONS ========== */}
        <ResumeSection title="Certifications">
          <BulletList
            items={certifications.map(
              (c) => `${c.name} – ${c.issuer}, Score: ${c.score}. (${c.date})`
            )}
          />
        </ResumeSection>

        {/* ========== EXTRACURRICULAR ========== */}
        <ResumeSection title="Extracurricular Activities">
          {activities.map((a) => (
            <div key={a.id} style={{ marginBottom: "10px" }}>
              <Row
                left={
                  <span>
                    <strong>{a.role}</strong>
                    <span style={{ color: "#6b7280" }}> — </span>
                    <em style={{ color: "#4b5563" }}>{a.organization}</em>
                  </span>
                }
                right={<span style={{ fontWeight: 600 }}>{a.duration}</span>}
              />
              <BulletList items={a.description} />
            </div>
          ))}
        </ResumeSection>
      </div>
    </main>
  );
}

/* ====== Section with underline heading ====== */
function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "18px" }}>
      <h2
        style={{
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#111827",
          borderBottom: "1.5px solid #111827",
          paddingBottom: "4px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ====== Two-column row (left + right aligned) ====== */
function Row({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "16px",
        fontSize: "14px",
        lineHeight: 1.6,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>{left}</div>
      <div style={{ flexShrink: 0, textAlign: "right", fontSize: "13.5px", color: "#374151" }}>{right}</div>
    </div>
  );
}

/* ====== Bullet list ====== */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        listStyleType: "disc",
        paddingLeft: "20px",
        marginTop: "4px",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontSize: "13.5px",
            color: "#374151",
            lineHeight: 1.6,
            marginBottom: "2px",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
