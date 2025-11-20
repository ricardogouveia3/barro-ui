import type { TextUnderlineProps } from './TextUnderline.types.ts';
import { useState } from 'react';
import { cn } from '../../utils/cn.ts';

export default function TextUnderline({
  href,
  children,
  className = '',
  isHoveredOrFocused = false,
}: Readonly<TextUnderlineProps>) {
  const [isHovered, setIsHovered] = useState(false);

  const handleInteraction = () => {
    setIsHovered(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHovered(false);
  };

  return (
    <a
      onMouseEnter={handleInteraction}
      onMouseLeave={handleLeaveOrBlur}
      onFocus={handleInteraction}
      onBlur={handleLeaveOrBlur}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'default-text-color inline-block font-bold underline decoration-wavy underline-offset-8 transition-colors',
        (isHovered || isHoveredOrFocused) && 'decoration-cyan-500',
        className,
      )}
    >
      {children}
    </a>
  );
}
