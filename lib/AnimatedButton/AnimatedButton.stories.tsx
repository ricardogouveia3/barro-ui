import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedButton } from './index';

const meta: Meta<typeof AnimatedButton> = {
  title: 'Components/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
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

export const WithComplexAnimation: Story = {
  render: () => (
    <div className="flex gap-4">
      <AnimatedButton variant="primary">
        Hover me!
      </AnimatedButton>
      <AnimatedButton variant="secondary">
        Click me!
      </AnimatedButton>
    </div>
  ),
};