import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
export function VideoDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current!;
    const previous = document.activeElement as HTMLElement;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      aria-labelledby="video-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <header>
          <h2 id="video-title">{project.title}</h2>
          <button
            autoFocus
            onClick={onClose}
            className="icon-button"
            aria-label="Close video"
          >
            <X />
          </button>
        </header>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&rel=0`}
          title={`${project.title} video demonstration`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <p>
          If playback is unavailable,{" "}
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            watch on YouTube <ExternalLink size={14} />
          </a>
          .
        </p>
      </div>
    </dialog>
  );
}
