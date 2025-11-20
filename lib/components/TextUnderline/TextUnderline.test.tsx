import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextUnderline from './TextUnderline';

describe('TextUnderline', () => {
  it('should render with href and children', () => {
    render(<TextUnderline href="/test">Click me</TextUnderline>);

    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveTextContent('Click me');
  });

  it('should open link in new tab with security attributes', () => {
    render(<TextUnderline href="/external">External Link</TextUnderline>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should apply custom className', () => {
    render(
      <TextUnderline
        href="/test"
        className="custom-class"
      >
        Link
      </TextUnderline>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });

  it('should apply decoration-cyan-500 when hovered', async () => {
    const user = userEvent.setup();
    render(<TextUnderline href="/test">Link</TextUnderline>);

    const link = screen.getByRole('link');

    await user.hover(link);
    expect(link).toHaveClass('decoration-cyan-500');

    await user.unhover(link);
    expect(link).not.toHaveClass('decoration-cyan-500');
  });

  it('should apply decoration-cyan-500 when isHoveredOrFocused is true', () => {
    render(
      <TextUnderline
        href="/test"
        isHoveredOrFocused={true}
      >
        Link
      </TextUnderline>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('decoration-cyan-500');
  });

  it('should have default styling classes', () => {
    render(<TextUnderline href="/test">Link</TextUnderline>);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('default-text-color');
    expect(link).toHaveClass('underline');
    expect(link).toHaveClass('decoration-wavy');
  });
});
