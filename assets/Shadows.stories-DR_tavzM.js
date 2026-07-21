import{i as e}from"./preload-helper-BdFrVu1K.js";import{l as t,r as n}from"./foundations-BJzSJudw.js";var r,i,a;e((()=>{t(),r={title:`Foundations/Shadows`},i={render:()=>{let e=document.createElement(`div`);return e.className=`fnd-wrap`,e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Shadows</div>
        <h1>Three lifts, clear hierarchy</h1>
        <p>A small, deliberate set. Each step adds spread and a touch more opacity — never sacrificing the impression that the surface still belongs to the page.</p>
      </div>
      <div class="shadow-row">${n.map(e=>`<div class="shadow-card">
        <div class="shadow-stage">
          <div class="shadow-base"></div>
          <div class="shadow-top ${e.key}"></div>
        </div>
        <div class="shadow-meta">
          <div class="name">${e.name}</div>
          <div class="token">${e.token}</div>
          <div class="value">${e.value}</div>
          <div class="desc">${e.desc}</div>
        </div>
      </div>`).join(``)}</div>
    `,e}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    const cards = SHADOWS.map(s => \`<div class="shadow-card">
        <div class="shadow-stage">
          <div class="shadow-base"></div>
          <div class="shadow-top \${s.key}"></div>
        </div>
        <div class="shadow-meta">
          <div class="name">\${s.name}</div>
          <div class="token">\${s.token}</div>
          <div class="value">\${s.value}</div>
          <div class="desc">\${s.desc}</div>
        </div>
      </div>\`).join('');
    el.innerHTML = \`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Shadows</div>
        <h1>Three lifts, clear hierarchy</h1>
        <p>A small, deliberate set. Each step adds spread and a touch more opacity — never sacrificing the impression that the surface still belongs to the page.</p>
      </div>
      <div class="shadow-row">\${cards}</div>
    \`;
    return el;
  }
}`,...i.parameters?.docs?.source}}},a=[`Default`]}))();export{i as Default,a as __namedExportsOrder,r as default};