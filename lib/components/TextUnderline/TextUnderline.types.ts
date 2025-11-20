/**
 * Properties for the TextUnderline component.
 */
export type TextUnderlineProps = {
  /**
   * The URL the link points to.
   */
  href: string;
  /**
   * The text content to display.
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes to apply to the link.
   */
  className?: string;
  /**
   * Whether the link should appear in a hovered/focused state.
   * @default false
   */
  isHoveredOrFocused?: boolean;
};
