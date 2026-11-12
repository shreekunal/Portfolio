import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { TiltCard } from '../ui/TiltCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

interface CertificationsProps {
  playHover: () => void;
  playClick: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ playHover, playClick }) => {
  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3 border transition-colors bg-crimson/[0.08] border-crimson/30 text-crimson-dark dark:text-crimson shadow-[0_2px_10px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_6px_#e50914]" />
            <Award className="w-3.5 h-3.5" />
            VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4">
            SAP <span className="text-crimson">Certifications</span>
          </h2>
          <p className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base font-medium">
            Globally validated professional SAP SE credentials verifying deep expertise across SAP Fiori, Cloud Application Programming Model (CAP), and Joule Studio AI Agent architecture.
          </p>
        </div>
      </RevealOnScroll>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {CERTIFICATIONS.map((cert, idx) => (
          <RevealOnScroll
            key={cert.id}
            direction="up"
            delay={0.1 + idx * 0.1}
            className="h-full"
          >
            <TiltCard
              maxTilt={8}
              scale={1.02}
              onMouseEnter={playHover}
              data-cursor-text="VERIFY"
              className="h-full"
            >
              <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between border border-zinc-200 dark:border-white/10 group">
                <div>
                  {/* Badge Header & Credly Graphic */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-100 dark:bg-white/[0.05] p-2 flex items-center justify-center border border-zinc-200 dark:border-white/10 shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {cert.imageUrl ? (
                        <img
                          src={cert.imageUrl}
                          alt={cert.name}
                          className="w-full h-full object-contain filter drop-shadow-md"
                          loading="lazy"
                        />
                      ) : (
                        <Award className="w-10 h-10 text-crimson" />
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-crimson/10 border border-crimson/30 text-crimson-dark dark:text-crimson shadow-sm">
                        <ShieldCheck className="w-3 h-3 text-crimson" />
                        {cert.badge}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Title & Code */}
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white group-hover:text-crimson transition-colors leading-snug mb-3">
                    {cert.name}
                  </h3>

                  {/* Redesigned Validity & Timeline Area */}
                  <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-zinc-50/90 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08]">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono font-bold text-zinc-500 tracking-wider flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-zinc-400" />
                        Issued
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                        {cert.issueDate}
                      </span>
                    </div>

                    <div className="flex flex-col border-l border-zinc-200 dark:border-white/10 pl-3">
                      <span className="text-[10px] uppercase font-mono font-bold text-crimson-dark dark:text-crimson tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#e50914]" />
                        Valid Thru
                      </span>
                      <span className="text-xs font-mono font-extrabold text-crimson mt-1">
                        {cert.validThrough}
                      </span>
                    </div>
                  </div>

                  {/* Skill Pills */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      Validated Capabilities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200"
                        >
                          <CheckCircle2 className="w-3 h-3 text-crimson" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Credly Verification Link */}
                <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 shadow-sm hover:border-crimson hover:text-crimson dark:bg-white/[0.05] dark:border-white/10 dark:text-white dark:hover:bg-crimson dark:hover:border-crimson group/btn"
                  >
                    <span>Verify on Credly</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-crimson dark:text-zinc-300 dark:group-hover/btn:text-white" />
                  </a>
                </div>
              </SpotlightCard>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
