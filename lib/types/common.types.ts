import React from 'react';

/**
 * Common size variants used across components.
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Border radius variants.
 */
export type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

/**
 * Common component variants.
 */
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Polymorphic component props that allow rendering as different HTML elements.
 *
 * @example
 * ```tsx
 * type BoxProps<E extends React.ElementType = 'div'> = PolymorphicComponentProps<E> & {
 *   padding?: string;
 * };
 *
 * function Box<E extends React.ElementType = 'div'>({ as, ...props }: BoxProps<E>) {
 *   const Component = as || 'div';
 *   return <Component {...props} />;
 * }
 *
 * // Usage
 * <Box as="section" padding="4" />
 * ```
 */
export type PolymorphicComponentProps<E extends React.ElementType> = {
  as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as'>;

/**
 * Helper type to extract variant props from a variant function.
 *
 * @example
 * ```tsx
 * const buttonVariants = variants('base', { ... });
 * type ButtonVariantProps = VariantProps<typeof buttonVariants>;
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VariantProps<T extends (...args: any) => any> = NonNullable<Parameters<T>[0]>;

/**
 * Type-safe hexadecimal color string.
 * Ensures the string starts with # and contains valid hex characters.
 */
export type HexColor = `#${string}`;

/**
 * Type for Heroicons icon names (both solid and outline variants).
 */
export type IconName =
  | keyof typeof import('@heroicons/react/24/solid')
  | keyof typeof import('@heroicons/react/24/outline');

/**
 * RGB color representation.
 */
export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

/**
 * Common spacing values.
 */
export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
