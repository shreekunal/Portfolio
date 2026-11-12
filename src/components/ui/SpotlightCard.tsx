import React, { useRef, useState, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  'data-cursor-text'?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor,
  borderColor,
  onClick,
  onMouseEnter,
  'data-cursor-text': dataCursorText,
}) => {
  const { theme } = useTheme();
  const divRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState<number>(0);

  const isDark = theme === 'dark';
  const effectiveSpotlight =
    spotlightColor || (isDark ? 'rgba(229, 9, 20, 0.06)' : 'rgba(229, 9, 20, 0.08)');
  const effectiveBorder =
    borderColor || (isDark ? 'rgba(229, 9, 20, 0.4)' : 'rgba(229, 9, 20, 0.5)');

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleFocus = useCallback(() => setOpacity(1), []);
  const handleBlur = useCallback(() => setOpacity(0), []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
    if (onMouseEnter) onMouseEnter();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor-text={dataCursorText}
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl bg-white/95 border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-crimson/40 hover:shadow-[0_8px_30px_rgba(229,9,20,0.1)] dark:bg-[#09090b]/90 dark:border-white/[0.08] dark:shadow-none dark:hover:border-crimson/40 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${effectiveSpotlight}, transparent 45%)`,
        }}
      />

      {/* Dynamic Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${effectiveBorder}, transparent 40%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px',
        }}
      />

      {/* Card Content */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
};
