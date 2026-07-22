import { createBadge } from '../components/Badge.js';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  render: (args) => createBadge(args),
  parameters: {
    docs: {
      description: {
        component: 'Pill-shaped badge with 5 tones × 2 styles (light/heavy), optional leading icon, trailing icon, and number badge.',
      },
    },
  },
  argTypes: {
    tone: { control: 'select', options: ['default', 'success', 'warning', 'error', 'info'] },
    style: { control: 'select', options: ['light', 'heavy'] },
    children: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    leadingIconType: { control: 'select', options: ['warning', 'dot', 'star'], if: { arg: 'leadingIcon' } },
    enableNumberBadge: { control: 'boolean' },
    numberBadge: { control: { type: 'range', min: 0, max: 99, step: 1 }, if: { arg: 'enableNumberBadge' } },
    trailingIcon: { control: 'boolean' },
    trailingIconType: { control: 'select', options: ['cross', 'down'], if: { arg: 'trailingIcon' } },
    onTrailingClick: { action: 'trailing icon clicked' },
  },
  args: {
    tone: 'default',
    style: 'light',
    children: 'Badge Text',
    leadingIcon: true,
    leadingIconType: 'warning',
    enableNumberBadge: false,
    numberBadge: 2,
    trailingIcon: true,
    trailingIconType: 'cross',
  },
};

/* Quick reference stories, one per tone */
export const Default = { args: { tone: 'default' } };
export const Success = { args: { tone: 'success', children: 'Completed', leadingIconType: 'dot' } };
export const Warning = { args: { tone: 'warning', children: 'Pending' } };
export const Error = { args: { tone: 'error', children: 'Failed' } };
export const Info = { args: { tone: 'info', children: 'New', leadingIconType: 'star' } };

export const WithNumberBadge = {
  args: { tone: 'info', children: 'Messages', leadingIcon: false, enableNumberBadge: true, numberBadge: 12, trailingIcon: false },
};

/* The fully-open, every-prop-exposed story */
export const Playground = {
  args: {},
};
