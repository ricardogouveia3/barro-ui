import * as HeroSolidIcons from '@heroicons/react/24/solid';
import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import type { ComponentType, CSSProperties } from 'react';

export type IconProps = {
  name?: keyof typeof HeroSolidIcons | keyof typeof HeroOutlineIcons;
  icon?: ComponentType<{ className?: string; style?: CSSProperties }>;
  className?: string;
  color?: string;
  fill?: string;
  variant?: 'solid' | 'outline';
};
