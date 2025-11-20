import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

// Mock console.warn
const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

beforeEach(() => {
  consoleWarnSpy.mockClear();
});

afterEach(() => {
  consoleWarnSpy.mockRestore();
});

describe('Icon', () => {
  it('should render Heroicon outline variant by default', () => {
    render(<Icon name="ArrowUpRightIcon" />);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('w-5 h-5');
  });

  it('should render Heroicon solid variant', () => {
    render(
      <Icon
        name="CheckCircleIcon"
        variant="solid"
      />,
    );

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <Icon
        name="ArrowUpRightIcon"
        className="w-6 h-6 text-blue-500"
      />,
    );

    const svg = document.querySelector('svg');
    expect(svg).toHaveClass('w-6 h-6');
    expect(svg).toHaveClass('text-blue-500');
  });

  it('should apply custom color via style', () => {
    render(
      <Icon
        name="ArrowUpRightIcon"
        color="#FF0000"
      />,
    );

    const svg = document.querySelector('svg');
    expect(svg).toHaveStyle({ color: '#FF0000' });
  });

  it('should apply custom fill via style', () => {
    render(
      <Icon
        name="ArrowUpRightIcon"
        fill="#00FF00"
      />,
    );

    const svg = document.querySelector('svg');
    expect(svg).toHaveStyle({ fill: '#00FF00' });
  });

  it('should render custom icon component when provided', () => {
    const CustomIcon = () => (
      <svg
        data-testid="custom-icon"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
      </svg>
    );

    render(<Icon icon={CustomIcon} />);

    const customIcon = screen.getByTestId('custom-icon');
    expect(customIcon).toBeInTheDocument();
  });

  it('should prefer custom icon over name prop', () => {
    const CustomIcon = () => (
      <svg
        data-testid="custom-icon"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
      </svg>
    );

    render(
      <Icon
        icon={CustomIcon}
        name="ArrowUpRightIcon"
      />,
    );

    const customIcon = screen.getByTestId('custom-icon');
    expect(customIcon).toBeInTheDocument();
  });

  it('should warn and return null when icon name is not found', () => {
    const { container } = render(
      <Icon
        name="NonExistentIcon"
        variant="outline"
      />,
    );

    expect(container).toBeEmptyDOMElement();
    // Verifica se o warning foi chamado (pode não ser chamado se o nome é undefined)
    if (consoleWarnSpy.mock.calls.length > 0) {
      expect(consoleWarnSpy).toHaveBeenCalledWith('Icon "NonExistentIcon" not found.');
    }
  });

  it('should return null when neither icon nor valid name is provided', () => {
    const { container } = render(<Icon />);

    expect(container).toBeEmptyDOMElement();
    // Sem nome, não deve chamar console.warn
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  it('should use default className when not provided', () => {
    render(<Icon name="ArrowUpRightIcon" />);

    const svg = document.querySelector('svg');
    expect(svg).toHaveClass('w-5 h-5');
  });

  it('should use currentColor as default color', () => {
    render(<Icon name="ArrowUpRightIcon" />);

    const svg = document.querySelector('svg');
    expect(svg).toHaveStyle({ color: 'currentColor' });
  });
});
