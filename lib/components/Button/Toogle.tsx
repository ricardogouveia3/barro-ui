import { motion } from 'framer-motion';
import {
  buttonLikeComponentMotionProps,
  animatedBorderMotionProps,
} from '../../layout/Animation.tsx';
import { ToggleButtonProps } from './Button.types.ts';
import Icon from '../Icon/Icon.tsx';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { useState } from 'react';

const ToggleButton = ({
  onClick,
  icon,
  disabled,
  animatedBorder = false,
}: Readonly<ToggleButtonProps>) => {
  const [showBorder, setShowBorder] = useState(false);

  if (!icon) return null;
  const { name, color, fill, variant } = icon;
  const isStringName =
    typeof name === 'string' && (name in HeroSolidIcons || name in HeroOutlineIcons);

  return (
    <motion.button
      className={`${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } relative overflow-hidden default-border flex items-center justify-center rounded-lg h-10 w-10 p-px`}
      onClick={onClick}
      aria-label="Toggle button"
      disabled={disabled}
      onHoverStart={() => setShowBorder(true)}
      onHoverEnd={() => setShowBorder(false)}
      onFocus={() => setShowBorder(true)}
      onBlur={() => setShowBorder(false)}
      {...(!disabled
        ? {
            ...buttonLikeComponentMotionProps,
            whileTap: { scale: 0.95 },
          }
        : {})}
    >
      {animatedBorder && showBorder && !disabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 scale-200"
          animate="animate"
          {...animatedBorderMotionProps}
        />
      )}
      <div
        className={`z-10 smooth-noisy-background h-full w-full flex justify-center items-center rounded-lg`}
      >
        <div
          className={`${
            disabled
              ? 'default-background'
              : 'not-hover:above-noise-content-background' + ' hover:default-background'
          } z-20  h-full w-full flex justify-center items-center rounded-lg`}
        >
          <Icon
            icon={typeof name === 'function' ? name : undefined}
            name={isStringName ? (name as keyof typeof HeroSolidIcons) : undefined}
            color={color}
            fill={fill}
            variant={variant}
            className="w-4 h-4 z-10"
          />
        </div>
      </div>
    </motion.button>
  );
};

export default ToggleButton;
