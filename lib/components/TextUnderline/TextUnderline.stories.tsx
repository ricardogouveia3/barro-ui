import type { Meta, StoryObj } from '@storybook/react';
import TextUnderline from './TextUnderline';

const meta: Meta<typeof TextUnderline> = {
  title: 'Components/TextUnderline',
  component: TextUnderline,
  tags: ['autodocs'],
  args: {
    href: '/',
    children: 'Barro UI',
    isHoveredOrFocused: false,
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'URL the link points to.',
    },
    children: {
      control: 'text',
      description: 'Text content displayed inside the link.',
    },
    isHoveredOrFocused: {
      control: 'boolean',
      description: 'Simulates a hover/focus state to highlight the underline color.',
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextUnderline>;

export const Default: Story = {};

export const WithFixedHoverEffect: Story = {
  args: {
    isHoveredOrFocused: true,
  },
};
