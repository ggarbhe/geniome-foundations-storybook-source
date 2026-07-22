// Real component: pure function of props → DOM element.

const TONE_COLORS = {
  default: { lightBg: '#F1F2F4', lightText: '#3a3f47', heavyBg: '#4B5563' },
  success: { lightBg: '#EAF7EE', lightText: '#1E9E4E', heavyBg: '#1E9E4E' },
  warning: { lightBg: '#FDF6E5', lightText: '#B7791F', heavyBg: '#B7791F' },
  error:   { lightBg: '#FCEAEA', lightText: '#C0392B', heavyBg: '#C0392B' },
  info:    { lightBg: '#EEF3FC', lightText: '#17499E', heavyBg: '#17499E' },
};
const LEADING_GLYPH = { warning: '!', dot: '●', star: '★' };
const TRAILING_GLYPH = { cross: '✕', down: '⌄' };

export function createBadge({
  tone = 'default',
  style = 'light',
  children = 'Badge Text',
  leadingIcon = true,
  leadingIconType = 'warning',
  enableNumberBadge = false,
  numberBadge = 2,
  trailingIcon = true,
  trailingIconType = 'cross',
  onTrailingClick = () => {},
} = {}) {
  const c = TONE_COLORS[tone];
  const isHeavy = style === 'heavy';
  const textColor = isHeavy ? '#ffffff' : c.lightText;
  const bg = isHeavy ? c.heavyBg : c.lightBg;

  const root = document.createElement('span');
  root.style.cssText = `
    display:inline-flex; align-items:center; gap:6px; border-radius:999px; font-weight:600;
    white-space:nowrap; padding:6px 12px; font-size:12.5px; font-family:'Inter',sans-serif;
    background:${bg}; color:${textColor};
  `;

  let html = '';
  if (leadingIcon) {
    html += `<span style="font-size:11px;">${LEADING_GLYPH[leadingIconType]}</span>`;
  }
  html += `<span>${children}</span>`;
  if (enableNumberBadge) {
    const numBg = isHeavy ? 'rgba(255,255,255,.3)' : c.heavyBg;
    html += `<span style="display:inline-flex; align-items:center; justify-content:center; width:17px; height:17px; border-radius:50%; font-size:10px; font-weight:700; background:${numBg}; color:#fff;">${numberBadge}</span>`;
  }
  if (trailingIcon) {
    html += `<span data-role="trailing" style="font-size:11px; cursor:pointer;">${TRAILING_GLYPH[trailingIconType]}</span>`;
  }

  root.innerHTML = html;

  const trailingEl = root.querySelector('[data-role="trailing"]');
  if (trailingEl) trailingEl.addEventListener('click', onTrailingClick);

  return root;
}
