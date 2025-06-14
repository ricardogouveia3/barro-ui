import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  stories: ['./docs/**/*.mdx', '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  docs: {
    defaultName: 'Docs',
  },

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
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
        'react',
        'react-dom',
        '@storybook/theming',
      ],
    };

    newConfig.resolve = {
      ...newConfig.resolve,
      alias: {
        ...newConfig.resolve?.alias,
      },
    };

    return newConfig;
  },
};

export default config;
