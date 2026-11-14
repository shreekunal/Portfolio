import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Linkedin, BookOpen, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  isMuted: boolean;
  toggleSound: () => void;
  playHover: () => void;
  playClick: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', short: 'Home' },
  { id: 'skills', label: 'Skills', short: 'Skills' },
  { id: 'certifications', label: 'Certifications', short: 'Certs' },
  { id: 'experience', label: 'Milestones', short: 'Exp' },
  { id: 'contact', label: 'Contact', short: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  isMuted,
  toggleSound,
  playHover,
  playClick,
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 250;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-1.5 md:gap-3 px-2 py-1.5 sm:px-3 sm:py-2 md:px-5 md:py-2.5 rounded-full border transition-all duration-300 backdrop-blur-2xl max-w-[calc(100vw-1rem)] overflow-x-auto no-scrollbar ${
          isScrolled
            ? 'bg-white/95 border-zinc-300 shadow-[0_10px_35px_rgba(0,0,0,0.1)] scale-[0.98] dark:bg-black/90 dark:border-white/15 dark:shadow-[0_10px_35px_rgba(0,0,0,0.95)]'
            : 'bg-white/90 border-zinc-300/80 shadow-md dark:bg-black/70 dark:border-white/10 dark:shadow-glass'
        }`}
      >
        {/* Monogram Seal */}
        <button
          onClick={() => scrollTo('hero')}
          onMouseEnter={playHover}
          className="flex items-center gap-2 pr-2 sm:pr-2.5 border-r border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white transition-colors group shrink-0"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-zinc-100 border border-zinc-300 group-hover:border-crimson/60 flex items-center justify-center font-mono font-black text-[11px] sm:text-xs text-zinc-950 shadow-sm transition-colors dark:bg-[#101014] dark:border-white/15 dark:text-white">
            {PERSONAL_INFO.name.split(' ').map((n) => n[0]).join('').slice(0, 2) || 'KS'}
            {/* Jewel Crimson Indicator Dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#e50914]" />
          </div>
          <span className="hidden md:inline font-mono text-xs font-bold tracking-wider text-zinc-800 dark:text-zinc-300">
            आत्मपरिचयः
          </span>
        </button>

        {/* Section Links */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={playHover}
                className={`relative px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-mono text-[11px] sm:text-xs whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'text-crimson font-black dark:text-white'
                    : 'text-zinc-800 hover:text-crimson hover:bg-black/[0.04] dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-crimson/15 border border-crimson/40 -z-10 shadow-sm dark:bg-white/[0.08] dark:shadow-[0_0_10px_rgba(229,9,20,0.2)]"
                  />
                )}
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.short}</span>
              </button>
            );
          })}
        </div>

        {/* Distinct Separated Blog Action (Opens Separate Page) */}
        <div className="pl-1.5 sm:pl-2 border-l border-zinc-300 dark:border-white/10 flex items-center shrink-0">
          <a
            href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/blog`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-crimson/10 text-crimson-dark dark:text-crimson border border-crimson/30 hover:bg-crimson hover:text-white dark:hover:bg-crimson dark:hover:text-white transition-all shadow-sm group/blog whitespace-nowrap"
            title="Open Technical Blog in a separate page"
          >
            <BookOpen className="w-3 h-3 text-crimson group-hover/blog:text-white dark:group-hover/blog:text-white transition-colors" />
            <span className="group-hover/blog:text-white dark:group-hover/blog:text-white transition-colors">Blog</span>
            <ArrowUpRight className="w-3 h-3 text-crimson-dark dark:text-crimson group-hover/blog:text-white dark:group-hover/blog:text-white transition-colors hidden sm:inline" />
          </a>
        </div>

        {/* Sound & GitHub Links */}
        <div className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2.5 border-l border-zinc-300 dark:border-white/10 shrink-0">
          <button
            onClick={() => {
              toggleSound();
              playClick();
            }}
            onMouseEnter={playHover}
            title={isMuted ? 'Unmute audio feedback' : 'Mute audio feedback'}
            className={`p-1.5 sm:p-2 rounded-full transition-colors ${
              !isMuted
                ? 'text-crimson bg-crimson/15 border border-crimson/40'
                : 'text-zinc-700 hover:text-crimson hover:bg-black/[0.05] dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/[0.05]'
            }`}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse text-crimson" />}
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            title="LinkedIn"
            className="p-1.5 sm:p-2 rounded-full text-zinc-700 hover:text-crimson hover:bg-black/[0.05] dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/[0.05] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};
