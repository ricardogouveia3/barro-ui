import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

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
  },
};

export default preview;
