import{i as e}from"./preload-helper-BdFrVu1K.js";import{l as t,n}from"./foundations-BJzSJudw.js";var r,i,a;e((()=>{t(),r={title:`Foundations/Radii`},i={render:()=>{let e=document.createElement(`div`);return e.className=`fnd-wrap`,e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Corner Radius</div>
        <h1>From sharp to round</h1>
        <p>Eleven radii covering everything from input fields to pills and avatars. The round value uses an oversized radius so any element becomes a perfect capsule.</p>
      </div>
      <div class="radius-row">${n.map(e=>`<div class="radius-item">
        <div class="radius-rect" style="border-radius:${e}px;"></div>
        <div class="radius-meta"><div class="val">${e}px</div><div class="token">--radius-${e}</div></div>
      </div>`).join(``)}</div>
    `,e}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    const items = RADII.map(px => \`<div class="radius-item">
        <div class="radius-rect" style="border-radius:\${px}px;"></div>
        <div class="radius-meta"><div class="val">\${px}px</div><div class="token">--radius-\${px}</div></div>
      </div>\`).join('');
    el.innerHTML = \`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Corner Radius</div>
        <h1>From sharp to round</h1>
        <p>Eleven radii covering everything from input fields to pills and avatars. The round value uses an oversized radius so any element becomes a perfect capsule.</p>
      </div>
      <div class="radius-row">\${items}</div>
    \`;
    return el;
  }
}`,...i.parameters?.docs?.source}}},a=[`Default`]}))();export{i as Default,a as __namedExportsOrder,r as default};