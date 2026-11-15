import { ArrowUpRight, Play, Check, Download } from "lucide-react";
import type { Project } from "../data/projects";
export function ProjectCard({
  project,
  index,
  onWatch,
}: {
  project: Project;
  index: number;
  onWatch: (p: Project) => void;
}) {
  const media = (
    <>
      <img
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt={
          project.video
            ? `${project.title} demonstration thumbnail`
            : "EOS Go Plugins artwork representing both versions"
        }
        loading="lazy"
        width="960"
        height="540"
      />
      {project.video && (
        <span className="play">
          <Play size={20} fill="currentColor" /> Watch Demo
        </span>
      )}
    </>
  );
  return (
    <article className={`project project-${project.id}`}>
      <div className="project-media">
        {project.video ? (
          <button
            onClick={() => onWatch(project)}
            aria-label={`Watch ${project.title} demo`}
          >
            {media}
          </button>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore EOS Go Plugins on Fab"
          >
            {media}
          </a>
        )}
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="engine">{project.engine}</p>
        <p>{project.description}</p>
        {project.id === "eos" && (
          <div className="metric">
            <strong>10,000+</strong>
            <span>
              combined downloads
              <br />
              across both versions
            </span>
          </div>
        )}
        <ul className="capabilities">
          {project.capabilities.map((x) => (
            <li key={x}>
              <Check size={15} />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <ul className="tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-actions">
          {project.downloadUrl && (
            <div className="build-download">
              <a className="button primary" href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Download size={18} /> Download Playable Build
              </a>
              <p>Shipping build · ZIP on Google Drive</p>
            </div>
          )}
          {project.video && (
            <button className="text-link" onClick={() => onWatch(project)}>
              <Play size={16} /> Watch Demo
            </button>
          )}
          <a
            className="text-link secondary"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.video ? "Watch on YouTube" : "Explore on Fab"}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
