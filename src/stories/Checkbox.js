// checkbox.js
// Geniome — Checkbox component (Storybook HTML/Vite)

const SIZE_STYLE = {
  sm: { box: 16, radius: '5px', font: '12.5px', sub: '11.5px', gap: 8, iconStroke: 2 },
  md: { box: 18, radius: '6px', font: '13.5px', sub: '12.5px', gap: 10, iconStroke: 2 },
  lg: { box: 20, radius: '6px', font: '14.5px', sub: '13px', gap: 10, iconStroke: 2.2 },
};

const checkSvg = (size, stroke) =>
  `<svg width="${size - 6}" height="${size - 6}" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4.5" stroke="#fff" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const dashSvg = (size, stroke) =>
  `<svg width="${size - 6}" height="${size - 6}" viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="#fff" stroke-width="${stroke}" stroke-linecap="round"/></svg>`;

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gcheckbox {
      display: inline-flex;
      align-items: flex-start;
      cursor: pointer;
      font-family: var(--font-body, sans-serif);
      user-select: none;
    }
    .gcheckbox.disabled {
      cursor: not-allowed;
      opacity: .45;
    }
    .gcheckbox-box {
      flex-shrink: 0;
      border: 1.5px solid var(--border, #E4E6EB);
      background: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: .12s;
      margin-top: 1px;
    }
    .gcheckbox-box.checked,
    .gcheckbox-box.indeterminate {
      background: var(--accent, #17499E);
      border-color: var(--accent, #17499E);
    }
    .gcheckbox-box svg {
      display: block;
    }
    .gcheckbox-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .gcheckbox-label {
      font-weight: 500;
      color: var(--text-heading, #14161a);
      line-height: 1.3;
    }
    .gcheckbox-subtext {
      color: var(--text-muted, #6b7280);
      line-height: 1.5;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Checkbox element.
 * @param {Object} args
 * @param {'unchecked'|'checked'|'indeterminate'} [args.state='unchecked']
 * @param {'sm'|'md'|'lg'} [args.size='md']
 * @param {string} [args.label='Checkbox label']
 * @param {string} [args.subtext='']
 * @param {boolean} [args.disabled=false]
 * @param {(event: MouseEvent, nextState: 'unchecked'|'checked') => void} [args.onChange]
 * @returns {HTMLLabelElement}
 */
export function createCheckbox(args = {}) {
  injectStylesOnce();

  const {
    state = 'unchecked',
    size = 'md',
    label = 'Checkbox label',
    subtext = '',
    disabled = false,
    onChange,
  } = args;

  const s = SIZE_STYLE[size] ?? SIZE_STYLE.md;

  const root = document.createElement('label');
  root.className = 'gcheckbox' + (disabled ? ' disabled' : '');
  root.style.gap = s.gap + 'px';

  const box = document.createElement('span');
  box.className =
    'gcheckbox-box' +
    (state === 'checked' ? ' checked' : state === 'indeterminate' ? ' indeterminate' : '');
  box.style.width = s.box + 'px';
  box.style.height = s.box + 'px';
  box.style.borderRadius = s.radius;

  if (state === 'checked') {
    box.innerHTML = checkSvg(s.box, s.iconStroke);
  } else if (state === 'indeterminate') {
    box.innerHTML = dashSvg(s.box, s.iconStroke);
  }

  const textWrap = document.createElement('span');
  textWrap.className = 'gcheckbox-text';

  const labelEl = document.createElement('span');
  labelEl.className = 'gcheckbox-label';
  labelEl.style.fontSize = s.font;
  labelEl.textContent = label;
  textWrap.appendChild(labelEl);

  if (subtext) {
    const subtextEl = document.createElement('span');
    subtextEl.className = 'gcheckbox-subtext';
    subtextEl.style.fontSize = s.sub;
    subtextEl.textContent = subtext;
    textWrap.appendChild(subtextEl);
  }

  root.append(box, textWrap);

  if (!disabled && typeof onChange === 'function') {
    root.addEventListener('click', (event) => {
      const nextState = state === 'checked' ? 'unchecked' : 'checked';
      onChange(event, nextState);
    });
  }

  return root;
}

export default createCheckbox;
