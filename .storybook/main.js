/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
