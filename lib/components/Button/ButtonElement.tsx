import { motion } from 'framer-motion';
import { ButtonElementProps } from './Button.types.ts';
import { buttonLikeComponentMotionProps } from '../../layout/Animation.tsx';

export function ButtonElement({
  className = '',
  style,
  children,
  disabled,
  ...rest
}: ButtonElementProps) {
  return (
    <motion.button
      {...rest}
      className={className}
      style={style}
      disabled={disabled}
      {...(!disabled ? buttonLikeComponentMotionProps : {})}
    >
      {children}
    </motion.button>
  );
}
