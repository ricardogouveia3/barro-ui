import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps =
  | ({ type: 'button' } & NativeButtonProps)
  | ({ type: 'toggle' } & ToggleButtonProps)
  | ({ type: 'link' } & ButtonLinkProps);

export type NativeButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  animatedBorder?: boolean;
  rounded?: 'none' | 'medium' | 'full';
  hoverColor?: string;
  icon?: {
    position?: 'left' | 'right';
    name: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    color?: string;
    fill?: string;
    variant?: 'solid' | 'outline';
  };
};

export type ButtonLinkProps = {
  disabled?: boolean;
  animatedBorder?: boolean;
  children: ReactNode;
  rounded?: 'none' | 'medium' | 'full';
  link: string;
  hoverColor?: string;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  icon?: {
    position?: 'left' | 'right';
    name: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    color?: string;
    fill?: string;
    variant?: 'solid' | 'outline';
  };
};

export type ToggleButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  animatedBorder?: boolean;
  icon: {
    name: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    color?: string;
    fill?: string;
    variant?: 'solid' | 'outline';
  };
};
