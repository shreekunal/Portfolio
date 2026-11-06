import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  playClick?: () => void;
  playHover?: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ playClick, playHover }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    if (playClick) playClick();
    toggleTheme();
  };

  const isLight = theme === 'light';

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Floating Animated Theme Button with Hover Tooltip */}
      <div className="relative group flex items-center justify-end">
        {/* Subtle Accessible Tooltip on Hover */}
        <span
          className="pointer-events-none absolute right-full mr-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-xl border opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg whitespace-nowrap bg-white text-zinc-900 border-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 dark:border-white/15"
        >
          <span className="w-2 h-2 rounded-full bg-crimson" />
          <span>Switch to {isLight ? 'Dark' : 'Light'} Mode</span>
        </span>

        {/* Main Animated Moving Theme Button */}
        <button
          onClick={handleToggle}
          onMouseEnter={playHover}
          aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
          title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
          className="relative p-3.5 rounded-full backdrop-blur-2xl border-2 transition-all duration-300 shadow-xl active:scale-95 bg-white text-zinc-950 border-zinc-300 hover:border-crimson shadow-[0_8px_25px_rgba(229,9,20,0.18)] dark:bg-[#0e0e12] dark:text-white dark:border-white/20 dark:hover:border-crimson dark:shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle Crimson Radar Ring */}
          <span className="absolute -inset-1 rounded-full border border-crimson/40 animate-radar pointer-events-none" />

          {/* Rotating Sun / Moon Icon with Smooth Spin */}
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 flex items-center justify-center"
          >
            {isLight ? (
              <Moon className="w-5 h-5 text-zinc-950 group-hover:text-crimson transition-colors" />
            ) : (
              <Sun className="w-5 h-5 text-white group-hover:text-crimson transition-colors" />
            )}
          </motion.div>
        </button>
      </div>
    </div>
  );
};
