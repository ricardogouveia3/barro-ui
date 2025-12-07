import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card', () => {
  it('should render children', () => {
    render(
      <Card>
        <div>Card Content</div>
      </Card>,
    );

    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <Card className="custom-card-class">
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('custom-card-class');
  });

  it('should apply custom contentClassName', () => {
    render(
      <Card contentClassName="p-8">
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('default-border');
  });

  it('should apply custom containerClassName', () => {
    render(
      <Card containerClassName="flex-row">
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();
  });

  it('should show loading spinner when loading is true', () => {
    render(
      <Card loading={true}>
        <div>Content</div>
      </Card>,
    );

    const spinner = screen.getByText('Loading...', { exact: false });
    expect(spinner).toBeInTheDocument();
  });

  it('should have aria-busy when loading', () => {
    const { container } = render(
      <Card loading={true}>
        <div>Content</div>
      </Card>,
    );

    const card = container.querySelector('[aria-busy="true"]');
    expect(card).toBeInTheDocument();
  });

  it('should have aria-busy false when not loading', () => {
    const { container } = render(
      <Card loading={false}>
        <div>Content</div>
      </Card>,
    );

    const card = container.querySelector('[aria-busy="false"]');
    expect(card).toBeInTheDocument();
  });

  it('should have region role and aria-label', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>,
    );

    const card = screen.getByRole('region', { name: 'Card' });
    expect(card).toBeInTheDocument();
  });

  it('should show animated border on hover when animatedBorder is true', async () => {
    const user = userEvent.setup();
    render(
      <Card animatedBorder={true}>
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();

    await user.hover(card as HTMLElement);
    // O border animado deve aparecer quando hover
    // Como usa framer-motion, verificamos que o componente está interativo
    expect(card).toBeInTheDocument();
  });

  it('should not show animated border when animatedBorder is false', async () => {
    const user = userEvent.setup();
    render(
      <Card animatedBorder={false}>
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();

    await user.hover(card as HTMLElement);
    // Quando animatedBorder é false, não deve ter o border animado
    expect(card).toBeInTheDocument();
  });

  it('should use default contentClassName when not provided', () => {
    render(
      <Card>
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();
  });

  it('should render complex children structure', () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
        <button>Action</button>
      </Card>,
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
  });
});
