// button.stories.js
// Geniome — Button stories (Storybook 10, HTML renderer)

import { createButton } from './button.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    leadingIconType: {
      control: 'select',
      options: ['plus', 'arrow', 'download'],
      if: { arg: 'leadingIcon', truthy: true },
    },
    trailingIcon: { control: 'boolean' },
    trailingIconType: {
      control: 'select',
      options: ['arrow', 'chevron', 'external'],
      if: { arg: 'trailingIcon', truthy: true },
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    leadingIcon: false,
    leadingIconType: 'plus',
    trailingIcon: false,
    trailingIconType: 'arrow',
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export const Primary = {
  args: { variant: 'primary' },
};

export const Secondary = {
  args: { variant: 'secondary' },
};

export const Outline = {
  args: { variant: 'outline' },
};

export const Ghost = {
  args: { variant: 'ghost' },
};

export const Danger = {
  args: { variant: 'danger', label: 'Delete' },
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

export const WithLeadingIcon = {
  args: { leadingIcon: true, leadingIconType: 'plus', label: 'Add item' },
};

export const WithTrailingIcon = {
  args: { trailingIcon: true, trailingIconType: 'arrow', label: 'Continue' },
};

export const Loading = {
  args: { loading: true, label: 'Saving' },
};

export const Disabled = {
  args: { disabled: true },
};

export const FullWidth = {
  args: { fullWidth: true },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.gap = '12px';
    wrap.style.flexWrap = 'wrap';
    ['primary', 'secondary', 'outline', 'ghost', 'danger'].forEach((variant) => {
      wrap.appendChild(createButton({ ...args, variant }));
    });
    return wrap;
  },
};
