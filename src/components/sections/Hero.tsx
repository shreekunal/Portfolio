import React from 'react';
import { Sparkles, Code2, Cpu, Zap, Globe, Award } from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../../data/portfolioData';
import { GlassButton } from '../ui/GlassButton';
import { TiltCard } from '../ui/TiltCard';
import { SpotlightCard } from '../ui/SpotlightCard';
import { ScrambleText } from '../ui/ScrambleText';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { TypewriterText } from '../ui/TypewriterText';
import { RevealOnScroll } from '../ui/RevealOnScroll';

interface HeroProps {
  playHover: () => void;
  playClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ playHover, playClick }) => {
  const scrollTo = (id: string) => {
    playClick();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Cpu className="w-5 h-5 text-white" />;
      case 'Rocket': return <Zap className="w-5 h-5 text-white" />;
      case 'Zap': return <Code2 className="w-5 h-5 text-white" />;
      case 'Globe': return <Globe className="w-5 h-5 text-white" />;
      default: return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Soft Ambient Crimson Volumetric Light - Visible in both Light and Dark */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-crimson/15 dark:bg-crimson/[0.08] blur-[120px] pointer-events-none -z-10 rounded-full" />

      {/* Availability Status Badge with Crimson Radar Pulse */}
      <RevealOnScroll direction="down" delay={0.1}>
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-xl border transition-all bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson font-bold shadow-[0_2px_12px_rgba(229,9,20,0.12)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-crimson opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crimson shadow-[0_0_8px_#e50914]" />
          </span>
          <span className="font-mono text-xs tracking-wide">
            {PERSONAL_INFO.status}
          </span>
        </div>
      </RevealOnScroll>

      {/* Main Authoritative High-Contrast Headline with Vibrant Crimson Feature */}
      <div className="text-center max-w-5xl mx-auto">
        <RevealOnScroll direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-6 text-zinc-950 dark:text-white">
            <span className="block text-zinc-800 dark:text-zinc-300 font-semibold text-xl sm:text-2xl md:text-3xl font-mono mb-3">
              Hello, World. I am{' '}
              <span className="text-zinc-950 dark:text-white font-extrabold hover:text-crimson transition-colors">
                <ScrambleText text={PERSONAL_INFO.name} />
              </span>
            </span>
            <span>Architecting </span>
            <span className="text-crimson italic">
              Digital Systems
            </span>{' '}
            <span className="text-zinc-900 dark:text-zinc-300 font-light">with Precision.</span>
          </h1>
        </RevealOnScroll>

        {/* Sub-headline: Row 1 Static Title, Row 2 Dedicated Typewriter Line */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="max-w-3xl mx-auto mb-10 leading-relaxed">
            {/* 1st Row: Clean High-Contrast Subtitle */}
            <p className="mb-2 text-zinc-900 dark:text-zinc-100 font-bold text-lg sm:text-xl">
              {PERSONAL_INFO.title}
            </p>

            {/* 2nd Row: Dedicated Kinetic Typewriter Line with Crimson Underline */}
            <p className="flex flex-wrap items-center justify-center gap-1.5 min-h-[2em] font-mono text-base sm:text-lg">
              <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Specializing in</span>
              <span className="inline-block border-b-2 border-crimson pb-0.5 text-crimson font-black">
                <TypewriterText
                  words={[
                    'enterprise SAP BTP extensions.',
                    'Joule AI agents & Integration Suite.',
                    'SAP CAP, SAPUI5 & Fiori Elements.',
                    'React.js, Next.js & NestJS systems.',
                    'scalable cloud architectures.',
                  ]}
                  className="text-crimson font-black"
                  typingSpeed={65}
                  deleteSpeed={35}
                  pauseTime={2200}
                  cursorClassName="h-[1em] w-[3px] bg-crimson shadow-[0_0_8px_#e50914]"
                />
              </span>
            </p>
          </div>
        </RevealOnScroll>

        {/* Action Buttons */}
        <RevealOnScroll direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <GlassButton
              variant="primary"
              size="lg"
              onClick={() => scrollTo('projects')}
              data-cursor-text="VIEW"
              icon={<Sparkles className="w-4 h-4 mr-1 text-white" />}
            >
              Selected Works
            </GlassButton>

            <GlassButton
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('certifications')}
              data-cursor-text="CERTS"
              icon={<Award className="w-4 h-4 mr-1 text-crimson-dark dark:text-crimson" />}
            >
              Certifications
            </GlassButton>

            <GlassButton
              variant="outline"
              size="lg"
              onClick={() => scrollTo('skills')}
              data-cursor-text="SKILLS"
              icon={<Cpu className="w-4 h-4 mr-1 text-zinc-700 dark:text-zinc-300" />}
            >
              Skills
            </GlassButton>

            <GlassButton
              variant="outline"
              size="lg"
              onClick={() => scrollTo('contact')}
              data-cursor-text="CONTACT"
            >
              Get in Touch
            </GlassButton>
          </div>
        </RevealOnScroll>
      </div>

      {/* Quick Stats Grid with High-Contrast Adaptive Cards */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
        {QUICK_STATS.map((stat, idx) => (
          <RevealOnScroll key={idx} direction="up" delay={0.2 + idx * 0.1}>
            <TiltCard
              maxTilt={10}
              scale={1.03}
              onMouseEnter={playHover}
              data-cursor-text="STATS"
              className="h-full"
            >
              <SpotlightCard
                className="p-6 h-full flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-crimson text-white shadow-md shadow-crimson/30">
                    {getStatIcon(stat.icon)}
                  </span>
                  <span className="font-mono text-[10px] text-crimson-dark dark:text-crimson uppercase tracking-widest flex items-center gap-1.5 font-bold bg-crimson/10 px-2 py-0.5 rounded-md border border-crimson/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
                    SYS.0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-zinc-950 dark:text-white mb-1 tracking-tight">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-400 font-medium">
                    {stat.description}
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
