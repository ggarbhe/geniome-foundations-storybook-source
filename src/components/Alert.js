// A real component: pure function of props → DOM element.
// This is the pattern every "Playground" story needs — no props means
// nothing for Storybook's Controls panel to show.

const VARIANT_ICON = { success: '✓', warning: '!', error: '✕', info: 'i' };

export function createAlert({
  variant = 'success',
  title = 'New App version available',
  description = 'Update your app now to experience latest features on the app',
  showAction = true,
  actionText = 'Learn more',
  showAction1 = true,
  actionText1 = 'Button Text →',
  trailingIconType = 'cross', // 'cross' | 'none'
  onDismiss = () => {},
  onAction = () => {},
  onAction1 = () => {},
} = {}) {
  const root = document.createElement('div');
  root.className = `alert-cmp variant-${variant}`;

  root.innerHTML = `
    <div class="alert-icon">${VARIANT_ICON[variant] || 'i'}</div>
    <div class="alert-body">
      <p class="alert-title">${title}</p>
      ${description ? `<p class="alert-desc">${description}</p>` : ''}
      <div class="alert-actions">
        ${showAction ? `<a data-role="action">${actionText}</a>` : ''}
        ${showAction1 ? `<a data-role="action1">${actionText1}</a>` : ''}
      </div>
    </div>
    ${trailingIconType === 'cross' ? `<button class="alert-dismiss" aria-label="Dismiss">✕</button>` : ''}
  `;

  const dismissBtn = root.querySelector('.alert-dismiss');
  if (dismissBtn) dismissBtn.addEventListener('click', onDismiss);

  const actionEl = root.querySelector('[data-role="action"]');
  if (actionEl) actionEl.addEventListener('click', onAction);

  const action1El = root.querySelector('[data-role="action1"]');
  if (action1El) action1El.addEventListener('click', onAction1);

  return root;
}
