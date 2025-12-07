import { cn } from './cn';

type VariantProps<T> = {
  [K in keyof T]: Record<string, string>;
};

type VariantConfig<T> = {
  variants?: T;
  defaultVariants?: {
    [K in keyof T]?: keyof T[K];
  };
  compoundVariants?: Array<
    {
      [K in keyof T]?: keyof T[K] | Array<keyof T[K]>;
    } & {
      className: string;
    }
  >;
};

/**
 * Helper type to extract variant props from a variant function.
 *
 * @example
 * ```tsx
 * const buttonVariants = variants('base', { ... });
 * type ButtonVariantProps = VariantPropsOf<typeof buttonVariants>;
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VariantPropsOf<T extends (...args: any) => any> = NonNullable<Parameters<T>[0]>;

/**
 * Type for compound variants with better type safety.
 */
export type CompoundVariant<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]?: T[K] extends Record<string, any> ? keyof T[K] | Array<keyof T[K]> : never;
} & {
  className: string;
};

/**
 * Utility for creating type-safe component variants, similar to CVA (Class Variance Authority).
 * Allows defining base styles, variants, and compound variants.
 *
 * @param base - The base class names applied to all variants
 * @param config - Configuration object containing variants, defaultVariants, and compoundVariants
 * @returns A function that accepts variant props and returns the combined class string
 *
 * @example
 * ```tsx
 * const buttonVariants = variants('base-class', {
 *   variants: {
 *     size: { small: 'p-2', large: 'p-4' },
 *     color: { primary: 'bg-blue-500', secondary: 'bg-gray-500' }
 *   },
 *   defaultVariants: {
 *     size: 'small',
 *     color: 'primary'
 *   }
 * });
 *
 * // Usage
 * const className = buttonVariants({ size: 'large', color: 'secondary' });
 * ```
 */
export function variants<T extends VariantProps<T>>(base: string, config: VariantConfig<T> = {}) {
  return (props?: { [K in keyof T]?: keyof T[K] } & { className?: string }) => {
    const classNames = [base];
    const { variants, defaultVariants, compoundVariants } = config;

    // Merge props with default variants
    const currentVariants = { ...defaultVariants, ...props };

    // Apply variant styles
    if (variants) {
      Object.entries(currentVariants).forEach(([key, value]) => {
        const variantKey = key as keyof T;
        const variantValue = value as string;

        if (variants[variantKey] && variants[variantKey][variantValue]) {
          classNames.push(variants[variantKey][variantValue]);
        }
      });
    }

    // Apply compound variants
    if (compoundVariants) {
      compoundVariants.forEach((compound) => {
        const { className, ...conditions } = compound;
        const matches = Object.entries(conditions).every(([key, value]) => {
          const currentVal = (currentVariants as Record<string, unknown>)[key];
          if (Array.isArray(value)) {
            return value.includes(currentVal as string);
          }
          return currentVal === value;
        });

        if (matches) {
          classNames.push(className);
        }
      });
    }

    // Add custom className
    if (props?.className) {
      classNames.push(props.className);
    }

    return cn(...classNames);
  };
}
