import type { IconProps } from '../Icon/Icon.types';
import type { ReactNode, CSSProperties, MouseEventHandler } from 'react';

export type CommonButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverColor?: string;
  icon?: IconProps['name'] | IconProps['icon'];
  iconPosition?: 'left' | 'right';
  iconClassnames?: string;
  round?: 'sm' | 'md' | 'lg' | 'full';
  darkMode?: boolean;
};

export type ButtonAsButton = {
  type: 'button';
  htmlType?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonAsLink = {
  type: 'link';
  href: string;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonAsToggle = {
  type: 'toggle';
  onClick: () => void;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
};

export type ButtonProps = CommonButtonProps & (ButtonAsButton | ButtonAsLink | ButtonAsToggle);
