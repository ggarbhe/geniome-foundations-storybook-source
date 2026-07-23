import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(o)return;o=!0;let e=document.createElement(`style`);e.textContent=`
    .gcheckbox {
      display: inline-flex;
      align-items: flex-start;
      cursor: pointer;
      font-family: var(--font-body, sans-serif);
      user-select: none;
    }
    .gcheckbox.disabled {
      cursor: not-allowed;
      opacity: .45;
    }
    .gcheckbox-box {
      flex-shrink: 0;
      border: 1.5px solid var(--border, #E4E6EB);
      background: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: .12s;
      margin-top: 1px;
    }
    .gcheckbox-box.checked,
    .gcheckbox-box.indeterminate {
      background: var(--accent, #17499E);
      border-color: var(--accent, #17499E);
    }
    .gcheckbox-box svg {
      display: block;
    }
    .gcheckbox-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .gcheckbox-label {
      font-weight: 500;
      color: var(--text-heading, #14161a);
      line-height: 1.3;
    }
    .gcheckbox-subtext {
      color: var(--text-muted, #6b7280);
      line-height: 1.5;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{state:n=`unchecked`,size:o=`md`,label:s=`Checkbox label`,subtext:c=``,disabled:l=!1,onChange:u}=e,d=r[o]??r.md,f=document.createElement(`label`);f.className=`gcheckbox`+(l?` disabled`:``),f.style.gap=d.gap+`px`;let p=document.createElement(`span`);p.className=`gcheckbox-box`+(n===`checked`?` checked`:n===`indeterminate`?` indeterminate`:``),p.style.width=d.box+`px`,p.style.height=d.box+`px`,p.style.borderRadius=d.radius,n===`checked`?p.innerHTML=i(d.box,d.iconStroke):n===`indeterminate`&&(p.innerHTML=a(d.box,d.iconStroke));let m=document.createElement(`span`);m.className=`gcheckbox-text`;let h=document.createElement(`span`);if(h.className=`gcheckbox-label`,h.style.fontSize=d.font,h.textContent=s,m.appendChild(h),c){let e=document.createElement(`span`);e.className=`gcheckbox-subtext`,e.style.fontSize=d.sub,e.textContent=c,m.appendChild(e)}return f.append(p,m),!l&&typeof u==`function`&&f.addEventListener(`click`,e=>{u(e,n===`checked`?`unchecked`:`checked`)}),f}var r,i,a,o,s=e((()=>{r={sm:{box:16,radius:`5px`,font:`12.5px`,sub:`11.5px`,gap:8,iconStroke:2},md:{box:18,radius:`6px`,font:`13.5px`,sub:`12.5px`,gap:10,iconStroke:2},lg:{box:20,radius:`6px`,font:`14.5px`,sub:`13px`,gap:10,iconStroke:2.2}},i=(e,t)=>`<svg width="${e-6}" height="${e-6}" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4.5" stroke="#fff" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round"/></svg>`,a=(e,t)=>`<svg width="${e-6}" height="${e-6}" viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="#fff" stroke-width="${t}" stroke-linecap="round"/></svg>`,o=!1})),c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{s(),c={title:`Components/Checkbox`,tags:[`autodocs`],render:e=>n(e),argTypes:{state:{control:`select`,options:[`unchecked`,`checked`,`indeterminate`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},label:{control:`text`},subtext:{control:`text`},disabled:{control:`boolean`},onChange:{action:`changed`}},args:{state:`unchecked`,size:`md`,label:`Remember me`,subtext:`Stay signed in on this device`,disabled:!1}},l={args:{state:`unchecked`}},u={args:{state:`checked`}},d={args:{state:`indeterminate`,label:`Select all`,subtext:`Some items are selected`}},f={args:{size:`sm`}},p={args:{size:`md`}},m={args:{size:`lg`}},h={args:{subtext:``,label:`I agree to the terms`}},g={args:{disabled:!0}},_={args:{disabled:!0,state:`checked`}},v={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`16px`,[`unchecked`,`checked`,`indeterminate`].forEach(r=>{t.appendChild(n({...e,state:r}))}),t}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'unchecked'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'checked'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'indeterminate',
    label: 'Select all',
    subtext: 'Some items are selected'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    subtext: '',
    label: 'I agree to the terms'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    state: 'checked'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '16px';
    ['unchecked', 'checked', 'indeterminate'].forEach(state => {
      wrap.appendChild(createCheckbox({
        ...args,
        state
      }));
    });
    return wrap;
  }
}`,...v.parameters?.docs?.source}}},y=[`Unchecked`,`Checked`,`Indeterminate`,`Small`,`Medium`,`Large`,`NoSubtext`,`Disabled`,`DisabledChecked`,`AllStates`]}))();export{v as AllStates,u as Checked,g as Disabled,_ as DisabledChecked,d as Indeterminate,m as Large,p as Medium,h as NoSubtext,f as Small,l as Unchecked,y as __namedExportsOrder,c as default};