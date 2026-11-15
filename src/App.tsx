import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Copy,
  Check,
  Code2,
  Bug,
  Layers,
  Wrench,
} from "lucide-react";
import { projects, contributions, type Project } from "./data/projects";
import { experience } from "./data/experience";
import { certifications } from "./data/certifications";
import { email, skills, socialLinks } from "./data/profile";
import { ProjectCard } from "./components/ProjectCard";
import { VideoDialog } from "./components/VideoDialog";
const nav = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];
const icons = [Code2, Bug, Layers, Wrench];
function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number} / {title.toUpperCase()}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export default function App() {
  const [menu, setMenu] = useState(false),
    [video, setVideo] = useState<Project | null>(null),
    [copied, setCopied] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll("section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied("Email copied");
    } catch {
      setCopied("Please copy the email address above.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(""), 4000);
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a href="#" className="brand" aria-label="Federico Ahumada home">
            FA<span className="brand-dot">.</span>
            <span className="brand-name">FEDERICO AHUMADA</span>
          </a>
          <button
            className="menu-toggle icon-button"
            aria-expanded={menu}
            aria-controls="navigation"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav
            id="navigation"
            className={menu ? "is-open" : ""}
            aria-label="Main navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenu(false);
            }}
          >
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
                {id === "contact" && <ArrowUpRight size={15} />}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-line" /> GAME DEVELOPMENT · QUALITY ·
              SYSTEMS
            </p>
            <h1 id="hero-title">
              Federico
              <br />
              <span>Ahumada</span>
              <span className="name-period">.</span>
            </h1>
            <h2>Unreal Engine Game Developer</h2>
            <p className="hero-subtitle">
              Game QA <span>/</span> Gameplay Systems & Debugging
            </p>
            <p className="intro">
              Unreal Engine developer with experience in C++, Blueprints,
              gameplay systems, multiplayer features, and debugging. My
              professional background combines game development, software
              quality assurance, and AI training.
            </p>
            <p className="intro">
              I build gameplay systems, develop technical tools, and create
              automated tests to validate game mechanics and behavior.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Projects <ArrowDown size={18} />
              </a>
              <a className="button outline" href="#contact">
                Contact Me <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}headshot.webp`}
                alt="Federico Ahumada"
                width="1254"
                height="1254"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <span>FEDERICO AHUMADA</span>
                <span>DEVELOPER / BUILDER</span>
              </div>
            </div>
            <div className="portrait-foot">
              <Code2 size={18} />
              <span>C++ & Blueprints</span>
              <span>Unreal Engine</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>SELECTED WORK & PROFESSIONAL EXPERIENCE</span>
            <a href="#projects">
              Scroll to explore <ArrowDown size={14} />
            </a>
          </div>
        </section>
        <section id="projects" className="container section">
          <SectionHeading
            number="01"
            title="Technical Portfolio"
            description="Gameplay systems, automated validation, and tools built for Unreal Engine."
          />
          <div className="projects">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onWatch={setVideo}
              />
            ))}
          </div>
          <div className="additional">
            <h3>Additional Game Development Work</h3>
            <div className="contributions">
              {contributions.map((c) => (
                <article key={c.title}>
                  <span className="status">In Development</span>
                  <h4>{c.title}</h4>
                  <p className="studio">{c.studio}</p>
                  <p>{c.details}</p>
                  <a
                    href={c.url}
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.label}
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="container section">
          <SectionHeading
            number="02"
            title="Professional Experience"
            description="A background connecting game development, software quality, and AI training."
          />
          <div className="timeline">
            {experience.map((e, i) => (
              <article key={e.company}>
                <div className="timeline-date">
                  <span
                    className={
                      i === 0 ? "timeline-dot current" : "timeline-dot"
                    }
                  />
                  <p>{e.period}</p>
                  {i === 0 && (
                    <span className="current-label">CURRENT CONTRACT</span>
                  )}
                </div>
                <div>
                  <a
                    className="company"
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.company}
                    <ArrowUpRight size={18} />
                  </a>
                  <h3>{e.role}</h3>
                  <p>{e.description}</p>
                  {e.note && <p className="experience-note">{e.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionHeading
              number="03"
              title="Technical Skills"
              description="The engines, tools, and practices behind my work."
            />
            <div className="skills-grid">
              {skills.map((s, i) => {
                const Icon = icons[i];
                return (
                  <article key={s.title}>
                    <Icon size={24} />
                    <h3>{s.title}</h3>
                    <ul>
                      {s.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="certifications" className="container section">
          <SectionHeading number="04" title="Certifications" />
          <div className="certifications">
            {certifications.map((c, i) => (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cert-number">0{i + 1}</span>
                <h3>{c.title}</h3>
                <span className="issuer">{c.issuer}</span>
                <span className="verify">
                  Verify <ArrowUpRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section id="contact" className="container contact section">
          <p className="eyebrow">05 / GET IN TOUCH</p>
          <h2>
            Let’s Build
            <br />
            Something <span>Great.</span>
          </h2>
          <p>
            Interested in collaborating on game development, gameplay systems,
            QA, or AI-related projects? Feel free to get in touch.
          </p>
          <div className="contact-actions">
            <a className="email-link" href={`mailto:${email}`}>
              {email}
              <ArrowUpRight />
            </a>
            <button className="copy-button" onClick={copyEmail}>
              {copied === "Email copied" ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}{" "}
              Copy Email
            </button>
          </div>
          <p className="copy-status" role="status">
            {copied}
          </p>
          {socialLinks.map((s) => (
            <a key={s.url} href={s.url}>
              {s.label}
            </a>
          ))}
        </section>
      </main>
      <footer className="container footer">
        <a className="brand" href="#">
          FA<span className="brand-dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Federico Ahumada</p>
        <a href="#">Back to top ↑</a>
      </footer>
      {video && <VideoDialog project={video} onClose={() => setVideo(null)} />}
    </>
  );
}
