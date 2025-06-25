import type { Meta, StoryObj } from '@storybook/react';
import TextUnderline from './TextUnderline';

const meta: Meta<typeof TextUnderline> = {
  title: 'Components/TextUnderline',
  component: TextUnderline,
  tags: ['autodocs'],
  args: {
    href: 'https://barro.rcrd.dev',
    children: 'Visite o Barro UI',
    isHoveredOrFocused: false,
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'URL para onde o link aponta',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do link',
    },
    isHoveredOrFocused: {
      control: 'boolean',
      description: 'Se simula hover/focus para destacar o underline',
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

export const WithHoverEffect: Story = {
  args: {
    isHoveredOrFocused: true,
  },
};
