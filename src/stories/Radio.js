// radio.js
// Geniome — Radio component (Storybook HTML/Vite)

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gradio-wrap {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-body, sans-serif);
      cursor: pointer;
      user-select: none;
    }
    .gradio-wrap.disabled {
      cursor: not-allowed;
    }
    .gradio-input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .gradio-circle {
      border-radius: 50%;
      border: 1.8px solid #B7BBC4;
      background: var(--bg-page, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: .14s;
      position: relative;
    }
    .gradio-circle.sm {
      width: 16px;
      height: 16px;
    }
    .gradio-circle.md {
      width: 20px;
      height: 20px;
    }
    .gradio-wrap:hover .gradio-circle {
      border-color: var(--accent, #17499E);
    }
    .gradio-circle.checked {
      border-color: var(--accent, #17499E);
    }
    .gradio-dot {
      border-radius: 50%;
      background: var(--accent, #17499E);
      transform: scale(0);
      transition: .14s;
    }
    .gradio-circle.sm .gradio-dot {
      width: 8px;
      height: 8px;
    }
    .gradio-circle.md .gradio-dot {
      width: 10px;
      height: 10px;
    }
    .gradio-circle.checked .gradio-dot {
      transform: scale(1);
    }
    .gradio-circle.disabled {
      background: var(--bg-sunken, #F6F7FA);
      border-color: var(--border, #E4E6EB);
    }
    .gradio-wrap.disabled:hover .gradio-circle {
      border-color: var(--border, #E4E6EB);
    }
    .gradio-circle.disabled.checked {
      border-color: #B9C3D6;
    }
    .gradio-circle.disabled .gradio-dot {
      background: var(--text-muted, #6b7280);
    }
    .gradio-label {
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-heading, #14161a);
    }
    .gradio-label.sm {
      font-size: 12.5px;
    }
    .gradio-label.disabled {
      color: var(--text-muted, #6b7280);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Radio element.
 * @param {Object} args
 * @param {boolean} [args.checked=false]
 * @param {'sm'|'md'} [args.size='md']
 * @param {boolean} [args.disabled=false]
 * @param {string} [args.label='']
 * @param {string} [args.name='radio-group'] - groups radios so only one can be selected
 * @param {string} [args.value=''] - value submitted when this radio is selected
 * @param {(event: Event) => void} [args.onChange]
 * @returns {HTMLLabelElement}
 */
export function createRadio(args = {}) {
  injectStylesOnce();

  const {
    checked = false,
    size = 'md',
    disabled = false,
    label = '',
    name = 'radio-group',
    value = '',
    onChange,
  } = args;

  const root = document.createElement('label');
  root.className = 'gradio-wrap' + (disabled ? ' disabled' : '');

  const input = document.createElement('input');
  input.type = 'radio';
  input.className = 'gradio-input';
  input.name = name;
  input.value = value;
  input.checked = checked;
  input.disabled = disabled;

  const circle = document.createElement('span');
  circle.className = 'gradio-circle ' + size + (checked ? ' checked' : '') + (disabled ? ' disabled' : '');

  const dot = document.createElement('span');
  dot.className = 'gradio-dot';
  circle.appendChild(dot);

  input.addEventListener('change', (event) => {
    circle.classList.toggle('checked', input.checked);
    if (typeof onChange === 'function') onChange(event);
  });

  root.appendChild(input);
  root.appendChild(circle);

  if (label) {
    const labelEl = document.createElement('span');
    labelEl.className = 'gradio-label ' + size + (disabled ? ' disabled' : '');
    labelEl.textContent = label;
    root.appendChild(labelEl);
  }

  return root;
}

export default createRadio;
