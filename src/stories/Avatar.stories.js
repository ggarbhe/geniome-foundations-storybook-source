import { createAvatar } from '../components/Avatar.js';

export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args) => createAvatar(args),
  parameters: {
    docs: {
      description: {
        component: 'Circular avatar in 3 modes (image / icon / initials) × 4 sizes, with optional status notifier dot.',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['image', 'icon', 'initials'] },
    size: { control: 'select', options: ['xs', 's', 'm', 'l'] },
    status: { control: 'select', options: ['busy', 'online', 'away', 'offline'] },
    src: { control: 'text', if: { arg: 'type', eq: 'image' } },
    initials: { control: 'text', if: { arg: 'type', eq: 'initials' } },
    alt: { control: 'text' },
  },
  args: {
    type: 'icon',
    size: 'm',
    status: 'busy',
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    initials: 'HB',
    alt: 'Avatar',
  },
};

/* Quick reference stories, one per type/size combination people reach for most */
export const Icon = { args: { type: 'icon' } };
export const Image = { args: { type: 'image' } };
export const Initials = { args: { type: 'initials' } };

export const Sizes = {
  render: () => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:flex-end; gap:20px;';
    ['xs', 's', 'm', 'l'].forEach((size) => {
      row.appendChild(createAvatar({ type: 'image', size, status: 'online' }));
    });
    return row;
  },
};

export const StatusVariants = {
  render: () => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:center; gap:20px;';
    ['busy', 'online', 'away', 'offline'].forEach((status) => {
      row.appendChild(createAvatar({ type: 'initials', initials: 'HB', status }));
    });
    return row;
  },
};

/* The fully-open, every-prop-exposed story */
export const Playground = {
  args: {},
};
