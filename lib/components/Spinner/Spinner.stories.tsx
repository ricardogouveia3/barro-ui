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
      description: 'Indica se o spinner está visível',
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

export const Hidden: Story = {
  args: {
    isLoading: false,
  },
};
