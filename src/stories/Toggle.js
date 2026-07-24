// toggle.js
// Geniome — Toggle component (Storybook HTML/Vite)
// Switch-style toggle with on, off and disabled states.

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gtoggle-row {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-body, sans-serif);
    }
    .gtoggle-switch {
      width: 44px;
      height: 26px;
      border-radius: 999px;
      border: none;
      background: var(--toggle-off, #D5D8DE);
      position: relative;
      flex-shrink: 0;
      cursor: pointer;
      padding: 0;
      transition: background .15s;
    }
    .gtoggle-switch::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      transition: left .15s;
      box-shadow: 0 1px 2px rgba(0,0,0,.25);
    }
    .gtoggle-switch.on {
      background: var(--accent, #17499E);
    }
    .gtoggle-switch.on::after {
      left: 21px;
    }
    .gtoggle-switch:disabled {
      opacity: .4;
      cursor: not-allowed;
    }
    .gtoggle-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-heading, #14161a);
      line-height: 1.4;
      cursor: pointer;
    }
    .gtoggle-label.is-disabled {
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Toggle (switch) element.
 * @param {Object} args
 * @param {boolean} [args.checked=false] - whether the toggle is on
 * @param {boolean} [args.disabled=false] - whether the toggle is disabled
 * @param {string} [args.label=''] - optional label text shown next to the switch
 * @param {(checked: boolean, event: MouseEvent) => void} [args.onChange]
 * @returns {HTMLDivElement}
 */
export function createToggle(args = {}) {
  injectStylesOnce();

  const {
    checked = false,
    disabled = false,
    label = '',
    onChange,
  } = args;

  let isChecked = checked;

  const root = document.createElement('div');
  root.className = 'gtoggle-row';

  const switchBtn = document.createElement('button');
  switchBtn.type = 'button';
  switchBtn.className = 'gtoggle-switch' + (isChecked ? ' on' : '');
  switchBtn.setAttribute('role', 'switch');
  switchBtn.setAttribute('aria-checked', String(isChecked));
  switchBtn.disabled = disabled;

  let labelEl = null;
  if (label) {
    labelEl = document.createElement('span');
    labelEl.className = 'gtoggle-label' + (disabled ? ' is-disabled' : '');
    labelEl.textContent = label;
    if (disabled) labelEl.setAttribute('aria-disabled', 'true');
  }

  function toggle(event) {
    if (disabled) return;
    isChecked = !isChecked;
    switchBtn.classList.toggle('on', isChecked);
    switchBtn.setAttribute('aria-checked', String(isChecked));
    if (typeof onChange === 'function') onChange(isChecked, event);
  }

  switchBtn.addEventListener('click', toggle);
  if (labelEl) labelEl.addEventListener('click', toggle);

  if (labelEl) root.appendChild(labelEl);
  root.appendChild(switchBtn);

  return root;
}

export default createToggle;
