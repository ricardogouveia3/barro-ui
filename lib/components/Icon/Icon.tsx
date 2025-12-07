import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { IconProps } from './Icon.types.ts';
import { warnIf, validateMutuallyExclusive } from '../../utils/dev-warnings.ts';

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
  // Prop validations (development only)
  validateMutuallyExclusive(
    { name, icon },
    ['name', 'icon'],
    'Icon',
  );

  warnIf(
    !name && !icon,
    'Icon: either name or icon prop should be provided',
  );

  warnIf(
    ariaHidden !== true && !ariaLabel,
    'Icon: aria-label should be provided when icon is not hidden from screen readers',
  );

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
