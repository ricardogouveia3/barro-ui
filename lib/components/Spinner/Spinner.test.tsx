import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('should render when isLoading is true', () => {
    render(<Spinner isLoading={true} />);
    
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('should not be visible when isLoading is false', () => {
    const { container } = render(<Spinner isLoading={false} />);
    
    const spinner = container.querySelector('.hidden');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('hidden');
  });

  it('should be visible when isLoading is true', () => {
    const { container } = render(<Spinner isLoading={true} />);
    
    const spinner = container.querySelector('.flex');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('flex');
  });

  it('should have accessible loading text', () => {
    render(<Spinner isLoading={true} />);
    
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass('sr-only');
  });

  it('should render SVG spinner element', () => {
    render(<Spinner isLoading={true} />);
    
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveClass('animate-spin');
  });
});

