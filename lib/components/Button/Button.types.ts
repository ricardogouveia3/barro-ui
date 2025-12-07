import React from 'react';
import type { HexColor, IconName } from '../../types/common.types';

/**
 * Base properties shared by all button variants.
 */
export type BaseButtonProps = {
  /**
   * Controls the border radius of the button.
   * @default 'medium'
   */
  rounded?: 'none' | 'medium' | 'full';
  /**
   * Whether to enable the animated border effect.
   * @default false
   */
  animatedBorder?: boolean;
  /**
   * Custom hover color in hex format.
   */
  hoverColor?: HexColor;
};

/**
 * Properties for the button icon.
 */
export type ButtonIconProps = {
  /**
   * Name of the HeroIcon to display, or a custom SVG component.
   */
  name?: IconName | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /**
   * URL of an image to use as the icon.
   */
  src?: string;
  /**
   * Color of the icon.
   */
  color?: string;
  /**
   * Fill color of the icon.
   */
  fill?: string;
  /**
   * Variant of the icon (solid or outline).
   */
  variant?: 'solid' | 'outline';
  /**
   * Position of the icon relative to the text.
   */
  position?: 'left' | 'right';
};

/**
 * Properties for a standard button element.
 */
/**
 * Properties for a standard button element.
 */
export type NativeButtonProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'type'> & {
    /**
     * Icon configuration.
     */
    icon?: ButtonIconProps;
    /**
     * Whether the button should take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
  };

/**
 * Properties for a link button (renders as an anchor tag).
 */
export type ButtonLinkProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<'a'>, 'type'> & {
    /**
     * The URL the link points to.
     */
    link: string;
    /**
     * Icon configuration.
     */
    icon?: ButtonIconProps;
    /**
     * Whether the button should take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Whether the link is disabled.
     * @default false
     */
    disabled?: boolean;
  };

/**
 * Properties for a toggle button.
 */
export type ToggleButtonProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick' | 'type'> & {
    /**
     * Callback function when the toggle is clicked.
     */
    onClick?: () => void;
    /**
     * Icon configuration (position is fixed).
     */
    icon?: Omit<ButtonIconProps, 'position'>;
  };

/**
 * Union type for all button variants.
 */
export type ButtonProps =
  | ({ type: 'button' } & NativeButtonProps)
  | ({ type: 'toggle' } & ToggleButtonProps)
  | ({ type: 'link' } & ButtonLinkProps);
