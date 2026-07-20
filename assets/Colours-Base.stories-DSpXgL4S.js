import{r as e}from"./preload-helper-CGrDLHbs.js";import{a as t,c as n,l as r,t as i,u as a}from"./foundations-Dt6yCKxf.js";var o,s,c;e((()=>{r(),o={title:`Colours/Base`},s={render:()=>{a();let e=document.createElement(`div`);e.className=`fnd-wrap`,e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>The raw palette</h1>
        <p>Ten palettes, ninety chromatic shades plus pure neutrals. Authored in Figma with HSL and rendered through Display-P3 for full vibrancy on wide-gamut displays.</p>
      </div>
      <div id="base-grid"></div>
    `;let r=e.querySelector(`#base-grid`);return i.forEach(e=>{let i=document.createElement(`div`);i.className=`palette-block`;let a=document.createElement(`h3`);a.textContent=e.name,i.appendChild(a);let o=document.createElement(`div`);o.className=`swatch-grid`,t.forEach(t=>{let r=n(e.name,t),i=document.createElement(`div`);i.className=`swatch-card`,i.innerHTML=`<div class="swatch-rect" style="background:${r}"></div>
          <div class="swatch-cap"><span class="step">${t}</span><span class="hsl">${r.replace(`hsl(`,``).replace(`)`,``)}</span></div>`,o.appendChild(i)}),i.appendChild(o),r.appendChild(i)}),e}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};