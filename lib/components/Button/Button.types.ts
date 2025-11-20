import React from 'react';

export type BaseButtonProps = {
  rounded?: 'none' | 'medium' | 'full';
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

export type NativeButtonProps = BaseButtonProps &
  React.ComponentPropsWithoutRef<'button'> & {
    icon?: ButtonIconProps;
    fullWidth?: boolean;
  };

export type ButtonLinkProps = BaseButtonProps &
  React.ComponentPropsWithoutRef<'a'> & {
    link: string;
    icon?: ButtonIconProps;
    fullWidth?: boolean;
  };

export type ToggleButtonProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> & {
    onClick?: () => void;
    icon?: Omit<ButtonIconProps, 'position'>;
  };

export type ButtonProps =
  | ({ type: 'button' } & NativeButtonProps)
  | ({ type: 'toggle' } & ToggleButtonProps)
  | ({ type: 'link' } & ButtonLinkProps);
