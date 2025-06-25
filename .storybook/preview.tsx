import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';

import '../lib/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#18181b' }],
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          className={'relative dark bg-zinc-900 text-white p-4 w-full min-h-20 flex justify-center'}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
