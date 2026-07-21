// Real component: pure function of props → DOM element.

const ICON_GLYPH = { info: 'i', warning: '!', warning2: '!!', star: '★' };
const VARIANT_COLORS = {
  default: { bg: '#EEF3FC', border: '#CBDCF6', icon: '#17499E' },
  success: { bg: '#EAF7EE', border: '#CDEBD6', icon: '#1E9E4E' },
  warning: { bg: '#FDF6E5', border: '#F3E3AE', icon: '#B7791F' },
  danger:  { bg: '#FCEAEA', border: '#F3C6C6', icon: '#C0392B' },
};

export function createAlert({
  variant = 'default',
  title = 'New App version available',
  description = 'Update your app now to experience latest features on the app',
  leadingIcon = true,
  leadingIconType = 'info',
  trailingIcon = true,
  showAction = true,
  showAction1 = true,
  action1Label = 'Learn more',
  action1ShowIcon = false,
  showAction2 = true,
  action2Label = 'Button Text',
  action2ShowIcon = true,
  onDismiss = () => {},
  onAction1 = () => {},
  onAction2 = () => {},
} = {}) {
  const v = VARIANT_COLORS[variant];

  const root = document.createElement('div');
  root.style.cssText = `
    width:340px; border-radius:14px; padding:18px; display:flex; gap:12px; align-items:flex-start;
    position:relative; border:1px solid ${v.border}; background:${v.bg}; font-family:'Inter',sans-serif;
  `;

  let html = '';

  if (leadingIcon) {
    html += `<div style="width:26px; height:26px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; color:#fff; font-size:13px; font-weight:700; margin-top:1px; background:${v.icon};">${ICON_GLYPH[leadingIconType]}</div>`;
  }

  html += `<div style="flex:1; min-width:0;">`;
  html += `<p style="font-weight:600; font-size:14.5px; color:#14161a; margin:0 0 4px;">${title}</p>`;
  if (description) {
    html += `<p style="font-size:13px; color:#6b7280; line-height:1.5; margin:0 0 12px;">${description}</p>`;
  }
  if (showAction && (showAction1 || showAction2)) {
    html += `<div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">`;
    if (showAction1) {
      html += `<a data-role="action1" style="font-size:13px; font-weight:600; color:#14161a; text-decoration:none; cursor:pointer;">${action1Label}${action1ShowIcon ? ' →' : ''}</a>`;
    }
    if (showAction2) {
      html += `<a data-role="action2" style="font-size:13px; font-weight:600; color:#14161a; text-decoration:none; cursor:pointer;">${action2Label}${action2ShowIcon ? ' →' : ''}</a>`;
    }
    html += `</div>`;
  }
  html += `</div>`;

  if (trailingIcon) {
    html += `<button data-role="dismiss" style="position:absolute; top:14px; right:14px; background:none; border:none; cursor:pointer; color:#6b7280; font-size:13px; line-height:1; padding:3px;">✕</button>`;
  }

  root.innerHTML = html;

  const dismissBtn = root.querySelector('[data-role="dismiss"]');
  if (dismissBtn) dismissBtn.addEventListener('click', onDismiss);
  const a1 = root.querySelector('[data-role="action1"]');
  if (a1) a1.addEventListener('click', onAction1);
  const a2 = root.querySelector('[data-role="action2"]');
  if (a2) a2.addEventListener('click', onAction2);

  return root;
}
