import type { HexColor } from '../types/common.types';

/**
 * Determines the appropriate text color (black or white) based on the background color.
 *
 * @param bgColor - Background color in hexadecimal format
 * @returns '#000000' for light backgrounds, '#FFFFFF' for dark backgrounds
 *
 * @example
 * ```tsx
 * getContrastColor('#ffffff'); // '#000000'
 * getContrastColor('#000000'); // '#FFFFFF'
 * ```
 */
export function getContrastColor(bgColor: string): HexColor {
  const hex = bgColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
}
