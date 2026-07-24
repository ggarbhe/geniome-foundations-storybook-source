import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(r)return;r=!0;let e=document.createElement(`style`);e.textContent=`
    .gtoggle-row {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-body, sans-serif);
    }
    .gtoggle-switch {
      width: 44px;
      height: 26px;
      border-radius: 999px;
      border: none;
      background: var(--toggle-off, #D5D8DE);
      position: relative;
      flex-shrink: 0;
      cursor: pointer;
      padding: 0;
      transition: background .15s;
    }
    .gtoggle-switch::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      transition: left .15s;
      box-shadow: 0 1px 2px rgba(0,0,0,.25);
    }
    .gtoggle-switch.on {
      background: var(--accent, #17499E);
    }
    .gtoggle-switch.on::after {
      left: 21px;
    }
    .gtoggle-switch:disabled {
      opacity: .4;
      cursor: not-allowed;
    }
    .gtoggle-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-heading, #14161a);
      line-height: 1.4;
      cursor: pointer;
    }
    .gtoggle-label.is-disabled {
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{checked:n=!1,disabled:r=!1,label:i=``,onChange:a}=e,o=n,s=document.createElement(`div`);s.className=`gtoggle-row`;let c=document.createElement(`button`);c.type=`button`,c.className=`gtoggle-switch`+(o?` on`:``),c.setAttribute(`role`,`switch`),c.setAttribute(`aria-checked`,String(o)),c.disabled=r;let l=null;i&&(l=document.createElement(`span`),l.className=`gtoggle-label`+(r?` is-disabled`:``),l.textContent=i,r&&l.setAttribute(`aria-disabled`,`true`));function u(e){r||(o=!o,c.classList.toggle(`on`,o),c.setAttribute(`aria-checked`,String(o)),typeof a==`function`&&a(o,e))}return c.addEventListener(`click`,u),l&&l.addEventListener(`click`,u),l&&s.appendChild(l),s.appendChild(c),s}var r,i=e((()=>{r=!1})),a,o,s,c,l,u,d,f;e((()=>{i(),a={title:`Components/Toggle`,tags:[`autodocs`],render:e=>n(e),argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`},onChange:{action:`changed`}},args:{checked:!1,disabled:!1,label:`Enable notifications`}},o={args:{label:`Enable notifications`}},s={args:{checked:!0,label:`Enable notifications`}},c={args:{disabled:!0,label:`Enable notifications`}},l={args:{checked:!0,disabled:!0,label:`Enable notifications`}},u={args:{label:``}},d={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.alignItems=`flex-start`,t.style.gap=`20px`,[{checked:!1,disabled:!1,label:`Off`},{checked:!0,disabled:!1,label:`On`},{checked:!1,disabled:!0,label:`Off · disabled`},{checked:!0,disabled:!0,label:`On · disabled`}].forEach(r=>{t.appendChild(n({...e,...r}))}),t}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Enable notifications'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Enable notifications'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Enable notifications'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '20px';
    [{
      checked: false,
      disabled: false,
      label: 'Off'
    }, {
      checked: true,
      disabled: false,
      label: 'On'
    }, {
      checked: false,
      disabled: true,
      label: 'Off · disabled'
    }, {
      checked: true,
      disabled: true,
      label: 'On · disabled'
    }].forEach(state => {
      wrap.appendChild(createToggle({
        ...args,
        ...state
      }));
    });
    return wrap;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`WithoutLabel`,`AllStates`]}))();export{d as AllStates,s as Checked,o as Default,c as Disabled,l as DisabledChecked,u as WithoutLabel,f as __namedExportsOrder,a as default};