import React from 'react';

export type BaseButtonProps = {
  rounded?: 'none' | 'medium' | 'full';
  disabled?: boolean;
  animatedBorder?: boolean;
  hoverColor?: string;
};

export type ButtonIconProps = {
  name?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  src?: string;
  color?: string;
  fill?: string;
  variant?: 'solid' | 'outline';
  position?: 'left' | 'right';
};

export type NativeButtonProps = BaseButtonProps & {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: ButtonIconProps;
  fullWidth?: boolean;
};

export type ButtonLinkProps = BaseButtonProps & {
  children: React.ReactNode;
  link: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  icon?: ButtonIconProps;
  fullWidth?: boolean;
};

export type ToggleButtonProps = BaseButtonProps & {
  onClick?: () => void;
  icon?: Omit<ButtonIconProps, 'position'>;
};

export type ButtonProps =
  | ({ type: 'button' } & NativeButtonProps)
  | ({ type: 'toggle' } & ToggleButtonProps)
  | ({ type: 'link' } & ButtonLinkProps);
