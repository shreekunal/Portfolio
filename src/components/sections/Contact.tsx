import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Radio, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { TiltCard } from '../ui/TiltCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

interface ContactProps {
  playHover: () => void;
  playClick: () => void;
  playSuccess?: () => void;
}

const CAPABILITIES = [
  'SAP BTP & CAP',
  'Joule Studio AI',
  'SAP Integration Suite',
  'React.js & NestJS',
];

export const Contact: React.FC<ContactProps> = ({
  playHover,
  playClick,
  playSuccess,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (playSuccess) playSuccess();
    else playClick();

    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto relative">
      {/* Volumetric Radial Crimson Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-crimson/10 dark:bg-crimson/[0.08] blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-[0_2px_10px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <Radio className="w-3.5 h-3.5" />
            DIRECT CHANNEL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-3">
            Initiate <span className="text-crimson">Dialogue</span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Have a project in mind, an SAP BTP architecture challenge, or open role? Let&apos;s connect.
          </p>
        </div>
      </RevealOnScroll>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Main Card: Redesigned Primary Communication Gateway */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col">
          <RevealOnScroll direction="left" delay={0.1} className="h-full">
            <TiltCard maxTilt={4} scale={1.01} onMouseEnter={playHover} className="h-full">
              <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between border border-zinc-200 dark:border-white/10 rounded-3xl relative overflow-hidden group">
                <div>
                  {/* Top Eyebrow Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/25 flex items-center justify-center text-crimson shrink-0 group-hover:bg-crimson group-hover:text-white transition-all shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-crimson block">
                          Primary Communications Gateway
                        </span>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="font-mono text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 hover:text-crimson transition-colors truncate block"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 shrink-0">
                      <MapPin className="w-3 h-3 text-crimson" />
                      <span>Delhi NCR (IST)</span>
                    </span>
                  </div>

                  {/* Core Value Proposition */}
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight mb-2.5">
                    Architecting Scalable Enterprise Systems.
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed mb-5">
                    Consulting on enterprise SAP BTP extensions, Joule conversational AI agents, SAP Integration Suite flows, and modern full-stack web solutions.
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {CAPABILITIES.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-300 hover:border-crimson hover:text-crimson transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Integrated Action Bar (Clean Tier, No Clunky Nested Box) */}
                <div className="pt-5 border-t border-zinc-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#e50914]" />
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Direct Inbox Access
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      onMouseEnter={playHover}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:bg-white/[0.12] shadow-sm active:scale-95"
                      title="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-crimson" />
                          <span className="text-crimson">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      onMouseEnter={playHover}
                      onClick={playClick}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all bg-crimson hover:bg-crimson-bright text-white shadow-[0_4px_16px_rgba(229,9,20,0.35)] hover:shadow-[0_6px_22px_rgba(229,9,20,0.5)] active:scale-95 group/btn"
                    >
                      <Send className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      <span>Send Message</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </RevealOnScroll>
        </div>

        {/* Right Cards: LinkedIn & GitHub Bento Tiles */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-5 sm:gap-6">
          {/* LinkedIn Tile */}
          <RevealOnScroll direction="right" delay={0.15} className="flex-1">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="block h-full group"
            >
              <TiltCard maxTilt={5} scale={1.02} className="h-full">
                <SpotlightCard className="p-5 sm:p-6 h-full border border-zinc-200 dark:border-white/10 rounded-3xl flex flex-col justify-between group-hover:border-crimson/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/25 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-all shadow-sm">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="p-1.5 rounded-lg border border-transparent group-hover:border-crimson/30 group-hover:bg-crimson/10 text-zinc-400 group-hover:text-crimson transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-crimson uppercase tracking-wider mb-0.5">
                      Professional Network
                    </div>
                    <div className="font-black text-lg text-zinc-950 dark:text-white group-hover:text-crimson transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Endorsements, recommendations & messaging
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </a>
          </RevealOnScroll>

          {/* GitHub Tile */}
          <RevealOnScroll direction="right" delay={0.2} className="flex-1">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="block h-full group"
            >
              <TiltCard maxTilt={5} scale={1.02} className="h-full">
                <SpotlightCard className="p-5 sm:p-6 h-full border border-zinc-200 dark:border-white/10 rounded-3xl flex flex-col justify-between group-hover:border-crimson/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/25 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-all shadow-sm">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="p-1.5 rounded-lg border border-transparent group-hover:border-crimson/30 group-hover:bg-crimson/10 text-zinc-400 group-hover:text-crimson transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-crimson uppercase tracking-wider mb-0.5">
                      Open Source & Code
                    </div>
                    <div className="font-black text-lg text-zinc-950 dark:text-white group-hover:text-crimson transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Architecture prototypes, CAP & full-stack repos
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </a>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom Affiliation & Location Strip */}
      <RevealOnScroll direction="up" delay={0.25}>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#e50914]" />
            <span>
              Associate SAP BTP Consultant @{' '}
              <a
                href="https://www.raveninfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-crimson underline-offset-2 hover:text-crimson font-bold text-crimson transition-colors"
              >
                Raven Infotech
              </a>
            </span>
          </div>

          <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-crimson" />
            <span>{PERSONAL_INFO.location} (IST • UTC +5:30)</span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
