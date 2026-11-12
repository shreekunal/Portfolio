import React, { useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  onMouseEnter?: () => void;
  onClick?: () => void;
  'data-cursor-text'?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onMouseEnter,
  onClick,
  'data-cursor-text': dataCursorText,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-cursor-text={dataCursorText}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
