import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(r)return;r=!0;let e=document.createElement(`style`);e.textContent=`
    .gradio-wrap {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-body, sans-serif);
      cursor: pointer;
      user-select: none;
    }
    .gradio-wrap.disabled {
      cursor: not-allowed;
    }
    .gradio-input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .gradio-circle {
      border-radius: 50%;
      border: 1.8px solid #B7BBC4;
      background: var(--bg-page, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: .14s;
      position: relative;
    }
    .gradio-circle.sm {
      width: 16px;
      height: 16px;
    }
    .gradio-circle.md {
      width: 20px;
      height: 20px;
    }
    .gradio-wrap:hover .gradio-circle {
      border-color: var(--accent, #17499E);
    }
    .gradio-circle.checked {
      border-color: var(--accent, #17499E);
    }
    .gradio-dot {
      border-radius: 50%;
      background: var(--accent, #17499E);
      transform: scale(0);
      transition: .14s;
    }
    .gradio-circle.sm .gradio-dot {
      width: 8px;
      height: 8px;
    }
    .gradio-circle.md .gradio-dot {
      width: 10px;
      height: 10px;
    }
    .gradio-circle.checked .gradio-dot {
      transform: scale(1);
    }
    .gradio-circle.disabled {
      background: var(--bg-sunken, #F6F7FA);
      border-color: var(--border, #E4E6EB);
    }
    .gradio-wrap.disabled:hover .gradio-circle {
      border-color: var(--border, #E4E6EB);
    }
    .gradio-circle.disabled.checked {
      border-color: #B9C3D6;
    }
    .gradio-circle.disabled .gradio-dot {
      background: var(--text-muted, #6b7280);
    }
    .gradio-label {
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-heading, #14161a);
    }
    .gradio-label.sm {
      font-size: 12.5px;
    }
    .gradio-label.disabled {
      color: var(--text-muted, #6b7280);
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{checked:n=!1,size:r=`md`,disabled:i=!1,label:a=``,name:o=`radio-group`,value:s=``,onChange:c}=e,l=document.createElement(`label`);l.className=`gradio-wrap`+(i?` disabled`:``);let u=document.createElement(`input`);u.type=`radio`,u.className=`gradio-input`,u.name=o,u.value=s,u.checked=n,u.disabled=i;let d=document.createElement(`span`);d.className=`gradio-circle `+r+(n?` checked`:``)+(i?` disabled`:``);let f=document.createElement(`span`);if(f.className=`gradio-dot`,d.appendChild(f),u.addEventListener(`change`,e=>{d.classList.toggle(`checked`,u.checked),typeof c==`function`&&c(e)}),l.appendChild(u),l.appendChild(d),a){let e=document.createElement(`span`);e.className=`gradio-label `+r+(i?` disabled`:``),e.textContent=a,l.appendChild(e)}return l}var r,i=e((()=>{r=!1})),a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{i(),a={title:`Components/Radio`,tags:[`autodocs`],render:e=>n(e),argTypes:{checked:{control:`boolean`},size:{control:`select`,options:[`sm`,`md`]},disabled:{control:`boolean`},label:{control:`text`},name:{control:`text`},value:{control:`text`},onChange:{action:`changed`}},args:{checked:!1,size:`md`,disabled:!1,label:`Option label`,name:`radio-group`,value:`option-1`}},o={args:{checked:!1}},s={args:{checked:!0}},c={args:{checked:!1}},l={args:{size:`sm`,label:`Small radio`}},u={args:{size:`md`,label:`Medium radio`}},d={args:{disabled:!0}},f={args:{disabled:!0,checked:!0}},p={args:{label:``}},m={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`16px`,[{size:`sm`,checked:!1,disabled:!1,label:`Small — unselected`},{size:`sm`,checked:!0,disabled:!1,label:`Small — selected`},{size:`sm`,checked:!1,disabled:!0,label:`Small — disabled`},{size:`sm`,checked:!0,disabled:!0,label:`Small — disabled selected`},{size:`md`,checked:!1,disabled:!1,label:`Medium — unselected`},{size:`md`,checked:!0,disabled:!1,label:`Medium — selected`},{size:`md`,checked:!1,disabled:!0,label:`Medium — disabled`},{size:`md`,checked:!0,disabled:!0,label:`Medium — disabled selected`}].forEach(r=>{t.appendChild(n({...e,...r}))}),t}},h={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`12px`,[`Option one`,`Option two`,`Option three`].forEach((r,i)=>{t.appendChild(n({...e,label:r,value:`option-${i+1}`,checked:i===0}))}),t}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small radio'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium radio'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '16px';
    [{
      size: 'sm',
      checked: false,
      disabled: false,
      label: 'Small — unselected'
    }, {
      size: 'sm',
      checked: true,
      disabled: false,
      label: 'Small — selected'
    }, {
      size: 'sm',
      checked: false,
      disabled: true,
      label: 'Small — disabled'
    }, {
      size: 'sm',
      checked: true,
      disabled: true,
      label: 'Small — disabled selected'
    }, {
      size: 'md',
      checked: false,
      disabled: false,
      label: 'Medium — unselected'
    }, {
      size: 'md',
      checked: true,
      disabled: false,
      label: 'Medium — selected'
    }, {
      size: 'md',
      checked: false,
      disabled: true,
      label: 'Medium — disabled'
    }, {
      size: 'md',
      checked: true,
      disabled: true,
      label: 'Medium — disabled selected'
    }].forEach(variantArgs => {
      wrap.appendChild(createRadio({
        ...args,
        ...variantArgs
      }));
    });
    return wrap;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '12px';
    ['Option one', 'Option two', 'Option three'].forEach((optionLabel, index) => {
      wrap.appendChild(createRadio({
        ...args,
        label: optionLabel,
        value: \`option-\${index + 1}\`,
        checked: index === 0
      }));
    });
    return wrap;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Selected`,`Unselected`,`SmallSize`,`MediumSize`,`Disabled`,`DisabledChecked`,`NoLabel`,`AllStates`,`RadioGroup`]}))();export{m as AllStates,o as Default,d as Disabled,f as DisabledChecked,u as MediumSize,p as NoLabel,h as RadioGroup,s as Selected,l as SmallSize,c as Unselected,g as __namedExportsOrder,a as default};