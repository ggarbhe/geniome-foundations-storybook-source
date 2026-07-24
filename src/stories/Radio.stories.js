// radio.stories.js
// Geniome — Radio stories (Storybook 10, HTML renderer)

import { createRadio } from './radio.js';

export default {
  title: 'Components/Radio',
  tags: ['autodocs'],
  render: (args) => createRadio(args),
  argTypes: {
    checked: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
  args: {
    checked: false,
    size: 'md',
    disabled: false,
    label: 'Option label',
    name: 'radio-group',
    value: 'option-1',
  },
};

export const Default = {
  args: { checked: false },
};

export const Selected = {
  args: { checked: true },
};

export const Unselected = {
  args: { checked: false },
};

export const SmallSize = {
  args: {
    size: 'sm',
    label: 'Small radio',
  },
};

export const MediumSize = {
  args: {
    size: 'md',
    label: 'Medium radio',
  },
};

export const Disabled = {
  args: { disabled: true },
};

export const DisabledChecked = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const NoLabel = {
  args: { label: '' },
};

export const AllStates = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '16px';
    [
      { size: 'sm', checked: false, disabled: false, label: 'Small — unselected' },
      { size: 'sm', checked: true, disabled: false, label: 'Small — selected' },
      { size: 'sm', checked: false, disabled: true, label: 'Small — disabled' },
      { size: 'sm', checked: true, disabled: true, label: 'Small — disabled selected' },
      { size: 'md', checked: false, disabled: false, label: 'Medium — unselected' },
      { size: 'md', checked: true, disabled: false, label: 'Medium — selected' },
      { size: 'md', checked: false, disabled: true, label: 'Medium — disabled' },
      { size: 'md', checked: true, disabled: true, label: 'Medium — disabled selected' },
    ].forEach((variantArgs) => {
      wrap.appendChild(createRadio({ ...args, ...variantArgs }));
    });
    return wrap;
  },
};

export const RadioGroup = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '12px';
    ['Option one', 'Option two', 'Option three'].forEach((optionLabel, index) => {
      wrap.appendChild(
        createRadio({
          ...args,
          label: optionLabel,
          value: `option-${index + 1}`,
          checked: index === 0,
        })
      );
    });
    return wrap;
  },
};
