import { motion } from 'framer-motion';
import {
  buttonLikeComponentMotionProps,
  animatedBorderMotionProps,
} from '../../layout/Animation.tsx';
import { ToggleButtonProps } from './Button.types.ts';
import Icon from '../Icon/Icon.tsx';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { cn } from '../../utils/cn.ts';
import { useAnimatedBorder } from '../../hooks/useAnimatedBorder.ts';

const ToggleButton = ({
  onClick,
  icon,
  disabled,
  animatedBorder = false,
}: Readonly<ToggleButtonProps>) => {
  const { showBorder, handlers } = useAnimatedBorder({
    animated: animatedBorder,
    disabled,
  });

  if (!icon) return null;
  const { name, src, color, fill, variant } = icon;
  const isStringName =
    typeof name === 'string' && (name in HeroSolidIcons || name in HeroOutlineIcons);

  return (
    <motion.button
      className={cn(
        'relative overflow-hidden default-border flex items-center justify-center rounded-lg h-10 w-10 p-px',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
      onClick={onClick}
      aria-label="Toggle button"
      disabled={disabled}
      {...handlers}
      {...(!disabled
        ? {
            ...buttonLikeComponentMotionProps,
            whileTap: { scale: 0.95 },
          }
        : {})}
    >
      {showBorder && (
        <motion.div
          className="pointer-events-none absolute inset-0 scale-200"
          animate="animate"
          {...animatedBorderMotionProps}
        />
      )}
      <div className="z-10 smooth-noisy-background h-full w-full flex justify-center items-center rounded-lg">
        <div
          className={cn(
            'z-20 h-full w-full flex justify-center items-center rounded-lg',
            disabled
              ? 'default-background'
              : 'not-hover:above-noise-content-background hover:default-background',
          )}
        >
          {src ? (
            <img
              src={src}
              alt="Icon"
              className="w-4 h-4 z-10 object-contain"
            />
          ) : (
            <Icon
              icon={typeof name === 'function' ? name : undefined}
              name={isStringName ? (name as keyof typeof HeroSolidIcons) : undefined}
              color={color}
              fill={fill}
              variant={variant}
              className="w-4 h-4 z-10"
            />
          )}
        </div>
      </div>
    </motion.button>
  );
};

export default ToggleButton;
