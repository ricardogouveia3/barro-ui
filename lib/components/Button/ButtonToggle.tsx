import { motion } from 'framer-motion';
import { buttonLikeComponentMotionProps } from '../../layout/Animation.tsx';
import { ButtonToggleProps } from './Button.types.ts';

export function ButtonToggle(props: Readonly<ButtonToggleProps> & { style?: React.CSSProperties }) {
  const {
    active,
    activeIcon,
    inactiveIcon,
    onClick,
    className = '',
    style,
    disabled = false,
  } = props;
  const IconComponent = active ? activeIcon : inactiveIcon;

  return (
    <motion.button
      onClick={onClick}
      aria-label="Toggle button"
      className={`default-background cursor-pointer default-border hover-background default-text-color flex items-center justify-center aspect-square w-10 h-10 rounded-full font-semibold ${className}`}
      style={style}
      disabled={disabled}
      {...(!disabled ? { ...buttonLikeComponentMotionProps, whileTap: { scale: 0.95 } } : {})}
    >
      {typeof IconComponent === 'string' ? (
        <img
          src={IconComponent}
          alt="Toggle icon"
          className="w-5 h-5"
        />
      ) : (
        IconComponent && <IconComponent className="default-text-color w-5 h-5" />
      )}
    </motion.button>
  );
}
