import { colors, typography } from '../tokens';

/**
 * Type for all available color tokens.
 */
export type ColorToken = keyof typeof colors.quartz | keyof typeof colors.base;

/**
 * Type for quartz color shades (50-950).
 */
export type QuartzShade = keyof typeof colors.quartz;

/**
 * Type for base colors (white, black).
 */
export type BaseColorName = keyof typeof colors.base;

/**
 * Type for font family options.
 */
export type FontFamily = keyof typeof typography.fontFamily;

/**
 * Helper type to get the value type of a color token.
 *
 * @example
 * ```tsx
 * type White = ColorValue<'white'>; // '#FFFFFF'
 * type Quartz500 = ColorValue<500>; // '#4a4a4a'
 * ```
 */
export type ColorValue<T extends ColorToken> = T extends keyof typeof colors.quartz
  ? (typeof colors.quartz)[T]
  : T extends keyof typeof colors.base
    ? (typeof colors.base)[T]
    : never;
