import React, { useState } from 'react';
import { Cpu, Layout, Server, Cloud, ShieldCheck, Award } from 'lucide-react';
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
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Cloud': return <Cloud className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <ShieldCheck className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <Cpu className="w-3.5 h-3.5" />
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-3">
            Technical <span className="text-crimson">Skills</span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Core technologies, architectural patterns, and development frameworks across SAP BTP, enterprise cloud services, and modern full-stack web applications.
          </p>
        </div>
      </RevealOnScroll>

      {/* Category Navigation Tabs */}
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs md:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-crimson text-white font-bold shadow-md shadow-crimson/25 scale-[1.02]'
                    : 'bg-white text-zinc-800 hover:text-crimson hover:bg-zinc-50 border border-zinc-200 shadow-sm dark:bg-white/[0.04] dark:border-white/10 dark:text-zinc-300 dark:hover:text-white'
                }`}
              >
                {getCategoryIcon(category.icon)}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>
      </RevealOnScroll>

      {/* Minimal, Modern Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {SKILL_CATEGORIES[selectedCategory].skills.map((skill, idx) => {
          const isCertified = skill.tag === 'Certified';
          return (
            <RevealOnScroll
              key={`${selectedCategory}-${idx}`}
              direction="up"
              delay={idx * 0.03}
              className="h-full"
            >
              <TiltCard
                onMouseEnter={playHover}
                data-cursor-text="SKILL"
                className="h-full"
              >
                <SpotlightCard className="p-4 sm:p-4.5 h-full flex items-center justify-between gap-3 border border-zinc-200 dark:border-white/10 group transition-all">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914] shrink-0" />
                    <h3 className="font-semibold text-zinc-950 dark:text-zinc-100 text-sm sm:text-base group-hover:text-crimson transition-colors leading-snug">
                      {skill.name}
                    </h3>
                  </div>

                  {isCertified && (
                    <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-crimson/10 border border-crimson/30 text-crimson-dark dark:text-crimson shadow-sm">
                      <Award className="w-3 h-3 text-crimson" />
                      Certified
                    </span>
                  )}
                </SpotlightCard>
              </TiltCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
};
