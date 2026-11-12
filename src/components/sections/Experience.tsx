import React, { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCES } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { TiltCard } from '../ui/TiltCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

interface ExperienceProps {
  playHover: () => void;
  playClick: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ playHover }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-[0_2px_10px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <Briefcase className="w-3.5 h-3.5" />
            CHRONOLOGY & IMPACT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4">
            Career <span className="text-crimson">Milestones</span>
          </h2>
          <p className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Software engineering journey, academic foundation, and technical project milestones.
          </p>
        </div>
      </RevealOnScroll>

      {/* Timeline Tree Container */}
      <div ref={containerRef} className="relative ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {/* Background Track Line */}
        <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />

        {/* Scroll-Linked Solid Crimson Progress Bar (Crisp Color Fill, No Glow) */}
        <motion.div
          className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-crimson origin-top"
          style={{ scaleY }}
        >
          {/* Active progress head dot */}
          <div className="absolute bottom-0 -left-[4px] w-3 h-3 rounded-full bg-crimson border-2 border-white dark:border-zinc-950 shadow-sm" />
        </motion.div>

        {EXPERIENCES.map((exp, idx) => (
          <RevealOnScroll
            key={exp.id}
            direction={idx % 2 === 0 ? 'left' : 'right'}
            delay={0.1}
          >
            <div className="relative group">
              {/* Surgical Node Marker */}
              <div
                className={`absolute -left-[32px] sm:-left-[48px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 group-hover:scale-125 flex items-center justify-center ${
                  exp.current
                    ? 'bg-crimson border-zinc-950 dark:border-white shadow-sm'
                    : 'bg-white border-crimson shadow-sm dark:bg-black dark:border-crimson'
                }`}
              >
                {exp.current ? (
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-crimson" />
                )}
              </div>

              {/* Experience Card */}
              <TiltCard
                maxTilt={6}
                scale={1.01}
                onMouseEnter={playHover}
                data-cursor-text="CAREER"
              >
                <SpotlightCard
                  className="p-6 sm:p-8"
                >
                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white group-hover:text-crimson transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-bold flex items-center gap-2 mt-1">
                        {exp.company === 'Raven Infotech' ? (
                          <a
                            href="https://www.raveninfotech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-crimson font-black tracking-wide text-base hover:underline flex items-center gap-1 group/company"
                          >
                            <span>Raven Infotech</span>
                            <ExternalLink className="w-3.5 h-3.5 text-crimson group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <span className="text-crimson font-black tracking-wide text-base">
                            {exp.company}
                          </span>
                        )}
                        <span className="text-zinc-500 dark:text-zinc-500 font-bold">•</span>
                        <span className="text-zinc-700 dark:text-zinc-300 flex items-center gap-1 text-xs font-mono font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-crimson" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold shrink-0 self-start sm:self-auto bg-crimson/10 border border-crimson/30 text-crimson-dark dark:text-crimson shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-crimson" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-colors bg-zinc-100 border border-zinc-300 text-zinc-900 hover:border-crimson hover:bg-crimson/10 hover:text-crimson dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-zinc-300 dark:hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltCard>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
