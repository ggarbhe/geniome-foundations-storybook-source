// button.js
// Geniome — Button component (Storybook HTML/Vite)

const VARIANT_STYLE = {
  primary: { bg: 'var(--accent)', border: 'var(--accent)', text: '#ffffff' },
  secondary: { bg: '#ffffff', border: 'var(--border)', text: 'var(--text-heading)' },
  outline: { bg: 'transparent', border: 'var(--accent)', text: 'var(--accent)' },
  ghost: { bg: 'transparent', border: 'transparent', text: 'var(--text-heading)' },
  danger: { bg: 'var(--destructive)', border: 'var(--destructive)', text: '#ffffff' },
};

const SIZE_STYLE = {
  sm: { padding: '7px 14px', fontSize: '12.5px', iconSize: 13 },
  md: { padding: '10px 18px', fontSize: '13.5px', iconSize: 14 },
  lg: { padding: '13px 22px', fontSize: '14.5px', iconSize: 15 },
};

const LEADING_GLYPH = { plus: '+', arrow: '→', download: '⬇' };
const TRAILING_GLYPH = { arrow: '→', chevron: '⌄', external: '↗' };

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    .gbtn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 9px;
      border: 1.5px solid transparent;
      font-family: var(--font-body, sans-serif);
      font-weight: 600;
      cursor: pointer;
      transition: .12s;
      white-space: nowrap;
    }
    .gbtn:disabled {
      cursor: not-allowed;
    }
    .gbtn .gbtn-spinner {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,.4);
      border-top-color: #fff;
      animation: gbtn-spin .7s linear infinite;
      flex-shrink: 0;
    }
    .gbtn.secondary .gbtn-spinner,
    .gbtn.outline .gbtn-spinner,
    .gbtn.ghost .gbtn-spinner {
      border-color: rgba(20,22,26,.25);
      border-top-color: var(--text-heading);
    }
    @keyframes gbtn-spin { to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(style);
}

/**
 * Create a Geniome Button element.
 * @param {Object} args
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'} [args.variant='primary']
 * @param {'sm'|'md'|'lg'} [args.size='md']
 * @param {string} [args.label='Button']
 * @param {boolean} [args.leadingIcon=false]
 * @param {'plus'|'arrow'|'download'} [args.leadingIconType='plus']
 * @param {boolean} [args.trailingIcon=false]
 * @param {'arrow'|'chevron'|'external'} [args.trailingIconType='arrow']
 * @param {boolean} [args.loading=false]
 * @param {boolean} [args.disabled=false]
 * @param {boolean} [args.fullWidth=false]
 * @param {(event: MouseEvent) => void} [args.onClick]
 * @returns {HTMLButtonElement}
 */
export function createButton(args = {}) {
  injectStylesOnce();

  const {
    variant = 'primary',
    size = 'md',
    label = 'Button',
    leadingIcon = false,
    leadingIconType = 'plus',
    trailingIcon = false,
    trailingIconType = 'arrow',
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
  } = args;

  const v = VARIANT_STYLE[variant] ?? VARIANT_STYLE.primary;
  const s = SIZE_STYLE[size] ?? SIZE_STYLE.md;

  const root = document.createElement('button');
  root.type = 'button';
  root.className = `gbtn ${variant}`;
  root.style.background = v.bg;
  root.style.borderColor = v.border;
  root.style.color = v.text;
  root.style.padding = s.padding;
  root.style.fontSize = s.fontSize;
  root.style.width = fullWidth ? '100%' : 'auto';
  root.style.opacity = disabled ? '0.45' : '1';
  root.style.cursor = disabled || loading ? 'not-allowed' : 'pointer';
  root.disabled = disabled || loading;

  const leadingEl = document.createElement('span');
  leadingEl.className = 'gbtn-leading';

  const labelEl = document.createElement('span');
  labelEl.className = 'gbtn-label';
  labelEl.textContent = label;

  const trailingEl = document.createElement('span');
  trailingEl.className = 'gbtn-trailing';

  if (loading) {
    const spinner = document.createElement('span');
    spinner.className = 'gbtn-spinner';
    leadingEl.appendChild(spinner);
    leadingEl.style.display = 'inline-flex';
    trailingEl.style.display = 'none';
  } else {
    leadingEl.style.display = leadingIcon ? 'inline-flex' : 'none';
    leadingEl.textContent = leadingIcon ? LEADING_GLYPH[leadingIconType] : '';

    trailingEl.style.display = trailingIcon ? 'inline-flex' : 'none';
    trailingEl.textContent = trailingIcon ? TRAILING_GLYPH[trailingIconType] : '';
  }

  root.append(leadingEl, labelEl, trailingEl);

  if (typeof onClick === 'function') {
    root.addEventListener('click', onClick);
  }

  return root;
}

export default createButton;
