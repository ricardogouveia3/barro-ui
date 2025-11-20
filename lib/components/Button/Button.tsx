import { motion } from 'framer-motion';
import {
  animatedBorderMotionProps,
  buttonLikeComponentMotionProps,
} from '../../layout/Animation.tsx';
import { Icon } from '../index.ts';
import { useState } from 'react';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { getContrastColor } from '../../utils/color';
import { NativeButtonProps } from './Button.types.ts';
import { cn } from '../../utils/cn.ts';

function getRoundedClass(rounded: NativeButtonProps['rounded']) {
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

function renderIconOrImage(
  icon: NativeButtonProps['icon'],
  isStringName: boolean,
  fill: string | undefined,
  variant: 'solid' | 'outline' | undefined,
  iconColor: string,
  position: 'left' | 'right',
) {
  if (!icon || icon.position !== position) return null;

  // Se houver src, renderiza como imagem
  if (icon.src) {
    return (
      <img
        src={icon.src}
        alt=""
        className={cn('w-4 h-4 z-10 object-contain', position === 'left' ? 'mr-2' : 'ml-2')}
      />
    );
  }

  // Caso contrário, renderiza como ícone SVG
  return (
    <Icon
      icon={typeof icon.name === 'function' ? icon.name : undefined}
      name={isStringName ? (icon.name as keyof typeof HeroSolidIcons) : undefined}
      color={iconColor}
      fill={fill}
      variant={variant}
      className={cn('w-4 h-4 z-10', position === 'left' ? 'mr-2' : 'ml-2')}
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
  return cn(
    'overflow-hidden px-4 py-2 z-20 h-full w-full flex justify-center items-center',
    roundedClass,
    disabled
      ? 'default-background'
      : cn(
          'not-hover:above-noise-content-background hover:default-background',
          hoverColor && 'custom-hover-bg custom-hover-text'
        )
  );
}

export default function NativeButton({
  children,
  onClick,
  rounded = 'medium',
  icon,
  disabled = false,
  animatedBorder = false,
  hoverColor,
  fullWidth = false,
}: Readonly<NativeButtonProps>) {
  const [showBorder, setShowBorder] = useState(false);

  const name = icon?.name;
  const fill = icon?.fill;
  const variant = icon?.variant as 'solid' | 'outline' | undefined;
  const isStringName =
    typeof name === 'string' && (name in HeroSolidIcons || name in HeroOutlineIcons);

  const roundedClass = getRoundedClass(rounded);
  const defaultBg = '#fff';
  const defaultContrastColor = getContrastColor(defaultBg);
  const hoverContrastColor =
    hoverColor && !disabled ? getContrastColor(hoverColor) : defaultContrastColor;
  const styleVars = getStyleVars(hoverColor, disabled, defaultContrastColor, hoverContrastColor);
  const iconColor = hoverColor && !disabled ? 'var(--custom-text-color)' : (icon?.color ?? '');

  return (
    <motion.button
      {...(!disabled && buttonLikeComponentMotionProps)}
      type="button"
      className={cn(
        'relative overflow-hidden default-text-color flex items-center justify-center p-px text-center text-sm font-medium hover-background default-border border',
        roundedClass,
        fullWidth ? 'w-full' : 'w-fit',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
      )}
      onClick={disabled ? undefined : onClick}
      onHoverStart={disabled ? undefined : () => setShowBorder(true)}
      onHoverEnd={disabled ? undefined : () => setShowBorder(false)}
      onFocus={disabled ? undefined : () => setShowBorder(true)}
      onBlur={disabled ? undefined : () => setShowBorder(false)}
      disabled={disabled}
      aria-disabled={disabled}
      style={styleVars}
    >
      {animatedBorder && showBorder && !disabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 scale-200"
          animate="animate"
          {...animatedBorderMotionProps}
        />
      )}
      <div
        className={cn(
          'overflow-hidden z-10 smooth-noisy-background h-full w-full flex justify-center items-center',
          roundedClass
        )}
      >
        <div className={getInnerClass(disabled, hoverColor, roundedClass)}>
          {renderIconOrImage(icon, isStringName, fill, variant, iconColor, 'left')}
          {children}
          {renderIconOrImage(icon, isStringName, fill, variant, iconColor, 'right')}
        </div>
      </div>
    </motion.button>
  );
}
