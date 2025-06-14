import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-actions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    const newConfig = {
      ...config,
      plugins: await withoutVitePlugins(config.plugins, ['vite:dts']),
    };
    
    newConfig.optimizeDeps = {
      ...newConfig.optimizeDeps,
      include: [
        ...(newConfig.optimizeDeps?.include || []),
        'framer-motion',
      ],
    };
    
    return newConfig;
  },
};

export default config;