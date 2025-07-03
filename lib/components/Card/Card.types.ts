import type { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
  containerClassnames?: string;
  loading?: boolean;
  animatedBorder?: boolean;
};

export type CardSpinnerProps = {
  isLoading: boolean;
};
