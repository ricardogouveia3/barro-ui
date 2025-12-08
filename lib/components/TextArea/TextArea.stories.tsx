import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter description...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message',
    error: 'Message is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};
