import React, { useRef, useState, useCallback } from 'react';

interface MagneticBadgeProps {
  children: React.ReactNode;
  className?: string;
  pullStrength?: number;
}

export const MagneticBadge: React.FC<MagneticBadgeProps> = ({
  children,
  className = '',
  pullStrength = 0.28,
}) => {
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      if (!badgeRef.current) return;
      const rect = badgeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * pullStrength, y: y * pullStrength });
    },
    [pullStrength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <span
      ref={badgeRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.05s ease-out',
      }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </span>
  );
};
