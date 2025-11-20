import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * Utilitário para fazer merge de classes CSS de forma segura.
 * Remove conflitos entre classes Tailwind CSS e combina classes condicionais.
 *
 * @param inputs - Classes CSS ou condições para classes
 * @returns String de classes combinadas e otimizadas
 *
 * @example
 * ```tsx
 * cn('base-class', isActive && 'active', customClass)
 * // Resultado: "base-class active custom-class"
 * ```
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'px-2') // Remove px-4 e mantém px-2
 * // Resultado: "py-2 px-2"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
