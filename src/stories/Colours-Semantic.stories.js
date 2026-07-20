import { registerBaseTokens, registerSemanticTokens, tonalScale, tokenBlock, renderTokens, TEXT_TONES } from '../foundations.js';

export default {
  title: 'Colours/Semantic',
};

/* ===================== SEMANTIC ===================== */
export const Default = {
  render: () => {
    registerBaseTokens();
    registerSemanticTokens();
    const el = document.createElement('div');
    el.className = 'fnd-wrap';

    let html = '';
    html += `<div class="subgroup-label">Text · core roles</div>` + tokenBlock('', '', [
      ['--semantic-colour-text-heading', 'text-heading', 'colour-neutral-900', 'Titles, headings'],
      ['--semantic-colour-text-body', 'text-body', 'colour-neutral-700', 'Default body copy'],
      ['--semantic-colour-text-muted', 'text-muted', 'colour-neutral-500', 'Secondary / caption text'],
      ['--semantic-colour-text-disabled', 'text-disabled', 'colour-neutral-400', 'Disabled control labels'],
      ['--semantic-colour-text-inverse', 'text-inverse', 'colour-neutral-white', 'Text on filled/dark surfaces'],
      ['--semantic-colour-text-link', 'text-link', 'colour-cobalt-600', 'Inline links'],
    ]);
    html += `<div class="subgroup-label">Text · tonal shades — routed as text-{tone}-{shade}</div>`;
    TEXT_TONES.forEach(([prefix, hue, steps]) => {
      html += `<div class="token-group"><div class="token-list">${renderTokens(tonalScale(prefix, hue, steps))}</div></div>`;
    });
    html += `<div class="subgroup-label">Surface · core roles</div>` + tokenBlock('', '', [
      ['--semantic-colour-bg-canvas', 'bg-canvas', 'colour-neutral-50', 'Page / app background'],
      ['--semantic-colour-bg-surface', 'bg-surface', 'colour-neutral-white', 'Cards, panels, sheets'],
      ['--semantic-colour-bg-surface-raised', 'bg-surface-raised', 'colour-neutral-white', 'Modals, popovers'],
      ['--semantic-colour-bg-sunken', 'bg-sunken', 'colour-neutral-100', 'Insets, wells, code blocks'],
    ]);
    html += `<div class="subgroup-label">Surface · tonal shades</div><div class="token-group"><div class="token-list">${renderTokens(tonalScale('surface', 'neutral', [300, 200, 100, 50, 'white']))}</div></div>`;
    html += `<div class="subgroup-label">Border · core roles</div>` + tokenBlock('', '', [
      ['--semantic-colour-border-default', 'border-default', 'colour-neutral-200', 'Default dividers, input borders'],
      ['--semantic-colour-border-strong', 'border-strong', 'colour-neutral-400', 'Emphasised borders'],
      ['--semantic-colour-border-focus', 'border-focus', 'colour-cobalt-500', 'Focus rings / active input'],
    ]);
    html += `<div class="subgroup-label">Border · tonal shades</div><div class="token-group"><div class="token-list">${renderTokens(tonalScale('border', 'neutral', [500, 400, 300, 200, 100]))}</div></div>`;
    html += `<div class="subgroup-label">Icon · core roles</div>` + tokenBlock('', '', [
      ['--semantic-colour-icon-default', 'icon-default', 'colour-neutral-600', 'Standalone & inline icons'],
      ['--semantic-colour-icon-muted', 'icon-muted', 'colour-neutral-400', 'Decorative / low-emphasis icons'],
    ]);
    html += `<div class="subgroup-label">Icon · tonal shades</div><div class="token-group"><div class="token-list">${renderTokens(tonalScale('icon', 'neutral', [900, 700, 500, 400, 300]))}</div></div>`;
    html += `<div class="subgroup-label">Static · theme-invariant anchors</div><div class="token-group"><p class="group-note">Static tokens hold their value regardless of light/dark theme.</p><div class="token-list">${renderTokens(tonalScale('static', 'neutral', ['black', 900, 100, 50, 'white']))}</div></div>`;
    html += `<div class="subgroup-label">Action</div>` + tokenBlock('', '', [
      ['--semantic-colour-action-primary-default', 'action-primary-default', 'colour-cobalt-600', 'Primary button / CTA fill'],
      ['--semantic-colour-action-primary-hover', 'action-primary-hover', 'colour-cobalt-700', 'Primary hover state'],
      ['--semantic-colour-action-primary-active', 'action-primary-active', 'colour-cobalt-800', 'Primary pressed state'],
      ['--semantic-colour-action-secondary-default', 'action-secondary-default', 'colour-slate-600', 'Secondary emphasis actions'],
    ]);
    html += `<div class="subgroup-label">Feedback</div>` + tokenBlock('', '', [
      ['--semantic-colour-feedback-success', 'feedback-success', 'colour-emerald-600', 'Success states & messaging'],
      ['--semantic-colour-feedback-warning', 'feedback-warning', 'colour-bumblebee-600', 'Warning states & messaging'],
      ['--semantic-colour-feedback-error', 'feedback-error', 'colour-crimson-600', 'Error / destructive states'],
      ['--semantic-colour-feedback-info', 'feedback-info', 'colour-sky-600', 'Informational states'],
    ]);

    el.innerHTML = `
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>Meaning-bearing tokens</h1>
        <p>Semantic tokens bind base palette shades to roles in the UI. Component code never references a base colour directly — it always asks for a semantic role (e.g. <code>--semantic-colour-text-heading</code>) so themes can swap underneath.</p>
      </div>
      ${html}
    `;
    return el;
  },
};
