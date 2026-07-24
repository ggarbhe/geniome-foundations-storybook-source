// tooltip.stories.js
// Geniome — Tooltip stories (Storybook 10, HTML renderer)

import { createTooltip } from './tooltip.js';

export default {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  render: (args) => createTooltip(args),
  argTypes: {
    position: {
      control: 'select',
      options: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    closable: { control: 'boolean' },
    triggerLabel: { control: 'text' },
    onClose: { action: 'closed' },
  },
  args: {
    position: 'top',
    title: 'Saved views',
    description: 'Save this filter combination to reuse it later.',
    closable: false,
    triggerLabel: 'Trigger',
  },
};

export const Default = {
  args: {
    position: 'top',
  },
};

export const TopStart = {
  args: {
    position: 'top-start',
  },
};

export const TopEnd = {
  args: {
    position: 'top-end',
  },
};

export const Bottom = {
  args: {
    position: 'bottom',
  },
};

export const BottomStart = {
  args: {
    position: 'bottom-start',
  },
};

export const BottomEnd = {
  args: {
    position: 'bottom-end',
  },
};

export const Closable = {
  args: {
    closable: true,
  },
};

export const WithoutDescription = {
  args: {
    description: '',
  },
};

export const AllPositions = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'grid';
    wrap.style.gridTemplateColumns = 'repeat(3, 1fr)';
    wrap.style.gap = '80px 40px';
    wrap.style.padding = '60px 40px';

    [
      'top-start',
      'top',
      'top-end',
      'bottom-start',
      'bottom',
      'bottom-end',
    ].forEach((position) => {
      const cell = document.createElement('div');
      cell.style.display = 'flex';
      cell.style.justifyContent = 'center';
      cell.appendChild(createTooltip({ ...args, position }));
      wrap.appendChild(cell);
    });

    return wrap;
  },
};
