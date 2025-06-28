import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ButtonProps } from './Button.types';
import { getContrastColor } from '../../utils/color.ts';
import { buttonLikeComponentMotionProps } from '../../layout/Animation.tsx';
import Icon from '../Icon/Icon.tsx';

export function Button(props: ButtonProps) {
  const {
    children,
    className = '',
    style,
    hoverColor,
    icon,
    iconPosition = 'right',
    iconClassnames = '',
    round,
    darkMode = true,
    type,
    variant,
    htmlType,
    disabled,
    onClick,
    href,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const [bgColor, setBgColor] = useState('transparent');
  const defaultTextColor = darkMode ? '#FFFFFF' : '#1A202C';
  const [textColor, setTextColor] = useState(defaultTextColor);

  useEffect(() => {
    setTextColor(defaultTextColor);
  }, [defaultTextColor]);

  const handleMouseEnter = () => {
    if (hoverColor) {
      setBgColor(hoverColor);
      setTextColor(getContrastColor(hoverColor));
    }
    onMouseEnter?.(undefined!);
  };

  const handleMouseLeave = () => {
    setBgColor('transparent');
    setTextColor(defaultTextColor);
    onMouseLeave?.(undefined!);
  };

  const roundClass = round
    ? {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      }[round]
    : 'rounded-lg';

  const ICON_SIZE_CLASS = 'w-5 h-5';

  const renderIcon = (position: 'left' | 'right') => {
    if (!icon || iconPosition !== position) return null;

    const baseClass = `${position === 'left' ? 'mr-1' : 'ml-1'} ${iconClassnames}`;

    if (typeof icon === 'string') {
      return (
        <Icon
          name={icon}
          variant={variant}
          className={`${baseClass} ${ICON_SIZE_CLASS}`}
          color={textColor}
        />
      );
    }

    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: `${baseClass} ${ICON_SIZE_CLASS}`,
        style: { color: textColor, width: '1.25rem', height: '1.25rem' },
      });
    }

    const IconComponent = icon as React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    return (
      <IconComponent
        className={`${baseClass} ${ICON_SIZE_CLASS}`}
        style={{ color: textColor, width: '1.25rem', height: '1.25rem' }}
      />
    );
  };

  const content = (
    <>
      {renderIcon('left')}
      <span style={{ color: textColor }}>{children}</span>
      {renderIcon('right')}
    </>
  );

  if (type === 'link') {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center px-4 py-2 text-sm font-medium ${roundClass} hover-background default-border default-text-color ${className}`}
        style={{ ...style, backgroundColor: bgColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...buttonLikeComponentMotionProps}
      >
        {content}
      </motion.a>
    );
  }

  if (type === 'toggle') {
    const IconComponent = props.icon;
    return (
      <motion.button
        onClick={onClick}
        aria-label="Toggle button"
        className={`default-background default-border hover-background default-text-color flex aspect-square items-center justify-center rounded-lg px-3 py-1 font-semibold sm:rounded-full ${className}`}
        {...{
          ...buttonLikeComponentMotionProps,
          whileTap: { scale: 0.95 },
        }}
      >
        {typeof IconComponent === 'string' ? (
          <img
            src={IconComponent}
            alt="Toggle icon"
            className="w-5 sm:w-4"
          />
        ) : (
          IconComponent && <IconComponent className="default-text-color w-4" />
        )}
      </motion.button>
    );
  }

  return (
    <motion.button
      type={htmlType ?? 'button'}
      disabled={disabled}
      onClick={onClick}
      className={`w-full rounded-lg px-5 py-3 text-center text-sm font-medium ${roundClass} default-text-color ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover-background default-border'
      }`}
      {...(disabled ? {} : buttonLikeComponentMotionProps)}
      style={style}
    >
      {content}
    </motion.button>
  );
}
