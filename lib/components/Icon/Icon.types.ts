import type { ComponentType, CSSProperties } from 'react';
import type { IconName } from '../../types/common.types';

export type IconProps = {
  /**
   * Name of the HeroIcon to display.
   */
  name?: IconName;
  /**
   * Custom SVG component to render instead of a HeroIcon.
   */
  icon?: ComponentType<{ className?: string; style?: CSSProperties }>;
  /**
   * Additional CSS classes to apply to the icon.
   */
  className?: string;
  /**
   * Color of the icon (applied via style.color).
   */
  color?: string;
  /**
   * Fill color of the icon (applied via style.fill).
   */
  fill?: string;
  /**
   * Variant of the icon (solid or outline).
   * @default 'outline'
   */
  variant?: 'solid' | 'outline';
  /**
   * Accessible label for the icon.
   */
  'aria-label'?: string;
  /**
   * Whether the icon should be hidden from screen readers.
   * Defaults to true if no aria-label is provided.
   */
  'aria-hidden'?: boolean | 'true' | 'false';
};
