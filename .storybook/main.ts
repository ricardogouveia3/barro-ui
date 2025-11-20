import svgr from 'vite-plugin-svgr';
import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../lib/**/*.stories.tsx', '../lib/**/*.mdx', './docs/**/*.mdx'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    return {
      ...config,
      publicDir: '.storybook/assets',
      plugins: [...(await withoutVitePlugins(config.plugins, ['vite:dts'])), svgr()],
    };
  },
};

export default config;
