import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * Utility to safely merge CSS classes.
 * Removes conflicts between Tailwind CSS classes and combines conditional classes.
 *
 * @param inputs - CSS classes or conditions for classes
 * @returns Combined and optimized class string
 *
 * @example
 * ```tsx
 * cn('base-class', isActive && 'active', customClass)
 * // Result: "base-class active custom-class"
 * ```
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'px-2') // Removes px-4 and keeps px-2
 * // Result: "py-2 px-2"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
