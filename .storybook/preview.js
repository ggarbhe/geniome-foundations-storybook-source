import '../src/tokens.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'foundations-canvas',
      values: [{ name: 'foundations-canvas', value: '#ffffff' }],
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Colors', ['Base', 'Semantic', 'Component'], 'Typography', 'Spacing', 'Corner Radius', 'Shadows'],
        ],
      },
    },
  },
};

export default preview;
