import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.body.classList.add('custom-cursor-enabled');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, [data-cursor]');
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute('data-cursor-text') || '';
          setCursorText(customText);
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const followLoop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(followLoop);
    };

    animId = requestAnimationFrame(followLoop);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Vivid Crimson Center Dot - Piercingly clear on both white & black */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-crimson pointer-events-none z-[9999] transition-opacity duration-200 shadow-[0_0_12px_#e50914]"
        style={{
          opacity: cursorText ? 0 : 1,
        }}
      />

      {/* Sleek Crimson Halo Ring / Action Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-150 ease-out flex items-center justify-center font-mono font-bold select-none ${
          cursorText
            ? 'w-24 h-24 -ml-12 -mt-12 rounded-full bg-zinc-950 text-white border-2 border-crimson text-[11px] tracking-widest shadow-[0_0_24px_rgba(229,9,20,0.6)] backdrop-blur-md'
            : isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-crimson bg-crimson/20 scale-125 shadow-[0_0_14px_rgba(229,9,20,0.4)]'
            : isClicking
            ? 'w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-crimson bg-crimson/40 scale-90'
            : 'w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-crimson/80 shadow-[0_0_10px_rgba(229,9,20,0.35)]'
        }`}
      >
        {cursorText && (
          <span className="text-white font-extrabold tracking-widest">{cursorText}</span>
        )}
      </div>
    </>
  );
};
