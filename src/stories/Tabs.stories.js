// tabs.stories.js
// Geniome — Tabs stories (Storybook 10, HTML renderer)

import { createTabs } from './tabs.js';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: (args) => createTabs(args),
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: { type: 'number', min: 0, max: 5, step: 1 } },
    onChange: { action: 'changed' },
  },
  args: {
    tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    activeIndex: 0,
  },
};

export const Default = {
  args: {
    tabs: ['Overview', 'Details', 'Reviews'],
  },
};

export const TwoTabs = {
  args: {
    tabs: ['Overview', 'Details'],
  },
};

export const ThreeTabs = {
  args: {
    tabs: ['Overview', 'Details', 'Reviews'],
    activeIndex: 1,
  },
};

export const FourTabs = {
  args: {
    tabs: ['Overview', 'Details', 'Reviews', 'Shipping'],
  },
};

export const FiveTabs = {
  args: {
    tabs: ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs'],
  },
};

export const SixTabs = {
  args: {
    tabs: ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs', 'Support'],
  },
};

export const LastTabActive = {
  args: {
    tabs: ['Overview', 'Details', 'Reviews'],
    activeIndex: 2,
  },
};

export const AllCounts = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '32px';
    [
      ['Overview', 'Details'],
      ['Overview', 'Details', 'Reviews'],
      ['Overview', 'Details', 'Reviews', 'Shipping'],
      ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs'],
      ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs', 'Support'],
    ].forEach((tabs) => {
      wrap.appendChild(createTabs({ ...args, tabs }));
    });
    return wrap;
  },
};
