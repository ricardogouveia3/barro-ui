import type { IconProps } from '../Icon/Icon.types';
import React, { ReactNode, CSSProperties, MouseEventHandler } from 'react';

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

export type ButtonToggleProps = {
  active: boolean;
  activeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  inactiveIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export type ButtonLinkProps = React.ComponentProps<'a'> & {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export type ButtonElementProps = React.ComponentProps<'button'> & {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};