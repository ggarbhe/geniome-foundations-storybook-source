import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(i)return;i=!0;let e=document.createElement(`style`);e.textContent=`
    .ginput-wrap {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-family: var(--font-body, sans-serif);
      width: 280px;
    }
    .ginput-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-heading, #14161a);
    }
    .ginput-field {
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 10px;
      padding: 10px 14px;
      background: var(--bg-page, #fff);
      transition: .12s;
    }
    .ginput-field:focus-within {
      border-color: var(--accent, #17499E);
      box-shadow: 0 0 0 3px var(--accent-tint, #EBF1FD);
    }
    .ginput-field.error {
      border-color: var(--destructive, #C0392B);
    }
    .ginput-field.error:focus-within {
      box-shadow: 0 0 0 3px var(--destructive-tint, #FBEAE8);
    }
    .ginput-field.disabled {
      background: var(--bg-sunken, #F6F7FA);
    }
    .ginput-field.textarea {
      align-items: flex-start;
    }
    .ginput-icon {
      color: var(--text-muted, #6b7280);
      flex-shrink: 0;
      display: flex;
    }
    .ginput-icon.clickable {
      cursor: pointer;
    }
    .ginput-country {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-body, #3a3f47);
      padding-right: 10px;
      margin-right: 2px;
      border-right: 1px solid var(--border, #E4E6EB);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .ginput-input {
      border: none;
      outline: none;
      font-family: var(--font-body, sans-serif);
      font-size: 13.5px;
      color: var(--text-heading, #14161a);
      background: transparent;
      width: 100%;
      min-width: 0;
    }
    .ginput-input::placeholder {
      color: var(--text-muted, #6b7280);
    }
    .ginput-input:disabled {
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
    .ginput-textarea {
      border: none;
      outline: none;
      font-family: var(--font-body, sans-serif);
      font-size: 13.5px;
      color: var(--text-heading, #14161a);
      background: transparent;
      width: 100%;
      min-height: 88px;
      resize: vertical;
      line-height: 1.6;
    }
    .ginput-textarea::placeholder {
      color: var(--text-muted, #6b7280);
    }
    .ginput-textarea:disabled {
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
    .ginput-helper {
      font-size: 12px;
      color: var(--text-muted, #6b7280);
      line-height: 1.5;
    }
    .ginput-helper.error {
      color: var(--destructive, #C0392B);
    }
    .ginput-otp {
      display: flex;
      gap: 8px;
    }
    .ginput-otp-box {
      width: 44px;
      height: 48px;
      border: 1px solid var(--border, #E4E6EB);
      border-radius: 10px;
      text-align: center;
      font-size: 16px;
      font-family: var(--font-mono, monospace);
      font-weight: 600;
      color: var(--text-heading, #14161a);
      outline: none;
      background: var(--bg-page, #fff);
      transition: .12s;
    }
    .ginput-otp-box:focus {
      border-color: var(--accent, #17499E);
      box-shadow: 0 0 0 3px var(--accent-tint, #EBF1FD);
    }
    .ginput-otp-box.error {
      border-color: var(--destructive, #C0392B);
    }
    .ginput-otp-box.error:focus {
      box-shadow: 0 0 0 3px var(--destructive-tint, #FBEAE8);
    }
    .ginput-otp-box:disabled {
      background: var(--bg-sunken, #F6F7FA);
      color: var(--text-muted, #6b7280);
      cursor: not-allowed;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{type:n=`text`,label:i=``,placeholder:a=``,helperText:o=``,error:s=!1,errorMessage:c=``,disabled:l=!1,leadingIcon:u=!1,leadingIconType:d=`search`,trailingIcon:f=!1,trailingIconType:p=`eye`,countryCode:m=!1,countryCodeValue:h=`🇮🇳 +91`,length:g=4,value:_=``,onChange:v,onTrailingIconClick:y}=e,b=n===`text`||n===`number`,x=document.createElement(`div`);if(x.className=`ginput-wrap`,i){let e=document.createElement(`div`);e.className=`ginput-label`,e.textContent=i,x.appendChild(e)}if(n===`textbox`){let e=document.createElement(`div`);e.className=`ginput-field textarea`+(s?` error`:``)+(l?` disabled`:``);let t=document.createElement(`textarea`);t.className=`ginput-textarea`,t.placeholder=a,t.disabled=l,_&&(t.value=_),typeof v==`function`&&t.addEventListener(`input`,v),e.appendChild(t),x.appendChild(e)}else if(n===`otp`){let e=document.createElement(`div`);e.className=`ginput-otp`;let t=[];for(let n=0;n<g;n++){let r=document.createElement(`input`);r.className=`ginput-otp-box`+(s?` error`:``),r.maxLength=1,r.inputMode=`numeric`,r.disabled=l,r.addEventListener(`input`,e=>{e.target.value&&n<g-1&&t[n+1].focus(),typeof v==`function`&&v(e)}),r.addEventListener(`keydown`,e=>{e.key===`Backspace`&&!r.value&&n>0&&t[n-1].focus()}),t.push(r),e.appendChild(r)}x.appendChild(e)}else{let e=document.createElement(`div`);if(e.className=`ginput-field`+(s?` error`:``)+(l?` disabled`:``),b&&m){let t=document.createElement(`span`);t.className=`ginput-country`,t.textContent=h,e.appendChild(t)}if(b&&u){let t=document.createElement(`span`);t.className=`ginput-icon`,t.innerHTML=(r[d]??r.search)(16),e.appendChild(t)}let t=document.createElement(`input`);if(t.className=`ginput-input`,t.type=`text`,t.inputMode=n===`number`?`numeric`:`text`,t.placeholder=a,t.disabled=l,_&&(t.value=_),typeof v==`function`&&t.addEventListener(`input`,v),e.appendChild(t),b&&f){let t=document.createElement(`span`);t.className=`ginput-icon`+(typeof y==`function`?` clickable`:``),t.innerHTML=(r[p]??r.eye)(16),typeof y==`function`&&t.addEventListener(`click`,y),e.appendChild(t)}x.appendChild(e)}let S=s?c||`Something went wrong.`:o;if(S){let e=document.createElement(`div`);e.className=`ginput-helper`+(s?` error`:``),e.textContent=S,x.appendChild(e)}return x}var r,i,a=e((()=>{r={search:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-4.35-4.35" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,mail:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,user:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M4.5 20c1.2-4 4-6 7.5-6s6.3 2 7.5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,lock:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,eye:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>`,check:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M4 12.5l5.5 5.5L20 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,chevron:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,close:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`},i=!1})),o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{a(),o={title:`Components/Input`,tags:[`autodocs`],render:e=>n(e),argTypes:{type:{control:`select`,options:[`text`,`number`,`textbox`,`otp`]},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},error:{control:`boolean`},errorMessage:{control:`text`},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},leadingIconType:{control:`select`,options:[`search`,`mail`,`user`,`lock`]},trailingIcon:{control:`boolean`},trailingIconType:{control:`select`,options:[`eye`,`check`,`chevron`,`close`]},countryCode:{control:`boolean`},countryCodeValue:{control:`text`},length:{control:{type:`number`,min:4,max:6,step:1}},value:{control:`text`},onChange:{action:`changed`},onTrailingIconClick:{action:`trailing icon clicked`}},args:{type:`text`,label:`Email address`,placeholder:`you@example.com`,helperText:`We'll never share your email.`,error:!1,errorMessage:`Please enter a valid email address.`,disabled:!1,leadingIcon:!0,leadingIconType:`mail`,trailingIcon:!1,trailingIconType:`eye`,countryCode:!1,countryCodeValue:`🇮🇳 +91`,length:4,value:``}},s={args:{type:`text`}},c={args:{type:`number`,label:`Phone number`,placeholder:`98765 43210`,helperText:`We'll text you a code to confirm this number.`,leadingIcon:!1,countryCode:!0}},l={args:{type:`textbox`,label:`Message`,placeholder:`Write your message here...`,helperText:`Maximum 500 characters.`,leadingIcon:!1}},u={args:{type:`otp`,label:`Verification code`,helperText:`Enter the 4-digit code sent to your phone.`,leadingIcon:!1,length:4}},d={args:{leadingIcon:!0,leadingIconType:`mail`}},f={args:{type:`text`,label:`Password`,placeholder:`Enter your password`,helperText:`Must be at least 8 characters.`,leadingIcon:!0,leadingIconType:`lock`,trailingIcon:!0,trailingIconType:`eye`}},p={args:{type:`number`,label:`Phone number`,placeholder:`98765 43210`,leadingIcon:!1,countryCode:!0}},m={args:{error:!0,errorMessage:`Please enter a valid email address.`}},h={args:{disabled:!0}},g={args:{label:``}},_={args:{helperText:``}},v={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexWrap=`wrap`,t.style.gap=`24px`,[{type:`text`,label:`Email address`,placeholder:`you@example.com`,leadingIcon:!0,leadingIconType:`mail`},{type:`number`,label:`Phone number`,placeholder:`98765 43210`,countryCode:!0},{type:`textbox`,label:`Message`,placeholder:`Write your message here...`},{type:`otp`,label:`Verification code`,length:4}].forEach(r=>{t.appendChild(n({...e,...r}))}),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    label: 'Phone number',
    placeholder: '98765 43210',
    helperText: "We'll text you a code to confirm this number.",
    leadingIcon: false,
    countryCode: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textbox',
    label: 'Message',
    placeholder: 'Write your message here...',
    helperText: 'Maximum 500 characters.',
    leadingIcon: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'otp',
    label: 'Verification code',
    helperText: 'Enter the 4-digit code sent to your phone.',
    leadingIcon: false,
    length: 4
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: true,
    leadingIconType: 'mail'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters.',
    leadingIcon: true,
    leadingIconType: 'lock',
    trailingIcon: true,
    trailingIconType: 'eye'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    label: 'Phone number',
    placeholder: '98765 43210',
    leadingIcon: false,
    countryCode: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: 'Please enter a valid email address.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexWrap = 'wrap';
    wrap.style.gap = '24px';
    [{
      type: 'text',
      label: 'Email address',
      placeholder: 'you@example.com',
      leadingIcon: true,
      leadingIconType: 'mail'
    }, {
      type: 'number',
      label: 'Phone number',
      placeholder: '98765 43210',
      countryCode: true
    }, {
      type: 'textbox',
      label: 'Message',
      placeholder: 'Write your message here...'
    }, {
      type: 'otp',
      label: 'Verification code',
      length: 4
    }].forEach(variantArgs => {
      wrap.appendChild(createInput({
        ...args,
        ...variantArgs
      }));
    });
    return wrap;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`NumberType`,`TextboxType`,`OtpType`,`WithLeadingIcon`,`WithTrailingIcon`,`WithCountryCode`,`ErrorState`,`Disabled`,`NoLabel`,`NoHelperText`,`AllTypes`]}))();export{v as AllTypes,s as Default,h as Disabled,m as ErrorState,_ as NoHelperText,g as NoLabel,c as NumberType,u as OtpType,l as TextboxType,p as WithCountryCode,d as WithLeadingIcon,f as WithTrailingIcon,y as __namedExportsOrder,o as default};