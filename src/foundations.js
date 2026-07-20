// ============================================================
// Shared foundation token data + render helpers, used by every
// Foundations/* story so the source of truth lives in one place.
// ============================================================

export const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
export const LIGHTNESS = [97, 93, 85, 75, 64, 53, 44, 36, 28, 18];
export const SAT_CURVE = [0.28, 0.38, 0.5, 0.62, 0.76, 0.9, 1.0, 0.94, 0.84, 0.7];

export const PALETTES = [
  { name: 'cobalt', hue: 221, sat: 82 },
  { name: 'sky', hue: 199, sat: 78 },
  { name: 'lavender', hue: 262, sat: 55 },
  { name: 'fuchsia', hue: 292, sat: 70 },
  { name: 'crimson', hue: 350, sat: 75 },
  { name: 'citrus', hue: 28, sat: 85 },
  { name: 'bumblebee', hue: 45, sat: 88 },
  { name: 'emerald', hue: 152, sat: 62 },
  { name: 'slate', hue: 215, sat: 16 },
  { name: 'neutral', hue: 0, sat: 0 },
];

export function hslFor(paletteName, step) {
  const p = PALETTES.find((pp) => pp.name === paletteName);
  const i = STEPS.indexOf(step);
  const l = LIGHTNESS[i];
  const s = p.sat === 0 ? 0 : Math.round(p.sat * SAT_CURVE[i]);
  return `hsl(${p.hue} ${s}% ${l}%)`;
}

// register every base colour token as a real CSS custom property on :root
export function registerBaseTokens() {
  const root = document.documentElement;
  PALETTES.forEach((p) => {
    STEPS.forEach((step) => {
      root.style.setProperty(`--colour-${p.name}-${step}`, hslFor(p.name, step));
    });
  });
  root.style.setProperty('--colour-neutral-white', '#ffffff');
  root.style.setProperty('--colour-neutral-black', '#0a0a0b');
}

export function tonalScale(prefix, hueName, steps) {
  const shades = ['bold', 'primary', 'light', 'extralight', 'subtle'];
  return shades.map((shade, i) => [
    `--semantic-colour-${prefix}-${shade}`,
    `${prefix}-${shade}`,
    `colour-${hueName}-${steps[i]}`,
    `${shade[0].toUpperCase() + shade.slice(1)} ${prefix.split('-').pop()} tone`,
  ]);
}

export function registerTonal(prefix, hueName, steps) {
  const root = document.documentElement;
  const shades = ['bold', 'primary', 'light', 'extralight', 'subtle'];
  shades.forEach((shade, i) => {
    const s = steps[i];
    const val = s === 'white' ? 'var(--colour-neutral-white)' : s === 'black' ? 'var(--colour-neutral-black)' : `var(--colour-${hueName}-${s})`;
    root.style.setProperty(`--semantic-colour-${prefix}-${shade}`, val);
  });
}

export const TEXT_TONES = [
  ['text-heading', 'neutral', [900, 800, 600, 400, 200]],
  ['text-body', 'neutral', [800, 700, 500, 400, 300]],
  ['text-brand', 'cobalt', [800, 600, 400, 200, 100]],
  ['text-error', 'crimson', [800, 600, 400, 200, 100]],
  ['text-warning', 'bumblebee', [800, 600, 400, 200, 100]],
  ['text-success', 'emerald', [800, 600, 400, 200, 100]],
  ['text-secondary', 'slate', [800, 600, 400, 200, 100]],
];

export function registerSemanticTokens() {
  const root = document.documentElement;
  const set = (k, v) => root.style.setProperty(k, v);
  set('--semantic-colour-bg-canvas', 'var(--colour-neutral-50)');
  set('--semantic-colour-bg-surface', 'var(--colour-neutral-white)');
  set('--semantic-colour-bg-surface-raised', 'var(--colour-neutral-white)');
  set('--semantic-colour-bg-sunken', 'var(--colour-neutral-100)');
  set('--semantic-colour-text-heading', 'var(--colour-neutral-900)');
  set('--semantic-colour-text-body', 'var(--colour-neutral-700)');
  set('--semantic-colour-text-muted', 'var(--colour-neutral-500)');
  set('--semantic-colour-text-disabled', 'var(--colour-neutral-400)');
  set('--semantic-colour-text-inverse', 'var(--colour-neutral-white)');
  set('--semantic-colour-text-link', 'var(--colour-cobalt-600)');
  set('--semantic-colour-border-default', 'var(--colour-neutral-200)');
  set('--semantic-colour-border-strong', 'var(--colour-neutral-400)');
  set('--semantic-colour-border-focus', 'var(--colour-cobalt-500)');
  set('--semantic-colour-icon-default', 'var(--colour-neutral-600)');
  set('--semantic-colour-icon-muted', 'var(--colour-neutral-400)');
  set('--semantic-colour-action-primary-default', 'var(--colour-cobalt-600)');
  set('--semantic-colour-action-primary-hover', 'var(--colour-cobalt-700)');
  set('--semantic-colour-action-primary-active', 'var(--colour-cobalt-800)');
  set('--semantic-colour-action-secondary-default', 'var(--colour-slate-600)');
  set('--semantic-colour-feedback-success', 'var(--colour-emerald-600)');
  set('--semantic-colour-feedback-warning', 'var(--colour-bumblebee-600)');
  set('--semantic-colour-feedback-error', 'var(--colour-crimson-600)');
  set('--semantic-colour-feedback-info', 'var(--colour-sky-600)');

  TEXT_TONES.forEach(([prefix, hue, steps]) => registerTonal(prefix, hue, steps));
  registerTonal('surface', 'neutral', [300, 200, 100, 50, 'white']);
  registerTonal('border', 'neutral', [500, 400, 300, 200, 100]);
  registerTonal('icon', 'neutral', [900, 700, 500, 400, 300]);
  registerTonal('static', 'neutral', ['black', 900, 100, 50, 'white']);
}

export function registerComponentTokens() {
  const root = document.documentElement;
  const set = (k, v) => root.style.setProperty(k, v);
  set('--component-button-primary-default-background', 'var(--semantic-colour-action-primary-default)');
  set('--component-button-primary-hover-background', 'var(--semantic-colour-action-primary-hover)');
  set('--component-button-primary-active-background', 'var(--semantic-colour-action-primary-active)');
  set('--component-button-primary-default-text', 'var(--semantic-colour-text-inverse)');
  set('--component-button-secondary-default-background', 'var(--semantic-colour-bg-surface)');
  set('--component-button-secondary-default-border', 'var(--semantic-colour-border-default)');
  set('--component-alert-error-background', 'var(--colour-crimson-50)');
  set('--component-alert-error-stroke', 'var(--semantic-colour-feedback-error)');
  set('--component-alert-error-text', 'var(--colour-crimson-800)');
  set('--component-alert-success-background', 'var(--colour-emerald-50)');
  set('--component-alert-success-stroke', 'var(--semantic-colour-feedback-success)');
  set('--component-tooltip-background', 'var(--colour-neutral-900)');
  set('--component-tooltip-heading', 'var(--colour-neutral-white)');
  set('--component-tooltip-body', 'var(--colour-neutral-200)');
  set('--component-input-default-border', 'var(--semantic-colour-border-default)');
  set('--component-input-hover-border', 'var(--semantic-colour-border-strong)');
  set('--component-input-focus-border', 'var(--semantic-colour-border-focus)');
  set('--component-input-error-border', 'var(--semantic-colour-feedback-error)');
  set('--component-input-placeholder-text', 'var(--semantic-colour-text-muted)');
  set('--component-badge-success-background', 'var(--colour-emerald-100)');
  set('--component-badge-success-text', 'var(--colour-emerald-800)');
}

export function renderTokens(rows) {
  return rows
    .map(
      ([varName, label, mapsTo, desc]) => `
    <div class="token-row">
      <div class="token-chip" style="background:var(${varName})"></div>
      <div class="token-name">${label}</div>
      <div class="token-mapsto">→ ${mapsTo}</div>
      <div class="token-desc">${desc}</div>
    </div>`
    )
    .join('');
}

export function tokenBlock(title, note, rows) {
  return `<div class="token-group">${title ? `<h4>${title}</h4>` : ''}${
    note ? `<p class="group-note">${note}</p>` : ''
  }<div class="token-list">${renderTokens(rows)}</div></div>`;
}

export const TYPE_STYLES = [
  { name: 'display-xl', size: 64, lh: 68, weight: 800, ls: -2, use: 'Hero headlines, landing page openers' },
  { name: 'display-lg', size: 48, lh: 54, weight: 700, ls: -2, use: 'Section heroes, feature intros' },
  { name: 'heading-xl', size: 36, lh: 44, weight: 700, ls: -1, use: 'Page titles' },
  { name: 'heading-lg', size: 28, lh: 36, weight: 600, ls: -1, use: 'Section headings' },
  { name: 'heading-md', size: 22, lh: 30, weight: 600, ls: 0, use: 'Card titles, modal headers' },
  { name: 'heading-sm', size: 18, lh: 26, weight: 600, ls: 0, use: 'Subheadings, list group titles' },
  { name: 'body-lg', size: 16, lh: 24, weight: 400, ls: 0, use: 'Primary paragraph text' },
  { name: 'body-md', size: 14, lh: 20, weight: 400, ls: 0, use: 'Default UI text, form labels' },
  { name: 'body-sm', size: 13, lh: 18, weight: 400, ls: 1, use: 'Captions, helper text' },
  { name: 'label-xs', size: 11, lh: 14, weight: 600, ls: 4, use: 'Dense UI labels, badges, overlines', upper: true },
];

export const SPACING = [2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 64, 80, 96];
export const RADII = [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 96];

export const SHADOWS = [
  { key: 'light', name: 'Shadow / Light', token: '--shadow-light', value: '0px 1px 10px 0px #0000000f', desc: 'For resting surfaces — list rows, default cards, anything sitting quietly at page level.' },
  { key: 'medium', name: 'Shadow / Medium', token: '--shadow-medium', value: '0px 1px 12px 0px #00000017', desc: 'For surfaces one step up — hover-elevated cards, dropdowns, popovers responding to interaction.' },
  { key: 'dark', name: 'Shadow / Dark', token: '--shadow-dark', value: '0px 1px 16px 0px #00000021', desc: 'For surfaces that float above everything — modals, dialogs, anything demanding full attention.' },
];
