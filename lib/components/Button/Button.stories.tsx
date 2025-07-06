import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { icons } from '../../assets/images';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ToggleWithHeroiconName: Story = {
  args: {
    type: 'toggle',
    onClick: () => alert('Toggled!'),
    icon: {
      name: 'AcademicCapIcon',
      color: '#2563eb',
      variant: 'solid',
    },
  },
};

export const ToggleWithCustomIconComponent: Story = {
  args: {
    type: 'toggle',
    onClick: () => alert('Toggled!'),
    icon: {
      name: icons.rcrd,
      color: '#f59e42',
      fill: '#f59e42',
    },
  },
};

export const ToggleWithAnimatedBorder: Story = {
  args: {
    type: 'toggle',
    onClick: () => alert('Toggled!'),
    animatedBorder: true,
    icon: {
      name: icons.rcrd,
      color: '#f59e42',
      fill: '#f59e42',
    },
  },
};

export const ToggleDisabled: Story = {
  args: {
    type: 'toggle',
    onClick: () => alert('Should not trigger'),
    icon: {
      name: 'AcademicCapIcon',
      color: '#a3a3a3',
      variant: 'solid',
    },
    disabled: true,
  },
};
