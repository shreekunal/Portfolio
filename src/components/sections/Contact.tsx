import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';
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
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative">
      {/* Section Eyebrow & Title */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-[0_2px_10px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <MessageSquare className="w-3.5 h-3.5" />
            DIRECT CHANNEL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4">
            Initiate <span className="text-crimson">Dialogue</span>
          </h2>
        </div>
      </RevealOnScroll>

      {/* Main Direct Communication Card */}
      <div className="space-y-6">
        <RevealOnScroll direction="up" delay={0.1}>
          <TiltCard maxTilt={6} scale={1.01} onMouseEnter={playHover} data-cursor-text="COPY">
            <SpotlightCard className="p-8 sm:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-zinc-950 dark:text-white mb-2">
                    Direct Communication Line
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-400 text-sm font-medium">
                    Guaranteed sub-24h turnaround for high-priority initiatives and consulting inquiries.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shrink-0 self-start md:self-auto bg-crimson/10 border border-crimson/30 text-crimson-dark dark:text-crimson shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#e50914]" />
                  <span>ACCEPTING SELECT INITIATIVES</span>
                </div>
              </div>

              {/* Copy Email Box */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 sm:p-5 rounded-2xl border mb-6 group transition-all bg-zinc-50 border-zinc-300 dark:bg-white/[0.04] dark:border-white/10 gap-4">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-crimson text-white shadow-md shadow-crimson/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-100 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={playHover}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all shrink-0 shadow-sm bg-crimson text-white hover:bg-crimson-bright shadow-crimson/20"
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
                <div className="text-xs font-mono text-crimson-dark dark:text-crimson font-black flex items-center gap-1.5 -mt-3 mb-6 animate-in fade-in">
                  <Sparkles className="w-3.5 h-3.5" />
                  Email address copied to your clipboard!
                </div>
              )}

              {/* Card Footer Telemetry */}
              <div className="pt-6 border-t border-zinc-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-crimson shrink-0" />
                  <span className="font-bold text-zinc-900 dark:text-zinc-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="text-zinc-600 dark:text-zinc-400 font-medium">
                  Status:{' '}
                  <span className="font-bold text-zinc-900 dark:text-zinc-200">
                    {PERSONAL_INFO.status}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </TiltCard>
        </RevealOnScroll>

        {/* Social & External Channels Grid */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-5 rounded-2xl border transition-all group bg-white border-zinc-300 hover:border-crimson hover:shadow-lg hover:shadow-crimson/15 dark:bg-[#0c0c10]/80 dark:border-white/10 dark:hover:border-crimson dark:hover:bg-[#14141c]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-400 group-hover:text-crimson transition-colors">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all dark:text-zinc-400" />
                </div>
                <div className="text-sm font-black text-zinc-950 group-hover:text-crimson transition-colors dark:text-white truncate">
                  {link.handle}
                </div>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};