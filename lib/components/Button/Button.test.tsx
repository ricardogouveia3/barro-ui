import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Button', () => {
  describe('Button type (NativeButton)', () => {
    it('should render button with children', () => {
      render(
        <Button type="button" onClick={vi.fn()}>
          Click me
        </Button>
      );
      
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Click me');
    });

    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(
        <Button type="button" onClick={handleClick}>
          Click me
        </Button>
      );
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled prop is true', () => {
      render(
        <Button type="button" onClick={vi.fn()} disabled={true}>
          Disabled Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).toHaveClass('cursor-not-allowed');
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(
        <Button type="button" onClick={handleClick} disabled={true}>
          Disabled
        </Button>
      );
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should apply fullWidth class when fullWidth is true', () => {
      render(
        <Button type="button" onClick={vi.fn()} fullWidth={true}>
          Full Width
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });

    it('should apply rounded classes correctly', () => {
      const { rerender } = render(
        <Button type="button" onClick={vi.fn()} rounded="full">
          Rounded Full
        </Button>
      );
      
      let button = screen.getByRole('button');
      expect(button).toHaveClass('rounded-full');

      rerender(
        <Button type="button" onClick={vi.fn()} rounded="none">
          Not Rounded
        </Button>
      );
      
      button = screen.getByRole('button');
      expect(button).not.toHaveClass('rounded-full');
      expect(button).not.toHaveClass('rounded-lg');
    });

    it('should use medium rounded by default', () => {
      render(
        <Button type="button" onClick={vi.fn()}>
          Default
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('rounded-lg');
    });

    it('should render icon on the left', () => {
      render(
        <Button
          type="button"
          onClick={vi.fn()}
          icon={{
            position: 'left',
            name: 'AcademicCapIcon',
            variant: 'outline',
          }}
        >
          With Icon
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      // Verifica que um SVG foi renderizado (o ícone)
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render icon on the right', () => {
      render(
        <Button
          type="button"
          onClick={vi.fn()}
          icon={{
            position: 'right',
            name: 'AcademicCapIcon',
            variant: 'outline',
          }}
        >
          With Icon
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render image as icon when src is provided', () => {
      render(
        <Button
          type="button"
          onClick={vi.fn()}
          icon={{
            position: 'left',
            src: 'https://example.com/icon.png',
          }}
        >
          With Image
        </Button>
      );
      
      const button = screen.getByRole('button');
      const img = button.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com/icon.png');
    });

    it('should apply custom hover color styles', () => {
      render(
        <Button type="button" onClick={vi.fn()} hoverColor="#FF5733">
          Custom Hover
        </Button>
      );
      
      const button = screen.getByRole('button');
      // Verifica que o estilo customizado foi aplicado
      expect(button).toHaveStyle({ '--custom-hover-bg': '#FF5733' });
    });

    it('should have type="button" attribute', () => {
      render(
        <Button type="button" onClick={vi.fn()}>
          Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Link type (ButtonLink)', () => {
    it('should render as link', () => {
      render(
        <Button type="link" link="/test">
          Link Button
        </Button>
      );
      
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
    });

    it('should open link in new tab', () => {
      render(
        <Button type="link" link="/external">
          External Link
        </Button>
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('should be disabled when disabled prop is true', () => {
      const { container } = render(
        <Button type="link" link="/test" disabled={true}>
          Disabled Link
        </Button>
      );
      
      const link = container.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(link).toHaveAttribute('tabIndex', '-1');
      expect(link).not.toHaveAttribute('href');
    });

    it('should apply fullWidth class when fullWidth is true', () => {
      render(
        <Button type="link" link="/test" fullWidth={true}>
          Full Width Link
        </Button>
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveClass('w-full');
    });
  });

  describe('Toggle type (ToggleButton)', () => {
    it('should render toggle button with icon', () => {
      render(
        <Button
          type="toggle"
          onClick={vi.fn()}
          icon={{
            name: 'AcademicCapIcon',
            variant: 'outline',
          }}
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-label', 'Toggle button');
    });

    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(
        <Button
          type="toggle"
          onClick={handleClick}
          icon={{
            name: 'AcademicCapIcon',
            variant: 'outline',
          }}
        />
      );
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled prop is true', () => {
      render(
        <Button
          type="toggle"
          onClick={vi.fn()}
          disabled={true}
          icon={{
            name: 'AcademicCapIcon',
            variant: 'outline',
          }}
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should return null when icon is not provided', () => {
      const { container } = render(
        <Button type="toggle" onClick={vi.fn()} />
      );
      
      expect(container).toBeEmptyDOMElement();
    });

    it('should render image as icon when src is provided', () => {
      render(
        <Button
          type="toggle"
          onClick={vi.fn()}
          icon={{
            src: 'https://example.com/icon.png',
          }}
        />
      );
      
      const button = screen.getByRole('button');
      const img = button.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com/icon.png');
    });
  });
});

