import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';
import { GlassButton } from '../ui/GlassButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  playHover: () => void;
  playClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  playHover,
  playClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark Blurred Backdrop */}
      <div
        onClick={() => {
          playClick();
          onClose();
        }}
        className="absolute inset-0 bg-black/65 dark:bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Content Panel */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 transition-colors bg-white border-2 border-zinc-200 shadow-2xl dark:bg-[#09090b] dark:border-crimson/30 dark:shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          onMouseEnter={playHover}
          className="absolute top-6 right-6 p-2 rounded-full transition-colors bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-zinc-200 dark:border-white/10 dark:hover:text-white"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-3.5 py-1 rounded-md text-xs font-mono font-extrabold uppercase bg-crimson text-white shadow-md shadow-crimson/30"
          >
            {project.category}
          </span>
          {project.metrics && (
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold bg-zinc-100 text-zinc-900 border border-zinc-300 px-3 py-1 rounded-md dark:bg-white/[0.06] dark:text-zinc-200 dark:border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-crimson" />
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white mb-2">
          {project.title}
        </h2>
        <p className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base mb-6 font-medium">
          {project.tagline}
        </p>

        {/* Image Preview Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-zinc-300 dark:border-white/10 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </div>

        {/* Deep Dive Description */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-200">
            Architectural Overview & Engineering
          </h3>
          <p className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-medium">
            {project.description}
          </p>
          {project.fullDetails && (
            <div className="p-4 rounded-xl text-sm leading-relaxed flex items-start gap-3 bg-crimson/[0.06] border border-crimson/30 text-zinc-950 dark:bg-white/[0.03] dark:border-white/[0.06] dark:text-zinc-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
              <div>{project.fullDetails}</div>
            </div>
          )}
        </div>

        {/* Technology Stack Tags */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-400 mb-3">
            Technology Stack & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors bg-zinc-100 border border-zinc-300 text-zinc-900 hover:border-crimson hover:bg-crimson/10 hover:text-crimson dark:bg-surface-highlight dark:border-white/10 dark:text-zinc-300 dark:hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-white/10">
          <GlassButton
            variant="secondary"
            size="md"
            href={project.githubUrl}
            external
            icon={<Github className="w-4 h-4 mr-1.5" />}
          >
            Source Code
          </GlassButton>

          <GlassButton
            variant="primary"
            size="md"
            href={project.demoUrl}
            external
            icon={<ExternalLink className="w-4 h-4 mr-1.5" />}
          >
            Launch System Demo
          </GlassButton>
        </div>
      </div>
    </div>,
    document.body
  );
};
