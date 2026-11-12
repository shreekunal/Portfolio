import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, MapPin, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { TiltCard } from '../ui/TiltCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

interface ContactProps {
  playHover: () => void;
  playClick: () => void;
  playSuccess?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  playHover,
  playClick,
  playSuccess,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (playSuccess) {
      playSuccess();
    } else {
      playClick();
    }
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5 text-crimson group-hover:text-white transition-colors" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-crimson group-hover:text-white transition-colors" />;
      case 'leetcode':
        return <Code2 className="w-5 h-5 text-crimson group-hover:text-white transition-colors" />;
      case 'email':
      default:
        return <Mail className="w-5 h-5 text-crimson group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-3xl mx-auto relative">
      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <Mail className="w-3.5 h-3.5" />
            DIRECT CHANNEL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-3">
            Initiate <span className="text-crimson">Dialogue</span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Open for SAP BTP extensions, enterprise cloud consulting, and modern full-stack development initiatives.
          </p>
        </div>
      </RevealOnScroll>

      {/* Main Direct Contact Card */}
      <RevealOnScroll direction="up" delay={0.1}>
        <TiltCard onMouseEnter={playHover} className="mb-6">
          <SpotlightCard className="p-6 sm:p-8 border border-zinc-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200 dark:bg-white/[0.03] dark:border-white/[0.08] mb-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-crimson text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    Primary Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-100 hover:text-crimson transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 bg-crimson text-white hover:bg-crimson-bright shadow-sm"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {copied && (
              <div className="text-xs font-mono text-crimson-dark dark:text-crimson font-bold flex items-center gap-1.5 mb-4 animate-in fade-in">
                <Sparkles className="w-3.5 h-3.5" />
                Email address copied to your clipboard!
              </div>
            )}

            {/* Location & Status Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 border-t border-zinc-100 dark:border-white/[0.06] text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-crimson shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#e50914]" />
                <span className="font-semibold">
                  Associate SAP BTP Consultant @{' '}
                  <a
                    href="https://www.raveninfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-crimson underline-offset-2 hover:text-crimson transition-colors"
                  >
                    Raven Infotech
                  </a>
                </span>
              </div>
            </div>
          </SpotlightCard>
        </TiltCard>
      </RevealOnScroll>

      {/* Social Media Grid */}
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-4 rounded-xl border transition-all duration-200 group flex items-center justify-between bg-white border-zinc-200 hover:border-crimson hover:shadow-md dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-crimson dark:hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-crimson/10 border border-crimson/25 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-all">
                  {getSocialIcon(link.name)}
                </div>
                <span className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-crimson transition-colors truncate">
                  {link.name}
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
            </a>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
