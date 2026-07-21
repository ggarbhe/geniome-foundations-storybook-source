import { createAlert } from '../components/Alert.js';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
  render: (args) => createAlert(args),
  parameters: {
    docs: {
      description: {
        component: 'Inline alert with 4 colour variants, optional leading + trailing icons, and up to 2 action buttons.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'danger'] },
    title: { control: 'text' },
    description: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    leadingIconType: { control: 'select', options: ['info', 'warning', 'warning2', 'star'], if: { arg: 'leadingIcon' } },
    trailingIcon: { control: 'boolean', description: 'Shows the dismiss (✕) button' },
    showAction: { control: 'boolean', description: 'Master toggle for the whole actions row' },
    showAction1: { control: 'boolean', if: { arg: 'showAction' } },
    action1Label: { control: 'text', if: { arg: 'showAction1' } },
    action1ShowIcon: { control: 'boolean', if: { arg: 'showAction1' } },
    showAction2: { control: 'boolean', if: { arg: 'showAction' } },
    action2Label: { control: 'text', if: { arg: 'showAction2' } },
    action2ShowIcon: { control: 'boolean', if: { arg: 'showAction2' } },
    onDismiss: { action: 'dismissed' },
    onAction1: { action: 'action1 clicked' },
    onAction2: { action: 'action2 clicked' },
  },
  args: {
    variant: 'default',
    title: 'New App version available',
    description: 'Update your app now to experience latest features on the app',
    leadingIcon: true,
    leadingIconType: 'info',
    trailingIcon: true,
    showAction: true,
    showAction1: true,
    action1Label: 'Learn more',
    action1ShowIcon: false,
    showAction2: true,
    action2Label: 'Button Text',
    action2ShowIcon: true,
  },
};

/* Quick reference stories, one per variant */
export const Default = { args: { variant: 'default' } };
export const Success = { args: { variant: 'success', title: 'Changes saved', description: 'Everyone on the team can see this now.', showAction2: false } };
export const Warning = { args: { variant: 'warning', title: 'Storage almost full', description: "You're at 92% of your plan limit.", showAction2: false } };
export const Danger = { args: { variant: 'danger', title: 'Payment failed', description: 'Check your card details and try again.', showAction1: false, showAction2: false } };

/* The fully-open, every-prop-exposed story */
export const Playground = {
  args: {},
};
