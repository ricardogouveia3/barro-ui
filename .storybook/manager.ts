import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Criando tema personalizado
const customTheme = create({
  base: 'light',

  // Branding
  brandTitle: 'Meu Design System',
  brandUrl: 'https://meusite.com',
  brandImage: './logo.svg',
  brandTarget: '_self',

  // Cores
  colorPrimary: '#3B82F6',
  colorSecondary: '#10B981',

  // UI
  appBg: '#F8FAFC',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E2E8F0',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1E293B',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#64748B',

  // Toolbar
  barTextColor: '#475569',
  barSelectedColor: '#3B82F6',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#F8FAFC',
  inputBorder: '#CBD5E1',
  inputTextColor: '#334155',
  inputBorderRadius: 6,

  // Fonts
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Fira Code", "SF Mono", "Monaco", "Cascadia Code", monospace',
});

// Configuração do addon manager
addons.setConfig({
  theme: customTheme,
  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 400,
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
});
