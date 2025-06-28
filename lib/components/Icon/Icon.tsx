import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import { IconProps } from './Icon.types.ts';

export default function Icon({
  name,
  icon,
  className = 'w-5 h-5',
  color = 'currentColor',
  fill,
  variant = 'outline',
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

  return (
    <IconComponent
      className={className}
      style={{
        color,
        ...(fill ? { fill } : {}),
      }}
    />
  );
}
