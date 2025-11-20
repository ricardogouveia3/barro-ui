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
          const currentVal = currentVariants[key as keyof T];
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
