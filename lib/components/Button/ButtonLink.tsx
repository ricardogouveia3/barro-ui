import { motion } from 'framer-motion';
import { ButtonLinkProps } from './Button.types.ts';
import { buttonLikeComponentMotionProps } from '../../layout/Animation.tsx';

export function ButtonLink({ className = '', style, children, ...rest }: ButtonLinkProps) {
  return (
    <motion.a
      {...rest}
      className={className}
      style={style}
      {...buttonLikeComponentMotionProps}
    >
      {children}
    </motion.a>
  );
}
