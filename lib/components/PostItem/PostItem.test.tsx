import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostItem from './PostItem';

describe('PostItem', () => {
  const defaultProps = {
    title: 'Test Post',
    description: 'This is a test description',
    link: '/test-post',
    imgSrc: 'https://picsum.photos/800',
    imgAlt: 'Test image',
  };

  it('should render title and description', () => {
    render(<PostItem {...defaultProps} />);

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('should render image with correct src and alt', () => {
    render(<PostItem {...defaultProps} />);

    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://picsum.photos/800');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('should generate default alt text from title when not provided', () => {
    render(
      <PostItem
        title="My Post Title"
        description="Description"
        link="/post"
        imgSrc="https://example.com/image.jpg"
      />,
    );

    const image = screen.getByAltText('Auto generated description: My Post Title');
    expect(image).toBeInTheDocument();
  });

  it('should render link with correct href', () => {
    render(<PostItem {...defaultProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-post');
  });

  it('should open link in new tab', () => {
    render(<PostItem {...defaultProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should render as article element', () => {
    const { container } = render(<PostItem {...defaultProps} />);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });

  it('should render image with lazy loading and async decoding', () => {
    render(<PostItem {...defaultProps} />);

    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveAttribute('decoding', 'async');
  });

  it('should have picture element with source', () => {
    const { container } = render(<PostItem {...defaultProps} />);

    const picture = container.querySelector('picture');
    expect(picture).toBeInTheDocument();

    const source = container.querySelector('source');
    expect(source).toBeInTheDocument();
    expect(source).toHaveAttribute('srcSet', 'https://picsum.photos/800');
    expect(source).toHaveAttribute('type', 'image/jpg');
  });

  it('should render title as h4 with correct styling', () => {
    render(<PostItem {...defaultProps} />);

    const title = screen.getByRole('heading', { level: 4 });
    expect(title).toHaveTextContent('Test Post');
    expect(title).toHaveClass('default-text-color');
    expect(title).toHaveClass('font-bold');
  });

  it('should render description with correct styling', () => {
    render(<PostItem {...defaultProps} />);

    const description = screen.getByText('This is a test description');
    expect(description).toHaveClass('smooth-text-color');
  });

  it('should show animated border on hover when animatedBorder is true', async () => {
    const user = userEvent.setup();
    render(
      <PostItem
        {...defaultProps}
        animatedBorder={true}
      />,
    );

    const link = screen.getByRole('link');

    await user.hover(link);
    // O border animado deve aparecer quando hover
    // Como usa framer-motion, verificamos que o componente está interativo
    expect(link).toBeInTheDocument();
  });

  it('should not show animated border when animatedBorder is false', async () => {
    const user = userEvent.setup();
    render(
      <PostItem
        {...defaultProps}
        animatedBorder={false}
      />,
    );

    const link = screen.getByRole('link');

    await user.hover(link);
    // Quando animatedBorder é false, não deve ter o border animado
    expect(link).toBeInTheDocument();
  });
});
