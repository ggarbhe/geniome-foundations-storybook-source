// input.stories.js
// Geniome — Input stories (Storybook 10, HTML renderer)

import { createInput } from './input.js';

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: (args) => createInput(args),
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'textbox', 'otp'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    leadingIcon: { control: 'boolean' },
    leadingIconType: {
      control: 'select',
      options: ['search', 'mail', 'user', 'lock'],
    },
    trailingIcon: { control: 'boolean' },
    trailingIconType: {
      control: 'select',
      options: ['eye', 'check', 'chevron', 'close'],
    },
    countryCode: { control: 'boolean' },
    countryCodeValue: { control: 'text' },
    length: { control: { type: 'number', min: 4, max: 6, step: 1 } },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    onTrailingIconClick: { action: 'trailing icon clicked' },
  },
  args: {
    type: 'text',
    label: 'Email address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email.",
    error: false,
    errorMessage: 'Please enter a valid email address.',
    disabled: false,
    leadingIcon: true,
    leadingIconType: 'mail',
    trailingIcon: false,
    trailingIconType: 'eye',
    countryCode: false,
    countryCodeValue: '🇮🇳 +91',
    length: 4,
    value: '',
  },
};

export const Default = {
  args: { type: 'text' },
};

export const NumberType = {
  args: {
    type: 'number',
    label: 'Phone number',
    placeholder: '98765 43210',
    helperText: "We'll text you a code to confirm this number.",
    leadingIcon: false,
    countryCode: true,
  },
};

export const TextboxType = {
  args: {
    type: 'textbox',
    label: 'Message',
    placeholder: 'Write your message here...',
    helperText: 'Maximum 500 characters.',
    leadingIcon: false,
  },
};

export const OtpType = {
  args: {
    type: 'otp',
    label: 'Verification code',
    helperText: 'Enter the 4-digit code sent to your phone.',
    leadingIcon: false,
    length: 4,
  },
};

export const WithLeadingIcon = {
  args: { leadingIcon: true, leadingIconType: 'mail' },
};

export const WithTrailingIcon = {
  args: {
    type: 'text',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters.',
    leadingIcon: true,
    leadingIconType: 'lock',
    trailingIcon: true,
    trailingIconType: 'eye',
  },
};

export const WithCountryCode = {
  args: {
    type: 'number',
    label: 'Phone number',
    placeholder: '98765 43210',
    leadingIcon: false,
    countryCode: true,
  },
};

export const ErrorState = {
  args: {
    error: true,
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Disabled = {
  args: { disabled: true },
};

export const NoLabel = {
  args: { label: '' },
};

export const NoHelperText = {
  args: { helperText: '' },
};

export const AllTypes = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexWrap = 'wrap';
    wrap.style.gap = '24px';
    [
      { type: 'text', label: 'Email address', placeholder: 'you@example.com', leadingIcon: true, leadingIconType: 'mail' },
      { type: 'number', label: 'Phone number', placeholder: '98765 43210', countryCode: true },
      { type: 'textbox', label: 'Message', placeholder: 'Write your message here...' },
      { type: 'otp', label: 'Verification code', length: 4 },
    ].forEach((variantArgs) => {
      wrap.appendChild(createInput({ ...args, ...variantArgs }));
    });
    return wrap;
  },
};
