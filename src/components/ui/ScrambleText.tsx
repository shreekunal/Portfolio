import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  triggerOnHover?: boolean;
}

const GLYPHS = 'ABCDEF0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  speed = 30,
  triggerOnHover = true,
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const intervalRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    startScramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startScramble]);

  return (
    <span
      onMouseEnter={triggerOnHover ? startScramble : undefined}
      className={`inline-block font-mono cursor-pointer select-none transition-colors ${className}`}
    >
      {displayText}
    </span>
  );
};
