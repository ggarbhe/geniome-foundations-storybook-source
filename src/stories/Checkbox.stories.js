// checkbox.stories.js
// Geniome — Checkbox stories (Storybook 10, HTML renderer)

import { createCheckbox } from './checkbox.js';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: (args) => createCheckbox(args),
  argTypes: {
    state: {
      control: 'select',
      options: ['unchecked', 'checked', 'indeterminate'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    subtext: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: {
    state: 'unchecked',
    size: 'md',
    label: 'Remember me',
    subtext: 'Stay signed in on this device',
    disabled: false,
  },
};

export const Unchecked = {
  args: { state: 'unchecked' },
};

export const Checked = {
  args: { state: 'checked' },
};

export const Indeterminate = {
  args: { state: 'indeterminate', label: 'Select all', subtext: 'Some items are selected' },
};

export const Small = {
  args: { size: 'sm' },
};

export const Medium = {
  args: { size: 'md' },
};

export const Large = {
  args: { size: 'lg' },
};

export const NoSubtext = {
  args: { subtext: '', label: 'I agree to the terms' },
};

export const Disabled = {
  args: { disabled: true },
};

export const DisabledChecked = {
  args: { disabled: true, state: 'checked' },
};

export const AllStates = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '16px';
    ['unchecked', 'checked', 'indeterminate'].forEach((state) => {
      wrap.appendChild(createCheckbox({ ...args, state }));
    });
    return wrap;
  },
};
