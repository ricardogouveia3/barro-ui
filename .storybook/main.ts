import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  // Suas stories na pasta lib
  stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  
  // Addons expandidos (mantendo os seus + novos)
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y', // Para acessibilidade
  ],
  
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  // Core builder (mantendo o seu)
  core: {
    builder: '@storybook/builder-vite',
  },
  
  // Configuração de documentação
  docs: {
    autodocs: 'tag', // Gera docs automaticamente
    defaultName: 'Documentação',
  },
  
  // Configuração específica do TypeScript
  typescript: {
    check: false, // Performance
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
      ),
    },
  },
  
  // Sua configuração do Vite (expandida)
  viteFinal: async (config) => {
    const newConfig = {
      ...config,
      plugins: await withoutVitePlugins(config.plugins, ['vite:dts']),
    };
    
    newConfig.optimizeDeps = {
      ...newConfig.optimizeDeps,
      include: [
        ...(newConfig.optimizeDeps?.include || []),
        'framer-motion', // Seu atual
        'react',
        'react-dom',
        '@storybook/theming',
      ],
    };
    
    // Configurações adicionais se necessário
    newConfig.resolve = {
      ...newConfig.resolve,
      alias: {
        ...newConfig.resolve?.alias,
        // Adicione aliases se necessário
        // '@': path.resolve(__dirname, '../lib'),
      },
    };
    
    return newConfig;
  },
};

export default config;