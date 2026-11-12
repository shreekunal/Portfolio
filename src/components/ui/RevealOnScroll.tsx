import React from 'react';
import { motion } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.4,
  className = '',
  amount = 0.1,
  once = true,
}) => {
  const getInitialVariants = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 16 };
      case 'down':
        return { opacity: 0, y: -16 };
      case 'left':
        return { opacity: 0, x: 16 };
      case 'right':
        return { opacity: 0, x: -16 };
      case 'zoom':
        return { opacity: 0, scale: 0.98 };
      default:
        return { opacity: 0, y: 16 };
    }
  };

  return (
    <motion.div
      initial={getInitialVariants()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
