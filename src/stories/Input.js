// input.js
// Geniome — Input component (Storybook HTML/Vite)

const ICONS = {
  search: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-4.35-4.35" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  mail: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  user: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M4.5 20c1.2-4 4-6 7.5-6s6.3 2 7.5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  lock: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  eye: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>`,
  check: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M4 12.5l5.5 5.5L20 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevron: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .ginput-wrap {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-family: var(--font-body, sans-serif);
      width: 280px;
    }
    .ginput-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-heading, #14161a);
    }
    .ginput-field {
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 10px;
      padding: 10px 14px;
      background: var(--bg-page, #fff);
      transition: .12s;
    }
    .ginput-field:focus-within {
      border-color: var(--accent, #17499E);
      box-shadow: 0 0 0 3px var(--accent-tint, #EBF1FD);
    }
    .ginput-field.error {
      border-color: var(--destructive, #C0392B);
    }
    .ginput-field.error:focus-within {
      box-shadow: 0 0 0 3px var(--destructive-tint, #FBEAE8);
    }
    .ginput-field.disabled {
      background: var(--bg-sunken, #F6F7FA);
    }
    .ginput-field.textarea {
      align-items: flex-start;
    }
    .ginput-icon {
      color: var(--text-muted, #6b7280);
      flex-shrink: 0;
      display: flex;
    }
    .ginput-icon.clickable {
      cursor: pointer;
    }
    .ginput-country {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-body, #3a3f47);
      padding-right: 10px;
      margin-right: 2px;
      border-right: 1px solid var(--border, #E4E6EB);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .ginput-input {
      border: none;
      outline: none;
      font-family: var(--font-body, sans-serif);
      font-size: 13.5px;
      color: var(--text-heading, #14161a);
      background: transparent;
      width: 100%;
      min-width: 0;
    }
    .ginput-input::placeholder {
      color: var(--text-muted, #6b7280);
    }
    .ginput-input:disabled {
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
    .ginput-textarea {
      border: none;
      outline: none;
      font-family: var(--font-body, sans-serif);
      font-size: 13.5px;
      color: var(--text-heading, #14161a);
      background: transparent;
      width: 100%;
      min-height: 88px;
      resize: vertical;
      line-height: 1.6;
    }
    .ginput-textarea::placeholder {
      color: var(--text-muted, #6b7280);
    }
    .ginput-textarea:disabled {
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
    .ginput-helper {
      font-size: 12px;
      color: var(--text-muted, #6b7280);
      line-height: 1.5;
    }
    .ginput-helper.error {
      color: var(--destructive, #C0392B);
    }
    .ginput-otp {
      display: flex;
      gap: 8px;
    }
    .ginput-otp-box {
      width: 44px;
      height: 48px;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 10px;
      text-align: center;
      font-size: 16px;
      font-family: var(--font-mono, monospace);
      font-weight: 600;
      color: var(--text-heading, #14161a);
      outline: none;
      background: var(--bg-page, #fff);
      transition: .12s;
    }
    .ginput-otp-box:focus {
      border-color: var(--accent, #17499E);
      box-shadow: 0 0 0 3px var(--accent-tint, #EBF1FD);
    }
    .ginput-otp-box.error {
      border-color: var(--destructive, #C0392B);
    }
    .ginput-otp-box.error:focus {
      box-shadow: 0 0 0 3px var(--destructive-tint, #FBEAE8);
    }
    .ginput-otp-box:disabled {
      background: var(--bg-sunken, #F6F7FA);
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Input element.
 * @param {Object} args
 * @param {'text'|'number'|'textbox'|'otp'} [args.type='text']
 * @param {string} [args.label='']
 * @param {string} [args.placeholder='']
 * @param {string} [args.helperText='']
 * @param {boolean} [args.error=false]
 * @param {string} [args.errorMessage='']
 * @param {boolean} [args.disabled=false]
 * @param {boolean} [args.leadingIcon=false]
 * @param {'search'|'mail'|'user'|'lock'} [args.leadingIconType='search']
 * @param {boolean} [args.trailingIcon=false]
 * @param {'eye'|'check'|'chevron'|'close'} [args.trailingIconType='eye']
 * @param {boolean} [args.countryCode=false]
 * @param {string} [args.countryCodeValue='🇮🇳 +91']
 * @param {number} [args.length=4] - number of digit boxes, otp type only
 * @param {string} [args.value='']
 * @param {(event: Event) => void} [args.onChange]
 * @param {(event: MouseEvent) => void} [args.onTrailingIconClick]
 * @returns {HTMLDivElement}
 */
export function createInput(args = {}) {
  injectStylesOnce();

  const {
    type = 'text',
    label = '',
    placeholder = '',
    helperText = '',
    error = false,
    errorMessage = '',
    disabled = false,
    leadingIcon = false,
    leadingIconType = 'search',
    trailingIcon = false,
    trailingIconType = 'eye',
    countryCode = false,
    countryCodeValue = '🇮🇳 +91',
    length = 4,
    value = '',
    onChange,
    onTrailingIconClick,
  } = args;

  const showIcons = type === 'text' || type === 'number';

  const root = document.createElement('div');
  root.className = 'ginput-wrap';

  if (label) {
    const labelEl = document.createElement('div');
    labelEl.className = 'ginput-label';
    labelEl.textContent = label;
    root.appendChild(labelEl);
  }

  if (type === 'textbox') {
    const field = document.createElement('div');
    field.className = 'ginput-field textarea' + (error ? ' error' : '') + (disabled ? ' disabled' : '');

    const textarea = document.createElement('textarea');
    textarea.className = 'ginput-textarea';
    textarea.placeholder = placeholder;
    textarea.disabled = disabled;
    if (value) textarea.value = value;
    if (typeof onChange === 'function') textarea.addEventListener('input', onChange);

    field.appendChild(textarea);
    root.appendChild(field);
  } else if (type === 'otp') {
    const otpWrap = document.createElement('div');
    otpWrap.className = 'ginput-otp';

    const boxes = [];
    for (let i = 0; i < length; i++) {
      const box = document.createElement('input');
      box.className = 'ginput-otp-box' + (error ? ' error' : '');
      box.maxLength = 1;
      box.inputMode = 'numeric';
      box.disabled = disabled;
      box.addEventListener('input', (event) => {
        if (event.target.value && i < length - 1) {
          boxes[i + 1].focus();
        }
        if (typeof onChange === 'function') onChange(event);
      });
      box.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && !box.value && i > 0) {
          boxes[i - 1].focus();
        }
      });
      boxes.push(box);
      otpWrap.appendChild(box);
    }
    root.appendChild(otpWrap);
  } else {
    const field = document.createElement('div');
    field.className = 'ginput-field' + (error ? ' error' : '') + (disabled ? ' disabled' : '');

    if (showIcons && countryCode) {
      const countryEl = document.createElement('span');
      countryEl.className = 'ginput-country';
      countryEl.textContent = countryCodeValue;
      field.appendChild(countryEl);
    }

    if (showIcons && leadingIcon) {
      const leadingEl = document.createElement('span');
      leadingEl.className = 'ginput-icon';
      leadingEl.innerHTML = (ICONS[leadingIconType] ?? ICONS.search)(16);
      field.appendChild(leadingEl);
    }

    const input = document.createElement('input');
    input.className = 'ginput-input';
    input.type = 'text';
    input.inputMode = type === 'number' ? 'numeric' : 'text';
    input.placeholder = placeholder;
    input.disabled = disabled;
    if (value) input.value = value;
    if (typeof onChange === 'function') input.addEventListener('input', onChange);
    field.appendChild(input);

    if (showIcons && trailingIcon) {
      const trailingEl = document.createElement('span');
      trailingEl.className = 'ginput-icon' + (typeof onTrailingIconClick === 'function' ? ' clickable' : '');
      trailingEl.innerHTML = (ICONS[trailingIconType] ?? ICONS.eye)(16);
      if (typeof onTrailingIconClick === 'function') {
        trailingEl.addEventListener('click', onTrailingIconClick);
      }
      field.appendChild(trailingEl);
    }

    root.appendChild(field);
  }

  const helperMessage = error ? (errorMessage || 'Something went wrong.') : helperText;
  if (helperMessage) {
    const helperEl = document.createElement('div');
    helperEl.className = 'ginput-helper' + (error ? ' error' : '');
    helperEl.textContent = helperMessage;
    root.appendChild(helperEl);
  }

  return root;
}

export default createInput;
