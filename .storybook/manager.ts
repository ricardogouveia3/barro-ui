import { addons } from '@storybook/manager-api';
import { customTheme } from './theme';

addons.setConfig({
  // @ts-ignore
  theme: customTheme,
});
