import type { Preview } from '@storybook/react';
import '../lib/global.css';
import './preview.css';
import { customTheme } from './theme';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      theme: customTheme,
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
      values: [{ name: 'dark', value: '#161616' }],
    },
  },
};

export default preview;
