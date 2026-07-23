// emptystatecard.js
// Geniome — Empty State Card component (Storybook HTML/Vite)

const SIZE_STYLE = {
  sm: { cardWidth: 280, pad: '28px 24px', gap: 10, iconBox: 40, iconInner: 18, radius: '8px', cardRadius: '14px', title: '14.5px', desc: '12.5px', descMaxWidth: 220, btnPad: '8px 14px', btnFont: '12px', actionsGap: 6 },
  md: { cardWidth: 340, pad: '40px 32px', gap: 14, iconBox: 52, iconInner: 22, radius: '9px', cardRadius: '15px', title: '17px', desc: '13.5px', descMaxWidth: 260, btnPad: '10px 18px', btnFont: '13px', actionsGap: 8 },
  lg: { cardWidth: 400, pad: '52px 40px', gap: 16, iconBox: 64, iconInner: 28, radius: '10px', cardRadius: '16px', title: '20px', desc: '14.5px', descMaxWidth: 300, btnPad: '11px 22px', btnFont: '14px', actionsGap: 10 },
};

const defaultIconSvg = (size) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M3 7l2-3h14l2 3M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7M3 7h18M9 12h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const searchIconSvg = (size) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-4.35-4.35" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const errorIconSvg = (size) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M12 3l10 18H2L12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 10v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>`;

const ICON_BY_VARIANT = {
  default: defaultIconSvg,
  search: searchIconSvg,
  error: errorIconSvg,
};

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gemptystate {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: var(--bg-page, #fff);
      border: 1px solid var(--border, #E4E6EB);
      font-family: var(--font-body, sans-serif);
    }
    .gemptystate-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--accent-tint, #EBF1FD);
      color: var(--accent, #17499E);
      flex-shrink: 0;
      margin-bottom: 4px;
    }
    .gemptystate-icon.error {
      background: #FBEAE8;
      color: var(--destructive, #C0392B);
    }
    .gemptystate-icon svg {
      display: block;
    }
    .gemptystate-title {
      font-family: var(--font-display, sans-serif);
      font-weight: 600;
      color: var(--text-heading, #14161a);
      line-height: 1.35;
    }
    .gemptystate-desc {
      color: var(--text-muted, #6b7280);
      line-height: 1.6;
    }
    .gemptystate-actions {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gemptystate-btn {
      font-family: var(--font-body, sans-serif);
      font-weight: 600;
      border: none;
      cursor: pointer;
      background: var(--accent, #17499E);
      color: #fff;
      white-space: nowrap;
    }
    .gemptystate-btn:hover {
      background: var(--accent-hover, #123B80);
    }
    .gemptystate-btn-secondary {
      font-family: var(--font-body, sans-serif);
      font-weight: 600;
      border: none;
      cursor: pointer;
      background: transparent;
      color: var(--accent, #17499E);
      white-space: nowrap;
    }
    .gemptystate-btn-secondary:hover {
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Empty State Card element.
 * @param {Object} args
 * @param {'default'|'search'|'error'} [args.variant='default']
 * @param {'sm'|'md'|'lg'} [args.size='md']
 * @param {string} [args.title='No results found']
 * @param {string} [args.description='']
 * @param {string} [args.actionLabel='']
 * @param {string} [args.secondaryActionLabel='']
 * @param {boolean} [args.icon=true]
 * @param {(event: MouseEvent) => void} [args.onAction]
 * @param {(event: MouseEvent) => void} [args.onSecondaryAction]
 * @returns {HTMLDivElement}
 */
export function createEmptyStateCard(args = {}) {
  injectStylesOnce();

  const {
    variant = 'default',
    size = 'md',
    title = 'No results found',
    description = '',
    actionLabel = '',
    secondaryActionLabel = '',
    icon = true,
    onAction,
    onSecondaryAction,
  } = args;

  const s = SIZE_STYLE[size] ?? SIZE_STYLE.md;

  const root = document.createElement('div');
  root.className = 'gemptystate';
  root.style.width = s.cardWidth + 'px';
  root.style.padding = s.pad;
  root.style.gap = s.gap + 'px';
  root.style.borderRadius = s.cardRadius;

  if (icon) {
    const iconEl = document.createElement('div');
    iconEl.className = 'gemptystate-icon' + (variant === 'error' ? ' error' : '');
    iconEl.style.width = s.iconBox + 'px';
    iconEl.style.height = s.iconBox + 'px';
    const iconSvg = ICON_BY_VARIANT[variant] ?? ICON_BY_VARIANT.default;
    iconEl.innerHTML = iconSvg(s.iconInner);
    root.appendChild(iconEl);
  }

  const titleEl = document.createElement('div');
  titleEl.className = 'gemptystate-title';
  titleEl.style.fontSize = s.title;
  titleEl.textContent = title;
  root.appendChild(titleEl);

  if (description) {
    const descEl = document.createElement('div');
    descEl.className = 'gemptystate-desc';
    descEl.style.fontSize = s.desc;
    descEl.style.maxWidth = s.descMaxWidth + 'px';
    descEl.textContent = description;
    root.appendChild(descEl);
  }

  if (actionLabel || secondaryActionLabel) {
    const actions = document.createElement('div');
    actions.className = 'gemptystate-actions';
    actions.style.gap = s.actionsGap + 'px';
    actions.style.marginTop = s.gap + 'px';

    if (actionLabel) {
      const actionBtn = document.createElement('button');
      actionBtn.type = 'button';
      actionBtn.className = 'gemptystate-btn';
      actionBtn.style.padding = s.btnPad;
      actionBtn.style.fontSize = s.btnFont;
      actionBtn.style.borderRadius = s.radius;
      actionBtn.textContent = actionLabel;
      if (typeof onAction === 'function') {
        actionBtn.addEventListener('click', onAction);
      }
      actions.appendChild(actionBtn);
    }

    if (secondaryActionLabel) {
      const secondaryBtn = document.createElement('button');
      secondaryBtn.type = 'button';
      secondaryBtn.className = 'gemptystate-btn-secondary';
      secondaryBtn.style.padding = s.btnPad;
      secondaryBtn.style.fontSize = s.btnFont;
      secondaryBtn.style.borderRadius = s.radius;
      secondaryBtn.textContent = secondaryActionLabel;
      if (typeof onSecondaryAction === 'function') {
        secondaryBtn.addEventListener('click', onSecondaryAction);
      }
      actions.appendChild(secondaryBtn);
    }

    root.appendChild(actions);
  }

  return root;
}

export default createEmptyStateCard;
