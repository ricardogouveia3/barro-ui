import { motion } from 'framer-motion'
import type { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const AnimatedButton = ({
                                 children,
                                 variant = 'primary',
                                 onClick
                               }: AnimatedButtonProps) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-lg font-medium ${
        variant === 'primary'
          ? 'bg-amber-600 text-white hover:bg-amber-700'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}