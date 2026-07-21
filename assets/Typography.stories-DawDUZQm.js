import{i as e}from"./preload-helper-BdFrVu1K.js";import{l as t,s as n}from"./foundations-BJzSJudw.js";var r,i,a,o;e((()=>{t(),r={title:`Foundations/Typography`},i=`Aa Bb Cc — The quick brown fox jumps over the lazy dog.`,a={render:()=>{let e=document.createElement(`div`);return e.className=`fnd-wrap`,e.innerHTML=`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Typography</div>
        <h1>Reddit Sans, all the way down</h1>
        <p>A single variable font covers every weight from 200 to 900. Ten semantic styles span editorial display to dense UI labels — each with a paired line-height, weight, and a recommended use case.</p>
      </div>
      <div class="type-scale">${n.map(e=>{let t=(e.lh/e.size).toFixed(2),n=(e.ls/1e3).toFixed(3)+`em`;return`<div class="type-card">
        <div class="type-head">
          <div class="style-name">${e.name}</div>
          <div class="specs">
            <span>Font <b>Reddit Sans</b></span>
            <span>Weight <b>${e.weight}</b></span>
            <span>Size <b>${e.size}px</b></span>
            <span>Line-height <b>${e.lh}px</b></span>
            <span>Letter-spacing <b>${n}</b></span>
          </div>
        </div>
        <div class="sample" style="font-weight:${e.weight}; font-size:${e.size}px; line-height:${e.lh}px; letter-spacing:${n}; ${e.upper?`text-transform:uppercase;`:``}">${i}</div>
        <div class="foot">
          <div class="foot-stats">
            <span>Ratio <b>${t}</b></span>
            <span>Font size <b>${e.size}px</b></span>
            <span>Line height <b>${e.lh}px</b></span>
          </div>
          <div class="use-case">Use: <b>${e.use}</b></div>
        </div>
      </div>`}).join(``)}</div>
    `,e}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    const rows = TYPE_STYLES.map(s => {
      const ratio = (s.lh / s.size).toFixed(2);
      const lsEm = (s.ls / 1000).toFixed(3) + 'em';
      return \`<div class="type-card">
        <div class="type-head">
          <div class="style-name">\${s.name}</div>
          <div class="specs">
            <span>Font <b>Reddit Sans</b></span>
            <span>Weight <b>\${s.weight}</b></span>
            <span>Size <b>\${s.size}px</b></span>
            <span>Line-height <b>\${s.lh}px</b></span>
            <span>Letter-spacing <b>\${lsEm}</b></span>
          </div>
        </div>
        <div class="sample" style="font-weight:\${s.weight}; font-size:\${s.size}px; line-height:\${s.lh}px; letter-spacing:\${lsEm}; \${s.upper ? 'text-transform:uppercase;' : ''}">\${SAMPLE}</div>
        <div class="foot">
          <div class="foot-stats">
            <span>Ratio <b>\${ratio}</b></span>
            <span>Font size <b>\${s.size}px</b></span>
            <span>Line height <b>\${s.lh}px</b></span>
          </div>
          <div class="use-case">Use: <b>\${s.use}</b></div>
        </div>
      </div>\`;
    }).join('');
    el.innerHTML = \`
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Typography</div>
        <h1>Reddit Sans, all the way down</h1>
        <p>A single variable font covers every weight from 200 to 900. Ten semantic styles span editorial display to dense UI labels — each with a paired line-height, weight, and a recommended use case.</p>
      </div>
      <div class="type-scale">\${rows}</div>
    \`;
    return el;
  }
}`,...a.parameters?.docs?.source}}},o=[`Default`]}))();export{a as Default,o as __namedExportsOrder,r as default};