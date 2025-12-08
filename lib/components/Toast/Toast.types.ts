import { ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

export interface ToastContextValue {
  toast: (props: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
}

export interface ToastProps extends Toast {
  onDismiss: (id: string) => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}
