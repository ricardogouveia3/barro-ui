import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedButton } from './index';

const meta: Meta<typeof AnimatedButton> = {
  title: 'Components/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button component with smooth animations and multiple variants for enhanced user interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'The visual style variant of the button',
    },
    children: {
      control: { type: 'text' },
      description: 'The content to display inside the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Animated Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a very long button text to test wrapping',
    variant: 'primary',
  },
};
