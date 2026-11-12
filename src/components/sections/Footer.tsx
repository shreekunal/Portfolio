import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  playHover: () => void;
  playClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ playHover, playClick }) => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t py-12 px-4 md:px-8 text-xs font-mono transition-colors duration-300 backdrop-blur-xl bg-white/95 border-zinc-300 text-zinc-800 dark:bg-black/90 dark:border-white/10 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="relative w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-300 dark:bg-[#101014] dark:border-white/15 flex items-center justify-center font-black text-zinc-950 dark:text-white shadow-sm font-mono text-xs">
            {PERSONAL_INFO.name.split(' ').map((n) => n[0]).join('').slice(0, 2) || 'KS'}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#e50914]" />
          </div>
          <div>
            <div className="font-extrabold text-zinc-950 dark:text-white text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-zinc-700 dark:text-zinc-400 font-medium">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.
            </div>
          </div>
        </div>

        {/* Right: Back to Top Button */}
        <div className="sm:pr-14">
          <button
            onClick={scrollToTop}
            onMouseEnter={playHover}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all group bg-white hover:bg-zinc-50 border-zinc-300 text-zinc-900 hover:text-crimson dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:hover:text-white dark:border-white/10 shadow-sm"
          >
            <span className="font-bold">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-crimson" />
          </button>
        </div>
      </div>
    </footer>
  );
};
