import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  animateOnInteraction?: boolean;
}

const variants = {
  base: 'text-white rounded-md transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:pointer-event-none',
  primary: 'bg-indigo-500 hover:bg-indigo-500/90',
  success: 'bg-green-500 hover:bg-green-500/90',
  info: 'bg-blue-500 hover:bg-blue-500/90',
  warning: 'bg-amber-500 hover:bg-amber-500/90',
  error: 'bg-red-500 hover:bg-red-500/90',
  small: 'px-2.5 py-1.5 text-xs',
  medium: 'px-3.5 py-2 text-sm',
  large: 'px-4 py-2 text-base',
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', size = 'medium', className, animateOnInteraction = true, disabled = false, ...rest }, ref) => {
    const classes = twMerge(clsx(variants.base, variants[color], variants[size], className));
    
    if (disabled) {
      return (
        <button
          className={classes}
          ref={ref}
          disabled
          {...rest}
        />
      );
    }
    
    if (animateOnInteraction) {
      return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={classes}
          ref={ref}
          {...rest}
        />
      );
    }
    
    return <button className={classes} ref={ref} {...rest} />;
  }
);

Button.displayName = 'Button';
