// switches.js
// Geniome — Switches component (Storybook HTML/Vite)
// Pill-shaped segmented control with 2–4 segments at two sizes (small / big).

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gswitch {
      display: inline-flex;
      align-items: center;
      background: #E7E9EE;
      border-radius: 999px;
      position: relative;
      font-family: var(--font-body, sans-serif);
    }
    .gswitch.small {
      padding: 3px;
      gap: 2px;
    }
    .gswitch.big {
      padding: 4px;
      gap: 2px;
    }
    .gswitch-seg {
      border: none;
      background: transparent;
      border-radius: 999px;
      cursor: pointer;
      font-family: var(--font-body, sans-serif);
      color: var(--text-muted, #6b7280);
      font-weight: 500;
      white-space: nowrap;
      transition: .16s;
      position: relative;
      z-index: 1;
    }
    .gswitch.small .gswitch-seg {
      font-size: 12px;
      padding: 6px 14px;
    }
    .gswitch.big .gswitch-seg {
      font-size: 13.5px;
      padding: 9px 20px;
    }
    .gswitch-seg:hover {
      color: var(--text-heading, #14161a);
    }
    .gswitch-seg.active {
      background: var(--bg-page, #fff);
      color: var(--accent, #17499E);
      font-weight: 600;
      box-shadow: 0 1px 3px rgba(20, 22, 26, .14);
    }
    .gswitch-seg:disabled {
      cursor: not-allowed;
      color: var(--text-muted, #6b7280);
      opacity: .6;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Switches (pill-shaped segmented control) element.
 * @param {Object} args
 * @param {string[]} [args.segments=['Option 1', 'Option 2']] - 2 to 4 segment labels
 * @param {number} [args.activeIndex=0] - index of the currently active segment
 * @param {'small'|'big'} [args.size='small']
 * @param {boolean} [args.disabled=false]
 * @param {(index: number, event: MouseEvent) => void} [args.onChange]
 * @returns {HTMLDivElement}
 */
export function createSwitches(args = {}) {
  injectStylesOnce();

  const {
    segments = ['Option 1', 'Option 2'],
    activeIndex = 0,
    size = 'small',
    disabled = false,
    onChange,
  } = args;

  const boundedSegments = segments.slice(0, 4);
  let currentIndex = Math.min(Math.max(activeIndex, 0), boundedSegments.length - 1);

  const root = document.createElement('div');
  root.className = 'gswitch ' + size;

  const buttons = boundedSegments.map((label, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gswitch-seg' + (index === currentIndex ? ' active' : '');
    btn.textContent = label;
    btn.disabled = disabled;
    btn.addEventListener('click', (event) => {
      if (index === currentIndex) return;
      currentIndex = index;
      buttons.forEach((b, i) => b.classList.toggle('active', i === currentIndex));
      if (typeof onChange === 'function') onChange(currentIndex, event);
    });
    root.appendChild(btn);
    return btn;
  });

  return root;
}

export default createSwitches;
