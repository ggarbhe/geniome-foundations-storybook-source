// tooltip.js
// Geniome — Tooltip component (Storybook HTML/Vite)
// Bubble with heading, body and close — six tail positions controlling where the pointer attaches.

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gtooltip-anchor {
      position: relative;
      display: inline-flex;
      font-family: var(--font-body, sans-serif);
    }
    .gtooltip-trigger {
      font-family: var(--font-body, sans-serif);
      font-size: 13px;
      font-weight: 500;
      color: var(--text-body, #3a3f47);
      background: #fff;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 8px;
      padding: 9px 18px;
      cursor: default;
    }
    .gtooltip {
      position: absolute;
      z-index: 2;
      width: 220px;
      background: #fff;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 10px;
      box-shadow: 0 10px 24px -8px rgba(20,22,26,.18);
      padding: 12px 14px;
      font-family: var(--font-body, sans-serif);
    }
    .gtooltip.is-hidden {
      display: none;
    }
    .gtooltip-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 4px;
    }
    .gtooltip-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-heading, #14161a);
      line-height: 1.4;
    }
    .gtooltip-body {
      font-size: 12.5px;
      color: var(--text-muted, #6b7280);
      line-height: 1.55;
    }
    .gtooltip-close {
      border: none;
      background: transparent;
      color: var(--text-muted, #6b7280);
      font-size: 15px;
      line-height: 1;
      cursor: pointer;
      padding: 0;
      margin: -2px -2px 0 0;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gtooltip-close:hover {
      color: var(--text-heading, #14161a);
    }
    .gtooltip-tail {
      position: absolute;
      width: 0;
      height: 0;
    }

    /* top-* placements: bubble sits above trigger, tail points down */
    .gtooltip.pos-top-start, .gtooltip.pos-top, .gtooltip.pos-top-end { bottom: calc(100% + 12px); }
    .gtooltip.pos-top-start { left: 0; }
    .gtooltip.pos-top { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-top-end { right: 0; }
    .gtooltip.pos-top-start .gtooltip-tail,
    .gtooltip.pos-top .gtooltip-tail,
    .gtooltip.pos-top-end .gtooltip-tail {
      bottom: -8px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 8px solid #fff;
      filter: drop-shadow(0 2px 1px rgba(20,22,26,.08));
    }
    .gtooltip.pos-top-start .gtooltip-tail { left: 16px; }
    .gtooltip.pos-top .gtooltip-tail { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-top-end .gtooltip-tail { right: 16px; }

    /* bottom-* placements: bubble sits below trigger, tail points up */
    .gtooltip.pos-bottom-start, .gtooltip.pos-bottom, .gtooltip.pos-bottom-end { top: calc(100% + 12px); }
    .gtooltip.pos-bottom-start { left: 0; }
    .gtooltip.pos-bottom { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-bottom-end { right: 0; }
    .gtooltip.pos-bottom-start .gtooltip-tail,
    .gtooltip.pos-bottom .gtooltip-tail,
    .gtooltip.pos-bottom-end .gtooltip-tail {
      top: -8px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 8px solid #fff;
      filter: drop-shadow(0 -2px 1px rgba(20,22,26,.06));
    }
    .gtooltip.pos-bottom-start .gtooltip-tail { left: 16px; }
    .gtooltip.pos-bottom .gtooltip-tail { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-bottom-end .gtooltip-tail { right: 16px; }
  `;
  document.head.appendChild(style);
}

const VALID_POSITIONS = ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'];

/**
 * Create a Geniome Tooltip element.
 * @param {Object} args
 * @param {'top-start'|'top'|'top-end'|'bottom-start'|'bottom'|'bottom-end'} [args.position='top'] - which edge/side the tail attaches to
 * @param {string} [args.title=''] - tooltip heading
 * @param {string} [args.description=''] - tooltip body text
 * @param {boolean} [args.closable=false] - whether a close button is shown
 * @param {string} [args.triggerLabel='Trigger'] - label for the demo trigger element the tooltip is anchored to
 * @param {() => void} [args.onClose] - called when the close button is clicked
 * @returns {HTMLDivElement}
 */
export function createTooltip(args = {}) {
  injectStylesOnce();

  const {
    position = 'top',
    title = '',
    description = '',
    closable = false,
    triggerLabel = 'Trigger',
    onClose,
  } = args;

  const resolvedPosition = VALID_POSITIONS.includes(position) ? position : 'top';

  const root = document.createElement('div');
  root.className = 'gtooltip-anchor';

  const trigger = document.createElement('div');
  trigger.className = 'gtooltip-trigger';
  trigger.textContent = triggerLabel;

  const tooltip = document.createElement('div');
  tooltip.className = `gtooltip pos-${resolvedPosition}`;
  tooltip.setAttribute('role', 'tooltip');

  const head = document.createElement('div');
  head.className = 'gtooltip-head';

  const titleEl = document.createElement('div');
  titleEl.className = 'gtooltip-title';
  titleEl.textContent = title;
  head.appendChild(titleEl);

  if (closable) {
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'gtooltip-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', (event) => {
      tooltip.classList.add('is-hidden');
      if (typeof onClose === 'function') onClose(event);
    });
    head.appendChild(closeBtn);
  }

  const bodyEl = document.createElement('div');
  bodyEl.className = 'gtooltip-body';
  bodyEl.textContent = description;

  const tail = document.createElement('span');
  tail.className = 'gtooltip-tail';

  tooltip.appendChild(head);
  tooltip.appendChild(bodyEl);
  tooltip.appendChild(tail);

  root.appendChild(trigger);
  root.appendChild(tooltip);

  return root;
}

export default createTooltip;
