import { useState } from 'react';
import { Spinner } from '../index.ts';
import type { CardProps } from './Card.types.ts';
import { motion } from 'framer-motion';
import { cardBorderMotionProps } from '../../layout/Animation.tsx';

export default function Card({
  children,
  classNames = '',
  contentClassnames = 'p-4 lg:p-6',
  loading = false,
  animatedBorder = true,
}: Readonly<CardProps>) {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <motion.div
      className={`default-border relative overflow-hidden rounded-lg p-px transition-all duration-300 ease-in-out ${classNames}`}
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
          {...cardBorderMotionProps}
        />
      )}

      <div className="relative z-10 h-full w-full overflow-hidden rounded-md bg-(--background-color)">
        <div className="smooth-noisy-background flex h-full w-full flex-col">
          <div
            className={`${contentClassnames} relative above-noise-content-background h-full w-full`}
          >
            {loading && (
              <div
                className={`absolute top-0 left-0 h-full w-full bg-black/80 z-10 flex items-center justify-center`}
              >
                <Spinner isLoading={true} />
              </div>
            )}
            {children}
          </div>
        </div>
        <Spinner isLoading={loading} />
      </div>
    </motion.div>
  );
}
