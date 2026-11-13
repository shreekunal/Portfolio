import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/canvas/ParticleBackground';
import { MouseFollowerGlow } from './components/canvas/MouseFollowerGlow';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { ScrollVelocityMarquee } from './components/ui/ScrollVelocityMarquee';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { BlogPage } from './components/pages/BlogPage';
import { useSoundEffects } from './hooks/useSoundEffects';
import { ThemeProvider } from './context/ThemeContext';

export const AppContent: React.FC = () => {
  const { isMuted, toggleSound, playHover, playClick, playSuccess } = useSoundEffects();
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Standalone Minimal Blog Page Route (supports root '/' and subpath like '/Portfolio/blog')
  if (currentPath.includes('/blog')) {
    return <BlogPage />;
  }

  // Main Portfolio Page
  return (
    <div className="relative min-h-screen bg-[#f8f9fb] bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(229,9,20,0.1),rgba(255,255,255,0)_100%)] text-zinc-900 dark:bg-black dark:text-zinc-100 overflow-x-hidden selection:bg-crimson/20 selection:text-crimson bg-noise transition-colors duration-300">
      {/* Top Scroll-Linked Piercing Crimson Laser Line */}
      <ScrollProgressBar />

      {/* Interactive Starlight & Crimson Particle Canvas */}
      <ParticleBackground />

      {/* Ambient Crimson Volumetric Light Follower */}
      <MouseFollowerGlow />

      {/* Dual-Stage Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Animated Theme Switcher Button */}
      <ThemeToggle playClick={playClick} playHover={playHover} />

      {/* Floating Smoked Glass Island Navigation */}
      <Navbar
        isMuted={isMuted}
        toggleSound={toggleSound}
        playHover={playHover}
        playClick={playClick}
      />

      {/* Main Page Flow with Kinetic Marquees */}
      <main className="relative z-10">
        <Hero playHover={playHover} playClick={playClick} />

        {/* Scroll-Velocity Responsive Ribbon */}
        <ScrollVelocityMarquee
          items={[
            'DISTRIBUTED ARCHITECTURE',
            'HIGH-THROUGHPUT SYSTEMS',
            'SUB-50MS LATENCY',
            'REACT 18 & NEXT.JS',
            'PRECISION MOTION DYNAMICS',
            'ENTERPRISE STABILITY',
          ]}
          baseVelocity={1.2}
        />

        {/* Selected Works is hidden for now as requested */}

        <Skills playHover={playHover} playClick={playClick} />

        <Certifications playHover={playHover} playClick={playClick} />

        <Experience playHover={playHover} playClick={playClick} />

        {/* Second Reverse Marquee */}
        <ScrollVelocityMarquee
          items={[
            'SYSTEM ARCHITECT',
            'ZERO-LATENCY PROTOCOLS',
            'TYPESCRIPT MASTERY',
            'TIME-SERIES ENGINES',
            'WCAG 2.1 AA COMPLIANCE',
            'PROVEN LEADERSHIP',
          ]}
          baseVelocity={-1.2}
        />

        <Contact
          playHover={playHover}
          playClick={playClick}
          playSuccess={playSuccess}
        />
      </main>

      {/* Smoked Glass Footer */}
      <Footer playHover={playHover} playClick={playClick} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
