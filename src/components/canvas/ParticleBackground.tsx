import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  alpha: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const isDark = theme === 'dark';

    // Adaptive Palettes for Light vs Dark
    const colors = isDark
      ? [
          'rgba(255, 255, 255, ',  // Starlight White
          'rgba(244, 244, 245, ',  // Platinum
          'rgba(212, 212, 216, ',  // Silver
          'rgba(229, 9, 20, ',     // Crimson Ember
        ]
      : [
          'rgba(15, 23, 42, ',     // Dark Slate
          'rgba(71, 85, 105, ',    // Slate Grey
          'rgba(100, 116, 139, ',  // Cool Grey
          'rgba(229, 9, 20, ',     // Vibrant Crimson
        ];

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 14000);
      const count = Math.min(Math.max(particleCount, 35), 90);

      for (let i = 0; i < count; i++) {
        const baseRadius = isDark
          ? Math.random() * 1.6 + 0.8
          : Math.random() * 2.0 + 1.2;
        const color = i % 4 === 0 ? colors[3] : colors[i % 3];

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius,
          radius: baseRadius,
          color,
          alpha: isDark ? Math.random() * 0.45 + 0.2 : Math.random() * 0.45 + 0.35,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }

        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = 1 - dist / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2.5;
          p.y -= Math.sin(angle) * force * 2.5;
          p.radius = p.baseRadius + force * 2.2;
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 130;

          if (distBetween < maxDist) {
            const lineAlpha = (1 - distBetween / maxDist) * (isDark ? 0.15 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${lineAlpha})`
              : `rgba(15, 23, 42, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.6 : 0.8;
            ctx.stroke();
          }
        }

        // Vibrant crimson laser trace to mouse cursor
        if (dist < mouse.radius) {
          const mouseLineAlpha = (1 - dist / mouse.radius) * (isDark ? 0.35 : 0.55);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(229, 9, 20, ${mouseLineAlpha})`;
          ctx.lineWidth = isDark ? 0.8 : 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85 transition-opacity duration-300"
    />
  );
};
