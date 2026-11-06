import React, { useState } from 'react';
import { Cpu, Layout, Server, Cloud, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
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
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4">
            Technical <span className="text-crimson">Mastery</span>
          </h2>
          <p className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Curated engineering disciplines honed across high-throughput distributed systems, modern frontends, and cloud infrastructure.
          </p>
        </div>
      </RevealOnScroll>

      {/* Category Tabs - High-energy active crimson */}
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

      {/* Active Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES[selectedCategory].skills.map((skill, idx) => (
          <RevealOnScroll
            key={`${selectedCategory}-${idx}`}
            direction="zoom"
            delay={idx * 0.08}
            className="h-full"
          >
            <TiltCard
              maxTilt={10}
              scale={1.03}
              onMouseEnter={playHover}
              data-cursor-text="SKILL"
              className="h-full"
            >
              <SpotlightCard
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-extrabold text-zinc-950 dark:text-white text-base">
                      {skill.name}
                    </h3>
                    {skill.tag && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-crimson/10 text-crimson-dark border border-crimson/30 flex items-center gap-1 shadow-sm dark:bg-crimson/15 dark:text-crimson">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
                        {skill.tag}
                      </span>
                    )}
                  </div>

                  {/* High-Impact Crimson Progress Bar */}
                  <div className="w-full bg-zinc-200 dark:bg-white/[0.1] rounded-full h-2.5 mb-2 overflow-hidden border border-zinc-300/60 dark:border-white/[0.05]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-crimson-dark via-crimson to-crimson-bright origin-left shadow-[0_0_12px_rgba(229,9,20,0.7)]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono mt-3">
                  <span className="text-zinc-800 dark:text-zinc-400 font-bold">Proficiency</span>
                  <span className="text-crimson-dark dark:text-crimson font-black text-base">{skill.level}%</span>
                </div>
              </SpotlightCard>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
