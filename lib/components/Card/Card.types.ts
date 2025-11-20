import type { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  containerClassName?: string;
  loading?: boolean;
  animatedBorder?: boolean;
};

export type CardSpinnerProps = {
  isLoading: boolean;
};
