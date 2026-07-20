/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
