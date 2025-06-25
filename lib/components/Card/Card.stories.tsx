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
    loading: false,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to be rendered inside the card.',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    classNames: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for the outer card wrapper.',
    },
    contentClassnames: {
      control: 'text',
      description: 'Tailwind CSS classes for the content container inside the card.',
    },
    animatedBorder: {
      control: 'boolean',
      description: 'If true, shows an animated border on hover or focus.',
    },
    loading: {
      control: 'boolean',
      description: 'Displays a loading spinner overlay when true.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
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

export const WithCustomClassNames: Story = {
  args: {
    classNames: 'bg-gray-100 dark:bg-gray-800',
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

export const CustomPaddingChildren: Story = {
  args: {
    classNames: '',
    contentClassnames: 'w-full h-full',
    children: (
      <div className={'w-full h-full flex flex-row '}>
        <div className={'min-h-24 flex'}>
          <img
            src="https://picsum.photos/800"
            alt="Placeholder"
            className="h-48 object-cover md:h-full md:w-auto md:max-w-52"
          />
        </div>
        <div className={'p-4 flex flex-col justify-center'}>
          <h3 className="text-xl font-bold">Lorem ipsum</h3>
          <p className="text-sm">
            Integer suscipit pretium euismod. In rutrum facilisis sapien eu euismod. Suspendisse
            lobortis lorem ac fringilla finibus.
          </p>
        </div>
      </div>
    ) as ReactNode,
  },
};

export const WithoutAnimatedBorder: Story = {
  args: {
    animatedBorder: false,
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

export const Loading: Story = {
  args: {
    loading: true,
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
