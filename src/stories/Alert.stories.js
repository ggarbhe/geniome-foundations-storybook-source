import { createAlert } from '../components/Alert.js';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'], // generates a docs page automatically from argTypes
  render: (args) => createAlert(args),
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
      description: 'Semantic tone — maps to component-alert-{variant}-* tokens',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    showAction: { control: 'boolean', description: 'Show the primary text link' },
    actionText: { control: 'text', if: { arg: 'showAction' } },
    showAction1: { control: 'boolean', description: 'Show a second text link' },
    actionText1: { control: 'text', if: { arg: 'showAction1' } },
    trailingIconType: {
      control: 'select',
      options: ['cross', 'none'],
      description: 'Dismiss affordance in the top-right corner',
    },
    onDismiss: { action: 'dismissed' },
    onAction: { action: 'action clicked' },
    onAction1: { action: 'action1 clicked' },
  },
  args: {
    variant: 'success',
    title: 'New App version available',
    description: 'Update your app now to experience latest features on the app',
    showAction: true,
    actionText: 'Learn more',
    showAction1: true,
    actionText1: 'Button Text →',
    trailingIconType: 'cross',
  },
};

/* One story per variant — fixed, for quick visual reference */
export const Success = { args: { variant: 'success' } };
export const Warning = { args: { variant: 'warning', title: 'Storage almost full', description: "You're at 92% of your plan limit.", showAction1: false } };
export const Error = { args: { variant: 'error', title: 'Payment failed', description: 'Check your card details and try again.', showAction: false, showAction1: false } };
export const Info = { args: { variant: 'info', title: 'New version available', description: 'Refresh to update Geniome.', showAction1: false } };

/* The fully-open, every-prop-exposed story — this is the "Playground" in your screenshot */
export const Playground = {
  args: {},
};
