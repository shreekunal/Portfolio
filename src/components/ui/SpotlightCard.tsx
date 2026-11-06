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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isDark = theme === 'dark';
  const effectiveSpotlight =
    spotlightColor || (isDark ? 'rgba(229, 9, 20, 0.08)' : 'rgba(229, 9, 20, 0.14)');
  const effectiveBorder =
    borderColor || (isDark ? 'rgba(229, 9, 20, 0.5)' : 'rgba(229, 9, 20, 0.65)');

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleFocus = useCallback(() => setOpacity(1), []);
  const handleBlur = useCallback(() => setOpacity(0), []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setIsHovered(false);
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
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl bg-white/95 border-zinc-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-crimson/50 hover:shadow-[0_12px_36px_rgba(229,9,20,0.12)] dark:bg-[#09090b]/90 dark:border-white/[0.08] dark:shadow-none dark:hover:border-crimson/50 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${effectiveSpotlight}, transparent 45%)`,
        }}
      />

      {/* Dynamic Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${effectiveBorder}, transparent 40%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px',
        }}
      />

      {/* Diagonal Specular Sheen Crimson Light Sweep on Hover */}
      <div
        className={`pointer-events-none absolute -inset-[100%] transition-transform duration-1000 ease-out will-change-transform z-10 ${
          isHovered ? 'translate-x-[200%] translate-y-[200%]' : '-translate-x-[100%] -translate-y-[100%]'
        }`}
        style={{
          background: isDark
            ? 'linear-gradient(115deg, transparent 25%, rgba(255, 255, 255, 0.15) 45%, rgba(229, 9, 20, 0.18) 50%, rgba(255, 255, 255, 0.15) 55%, transparent 75%)'
            : 'linear-gradient(115deg, transparent 20%, rgba(229, 9, 20, 0.14) 40%, rgba(255, 30, 56, 0.3) 50%, rgba(229, 9, 20, 0.14) 60%, transparent 80%)',
        }}
      />

      {/* Card Content with preserved 3D child layering */}
      <div
        className="relative z-20 h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  );
};
