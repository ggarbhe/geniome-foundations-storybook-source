// emptystatecard.stories.js
// Geniome — Empty State Card stories (Storybook 10, HTML renderer)

import { createEmptyStateCard } from './emptystatecard.js';

export default {
  title: 'Components/EmptyStateCard',
  tags: ['autodocs'],
  render: (args) => createEmptyStateCard(args),
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'search', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
    icon: { control: 'boolean' },
    onAction: { action: 'action clicked' },
    onSecondaryAction: { action: 'secondary action clicked' },
  },
  args: {
    variant: 'default',
    size: 'md',
    title: 'No projects yet',
    description: 'Create your first project to get started.',
    actionLabel: 'Create project',
    secondaryActionLabel: '',
    icon: true,
  },
};

export const Default = {
  args: { variant: 'default' },
};

export const Search = {
  args: {
    variant: 'search',
    title: 'No results found',
    description: "Try adjusting your search or filters to find what you're looking for.",
    actionLabel: 'Clear filters',
  },
};

export const ErrorState = {
  args: {
    variant: 'error',
    title: "Couldn't load projects",
    description: 'Something went wrong while fetching your data. Please try again.',
    actionLabel: 'Retry',
  },
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

export const WithSecondaryAction = {
  args: { secondaryActionLabel: 'Learn more' },
};

export const NoIcon = {
  args: { icon: false },
};

export const NoDescription = {
  args: { description: '' },
};

export const AllVariants = {
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexWrap = 'wrap';
    wrap.style.gap = '24px';
    ['default', 'search', 'error'].forEach((variant) => {
      wrap.appendChild(createEmptyStateCard({ ...args, variant }));
    });
    return wrap;
  },
};
