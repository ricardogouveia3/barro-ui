import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { icons } from '../../assets/images';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description:
        'Name of the Heroicons icon to render (e.g., "ArrowUpRightIcon"). Ignored if a custom icon is provided via the `icon` prop.',
      control: { type: 'text' },
    },
    icon: {
      description:
        'A custom React component representing an icon, such as an imported SVG component. If provided, it overrides the `name` prop.',
      control: false,
    },
    variant: {
      description:
        'Determines the Heroicons style variant to use, either "solid" or "outline". Applies only when using the `name` prop.',
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
    fill: {
      description: 'Custom fill color for the icon SVG.',
      control: 'color',
    },
    className: {
      description:
        'Additional Tailwind CSS classes for customizing the icon size, color, or spacing.',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const HeroiconOutline: Story = {
  args: {
    name: 'ArrowUpRightIcon',
    variant: 'outline',
    className: 'w-6 h-6 text-blue-600',
  },
};

export const HeroiconSolid: Story = {
  args: {
    name: 'CheckCircleIcon',
    variant: 'solid',
    className: 'w-6 h-6 text-green-600',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: typeof icons.rcrd === 'function' ? icons.rcrd : undefined,
    className: 'w-6 h-6 text-sky-500',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon icon={rcrd} className="w-6 h-6 text-sky-500" />`,
      },
    },
  },
};
