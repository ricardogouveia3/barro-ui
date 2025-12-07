import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { warnIf, errorIf, validateRequired, validateMutuallyExclusive } from './dev-warnings';

describe('dev-warnings', () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    process.env.NODE_ENV = 'development';
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  describe('warnIf', () => {
    it('should warn when condition is true in development', () => {
      warnIf(true, 'Test warning');
      expect(consoleWarnSpy).toHaveBeenCalledWith('[Barro UI] Test warning');
    });

    it('should not warn when condition is false', () => {
      warnIf(false, 'Test warning');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should not warn in production mode', () => {
      process.env.NODE_ENV = 'production';
      warnIf(true, 'Test warning');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });
  });

  describe('errorIf', () => {
    it('should error when condition is true in development', () => {
      errorIf(true, 'Test error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('[Barro UI] Test error');
    });

    it('should not error when condition is false', () => {
      errorIf(false, 'Test error');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should not error in production mode', () => {
      process.env.NODE_ENV = 'production';
      errorIf(true, 'Test error');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });

  describe('validateRequired', () => {
    it('should warn when value is undefined', () => {
      validateRequired(undefined, 'testProp', 'TestComponent');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "[Barro UI] TestComponent: prop 'testProp' is required but was not provided.",
      );
    });

    it('should warn when value is null', () => {
      validateRequired(null, 'testProp', 'TestComponent');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "[Barro UI] TestComponent: prop 'testProp' is required but was not provided.",
      );
    });

    it('should not warn when value is provided', () => {
      validateRequired('value', 'testProp', 'TestComponent');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should not warn when value is 0', () => {
      validateRequired(0, 'testProp', 'TestComponent');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should not warn when value is empty string', () => {
      validateRequired('', 'testProp', 'TestComponent');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should not warn when value is false', () => {
      validateRequired(false, 'testProp', 'TestComponent');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });
  });

  describe('validateMutuallyExclusive', () => {
    it('should warn when multiple exclusive props are provided', () => {
      validateMutuallyExclusive({ src: 'image.png', name: 'icon' }, ['src', 'name'], 'Icon');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        '[Barro UI] Icon: only one of [src, name] should be provided. Found: src, name',
      );
    });

    it('should not warn when only one prop is provided', () => {
      validateMutuallyExclusive({ src: 'image.png' }, ['src', 'name'], 'Icon');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should not warn when no props are provided', () => {
      validateMutuallyExclusive({}, ['src', 'name'], 'Icon');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it('should handle more than two mutually exclusive props', () => {
      validateMutuallyExclusive({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c', 'd'], 'TestComponent');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        '[Barro UI] TestComponent: only one of [a, b, c, d] should be provided. Found: a, b, c',
      );
    });
  });
});
