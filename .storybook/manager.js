import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import BarroTheme from './BarroTheme';

addons.setConfig({
  theme: BarroTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
  initialActive: 'getting-started--docs',
});
