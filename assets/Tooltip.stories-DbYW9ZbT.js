import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(r)return;r=!0;let e=document.createElement(`style`);e.textContent=`
    .gtooltip-anchor {
      position: relative;
      display: inline-flex;
      font-family: var(--font-body, sans-serif);
    }
    .gtooltip-trigger {
      font-family: var(--font-body, sans-serif);
      font-size: 13px;
      font-weight: 500;
      color: var(--text-body, #3a3f47);
      background: #fff;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 8px;
      padding: 9px 18px;
      cursor: default;
    }
    .gtooltip {
      position: absolute;
      z-index: 2;
      width: 220px;
      background: #fff;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 10px;
      box-shadow: 0 10px 24px -8px rgba(20,22,26,.18);
      padding: 12px 14px;
      font-family: var(--font-body, sans-serif);
    }
    .gtooltip.is-hidden {
      display: none;
    }
    .gtooltip-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 4px;
    }
    .gtooltip-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-heading, #14161a);
      line-height: 1.4;
    }
    .gtooltip-body {
      font-size: 12.5px;
      color: var(--text-muted, #6b7280);
      line-height: 1.55;
    }
    .gtooltip-close {
      border: none;
      background: transparent;
      color: var(--text-muted, #6b7280);
      font-size: 15px;
      line-height: 1;
      cursor: pointer;
      padding: 0;
      margin: -2px -2px 0 0;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gtooltip-close:hover {
      color: var(--text-heading, #14161a);
    }
    .gtooltip-tail {
      position: absolute;
      width: 0;
      height: 0;
    }

    /* top-* placements: bubble sits above trigger, tail points down */
    .gtooltip.pos-top-start, .gtooltip.pos-top, .gtooltip.pos-top-end { bottom: calc(100% + 12px); }
    .gtooltip.pos-top-start { left: 0; }
    .gtooltip.pos-top { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-top-end { right: 0; }
    .gtooltip.pos-top-start .gtooltip-tail,
    .gtooltip.pos-top .gtooltip-tail,
    .gtooltip.pos-top-end .gtooltip-tail {
      bottom: -8px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 8px solid #fff;
      filter: drop-shadow(0 2px 1px rgba(20,22,26,.08));
    }
    .gtooltip.pos-top-start .gtooltip-tail { left: 16px; }
    .gtooltip.pos-top .gtooltip-tail { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-top-end .gtooltip-tail { right: 16px; }

    /* bottom-* placements: bubble sits below trigger, tail points up */
    .gtooltip.pos-bottom-start, .gtooltip.pos-bottom, .gtooltip.pos-bottom-end { top: calc(100% + 12px); }
    .gtooltip.pos-bottom-start { left: 0; }
    .gtooltip.pos-bottom { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-bottom-end { right: 0; }
    .gtooltip.pos-bottom-start .gtooltip-tail,
    .gtooltip.pos-bottom .gtooltip-tail,
    .gtooltip.pos-bottom-end .gtooltip-tail {
      top: -8px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 8px solid #fff;
      filter: drop-shadow(0 -2px 1px rgba(20,22,26,.06));
    }
    .gtooltip.pos-bottom-start .gtooltip-tail { left: 16px; }
    .gtooltip.pos-bottom .gtooltip-tail { left: 50%; transform: translateX(-50%); }
    .gtooltip.pos-bottom-end .gtooltip-tail { right: 16px; }
  `,document.head.appendChild(e)}function n(e={}){t();let{position:n=`top`,title:r=``,description:a=``,closable:o=!1,triggerLabel:s=`Trigger`,onClose:c}=e,l=i.includes(n)?n:`top`,u=document.createElement(`div`);u.className=`gtooltip-anchor`;let d=document.createElement(`div`);d.className=`gtooltip-trigger`,d.textContent=s;let f=document.createElement(`div`);f.className=`gtooltip pos-${l}`,f.setAttribute(`role`,`tooltip`);let p=document.createElement(`div`);p.className=`gtooltip-head`;let m=document.createElement(`div`);if(m.className=`gtooltip-title`,m.textContent=r,p.appendChild(m),o){let e=document.createElement(`button`);e.type=`button`,e.className=`gtooltip-close`,e.setAttribute(`aria-label`,`Close`),e.innerHTML=`&times;`,e.addEventListener(`click`,e=>{f.classList.add(`is-hidden`),typeof c==`function`&&c(e)}),p.appendChild(e)}let h=document.createElement(`div`);h.className=`gtooltip-body`,h.textContent=a;let g=document.createElement(`span`);return g.className=`gtooltip-tail`,f.appendChild(p),f.appendChild(h),f.appendChild(g),u.appendChild(d),u.appendChild(f),u}var r,i,a=e((()=>{r=!1,i=[`top-start`,`top`,`top-end`,`bottom-start`,`bottom`,`bottom-end`]})),o,s,c,l,u,d,f,p,m,h,g;e((()=>{a(),o={title:`Components/Tooltip`,tags:[`autodocs`],render:e=>n(e),argTypes:{position:{control:`select`,options:[`top-start`,`top`,`top-end`,`bottom-start`,`bottom`,`bottom-end`]},title:{control:`text`},description:{control:`text`},closable:{control:`boolean`},triggerLabel:{control:`text`},onClose:{action:`closed`}},args:{position:`top`,title:`Saved views`,description:`Save this filter combination to reuse it later.`,closable:!1,triggerLabel:`Trigger`}},s={args:{position:`top`}},c={args:{position:`top-start`}},l={args:{position:`top-end`}},u={args:{position:`bottom`}},d={args:{position:`bottom-start`}},f={args:{position:`bottom-end`}},p={args:{closable:!0}},m={args:{description:``}},h={render:e=>{let t=document.createElement(`div`);return t.style.display=`grid`,t.style.gridTemplateColumns=`repeat(3, 1fr)`,t.style.gap=`80px 40px`,t.style.padding=`60px 40px`,[`top-start`,`top`,`top-end`,`bottom-start`,`bottom`,`bottom-end`].forEach(r=>{let i=document.createElement(`div`);i.style.display=`flex`,i.style.justifyContent=`center`,i.appendChild(n({...e,position:r})),t.appendChild(i)}),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-start'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-end'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom-start'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom-end'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    closable: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    description: ''
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'grid';
    wrap.style.gridTemplateColumns = 'repeat(3, 1fr)';
    wrap.style.gap = '80px 40px';
    wrap.style.padding = '60px 40px';
    ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'].forEach(position => {
      const cell = document.createElement('div');
      cell.style.display = 'flex';
      cell.style.justifyContent = 'center';
      cell.appendChild(createTooltip({
        ...args,
        position
      }));
      wrap.appendChild(cell);
    });
    return wrap;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`TopStart`,`TopEnd`,`Bottom`,`BottomStart`,`BottomEnd`,`Closable`,`WithoutDescription`,`AllPositions`]}))();export{h as AllPositions,u as Bottom,f as BottomEnd,d as BottomStart,p as Closable,s as Default,l as TopEnd,c as TopStart,m as WithoutDescription,g as __namedExportsOrder,o as default};