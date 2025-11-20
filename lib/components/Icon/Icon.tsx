import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { IconProps } from './Icon.types.ts';

/**
 * Renders an icon from HeroIcons or a custom SVG component.
 * Automatically handles accessibility attributes.
 *
 * @example
 * ```tsx
 * <Icon name="BeakerIcon" variant="solid" className="w-6 h-6 text-blue-500" />
 * ```
 *
 * @example
 * ```tsx
 * <Icon icon={CustomSvg} aria-label="Custom Icon" />
 * ```
 */
export default function Icon({
  name,
  icon,
  className = 'w-5 h-5',
  color = 'currentColor',
  fill,
  variant = 'outline',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: Readonly<IconProps>) {
  const heroIcon =
    name && variant === 'solid'
      ? HeroSolidIcons[name as keyof typeof HeroSolidIcons]
      : name && HeroOutlineIcons[name as keyof typeof HeroOutlineIcons];

  const IconComponent = icon ?? heroIcon;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  const effectiveAriaHidden = ariaHidden ?? !ariaLabel;

  return (
    <IconComponent
      className={className}
      aria-label={ariaLabel}
      aria-hidden={effectiveAriaHidden}
      style={{
        color,
        ...(fill ? { fill } : {}),
      }}
    />
  );
}
