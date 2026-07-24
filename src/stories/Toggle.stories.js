// toggle.stories.js
// Geniome — Toggle stories (Storybook 10, HTML renderer)

import { createToggle } from './toggle.js';

export default {
  title: 'Components/Toggle',
  tags: ['autodocs'],
  render: (args) => createToggle(args),
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Enable notifications',
  },
};

export const Default = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked = {
  args: {
    checked: true,
    label: 'Enable notifications',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Enable notifications',
  },
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    label: 'Enable notifications',
  },
};

export const WithoutLabel = {
  args: {
    label: '',
  },
};

export const AllStates = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '20px';
    [
      { checked: false, disabled: false, label: 'Off' },
      { checked: true, disabled: false, label: 'On' },
      { checked: false, disabled: true, label: 'Off · disabled' },
      { checked: true, disabled: true, label: 'On · disabled' },
    ].forEach((state) => {
      wrap.appendChild(createToggle({ ...args, ...state }));
    });
    return wrap;
  },
};
