import React, { ReactNode } from 'react';

/**
 * Properties for the Card component.
 */
export type CardProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * The content to be rendered inside the card.
   */
  children: ReactNode;
  /**
   * Custom class name for the inner content wrapper.
   */
  contentClassName?: string;
  /**
   * Custom class name for the outer container wrapper.
   */
  containerClassName?: string;
  /**
   * Whether the card is in a loading state.
   * @default false
   */
  loading?: boolean;
  /**
   * Whether to enable the animated border effect.
   * @default true
   */
  animatedBorder?: boolean;
};

/**
 * Properties for the internal CardSpinner component.
 */
export type CardSpinnerProps = {
  /**
   * Whether the spinner is currently loading.
   */
  isLoading: boolean;
};
