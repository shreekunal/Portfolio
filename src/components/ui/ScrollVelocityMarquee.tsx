import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';

interface MarqueeProps {
  items: string[];
  baseVelocity?: number;
}

export const ScrollVelocityMarquee: React.FC<MarqueeProps> = ({
  items,
  baseVelocity = 1.5,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${v}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);

    if (baseX.get() <= -50) {
      baseX.set(0);
    } else if (baseX.get() >= 0) {
      baseX.set(-50);
    }
  });

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y transition-colors duration-300 my-12 backdrop-blur-md select-none bg-white/90 border-zinc-200 shadow-sm dark:bg-black/70 dark:border-white/[0.08]">
      {/* Edge Blur Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-white to-transparent dark:from-black z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-white to-transparent dark:from-black z-10 pointer-events-none" />

      <motion.div className="flex whitespace-nowrap will-change-transform" style={{ x }}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center mx-5 group">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors text-zinc-900 group-hover:text-crimson dark:text-zinc-300 dark:group-hover:text-white">
              {item}
            </span>
            <span className="inline-block text-crimson font-black text-sm mx-6 group-hover:scale-125 transition-transform drop-shadow-[0_0_8px_rgba(229,9,20,0.6)]">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
