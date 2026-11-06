import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const MouseFollowerGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isDark = theme === 'dark';

  return (
    <div
      ref={glowRef}
      className={`fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 will-change-transform transition-opacity duration-500 ${
        isDark ? 'opacity-25 blur-[120px]' : 'opacity-40 blur-[90px] mix-blend-multiply'
      }`}
      style={{
        background: isDark
          ? 'radial-gradient(circle, rgba(229, 9, 20, 0.45) 0%, rgba(185, 28, 28, 0.15) 50%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255, 30, 56, 0.35) 0%, rgba(229, 9, 20, 0.18) 45%, transparent 70%)',
      }}
    />
  );
};
