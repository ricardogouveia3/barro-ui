import { motion } from 'framer-motion';
import {
  animatedBorderMotionProps,
  buttonLikeComponentMotionProps,
} from '../../layout/Animation.tsx';
import { Icon } from '../index.ts';
import { ButtonLinkProps } from './Button.types.ts';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { useState } from 'react';
import { getContrastColor } from '../../utils/color';

function getRoundedClass(rounded: ButtonLinkProps['rounded']) {
  switch (rounded) {
    case 'none':
      return '';
    case 'full':
      return 'rounded-full';
    case 'medium':
    default:
      return 'rounded-lg';
  }
}

function getIconProps(
  icon: ButtonLinkProps['icon'],
  isStringName: boolean,
  fill: string | undefined,
  variant: 'solid' | 'outline' | undefined,
  iconColor: string,
  position: 'left' | 'right',
) {
  if (!icon || icon.position !== position) return null;
  return (
    <Icon
      icon={typeof icon.name === 'function' ? icon.name : undefined}
      name={isStringName ? (icon.name as keyof typeof HeroSolidIcons) : undefined}
      color={iconColor}
      fill={fill}
      variant={variant}
      className={`w-4 h-4 z-10 ${position === 'left' ? 'mr-2' : 'ml-2'}`}
    />
  );
}

function getStyleVars(
  hoverColor: string | undefined,
  disabled: boolean,
  defaultContrastColor: string,
  hoverContrastColor: string,
) {
  if (hoverColor && !disabled) {
    return {
      '--custom-hover-bg': hoverColor,
      '--custom-text-color': defaultContrastColor,
      '--custom-hover-text-color': hoverContrastColor,
    } as React.CSSProperties;
  }
  return undefined;
}

function getInnerClass(disabled: boolean, hoverColor: string | undefined, roundedClass: string) {
  if (disabled) {
    return `default-background overflow-hidden ${roundedClass} px-4 py-2 z-20 h-full w-full flex justify-center items-center`;
  }
  const hoverClasses = hoverColor ? ' custom-hover-bg custom-hover-text' : '';
  return `not-hover:above-noise-content-background hover:default-background${hoverClasses} overflow-hidden ${roundedClass} px-4 py-2 z-20 h-full w-full flex justify-center items-center`;
}

export default function ButtonLink({
  children,
  link,
  onMouseEnter,
  onMouseLeave,
  rounded = 'medium',
  icon,
  disabled = false,
  animatedBorder = false,
  hoverColor,
}: Readonly<ButtonLinkProps>) {
  const [showBorder, setShowBorder] = useState(false);

  const name = icon?.name;
  const fill = icon?.fill;
  const variant = icon?.variant as 'solid' | 'outline' | undefined;
  const isStringName =
    typeof name === 'string' && (name in HeroSolidIcons || name in HeroOutlineIcons);

  const roundedClass = getRoundedClass(rounded);
  const disabledClass = 'cursor-not-allowed opacity-60';
  const baseClass =
    'relative overflow-hidden default-text-color flex items-center justify-center p-px' +
    ` text-center text-sm font-medium ${roundedClass} hover-background default-border w-fit border`;

  const defaultBg = '#fff';
  const defaultContrastColor = getContrastColor(defaultBg);
  const hoverContrastColor =
    hoverColor && !disabled ? getContrastColor(hoverColor) : defaultContrastColor;
  const styleVars = getStyleVars(hoverColor, disabled, defaultContrastColor, hoverContrastColor);
  const iconColor = hoverColor && !disabled ? 'var(--custom-text-color)' : (icon?.color ?? '');

  return (
    <motion.a
      {...(!disabled && buttonLikeComponentMotionProps)}
      href={disabled ? undefined : link}
      target={disabled ? undefined : '_blank'}
      className={`${baseClass} ${disabled ? disabledClass : ''}`}
      onMouseEnter={disabled ? undefined : onMouseEnter}
      onMouseLeave={disabled ? undefined : onMouseLeave}
      onHoverStart={disabled ? undefined : () => setShowBorder(true)}
      onHoverEnd={disabled ? undefined : () => setShowBorder(false)}
      onFocus={disabled ? undefined : () => setShowBorder(true)}
      onBlur={disabled ? undefined : () => setShowBorder(false)}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {animatedBorder && showBorder && !disabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 scale-200"
          animate="animate"
          {...animatedBorderMotionProps}
        />
      )}
      <div
        className={`${roundedClass} overflow-hidden z-10 smooth-noisy-background h-full w-full flex justify-center items-center`}
      >
        <div
          className={getInnerClass(disabled, hoverColor, roundedClass)}
          style={styleVars}
        >
          {getIconProps(icon, isStringName, fill, variant, iconColor, 'left')}
          {children}
          {getIconProps(icon, isStringName, fill, variant, iconColor, 'right')}
        </div>
      </div>
    </motion.a>
  );
}
