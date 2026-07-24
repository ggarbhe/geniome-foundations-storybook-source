// switches.stories.js
// Geniome — Switches stories (Storybook 10, HTML renderer)

import { createSwitches } from './switches.js';

export default {
  title: 'Components/Switches',
  tags: ['autodocs'],
  render: (args) => createSwitches(args),
  argTypes: {
    segments: { control: 'object' },
    activeIndex: { control: { type: 'number', min: 0, max: 3, step: 1 } },
    size: {
      control: 'select',
      options: ['small', 'big'],
    },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: {
    segments: ['Option 1', 'Option 2'],
    activeIndex: 0,
    size: 'small',
    disabled: false,
  },
};

export const Default = {
  args: {
    segments: ['Monthly', 'Yearly'],
  },
};

export const TwoSegments = {
  args: {
    segments: ['List', 'Grid'],
  },
};

export const ThreeSegments = {
  args: {
    segments: ['Day', 'Week', 'Month'],
    activeIndex: 1,
  },
};

export const FourSegments = {
  args: {
    segments: ['All', 'Active', 'Paused', 'Archived'],
    activeIndex: 0,
  },
};

export const SmallSize = {
  args: {
    size: 'small',
    segments: ['Small A', 'Small B'],
  },
};

export const BigSize = {
  args: {
    size: 'big',
    segments: ['Big A', 'Big B'],
  },
};

export const Disabled = {
  args: {
    disabled: true,
    segments: ['Monthly', 'Yearly'],
  },
};

export const AllSizes = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '20px';
    ['small', 'big'].forEach((size) => {
      wrap.appendChild(createSwitches({ ...args, size }));
    });
    return wrap;
  },
};

export const AllCounts = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '20px';
    [
      ['List', 'Grid'],
      ['Day', 'Week', 'Month'],
      ['All', 'Active', 'Paused', 'Archived'],
    ].forEach((segments) => {
      wrap.appendChild(createSwitches({ ...args, segments }));
    });
    return wrap;
  },
};
