import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { icons } from '../../assets/images';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Example icon import

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      description: 'Defines the type of button component to render.',
      control: { type: 'radio' },
      options: ['button', 'link', 'toggle'],
    },
    children: {
      description: 'Button label or node.',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Disables the button.',
      control: { type: 'boolean' },
    },
    round: {
      description: 'Applies border radius styling.',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    },
    className: {
      description: 'Custom CSS class for the button.',
      control: { type: 'text' },
    },
    style: {
      description: 'Inline styles for the button.',
      control: 'object',
    },
    hoverColor: {
      description: 'Custom background color on hover.',
      control: 'color',
    },
    icon: {
      description: 'Heroicons icon name or custom React icon component.',
      control: false,
    },
    iconPosition: {
      description: 'Position of the icon in the button.',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    iconClassnames: {
      description: 'Extra class names for the icon.',
      control: { type: 'text' },
    },
    darkMode: {
      description: 'Enables dark mode styling.',
      control: { type: 'boolean' },
    },
    variant: {
      description: 'Heroicon style variant.',
      control: { type: 'radio' },
      options: ['solid', 'outline'],
    },
    active: {
      description: 'Toggle active state.',
      control: { type: 'boolean' },
      if: { arg: 'type', eq: 'toggle' },
    },
    activeIcon: {
      description: 'Icon for active toggle state.',
      control: false,
      if: { arg: 'type', eq: 'toggle' },
    },
    inactiveIcon: {
      description: 'Icon for inactive toggle state.',
      control: false,
      if: { arg: 'type', eq: 'toggle' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonType: Story = {
  args: {
    type: 'button',
    children: 'Button',
    disabled: false,
    round: 'lg',
  },
};

export const DisabledButton: Story = {
  args: {
    type: 'button',
    children: 'Disabled',
    disabled: true,
    round: 'lg',
  },
};

export const WithCustomHoverColor: Story = {
  args: {
    type: 'button',
    children: 'Hover Me',
    hoverColor: '#ff6f61',
    round: 'full',
  },
};

export const LinkTypeWithHeroIcon: Story = {
  args: {
    type: 'link',
    href: '/',
    children: 'Arrow Right Icon',
    icon: 'ArrowRightIcon',
    variant: 'solid',
    iconPosition: 'left',
    round: 'full',
  },
};

export const LinkWithRightIcon: Story = {
  args: {
    type: 'link',
    href: '/',
    children: 'Go to Example',
    icon: 'ArrowRightIcon',
    variant: 'outline',
    iconPosition: 'right',
    round: 'lg',
  },
};

export const ToggleTypeWithComponentIcon: Story = {
  args: {
    type: 'toggle',
    active: true,
    activeIcon: ArrowRightIcon,
    inactiveIcon: icons.rcrd,
    onClick: () => alert('Toggle clicked!'),
    className: '',
  },
};

export const ToggleTypeWithStringIcon: Story = {
  args: {
    type: 'toggle',
    active: false,
    activeIcon: icons.rcrd,
    inactiveIcon: icons.rcrd,
    onClick: () => alert('Toggle clicked!'),
    className: '',
  },
};