import { motion } from 'framer-motion';
import {
  animatedBorderMotionProps,
  buttonLikeComponentMotionProps,
} from '../../layout/Animation.tsx';
import { Icon } from '../index.ts';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { getContrastColor } from '../../utils/color';
import { NativeButtonProps } from './Button.types.ts';
import { cn } from '../../utils/cn.ts';
import { useAnimatedBorder } from '../../hooks/useAnimatedBorder.ts';
import { variants } from '../../utils/variants.ts';

const buttonVariants = variants(
  'relative overflow-hidden default-text-color flex items-center justify-center p-px text-center text-sm font-medium hover-background default-border border',
  {
    variants: {
      rounded: {
        none: '',
        full: 'rounded-full',
        medium: 'rounded-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      rounded: 'medium',
      fullWidth: 'false',
      disabled: 'false',
    },
  },
);

const innerVariants = variants(
  'overflow-hidden px-4 py-2 z-20 h-full w-full flex justify-center items-center',
  {
    variants: {
      rounded: {
        none: '',
        full: 'rounded-full',
        medium: 'rounded-lg',
      },
      disabled: {
        true: 'default-background',
        false: 'not-hover:above-noise-content-background hover:default-background',
      },
    },
    defaultVariants: {
      rounded: 'medium',
      disabled: 'false',
    },
  },
);

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

/**
 * A versatile button component that supports various styles, icons, and animations.
 *
 * @example
 * ```tsx
 * <NativeButton onClick={() => console.log('clicked')}>
 *   Click me
 * </NativeButton>
 * ```
 *
 * @example
 * ```tsx
 * <NativeButton
 *   icon={{ name: 'ArrowRightIcon', position: 'right' }}
 *   animatedBorder
 * >
 *   Next Step
 * </NativeButton>
 * ```
 */
export default function NativeButton({
  children,
  onClick,
  rounded = 'medium',
  icon,
  disabled = false,
  animatedBorder = false,
  hoverColor,
  fullWidth = false,
  className,
  ...props
}: Readonly<NativeButtonProps>) {
  const { showBorder, handlers } = useAnimatedBorder({
    animated: animatedBorder,
    disabled,
  });

  const name = icon?.name;
  const fill = icon?.fill;
  const variant = icon?.variant as 'solid' | 'outline' | undefined;
  const isStringName =
    typeof name === 'string' && (name in HeroSolidIcons || name in HeroOutlineIcons);

  const defaultBg = '#fff';
  const defaultContrastColor = getContrastColor(defaultBg);
  const hoverContrastColor =
    hoverColor && !disabled ? getContrastColor(hoverColor) : defaultContrastColor;
  const styleVars = getStyleVars(hoverColor, !!disabled, defaultContrastColor, hoverContrastColor);
  const iconColor = hoverColor && !disabled ? 'var(--custom-text-color)' : (icon?.color ?? '');

  return (
    <motion.button
      {...(!disabled && buttonLikeComponentMotionProps)}
      type="button"
      className={buttonVariants({
        rounded,
        fullWidth: fullWidth ? 'true' : 'false',
        disabled: disabled ? 'true' : 'false',
        className,
      })}
      onClick={disabled ? undefined : onClick}
      {...handlers}
      disabled={disabled}
      aria-disabled={disabled}
      style={styleVars}
      {...props}
    >
      {showBorder && (
        <motion.div
          className="pointer-events-none absolute inset-0 scale-200"
          animate="animate"
          {...animatedBorderMotionProps}
        />
      )}
      <div
        className={cn(
          'overflow-hidden z-10 smooth-noisy-background h-full w-full flex justify-center items-center',
          buttonVariants({
            rounded,
            className: 'border-none p-0 w-full h-full',
          })
            .split(' ')
            .filter((c) => c.startsWith('rounded-'))
            .join(' '),
        )}
      >
        <div
          className={cn(
            innerVariants({ rounded, disabled: disabled ? 'true' : 'false' }),
            hoverColor && !disabled && 'custom-hover-bg custom-hover-text',
          )}
        >
          {renderIconOrImage(icon, isStringName, fill, variant, iconColor, 'left')}
          {children}
          {renderIconOrImage(icon, isStringName, fill, variant, iconColor, 'right')}
        </div>
      </div>
    </motion.button>
  );
}
