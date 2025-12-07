import { Spinner } from '../index.ts';
import type { CardProps } from './Card.types.ts';
import { motion } from 'framer-motion';
import { animatedBorderMotionProps } from '../../layout/Animation.tsx';
import { cn } from '../../utils/cn.ts';
import { useAnimatedBorder } from '../../hooks/useAnimatedBorder.ts';
import { variants } from '../../utils/variants.ts';
import { warnIf } from '../../utils/dev-warnings.ts';

const cardVariants = variants(
  'default-border relative overflow-hidden rounded-lg p-px transition-all duration-300 ease-in-out',
);

/**
 * A container component with optional animated borders and loading state.
 *
 * @example
 * ```tsx
 * <Card>
 *   <h2>Card Title</h2>
 *   <p>Card content goes here.</p>
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * <Card loading={isLoading} animatedBorder={false}>
 *   <Content />
 * </Card>
 * ```
 */
export default function Card({
  children,
  className = '',
  contentClassName = 'p-4 lg:p-6',
  containerClassName = 'flex flex-col',
  loading = false,
  animatedBorder = true,
  ...props
}: Readonly<CardProps>) {
  // Prop validations (development only)
  warnIf(!children && !loading, 'Card: children should be provided when not in loading state');

  const { showBorder, handlers } = useAnimatedBorder({
    animated: animatedBorder,
    disabled: loading,
  });

  return (
    <motion.div
      role="region"
      aria-label={props['aria-label'] || 'Card'}
      aria-busy={loading}
      aria-live={loading ? 'polite' : undefined}
      className={cardVariants({ className })}
      {...handlers}
      {...props}
    >
      {showBorder && (
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
