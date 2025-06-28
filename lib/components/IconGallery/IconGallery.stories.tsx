import type { Meta, StoryObj } from '@storybook/react';
import IconGallery from './IconGallery';

const meta: Meta<typeof IconGallery> = {
  title: 'Tokens/Icons',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['outline', 'solid'],
      control: { type: 'radio' },
    },
    className: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    fill: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconGallery>;

export const Default: Story = {
  args: {
    variant: 'outline',
    className: 'w-6 h-6',
    color: '#ffffff',
  },
};
