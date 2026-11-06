import React, { useRef, useState, useCallback } from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
  'data-cursor-text'?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  external = false,
  'data-cursor-text': dataCursorText,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.22, y: y * 0.22 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-sm sm:text-base gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-crimson hover:bg-crimson-bright text-white font-black border border-crimson shadow-[0_4px_20px_rgba(229,9,20,0.4)] hover:shadow-[0_6px_30px_rgba(229,9,20,0.7)] transition-all',
    secondary:
      'bg-white hover:bg-zinc-50 text-zinc-950 font-bold border-2 border-zinc-300 hover:border-crimson hover:text-crimson shadow-sm dark:bg-[#0c0c10]/80 dark:hover:bg-[#14141c] dark:text-white dark:border-white/15 dark:hover:border-crimson dark:shadow-none transition-all',
    outline:
      'bg-transparent hover:bg-crimson/[0.05] border-2 border-zinc-300 hover:border-crimson text-zinc-900 font-bold hover:text-crimson dark:hover:bg-white/[0.04] dark:border-white/20 dark:hover:border-crimson dark:text-zinc-200 dark:hover:text-white transition-all',
    ghost:
      'bg-transparent hover:bg-black/[0.05] border-transparent text-zinc-800 font-bold hover:text-crimson dark:hover:bg-white/[0.05] dark:text-zinc-300 dark:hover:text-white',
  }[variant];

  const content = (
    <span className="relative z-10 flex items-center font-bold tracking-wide">
      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      {children}
    </span>
  );

  const sharedProps = {
    ref: buttonRef as unknown as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    'data-cursor-text': dataCursorText,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: position.x === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.05s ease-out',
    },
    className: `group relative inline-flex items-center justify-center rounded-xl font-sans backdrop-blur-md transition-all duration-300 active:scale-95 will-change-transform ${sizeClasses} ${variantClasses} ${className}`,
  };

  if (href) {
    return (
      <a
        {...sharedProps}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...sharedProps}>
      {content}
    </button>
  );
};
