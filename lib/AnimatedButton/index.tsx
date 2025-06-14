import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

export const AnimatedButton = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
}: AnimatedButtonProps) => {
  const getButtonStyles = () => {
    if (disabled) {
      return 'bg-gray-100 text-gray-400 cursor-not-allowed';
    }

    return variant === 'primary'
      ? 'bg-amber-400 text-white hover:bg-amber-700 cursor-pointer'
      : 'border-amber-700 border-2 text-amber-700 hover:bg-amber-700 hover:text-gray-900' +
          ' cursor-pointer';
  };

  return (
    <motion.button
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${getButtonStyles()}`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={disabled ? {} : { type: 'spring', stiffness: 400, damping: 17 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

AnimatedButton.displayName = 'AnimatedButton';

