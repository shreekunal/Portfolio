import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { TiltCard } from '../ui/TiltCard';
import { SpotlightCard } from '../ui/SpotlightCard';
import { ProjectModal } from './ProjectModal';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { MagneticBadge } from '../ui/MagneticBadge';

interface ProjectsProps {
  playHover: () => void;
  playClick: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ playHover, playClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Architecture', 'AI / Tools'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-[0_2px_10px_rgba(229,9,20,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
              <Layers className="w-3.5 h-3.5" />
              FEATURED SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
              Selected <span className="text-crimson">Works</span>
            </h2>
          </div>

          {/* Category Filter Pills - High-energy active crimson */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-crimson text-white font-bold shadow-lg shadow-crimson/30 scale-105'
                      : 'bg-white text-zinc-900 hover:text-crimson hover:bg-zinc-50 border border-zinc-300 shadow-sm dark:bg-surface/80 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-surface-highlight dark:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      {/* Projects Grid with Multi-Layer Parallax Z-Depth */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <RevealOnScroll
            key={project.id}
            direction="up"
            delay={(idx % 3) * 0.12}
            className="h-full"
          >
            <TiltCard
              maxTilt={10}
              scale={1.03}
              onMouseEnter={playHover}
              data-cursor-text="INSPECT"
              onClick={() => {
                playClick();
                setActiveModalProject(project);
              }}
              className="cursor-pointer group h-full"
            >
              <SpotlightCard
                className="h-full flex flex-col overflow-hidden"
              >
                {/* 3D Depth Layer 1: Image Banner (Z-20) */}
                <div
                  className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-surface-highlight will-change-transform"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className="px-3 py-1 rounded-md text-[10px] font-mono font-extrabold tracking-wider uppercase bg-crimson text-white shadow-md shadow-crimson/30"
                    >
                      {project.category}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-white group-hover:bg-crimson group-hover:border-crimson transition-all shadow-md dark:bg-black/80 dark:border-white/20 dark:text-zinc-100">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono font-bold bg-zinc-950 text-white backdrop-blur-md px-3 py-1 rounded-md border border-zinc-800 shadow-lg flex items-center gap-1.5 dark:bg-white dark:text-zinc-950 dark:border-zinc-200">
                      <Sparkles className="w-3.5 h-3.5 text-crimson" />
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* 3D Depth Layer 2: Card Body & Title (Z-35) */}
                <div
                  className="p-6 flex-1 flex flex-col justify-between will-change-transform"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div>
                    <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white mb-2 group-hover:text-crimson transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-800 dark:text-zinc-300 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* 3D Depth Layer 3: Magnetic Tags and Actions (Z-50) */}
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <MagneticBadge key={tIdx} pullStrength={0.3}>
                          <span className="px-2.5 py-1 rounded bg-zinc-100 border border-zinc-300 text-[11px] font-mono font-semibold text-zinc-900 hover:border-crimson hover:bg-crimson/10 hover:text-crimson transition-colors cursor-pointer dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-zinc-300 dark:hover:text-white">
                            {tag}
                          </span>
                        </MagneticBadge>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-700 dark:text-zinc-400 font-bold self-center">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-white/[0.08] text-xs font-mono">
                      <span className="text-crimson font-black group-hover:underline flex items-center gap-1.5">
                        View Architecture
                        <span className="text-crimson font-black transition-transform group-hover:translate-x-1">→</span>
                      </span>
                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-800 hover:text-crimson hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/[0.08] transition-colors p-1.5 rounded-lg"
                          title="GitHub Repo"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-800 hover:text-crimson hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/[0.08] transition-colors p-1.5 rounded-lg"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        playHover={playHover}
        playClick={playClick}
      />
    </section>
  );
};
