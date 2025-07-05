import React, { useState, useEffect } from 'react';
import { ButtonProps } from './Button.types.ts';
import { ButtonLink } from './ButtonLink.tsx';
import { ButtonElement } from './ButtonElement.tsx';
import { ButtonToggle } from './ButtonToggle.tsx';
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
    ...rest
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
    if ('onMouseEnter' in rest && rest.onMouseEnter) {
      rest.onMouseEnter(undefined!);
    }
  };

  const handleMouseLeave = () => {
    setBgColor('transparent');
    setTextColor(defaultTextColor);
    if ('onMouseLeave' in rest && rest.onMouseLeave) {
      rest.onMouseLeave(undefined!);
    }
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

  if (rest.type === 'link') {
    const { href, ...linkProps } = rest;
    return (
      <ButtonLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center px-4 py-2 text-sm font-medium ${roundClass} hover-background default-border default-text-color ${className}`}
        style={{ ...style, backgroundColor: bgColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...linkProps}
      >
        {content}
      </ButtonLink>
    );
  }

  if (rest.type === 'toggle') {
    const { active, activeIcon, inactiveIcon, onClick, disabled } = rest;
    return (
      <ButtonToggle
        active={!!active}
        activeIcon={activeIcon}
        inactiveIcon={inactiveIcon}
        onClick={onClick}
        className={`hover-background ${className}`}
        style={{ ...style, backgroundColor: bgColor }}
        disabled={disabled}
      />
    );
  }

  if (rest.type === 'button') {
    const { htmlType, disabled, onClick, ...buttonProps } = rest;
    return (
      <ButtonElement
        type={htmlType ?? 'button'}
        disabled={disabled}
        onClick={onClick}
        className={`w-full rounded-lg px-5 py-3 text-center text-sm font-medium default-border ${roundClass} default-text-color hover-background ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        style={{ ...style, backgroundColor: bgColor }}
        {...(disabled ? {} : buttonLikeComponentMotionProps)}
        {...buttonProps}
      >
        {content}
      </ButtonElement>
    );
  }

  return null;
}
