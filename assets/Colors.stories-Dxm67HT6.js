import{r as e}from"./preload-helper-CGrDLHbs.js";import{a as t,c as n,d as r,f as i,h as a,l as o,m as s,o as c,p as l,t as u,u as d}from"./foundations-Dt6yCKxf.js";var f,p,m,h,g;e((()=>{o(),f={title:`Foundations/Colors`},p={render:()=>{d();let e=document.createElement(`div`);e.className=`fnd-wrap`,e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>The raw palette</h1>
        <p>Ten palettes, ninety chromatic shades plus pure neutrals. Authored in Figma with HSL and rendered through Display-P3 for full vibrancy on wide-gamut displays.</p>
      </div>
      <div id="base-grid"></div>
    `;let r=e.querySelector(`#base-grid`);return u.forEach(e=>{let i=document.createElement(`div`);i.className=`palette-block`;let a=document.createElement(`h3`);a.textContent=e.name,i.appendChild(a);let o=document.createElement(`div`);o.className=`swatch-grid`,t.forEach(t=>{let r=n(e.name,t),i=document.createElement(`div`);i.className=`swatch-card`,i.innerHTML=`<div class="swatch-rect" style="background:${r}"></div>
          <div class="swatch-cap"><span class="step">${t}</span><span class="hsl">${r.replace(`hsl(`,``).replace(`)`,``)}</span></div>`,o.appendChild(i)}),i.appendChild(o),r.appendChild(i)}),e}},m={render:()=>{d(),i();let e=document.createElement(`div`);e.className=`fnd-wrap`;let t=``;return t+=`<div class="subgroup-label">Text · core roles</div>`+s(``,``,[[`--semantic-colour-text-heading`,`text-heading`,`colour-neutral-900`,`Titles, headings`],[`--semantic-colour-text-body`,`text-body`,`colour-neutral-700`,`Default body copy`],[`--semantic-colour-text-muted`,`text-muted`,`colour-neutral-500`,`Secondary / caption text`],[`--semantic-colour-text-disabled`,`text-disabled`,`colour-neutral-400`,`Disabled control labels`],[`--semantic-colour-text-inverse`,`text-inverse`,`colour-neutral-white`,`Text on filled/dark surfaces`],[`--semantic-colour-text-link`,`text-link`,`colour-cobalt-600`,`Inline links`]]),t+=`<div class="subgroup-label">Text · tonal shades — routed as text-{tone}-{shade}</div>`,c.forEach(([e,n,r])=>{t+=`<div class="token-group"><div class="token-list">${l(a(e,n,r))}</div></div>`}),t+=`<div class="subgroup-label">Surface · core roles</div>`+s(``,``,[[`--semantic-colour-bg-canvas`,`bg-canvas`,`colour-neutral-50`,`Page / app background`],[`--semantic-colour-bg-surface`,`bg-surface`,`colour-neutral-white`,`Cards, panels, sheets`],[`--semantic-colour-bg-surface-raised`,`bg-surface-raised`,`colour-neutral-white`,`Modals, popovers`],[`--semantic-colour-bg-sunken`,`bg-sunken`,`colour-neutral-100`,`Insets, wells, code blocks`]]),t+=`<div class="subgroup-label">Surface · tonal shades</div><div class="token-group"><div class="token-list">${l(a(`surface`,`neutral`,[300,200,100,50,`white`]))}</div></div>`,t+=`<div class="subgroup-label">Border · core roles</div>`+s(``,``,[[`--semantic-colour-border-default`,`border-default`,`colour-neutral-200`,`Default dividers, input borders`],[`--semantic-colour-border-strong`,`border-strong`,`colour-neutral-400`,`Emphasised borders`],[`--semantic-colour-border-focus`,`border-focus`,`colour-cobalt-500`,`Focus rings / active input`]]),t+=`<div class="subgroup-label">Border · tonal shades</div><div class="token-group"><div class="token-list">${l(a(`border`,`neutral`,[500,400,300,200,100]))}</div></div>`,t+=`<div class="subgroup-label">Icon · core roles</div>`+s(``,``,[[`--semantic-colour-icon-default`,`icon-default`,`colour-neutral-600`,`Standalone & inline icons`],[`--semantic-colour-icon-muted`,`icon-muted`,`colour-neutral-400`,`Decorative / low-emphasis icons`]]),t+=`<div class="subgroup-label">Icon · tonal shades</div><div class="token-group"><div class="token-list">${l(a(`icon`,`neutral`,[900,700,500,400,300]))}</div></div>`,t+=`<div class="subgroup-label">Static · theme-invariant anchors</div><div class="token-group"><p class="group-note">Static tokens hold their value regardless of light/dark theme.</p><div class="token-list">${l(a(`static`,`neutral`,[`black`,900,100,50,`white`]))}</div></div>`,t+=`<div class="subgroup-label">Action</div>`+s(``,``,[[`--semantic-colour-action-primary-default`,`action-primary-default`,`colour-cobalt-600`,`Primary button / CTA fill`],[`--semantic-colour-action-primary-hover`,`action-primary-hover`,`colour-cobalt-700`,`Primary hover state`],[`--semantic-colour-action-primary-active`,`action-primary-active`,`colour-cobalt-800`,`Primary pressed state`],[`--semantic-colour-action-secondary-default`,`action-secondary-default`,`colour-slate-600`,`Secondary emphasis actions`]]),t+=`<div class="subgroup-label">Feedback</div>`+s(``,``,[[`--semantic-colour-feedback-success`,`feedback-success`,`colour-emerald-600`,`Success states & messaging`],[`--semantic-colour-feedback-warning`,`feedback-warning`,`colour-bumblebee-600`,`Warning states & messaging`],[`--semantic-colour-feedback-error`,`feedback-error`,`colour-crimson-600`,`Error / destructive states`],[`--semantic-colour-feedback-info`,`feedback-info`,`colour-sky-600`,`Informational states`]]),e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>Meaning-bearing tokens</h1>
        <p>Semantic tokens bind base palette shades to roles in the UI. Component code never references a base colour directly — it always asks for a semantic role (e.g. <code>--semantic-colour-text-heading</code>) so themes can swap underneath.</p>
      </div>
      ${t}
    `,e}},h={render:()=>{d(),i(),r();let e=document.createElement(`div`);return e.className=`fnd-wrap`,e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>Slot-level overrides per component</h1>
        <p>Component tokens narrow semantic colours down to specific slots — <code>button-primary-default-background</code>, <code>alert-error-stroke</code>, <code>tooltip-heading</code>. They give every component a stable contract even as the underlying palette evolves.</p>
      </div>
      ${`<div class="subgroup-label">Button</div>`+s(``,``,[[`--component-button-primary-default-background`,`button-primary-default-background`,`semantic action-primary-default`,`Primary fill, resting`],[`--component-button-primary-hover-background`,`button-primary-hover-background`,`semantic action-primary-hover`,`Primary fill, hover`],[`--component-button-primary-active-background`,`button-primary-active-background`,`semantic action-primary-active`,`Primary fill, pressed`],[`--component-button-primary-default-text`,`button-primary-default-text`,`semantic text-inverse`,`Primary label colour`],[`--component-button-secondary-default-background`,`button-secondary-default-background`,`semantic bg-surface`,`Secondary fill`],[`--component-button-secondary-default-border`,`button-secondary-default-border`,`semantic border-default`,`Secondary outline`]])+`<div class="subgroup-label">Alert</div>`+s(``,``,[[`--component-alert-error-background`,`alert-error-background`,`colour-crimson-50`,`Error tint (documented exception)`],[`--component-alert-error-stroke`,`alert-error-stroke`,`semantic feedback-error`,`Error border`],[`--component-alert-error-text`,`alert-error-text`,`colour-crimson-800`,`Error copy, tuned for AA on the tint`],[`--component-alert-success-background`,`alert-success-background`,`colour-emerald-50`,`Success tint`],[`--component-alert-success-stroke`,`alert-success-stroke`,`semantic feedback-success`,`Success border`]])+`<div class="subgroup-label">Tooltip</div>`+s(``,``,[[`--component-tooltip-background`,`tooltip-background`,`colour-neutral-900`,`Always dark, regardless of theme`],[`--component-tooltip-heading`,`tooltip-heading`,`colour-neutral-white`,`Tooltip title`],[`--component-tooltip-body`,`tooltip-body`,`colour-neutral-200`,`Tooltip body copy`]])+`<div class="subgroup-label">Input</div>`+s(``,``,[[`--component-input-default-border`,`input-default-border`,`semantic border-default`,`Resting border`],[`--component-input-hover-border`,`input-hover-border`,`semantic border-strong`,`Hover border`],[`--component-input-focus-border`,`input-focus-border`,`semantic border-focus`,`Focus border`],[`--component-input-error-border`,`input-error-border`,`semantic feedback-error`,`Validation error border`],[`--component-input-placeholder-text`,`input-placeholder-text`,`semantic text-muted`,`Placeholder copy`]])+`<div class="subgroup-label">Badge</div>`+s(``,``,[[`--component-badge-success-background`,`badge-success-background`,`colour-emerald-100`,`Success badge fill`],[`--component-badge-success-text`,`badge-success-text`,`colour-emerald-800`,`Success badge label`]])}
    `,e}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    registerBaseTokens();
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    el.innerHTML = \`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>The raw palette</h1>
        <p>Ten palettes, ninety chromatic shades plus pure neutrals. Authored in Figma with HSL and rendered through Display-P3 for full vibrancy on wide-gamut displays.</p>
      </div>
      <div id="base-grid"></div>
    \`;
    const grid = el.querySelector('#base-grid');
    PALETTES.forEach(p => {
      const block = document.createElement('div');
      block.className = 'palette-block';
      const h3 = document.createElement('h3');
      h3.textContent = p.name;
      block.appendChild(h3);
      const swatchGrid = document.createElement('div');
      swatchGrid.className = 'swatch-grid';
      STEPS.forEach(step => {
        const hsl = hslFor(p.name, step);
        const card = document.createElement('div');
        card.className = 'swatch-card';
        card.innerHTML = \`<div class="swatch-rect" style="background:\${hsl}"></div>
          <div class="swatch-cap"><span class="step">\${step}</span><span class="hsl">\${hsl.replace('hsl(', '').replace(')', '')}</span></div>\`;
        swatchGrid.appendChild(card);
      });
      block.appendChild(swatchGrid);
      grid.appendChild(block);
    });
    return el;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    registerBaseTokens();
    registerSemanticTokens();
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    let html = '';
    html += \`<div class="subgroup-label">Text · core roles</div>\` + tokenBlock('', '', [['--semantic-colour-text-heading', 'text-heading', 'colour-neutral-900', 'Titles, headings'], ['--semantic-colour-text-body', 'text-body', 'colour-neutral-700', 'Default body copy'], ['--semantic-colour-text-muted', 'text-muted', 'colour-neutral-500', 'Secondary / caption text'], ['--semantic-colour-text-disabled', 'text-disabled', 'colour-neutral-400', 'Disabled control labels'], ['--semantic-colour-text-inverse', 'text-inverse', 'colour-neutral-white', 'Text on filled/dark surfaces'], ['--semantic-colour-text-link', 'text-link', 'colour-cobalt-600', 'Inline links']]);
    html += \`<div class="subgroup-label">Text · tonal shades — routed as text-{tone}-{shade}</div>\`;
    TEXT_TONES.forEach(([prefix, hue, steps]) => {
      html += \`<div class="token-group"><div class="token-list">\${renderTokens(tonalScale(prefix, hue, steps))}</div></div>\`;
    });
    html += \`<div class="subgroup-label">Surface · core roles</div>\` + tokenBlock('', '', [['--semantic-colour-bg-canvas', 'bg-canvas', 'colour-neutral-50', 'Page / app background'], ['--semantic-colour-bg-surface', 'bg-surface', 'colour-neutral-white', 'Cards, panels, sheets'], ['--semantic-colour-bg-surface-raised', 'bg-surface-raised', 'colour-neutral-white', 'Modals, popovers'], ['--semantic-colour-bg-sunken', 'bg-sunken', 'colour-neutral-100', 'Insets, wells, code blocks']]);
    html += \`<div class="subgroup-label">Surface · tonal shades</div><div class="token-group"><div class="token-list">\${renderTokens(tonalScale('surface', 'neutral', [300, 200, 100, 50, 'white']))}</div></div>\`;
    html += \`<div class="subgroup-label">Border · core roles</div>\` + tokenBlock('', '', [['--semantic-colour-border-default', 'border-default', 'colour-neutral-200', 'Default dividers, input borders'], ['--semantic-colour-border-strong', 'border-strong', 'colour-neutral-400', 'Emphasised borders'], ['--semantic-colour-border-focus', 'border-focus', 'colour-cobalt-500', 'Focus rings / active input']]);
    html += \`<div class="subgroup-label">Border · tonal shades</div><div class="token-group"><div class="token-list">\${renderTokens(tonalScale('border', 'neutral', [500, 400, 300, 200, 100]))}</div></div>\`;
    html += \`<div class="subgroup-label">Icon · core roles</div>\` + tokenBlock('', '', [['--semantic-colour-icon-default', 'icon-default', 'colour-neutral-600', 'Standalone & inline icons'], ['--semantic-colour-icon-muted', 'icon-muted', 'colour-neutral-400', 'Decorative / low-emphasis icons']]);
    html += \`<div class="subgroup-label">Icon · tonal shades</div><div class="token-group"><div class="token-list">\${renderTokens(tonalScale('icon', 'neutral', [900, 700, 500, 400, 300]))}</div></div>\`;
    html += \`<div class="subgroup-label">Static · theme-invariant anchors</div><div class="token-group"><p class="group-note">Static tokens hold their value regardless of light/dark theme.</p><div class="token-list">\${renderTokens(tonalScale('static', 'neutral', ['black', 900, 100, 50, 'white']))}</div></div>\`;
    html += \`<div class="subgroup-label">Action</div>\` + tokenBlock('', '', [['--semantic-colour-action-primary-default', 'action-primary-default', 'colour-cobalt-600', 'Primary button / CTA fill'], ['--semantic-colour-action-primary-hover', 'action-primary-hover', 'colour-cobalt-700', 'Primary hover state'], ['--semantic-colour-action-primary-active', 'action-primary-active', 'colour-cobalt-800', 'Primary pressed state'], ['--semantic-colour-action-secondary-default', 'action-secondary-default', 'colour-slate-600', 'Secondary emphasis actions']]);
    html += \`<div class="subgroup-label">Feedback</div>\` + tokenBlock('', '', [['--semantic-colour-feedback-success', 'feedback-success', 'colour-emerald-600', 'Success states & messaging'], ['--semantic-colour-feedback-warning', 'feedback-warning', 'colour-bumblebee-600', 'Warning states & messaging'], ['--semantic-colour-feedback-error', 'feedback-error', 'colour-crimson-600', 'Error / destructive states'], ['--semantic-colour-feedback-info', 'feedback-info', 'colour-sky-600', 'Informational states']]);
    el.innerHTML = \`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>Meaning-bearing tokens</h1>
        <p>Semantic tokens bind base palette shades to roles in the UI. Component code never references a base colour directly — it always asks for a semantic role (e.g. <code>--semantic-colour-text-heading</code>) so themes can swap underneath.</p>
      </div>
      \${html}
    \`;
    return el;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    registerBaseTokens();
    registerSemanticTokens();
    registerComponentTokens();
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    const html = \`<div class="subgroup-label">Button</div>\` + tokenBlock('', '', [['--component-button-primary-default-background', 'button-primary-default-background', 'semantic action-primary-default', 'Primary fill, resting'], ['--component-button-primary-hover-background', 'button-primary-hover-background', 'semantic action-primary-hover', 'Primary fill, hover'], ['--component-button-primary-active-background', 'button-primary-active-background', 'semantic action-primary-active', 'Primary fill, pressed'], ['--component-button-primary-default-text', 'button-primary-default-text', 'semantic text-inverse', 'Primary label colour'], ['--component-button-secondary-default-background', 'button-secondary-default-background', 'semantic bg-surface', 'Secondary fill'], ['--component-button-secondary-default-border', 'button-secondary-default-border', 'semantic border-default', 'Secondary outline']]) + \`<div class="subgroup-label">Alert</div>\` + tokenBlock('', '', [['--component-alert-error-background', 'alert-error-background', 'colour-crimson-50', 'Error tint (documented exception)'], ['--component-alert-error-stroke', 'alert-error-stroke', 'semantic feedback-error', 'Error border'], ['--component-alert-error-text', 'alert-error-text', 'colour-crimson-800', 'Error copy, tuned for AA on the tint'], ['--component-alert-success-background', 'alert-success-background', 'colour-emerald-50', 'Success tint'], ['--component-alert-success-stroke', 'alert-success-stroke', 'semantic feedback-success', 'Success border']]) + \`<div class="subgroup-label">Tooltip</div>\` + tokenBlock('', '', [['--component-tooltip-background', 'tooltip-background', 'colour-neutral-900', 'Always dark, regardless of theme'], ['--component-tooltip-heading', 'tooltip-heading', 'colour-neutral-white', 'Tooltip title'], ['--component-tooltip-body', 'tooltip-body', 'colour-neutral-200', 'Tooltip body copy']]) + \`<div class="subgroup-label">Input</div>\` + tokenBlock('', '', [['--component-input-default-border', 'input-default-border', 'semantic border-default', 'Resting border'], ['--component-input-hover-border', 'input-hover-border', 'semantic border-strong', 'Hover border'], ['--component-input-focus-border', 'input-focus-border', 'semantic border-focus', 'Focus border'], ['--component-input-error-border', 'input-error-border', 'semantic feedback-error', 'Validation error border'], ['--component-input-placeholder-text', 'input-placeholder-text', 'semantic text-muted', 'Placeholder copy']]) + \`<div class="subgroup-label">Badge</div>\` + tokenBlock('', '', [['--component-badge-success-background', 'badge-success-background', 'colour-emerald-100', 'Success badge fill'], ['--component-badge-success-text', 'badge-success-text', 'colour-emerald-800', 'Success badge label']]);
    el.innerHTML = \`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>Slot-level overrides per component</h1>
        <p>Component tokens narrow semantic colours down to specific slots — <code>button-primary-default-background</code>, <code>alert-error-stroke</code>, <code>tooltip-heading</code>. They give every component a stable contract even as the underlying palette evolves.</p>
      </div>
      \${html}
    \`;
    return el;
  }
}`,...h.parameters?.docs?.source}}},g=[`Base`,`Semantic`,`Component`]}))();export{p as Base,h as Component,m as Semantic,g as __namedExportsOrder,f as default};