import type { HexColor, RgbColor } from '../types/common.types';

/**
 * Validates if a string is a valid hexadecimal color.
 * 
 * @param hex - String to validate
 * @returns True if the string is a valid hex color
 * 
 * @example
 * ```tsx
 * isValidHexColor('#fff'); // true
 * isValidHexColor('#ffffff'); // true
 * isValidHexColor('ffffff'); // false
 * isValidHexColor('#gggggg'); // false
 * ```
 */
export function isValidHexColor(hex: string): hex is HexColor {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

/**
 * Converts a hexadecimal color to RGB values.
 * 
 * @param hex - Hexadecimal color string
 * @returns RGB color object with r, g, b values (0-255)
 * 
 * @example
 * ```tsx
 * hexToRgb('#ffffff'); // { r: 255, g: 255, b: 255 }
 * hexToRgb('#000000'); // { r: 0, g: 0, b: 0 }
 * ```
 */
export function hexToRgb(hex: HexColor): RgbColor {
    // Remove # if present
    const cleanHex = hex.replace('#', '');

    // Handle 3-character hex codes
    const fullHex =
        cleanHex.length === 3
            ? cleanHex
                .split('')
                .map((char) => char + char)
                .join('')
            : cleanHex;

    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);

    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 0, g: 0, b: 0 };
}

/**
 * Converts RGB values to hexadecimal color string.
 * 
 * @param rgb - RGB color object
 * @returns Hexadecimal color string
 * 
 * @example
 * ```tsx
 * rgbToHex({ r: 255, g: 255, b: 255 }); // '#ffffff'
 * rgbToHex({ r: 0, g: 0, b: 0 }); // '#000000'
 * ```
 */
export function rgbToHex(rgb: RgbColor): HexColor {
    const toHex = (n: number) => {
        const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}` as HexColor;
}

/**
 * Calculates the relative luminance of a color according to WCAG standards.
 * 
 * @param hex - Hexadecimal color string
 * @returns Relative luminance value (0-1)
 */
function getLuminance(hex: HexColor): number {
    const rgb = hexToRgb(hex);
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
        const v = val / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculates the contrast ratio between two colors according to WCAG standards.
 * 
 * @param color1 - First hexadecimal color
 * @param color2 - Second hexadecimal color
 * @returns Contrast ratio (1-21)
 * 
 * @example
 * ```tsx
 * getContrastRatio('#ffffff', '#000000'); // 21 (maximum contrast)
 * getContrastRatio('#ffffff', '#ffffff'); // 1 (no contrast)
 * ```
 * 
 * @see https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 */
export function getContrastRatio(color1: HexColor, color2: HexColor): number {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Darkens a color by a given percentage.
 * 
 * @param hex - Hexadecimal color string
 * @param percent - Percentage to darken (0-100)
 * @returns Darkened hexadecimal color
 * 
 * @example
 * ```tsx
 * darken('#ffffff', 50); // '#808080' (50% darker)
 * darken('#ff0000', 25); // '#bf0000' (25% darker red)
 * ```
 */
export function darken(hex: HexColor, percent: number): HexColor {
    const rgb = hexToRgb(hex);
    const factor = 1 - Math.max(0, Math.min(100, percent)) / 100;

    return rgbToHex({
        r: rgb.r * factor,
        g: rgb.g * factor,
        b: rgb.b * factor,
    });
}

/**
 * Lightens a color by a given percentage.
 * 
 * @param hex - Hexadecimal color string
 * @param percent - Percentage to lighten (0-100)
 * @returns Lightened hexadecimal color
 * 
 * @example
 * ```tsx
 * lighten('#000000', 50); // '#808080' (50% lighter)
 * lighten('#ff0000', 25); // '#ff4040' (25% lighter red)
 * ```
 */
export function lighten(hex: HexColor, percent: number): HexColor {
    const rgb = hexToRgb(hex);
    const factor = Math.max(0, Math.min(100, percent)) / 100;

    return rgbToHex({
        r: rgb.r + (255 - rgb.r) * factor,
        g: rgb.g + (255 - rgb.g) * factor,
        b: rgb.b + (255 - rgb.b) * factor,
    });
}

/**
 * Checks if a color meets WCAG AA contrast requirements against a background.
 * 
 * @param foreground - Foreground color
 * @param background - Background color
 * @param level - WCAG level ('AA' or 'AAA')
 * @param size - Text size ('normal' or 'large')
 * @returns True if contrast requirement is met
 * 
 * @example
 * ```tsx
 * meetsContrastRequirement('#000000', '#ffffff', 'AA', 'normal'); // true
 * meetsContrastRequirement('#777777', '#ffffff', 'AAA', 'normal'); // false
 * ```
 */
export function meetsContrastRequirement(
    foreground: HexColor,
    background: HexColor,
    level: 'AA' | 'AAA' = 'AA',
    size: 'normal' | 'large' = 'normal',
): boolean {
    const ratio = getContrastRatio(foreground, background);

    const requirements = {
        AA: { normal: 4.5, large: 3 },
        AAA: { normal: 7, large: 4.5 },
    };

    return ratio >= requirements[level][size];
}
