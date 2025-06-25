import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: {
    isLoading: true,
  },
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Controls whether the spinner is visible.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    isLoading: true,
  },
};
