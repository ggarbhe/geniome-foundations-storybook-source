// titlebar.js
// Geniome — TitleBar component (Storybook HTML/Vite)
// Mobile-style title bar — surface × leading icon × trailing icons + optional subtitle.

const ICONS = {
  back: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  menu: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  search: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.9"/><path d="M20 20l-4.35-4.35" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  bell: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M6 10a6 6 0 1112 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M10 19a2 2 0 004 0" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  more: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="18" cy="12" r="1.6" fill="currentColor"/></svg>`,
};

const TRAILING_POOL = ['search', 'bell', 'more'];

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gtitlebar {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 14px;
      min-height: 56px;
      font-family: var(--font-body, sans-serif);
      transition: .15s;
      position: relative;
    }
    .gtitlebar.surface-page {
      background: var(--bg-page, #fff);
      border-bottom: 1px solid var(--border, #E4E6EB);
      color: var(--text-heading, #14161a);
    }
    .gtitlebar.surface-sunken {
      background: var(--bg-sunken, #F6F7FA);
      border-bottom: 1px solid var(--border, #E4E6EB);
      color: var(--text-heading, #14161a);
    }
    .gtitlebar.surface-accent {
      background: var(--accent, #17499E);
      border-bottom: none;
      color: #fff;
    }
    .gtitlebar.unfilled {
      background: transparent;
      border-bottom: none;
    }
    .gtitlebar-icon-btn {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
      transition: .12s;
    }
    .gtitlebar.surface-page .gtitlebar-icon-btn:hover,
    .gtitlebar.surface-sunken .gtitlebar-icon-btn:hover {
      background: rgba(20, 22, 26, .06);
    }
    .gtitlebar.surface-accent .gtitlebar-icon-btn:hover {
      background: rgba(255, 255, 255, .16);
    }
    .gtitlebar-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
      justify-content: center;
    }
    .gtitlebar-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gtitlebar-subtitle {
      font-size: 12px;
      opacity: .72;
      margin-top: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gtitlebar-trailing {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome TitleBar element.
 * @param {Object} args
 * @param {'page'|'sunken'|'accent'} [args.surface='page']
 * @param {boolean} [args.filled=true]
 * @param {boolean} [args.showContent=true]
 * @param {string} [args.title='']
 * @param {string} [args.subtitle='']
 * @param {boolean} [args.showSubtitle=false]
 * @param {boolean} [args.showLeadingIcon=false]
 * @param {'back'|'close'|'menu'|'search'} [args.leadingIconType='back']
 * @param {boolean} [args.showTrailingIcons=false]
 * @param {number} [args.trailingIconCount=1] - 1 to 3
 * @param {(event: MouseEvent) => void} [args.onLeadingIconClick]
 * @param {(index: number, event: MouseEvent) => void} [args.onTrailingIconClick]
 * @returns {HTMLDivElement}
 */
export function createTitleBar(args = {}) {
  injectStylesOnce();

  const {
    surface = 'page',
    filled = true,
    showContent = true,
    title = '',
    subtitle = '',
    showSubtitle = false,
    showLeadingIcon = false,
    leadingIconType = 'back',
    showTrailingIcons = false,
    trailingIconCount = 1,
    onLeadingIconClick,
    onTrailingIconClick,
  } = args;

  const root = document.createElement('div');
  root.className = 'gtitlebar surface-' + surface + (filled ? '' : ' unfilled');

  if (showLeadingIcon) {
    const leadingBtn = document.createElement('button');
    leadingBtn.type = 'button';
    leadingBtn.className = 'gtitlebar-icon-btn';
    leadingBtn.innerHTML = (ICONS[leadingIconType] ?? ICONS.back)(20);
    if (typeof onLeadingIconClick === 'function') {
      leadingBtn.addEventListener('click', onLeadingIconClick);
    }
    root.appendChild(leadingBtn);
  }

  const content = document.createElement('div');
  content.className = 'gtitlebar-content';
  if (showContent) {
    if (title) {
      const titleEl = document.createElement('div');
      titleEl.className = 'gtitlebar-title';
      titleEl.textContent = title;
      content.appendChild(titleEl);
    }
    if (showSubtitle && subtitle) {
      const subtitleEl = document.createElement('div');
      subtitleEl.className = 'gtitlebar-subtitle';
      subtitleEl.textContent = subtitle;
      content.appendChild(subtitleEl);
    }
  }
  root.appendChild(content);

  if (showTrailingIcons) {
    const count = Math.min(Math.max(trailingIconCount, 1), 3);
    const trailing = document.createElement('div');
    trailing.className = 'gtitlebar-trailing';
    TRAILING_POOL.slice(0, count).forEach((type, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gtitlebar-icon-btn';
      btn.innerHTML = ICONS[type](20);
      if (typeof onTrailingIconClick === 'function') {
        btn.addEventListener('click', (event) => onTrailingIconClick(index, event));
      }
      trailing.appendChild(btn);
    });
    root.appendChild(trailing);
  }

  return root;
}

export default createTitleBar;
