/**
 * Color palette tokens.
 * These values match the CSS variables defined in global.css.
 */
export const colors = {
  quartz: {
    50: '#070707',
    100: '#0f0f0f',
    150: '#161616',
    200: '#1e1e1e',
    250: '#252525',
    300: '#2c2c2c',
    350: '#343434',
    400: '#3b3b3b',
    450: '#434343',
    500: '#4a4a4a',
    550: '#5c5c5c',
    600: '#6e6e6e',
    650: '#808080',
    700: '#929292',
    750: '#a5a5a5',
    800: '#b7b7b7',
    850: '#c9c9c9',
    900: '#dbdbdb',
    950: '#ededed',
  },
  base: {
    white: '#FFFFFF',
    black: '#000000',
  },
} as const;

/**
 * Type for quartz color palette.
 */
export type QuartzColor = typeof colors.quartz;

/**
 * Type for base colors.
 */
export type BaseColor = typeof colors.base;

/**
 * Gets a quartz color shade with type safety.
 *
 * @param shade - The shade number (50-950)
 * @returns Hexadecimal color string
 *
 * @example
 * ```tsx
 * getQuartzColor(500); // '#4a4a4a'
 * ```
 */
export function getQuartzColor(shade: keyof QuartzColor): string {
  return colors.quartz[shade];
}

/**
 * Gets a base color with type safety.
 *
 * @param name - The color name ('white' or 'black')
 * @returns Hexadecimal color string
 *
 * @example
 * ```tsx
 * getBaseColor('white'); // '#FFFFFF'
 * ```
 */
export function getBaseColor(name: keyof BaseColor): string {
  return colors.base[name];
}
