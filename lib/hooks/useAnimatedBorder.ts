import { useState } from 'react';

export interface UseAnimatedBorderOptions {
  /**
   * Whether the animated border should be enabled
   * @default true
   */
  animated?: boolean;
  /**
   * Additional condition to prevent showing border (e.g., loading state, disabled state)
   * When true, border will not show even if hovered/focused
   * @default false
   */
  disabled?: boolean;
}

export interface UseAnimatedBorderReturn {
  /**
   * Whether the border should be displayed
   * Only true when animated is true, showBorder is true, and disabled is false
   */
  showBorder: boolean;
  /**
   * Event handlers for hover and focus interactions
   */
  handlers: {
    onHoverStart: () => void;
    onHoverEnd: () => void;
    onFocus: () => void;
    onBlur: () => void;
  };
}

/**
 * Hook para gerenciar estado e handlers de border animado em componentes.
 * Centraliza a lógica de hover/focus que controla a exibição de borders animados.
 *
 * @param options - Opções de configuração do hook
 * @returns Objeto com `showBorder` e `handlers` para eventos de interação
 *
 * @example
 * ```tsx
 * const { showBorder, handlers } = useAnimatedBorder({ animated: true, disabled: false });
 *
 * return (
 *   <motion.div {...handlers}>
 *     {showBorder && <AnimatedBorder />}
 *   </motion.div>
 * );
 * ```
 */
export function useAnimatedBorder({
  animated = true,
  disabled = false,
}: UseAnimatedBorderOptions = {}): UseAnimatedBorderReturn {
  const [showBorder, setShowBorder] = useState(false);

  const handlers = {
    onHoverStart: () => {
      if (!disabled) {
        setShowBorder(true);
      }
    },
    onHoverEnd: () => {
      if (!disabled) {
        setShowBorder(false);
      }
    },
    onFocus: () => {
      if (!disabled) {
        setShowBorder(true);
      }
    },
    onBlur: () => {
      if (!disabled) {
        setShowBorder(false);
      }
    },
  };

  return {
    showBorder: animated && showBorder && !disabled,
    handlers,
  };
}
