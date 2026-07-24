// titlebar.stories.js
// Geniome — TitleBar stories (Storybook 10, HTML renderer)

import { createTitleBar } from './titlebar.js';

export default {
  title: 'Components/TitleBar',
  tags: ['autodocs'],
  render: (args) => createTitleBar(args),
  argTypes: {
    surface: {
      control: 'select',
      options: ['page', 'sunken', 'accent'],
    },
    filled: { control: 'boolean' },
    showContent: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showSubtitle: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    leadingIconType: {
      control: 'select',
      options: ['back', 'close', 'menu', 'search'],
    },
    showTrailingIcons: { control: 'boolean' },
    trailingIconCount: { control: { type: 'number', min: 1, max: 3, step: 1 } },
    onLeadingIconClick: { action: 'leading icon clicked' },
    onTrailingIconClick: { action: 'trailing icon clicked' },
  },
  args: {
    surface: 'page',
    filled: true,
    showContent: true,
    title: 'Screen title',
    subtitle: 'Supporting subtitle text',
    showSubtitle: true,
    showLeadingIcon: true,
    leadingIconType: 'back',
    showTrailingIcons: true,
    trailingIconCount: 2,
  },
};

export const Default = {
  args: {},
};

export const WithSubtitle = {
  args: {
    title: 'Messages',
    showSubtitle: true,
    subtitle: '3 unread',
  },
};

export const NoSubtitle = {
  args: {
    title: 'Settings',
    showSubtitle: false,
  },
};

export const IconOnly = {
  args: {
    showContent: false,
  },
};

export const SunkenSurface = {
  args: {
    surface: 'sunken',
  },
};

export const AccentSurface = {
  args: {
    surface: 'accent',
    title: 'Checkout',
  },
};

export const Unfilled = {
  args: {
    filled: false,
  },
};

export const CloseIcon = {
  args: {
    leadingIconType: 'close',
    title: 'New message',
  },
};

export const MenuIcon = {
  args: {
    leadingIconType: 'menu',
    title: 'Home',
  },
};

export const NoLeadingIcon = {
  args: {
    showLeadingIcon: false,
    title: 'Dashboard',
  },
};

export const OneTrailingIcon = {
  args: {
    trailingIconCount: 1,
  },
};

export const ThreeTrailingIcons = {
  args: {
    trailingIconCount: 3,
  },
};

export const NoTrailingIcons = {
  args: {
    showTrailingIcons: false,
  },
};

export const AllSurfaces = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '2px';
    wrap.style.width = '320px';
    ['page', 'sunken', 'accent'].forEach((surface) => {
      wrap.appendChild(createTitleBar({ ...args, surface }));
    });
    return wrap;
  },
};
