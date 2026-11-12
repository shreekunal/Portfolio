import React, { useState } from 'react';
import { Cpu, Layout, Server, Cloud, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import { SpotlightCard } from '../ui/SpotlightCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

interface SkillsProps {
  playHover: () => void;
  playClick: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ playHover, playClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-[0_2px_10px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <Cpu className="w-3.5 h-3.5" />
            ENGINEERING TOOLKIT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4">
            Technical <span className="text-crimson">Skills</span>
          </h2>
          <p className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Core technologies, architectural patterns, and development frameworks across SAP BTP, enterprise cloud services, and full-stack web applications.
          </p>
        </div>
      </RevealOnScroll>

      {/* Category Tabs */}
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((category, index) => {
            const isActive = selectedCategory === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(index);
                  playClick();
                }}
                onMouseEnter={playHover}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl font-mono text-xs md:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-crimson text-white font-bold shadow-lg shadow-crimson/30 scale-105'
                    : 'bg-white text-zinc-900 hover:text-crimson hover:bg-zinc-50 border border-zinc-300 shadow-sm dark:bg-surface/80 dark:border-white/10 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-surface-highlight'
                }`}
              >
                {getCategoryIcon(category.icon)}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>
      </RevealOnScroll>

      {/* Active Skills Grid - Clean Badges without Arbitrary Percentage Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {SKILL_CATEGORIES[selectedCategory].skills.map((skill, idx) => (
          <RevealOnScroll
            key={`${selectedCategory}-${idx}`}
            direction="zoom"
            delay={idx * 0.05}
            className="h-full"
          >
            <TiltCard
              maxTilt={8}
              scale={1.02}
              onMouseEnter={playHover}
              data-cursor-text="SKILL"
              className="h-full"
            >
              <SpotlightCard className="p-5 h-full flex items-center justify-between gap-4 border border-zinc-200 dark:border-white/10 group transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-crimson/10 border border-crimson/25 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-all text-crimson">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-zinc-950 dark:text-white text-sm sm:text-base group-hover:text-crimson transition-colors truncate">
                    {skill.name}
                  </h3>
                </div>

                {skill.tag && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-zinc-100 border border-zinc-200 text-zinc-800 dark:bg-white/[0.05] dark:border-white/10 dark:text-zinc-300 group-hover:border-crimson/40 group-hover:text-crimson transition-colors shadow-sm">
                    {skill.tag}
                  </span>
                )}
              </SpotlightCard>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
