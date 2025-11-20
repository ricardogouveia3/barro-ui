import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { icons, images } from '../../assets/images';
import { colors } from '../../tokens';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
  args: {
    type: 'button',
    children: 'Button',
    onClick: () => alert('Button clicked!'),
  },
};

export const ButtonFullWidth: Story = {
  args: {
    type: 'button',
    fullWidth: true,
    children: 'Button',
    onClick: () => alert('Button clicked!'),
  },
};

export const ButtonWithAnimatedBorder: Story = {
  args: {
    type: 'button',
    children: 'Animated Border',
    animatedBorder: true,
    onClick: () => alert('Button clicked!'),
  },
};

export const ButtonWithHoverColor: Story = {
  args: {
    type: 'button',
    children: 'Hover Color Button',
    hoverColor: colors.quartz[600], // Example using token
    onClick: () => alert('Button clicked!'),
  },
};

export const ButtonWithLeftIconAndFullRounded: Story = {
  args: {
    type: 'button',
    children: 'Left Icon Button',
    rounded: 'full',
    icon: {
      position: 'left',
      name: 'AcademicCapIcon',
      color: '#ffffff',
      variant: 'outline',
    },
    onClick: () => alert('Button clicked!'),
  },
};

export const ButtonWithRightCustomIconAndNotRounded: Story = {
  args: {
    type: 'button',
    children: 'Right Custom Icon Button',
    rounded: 'none',
    icon: {
      position: 'right',
      name: icons.rcrd,
      fill: '#ffffff',
    },
    onClick: () => alert('Button clicked!'),
  },
};

export const ButtonWithImageAsLeftIcon: Story = {
  args: {
    type: 'button',
    children: 'Brasil',
    icon: {
      position: 'left',
      src: images.br,
    },
    onClick: () => alert('Brasil button clicked!'),
  },
};

export const ButtonDisabled: Story = {
  args: {
    type: 'button',
    children: 'Disabled Button',
    disabled: true,
    onClick: () => alert('Should not trigger'),
  },
};

export const ButtonLink: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
    link: '/',
  },
};

export const ButtonLinkWithAnimatedBorder: Story = {
  args: {
    type: 'link',
    animatedBorder: true,
    children: 'Link Button',
    link: '/',
  },
};

export const ButtonLinkWithHoverColor: Story = {
  args: {
    type: 'link',
    children: 'Hover Color Link Button',
    link: '/',
    hoverColor: '#f59e42',
  },
};

export const ButtonLinkWithLeftIconAndFullRounded: Story = {
  args: {
    type: 'link',
    children: 'Left Icon Link Button',
    link: '/',
    rounded: 'full',
    icon: {
      position: 'left',
      name: 'AcademicCapIcon',
      color: '#ffffff',
      variant: 'outline',
    },
  },
};

export const ButtonLinkWithRightCustomIconAndNotRounded: Story = {
  args: {
    type: 'link',
    children: 'Right Custom Icon Link Button',
    rounded: 'none',
    link: '/',
    icon: {
      position: 'right',
      name: icons.rcrd,
      fill: '#ffffff',
    },
  },
};

export const ButtonLinkWithImageIcon: Story = {
  args: {
    type: 'link',
    children: 'Visit Brazil',
    link: '#',
    icon: {
      position: 'left',
      src: images.br,
    },
  },
};

export const ButtonLinkDisabled: Story = {
  args: {
    type: 'link',
    children: 'Disabled Link Button',
    link: '/',
    disabled: true,
  },
};

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

export const ToggleWithImageAsIcon: Story = {
  args: {
    type: 'toggle',
    icon: {
      src: images.br,
    },
    onClick: () => alert('Flag toggled!'),
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
