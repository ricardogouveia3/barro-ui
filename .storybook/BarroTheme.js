import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  brandTitle: 'Barro UI',
  brandUrl: 'https://barro.rcrd.dev',
  brandImage: '/horizontal_logo.svg',
  brandTarget: '_self',

  // Storybook-specific color palette
  colorPrimary: '#06b6d4',
  colorSecondary: '#029CFD',

  // UI
  appBg: '#222425',
  appContentBg: '#1B1C1D',
  appPreviewBg: '#FFFFFF',
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: '#C9CDCF',
  textInverseColor: '#222425',
  textMutedColor: '#798186',

  // Toolbar default and active colors
  barTextColor: '#73828C',
  barHoverColor: '#029CFD',
  barSelectedColor: '#06b6d4',
  barBg: '#292C2E',

  // Form colors
  buttonBg: '#222425',
  buttonBorder: 'rgba(255,255,255,.1)',
  booleanBg: '#222425',
  booleanSelectedBg: '#2E3438',
  inputBg: '#1B1C1D',
  inputBorder: 'rgba(255,255,255,.1)',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,
});