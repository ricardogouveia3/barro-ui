import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import type { ReactNode } from 'react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    classNames: '',
    contentClassnames: 'p-4',
    animatedBorder: true,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithPadding: Story = {
  args: {
    contentClassnames: 'p-8',
  },
};

export const WithoutAnimatedBorder: Story = {
  args: {
    animatedBorder: false,
  },
};

export const CustomContent: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-bold">Lorem ipsum</h3>
        <p className="text-sm">
          Integer suscipit pretium euismod. In rutrum facilisis sapien eu euismod. Suspendisse
          lobortis lorem ac fringilla finibus.
        </p>
      </div>
    ) as ReactNode,
  },
};
