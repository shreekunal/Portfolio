import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none h-[3px] bg-zinc-200/90 dark:bg-white/[0.08]">
      {/* Piercing Crimson Laser Progress Line */}
      <motion.div
        className="h-full bg-gradient-to-r from-crimson-dark via-crimson to-crimson-bright origin-left relative shadow-[0_0_14px_rgba(229,9,20,0.9)]"
        style={{ scaleX }}
      >
        {/* Laser Head spark at the tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-crimson shadow-[0_0_8px_#ffffff,0_0_16px_#e50914]" />
      </motion.div>
    </div>
  );
};
