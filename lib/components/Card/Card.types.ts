import React, { ReactNode } from 'react';

export type CardProps = React.ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
  loading?: boolean;
  animatedBorder?: boolean;
};

export type CardSpinnerProps = {
  isLoading: boolean;
};
