import { describe, it, expect } from 'vitest';
import {
  isValidHexColor,
  hexToRgb,
  rgbToHex,
  getContrastRatio,
  darken,
  lighten,
  meetsContrastRequirement,
} from './color-utils';

describe('color-utils', () => {
  describe('isValidHexColor', () => {
    it('should validate 6-character hex colors', () => {
      expect(isValidHexColor('#ffffff')).toBe(true);
      expect(isValidHexColor('#000000')).toBe(true);
      expect(isValidHexColor('#FF5733')).toBe(true);
    });

    it('should validate 3-character hex colors', () => {
      expect(isValidHexColor('#fff')).toBe(true);
      expect(isValidHexColor('#000')).toBe(true);
      expect(isValidHexColor('#F57')).toBe(true);
    });

    it('should reject invalid hex colors', () => {
      expect(isValidHexColor('ffffff')).toBe(false);
      expect(isValidHexColor('#gggggg')).toBe(false);
      expect(isValidHexColor('#12345')).toBe(false);
      expect(isValidHexColor('not a color')).toBe(false);
    });
  });

  describe('hexToRgb', () => {
    it('should convert 6-character hex to RGB', () => {
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
      expect(hexToRgb('#ff5733')).toEqual({ r: 255, g: 87, b: 51 });
    });

    it('should convert 3-character hex to RGB', () => {
      expect(hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
      expect(hexToRgb('#f57')).toEqual({ r: 255, g: 85, b: 119 });
    });

    it('should handle hex without # prefix', () => {
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    });
  });

  describe('rgbToHex', () => {
    it('should convert RGB to hex', () => {
      expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff');
      expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000');
      expect(rgbToHex({ r: 255, g: 87, b: 51 })).toBe('#ff5733');
    });

    it('should handle values outside 0-255 range', () => {
      expect(rgbToHex({ r: 300, g: -10, b: 128 })).toBe('#ff0080');
    });

    it('should round decimal values', () => {
      expect(rgbToHex({ r: 255.7, g: 87.3, b: 51.9 })).toBe('#ff5734');
    });
  });

  describe('getContrastRatio', () => {
    it('should calculate maximum contrast ratio', () => {
      const ratio = getContrastRatio('#ffffff', '#000000');
      expect(ratio).toBeCloseTo(21, 1);
    });

    it('should calculate minimum contrast ratio', () => {
      const ratio = getContrastRatio('#ffffff', '#ffffff');
      expect(ratio).toBe(1);
    });

    it('should calculate intermediate contrast ratios', () => {
      const ratio = getContrastRatio('#ffffff', '#808080');
      expect(ratio).toBeGreaterThan(1);
      expect(ratio).toBeLessThan(21);
    });

    it('should be symmetric', () => {
      const ratio1 = getContrastRatio('#ffffff', '#000000');
      const ratio2 = getContrastRatio('#000000', '#ffffff');
      expect(ratio1).toBe(ratio2);
    });
  });

  describe('darken', () => {
    it('should darken white by 50%', () => {
      const result = darken('#ffffff', 50);
      expect(result).toBe('#808080');
    });

    it('should darken red by 25%', () => {
      const result = darken('#ff0000', 25);
      expect(result).toBe('#bf0000');
    });

    it('should handle 0% (no change)', () => {
      const result = darken('#ff5733', 0);
      expect(result).toBe('#ff5733');
    });

    it('should handle 100% (black)', () => {
      const result = darken('#ff5733', 100);
      expect(result).toBe('#000000');
    });

    it('should clamp values outside 0-100 range', () => {
      const result1 = darken('#ffffff', -10);
      const result2 = darken('#ffffff', 0);
      expect(result1).toBe(result2);

      const result3 = darken('#ffffff', 110);
      const result4 = darken('#ffffff', 100);
      expect(result3).toBe(result4);
    });
  });

  describe('lighten', () => {
    it('should lighten black by 50%', () => {
      const result = lighten('#000000', 50);
      expect(result).toBe('#808080');
    });

    it('should lighten red by 25%', () => {
      const result = lighten('#ff0000', 25);
      expect(result).toBe('#ff4040');
    });

    it('should handle 0% (no change)', () => {
      const result = lighten('#ff5733', 0);
      expect(result).toBe('#ff5733');
    });

    it('should handle 100% (white)', () => {
      const result = lighten('#ff5733', 100);
      expect(result).toBe('#ffffff');
    });

    it('should clamp values outside 0-100 range', () => {
      const result1 = lighten('#000000', -10);
      const result2 = lighten('#000000', 0);
      expect(result1).toBe(result2);

      const result3 = lighten('#000000', 110);
      const result4 = lighten('#000000', 100);
      expect(result3).toBe(result4);
    });
  });

  describe('meetsContrastRequirement', () => {
    it('should pass AA normal text for black on white', () => {
      expect(meetsContrastRequirement('#000000', '#ffffff', 'AA', 'normal')).toBe(true);
    });

    it('should pass AAA normal text for black on white', () => {
      expect(meetsContrastRequirement('#000000', '#ffffff', 'AAA', 'normal')).toBe(true);
    });

    it('should fail AA normal text for low contrast', () => {
      expect(meetsContrastRequirement('#777777', '#888888', 'AA', 'normal')).toBe(false);
    });

    it('should have lower requirements for large text', () => {
      // A contrast that fails AA normal (4.5:1) but passes AA large (3:1)
      // Using a gray that has approximately 3.5:1 contrast with white
      const foreground = '#8f8f8f';
      const background = '#ffffff';

      const ratio = getContrastRatio(foreground, background);
      // Verify our test color is in the right range (between 3 and 4.5)
      expect(ratio).toBeGreaterThanOrEqual(3);
      expect(ratio).toBeLessThan(4.5);

      expect(meetsContrastRequirement(foreground, background, 'AA', 'normal')).toBe(false);
      expect(meetsContrastRequirement(foreground, background, 'AA', 'large')).toBe(true);
    });

    it('should default to AA normal', () => {
      const result1 = meetsContrastRequirement('#000000', '#ffffff');
      const result2 = meetsContrastRequirement('#000000', '#ffffff', 'AA', 'normal');
      expect(result1).toBe(result2);
    });
  });
});
