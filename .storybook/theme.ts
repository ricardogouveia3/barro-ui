import { create } from '@storybook/theming/create';
import type { Theme } from '@storybook/theming';

// @ts-ignore
export const customTheme: Theme = create({
  base: 'dark',

  // Branding
  brandUrl: 'https://barro.rcrd.dev',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  // Primary and Secondary Colors
  colorPrimary: '#3B82F6',
  colorSecondary: '#10B981',

  // UI Colors
  appBg: '#222425',
  appContentBg: '#161616',
  appPreviewBg: '#161616',
  appBorderColor: '#434343',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Fira Code", "SF Mono", "Monaco", "Cascadia Code", monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#64748B',

  // Toolbar
  barTextColor: '#475569',
  barSelectedColor: '#3B82F6',
  barBg: '#161616',

  // Forms
  inputBg: '#161616',
  inputBorder: '#CBD5E1',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 6,
});
