// tabs.js
// Geniome — Tabs component (Storybook HTML/Vite)
// Tab strip with underline indicator on the active tab.

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gtabs {
      display: inline-flex;
      align-items: flex-end;
      gap: 28px;
      position: relative;
      border-bottom: 1px solid var(--border, #E4E6EB);
      font-family: var(--font-body, sans-serif);
    }
    .gtabs-tab {
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: var(--font-body, sans-serif);
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-muted, #6b7280);
      padding: 0 2px 14px;
      white-space: nowrap;
      transition: color .16s;
    }
    .gtabs-tab:hover {
      color: var(--text-heading, #14161a);
    }
    .gtabs-tab.active {
      color: var(--accent, #17499E);
      font-weight: 600;
    }
    .gtabs-tab:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    .gtabs-indicator {
      position: absolute;
      bottom: -1px;
      height: 2px;
      background: var(--accent, #17499E);
      border-radius: 2px;
      transition: left .18s ease, width .18s ease;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Tabs (underline tab strip) element.
 * @param {Object} args
 * @param {string[]} [args.tabs=['Tab 1', 'Tab 2', 'Tab 3']] - tab labels
 * @param {number} [args.activeIndex=0] - index of the currently active tab
 * @param {(index: number, event: MouseEvent) => void} [args.onChange]
 * @returns {HTMLDivElement}
 */
export function createTabs(args = {}) {
  injectStylesOnce();

  const {
    tabs = ['Tab 1', 'Tab 2', 'Tab 3'],
    activeIndex = 0,
    onChange,
  } = args;

  let currentIndex = Math.min(Math.max(activeIndex, 0), tabs.length - 1);

  const root = document.createElement('div');
  root.className = 'gtabs';

  const indicator = document.createElement('span');
  indicator.className = 'gtabs-indicator';

  function positionIndicator(activeBtn) {
    indicator.style.left = activeBtn.offsetLeft + 'px';
    indicator.style.width = activeBtn.offsetWidth + 'px';
  }

  const buttons = tabs.map((label, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gtabs-tab' + (index === currentIndex ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', (event) => {
      if (index === currentIndex) return;
      currentIndex = index;
      buttons.forEach((b, i) => b.classList.toggle('active', i === currentIndex));
      positionIndicator(btn);
      if (typeof onChange === 'function') onChange(currentIndex, event);
    });
    root.appendChild(btn);
    return btn;
  });

  root.appendChild(indicator);

  requestAnimationFrame(() => {
    const activeBtn = buttons[currentIndex];
    if (activeBtn) positionIndicator(activeBtn);
  });

  const resizeHandler = () => {
    const activeBtn = buttons[currentIndex];
    if (activeBtn) positionIndicator(activeBtn);
  };
  window.addEventListener('resize', resizeHandler);

  return root;
}

export default createTabs;
