import { useState } from 'react';
import { Spinner } from '../index.ts';
import type { CardProps } from './Card.types.ts';
import { motion } from 'framer-motion';
import { animatedBorderMotionProps } from '../../layout/Animation.tsx';
import { cn } from '../../utils/cn.ts';

export default function Card({
  children,
  className = '',
  contentClassName = 'p-4 lg:p-6',
  containerClassName = 'flex flex-col',
  loading = false,
  animatedBorder = true,
}: Readonly<CardProps>) {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <motion.div
      className={cn(
        'default-border relative overflow-hidden rounded-lg p-px transition-all duration-300 ease-in-out',
        className,
      )}
      aria-label="region"
      aria-busy={loading}
      onHoverStart={() => setShowBorder(true)}
      onHoverEnd={() => setShowBorder(false)}
      onFocus={() => setShowBorder(true)}
      onBlur={() => setShowBorder(false)}
    >
      {animatedBorder && showBorder && !loading && (
        <motion.div
          className="pointer-events-none absolute inset-0 scale-200"
          animate="animate"
          {...animatedBorderMotionProps}
        />
      )}

      <div className="relative z-10 h-full w-full overflow-hidden rounded-md bg-(--background-color)">
        <div className={cn('smooth-noisy-background h-full w-full', containerClassName)}>
          <div
            className={cn(
              'relative above-noise-content-background h-full w-full',
              contentClassName,
            )}
          >
            {loading && (
              <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/80">
                <Spinner isLoading={true} />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
