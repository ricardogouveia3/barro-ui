import type { Meta, StoryObj } from '@storybook/react';
import PostItem from './PostItem.tsx';

const meta: Meta<typeof PostItem> = {
  title: 'Components/PostsItem',
  component: PostItem,
  tags: ['autodocs'],
  args: {
    title: 'Exploring Animation Patterns with Framer Motion',
    description:
      'This post dives deep into animation choreography in complex React apps using Framer Motion, including layout transitions, shared element animations, and scroll-based reveals.',
    link: '/',
    imgSrc: 'https://picsum.photos/800',
    imgAlt: 'A generic preview image related to animation and technology.',
    animatedBorder: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the post or article.',
    },
    description: {
      control: 'text',
      description: 'A short description or summary of the post.',
    },
    link: {
      control: 'text',
      description: 'URL to navigate when the post item is clicked.',
    },
    imgSrc: {
      control: 'text',
      description: 'Image source URL shown on the left (or top on mobile).',
    },
    imgAlt: {
      control: 'text',
      description: 'Alternative text used for the image (accessibility).',
    },
    animatedBorder: {
      control: 'boolean',
      description: 'If true, shows an animated border on hover or focus.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostItem>;

export const Default: Story = {};

export const WithAnimatedBorder: Story = {
  args: {
    animatedBorder: true,
    description:
      'This post dives deep into animation choreography in complex React apps using Framer Motion, including layout transitions, shared element animations, and scroll-based reveals.',
  },
};
