import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { IconProps } from './Icon.types.ts';
import { warnIf, validateMutuallyExclusive } from '../../utils/dev-warnings.ts';

/**
 * Renders an icon from HeroIcons library or a custom SVG component.
 * Automatically handles accessibility attributes and supports both solid and outline variants.
 *
 * @component
 *
 * @param {IconProps} props - Component props
 * @param {IconName} [props.name] - Name of the HeroIcon to render (e.g., 'BeakerIcon')
 * @param {React.ComponentType} [props.icon] - Custom SVG component (mutually exclusive with name)
 * @param {string} [props.className='w-5 h-5'] - CSS classes for sizing and styling
 * @param {string} [props.color='currentColor'] - Icon color
 * @param {string} [props.fill] - Fill color (overrides color)
 * @param {'solid' | 'outline'} [props.variant='outline'] - HeroIcon variant
 * @param {string} [props['aria-label']] - Accessibility label (required when not hidden)
 * @param {boolean | 'true' | 'false'} [props['aria-hidden']] - Whether to hide from screen readers
 *
 * @returns {JSX.Element | null} Rendered icon component or null if icon not found
 *
 * @example
 * // HeroIcon with solid variant
 * <Icon name="BeakerIcon" variant="solid" className="w-6 h-6 text-blue-500" />
 *
 * @example
 * // Custom SVG component
 * <Icon icon={CustomSvg} aria-label="Custom Icon" />
 *
 * @example
 * // Icon hidden from screen readers
 * <Icon name="CheckIcon" aria-hidden />
 */
export default function Icon({
  name,
  icon,
  className = 'w-4 h-4',
  color = 'currentColor',
  fill,
  variant = 'outline',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: Readonly<IconProps>) {
  // Prop validations (development only)
  validateMutuallyExclusive({ name, icon }, ['name', 'icon'], 'Icon');

  warnIf(!name && !icon, 'Icon: either name or icon prop should be provided');

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
