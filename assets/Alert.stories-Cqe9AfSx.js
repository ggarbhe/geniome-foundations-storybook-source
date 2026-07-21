import{i as e}from"./preload-helper-BdFrVu1K.js";function t({variant:e=`default`,title:t=`New App version available`,description:i=`Update your app now to experience latest features on the app`,leadingIcon:a=!0,leadingIconType:o=`info`,trailingIcon:s=!0,showAction:c=!0,showAction1:l=!0,action1Label:u=`Learn more`,action1ShowIcon:d=!1,showAction2:f=!0,action2Label:p=`Button Text`,action2ShowIcon:m=!0,onDismiss:h=()=>{},onAction1:g=()=>{},onAction2:_=()=>{}}={}){let v=r[e],y=document.createElement(`div`);y.style.cssText=`
    width:340px; border-radius:14px; padding:18px; display:flex; gap:12px; align-items:flex-start;
    position:relative; border:1px solid ${v.border}; background:${v.bg}; font-family:'Inter',sans-serif;
  `;let b=``;a&&(b+=`<div style="width:26px; height:26px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; color:#fff; font-size:13px; font-weight:700; margin-top:1px; background:${v.icon};">${n[o]}</div>`),b+=`<div style="flex:1; min-width:0;">`,b+=`<p style="font-weight:600; font-size:14.5px; color:#14161a; margin:0 0 4px;">${t}</p>`,i&&(b+=`<p style="font-size:13px; color:#6b7280; line-height:1.5; margin:0 0 12px;">${i}</p>`),c&&(l||f)&&(b+=`<div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">`,l&&(b+=`<a data-role="action1" style="font-size:13px; font-weight:600; color:#14161a; text-decoration:none; cursor:pointer;">${u}${d?` →`:``}</a>`),f&&(b+=`<a data-role="action2" style="font-size:13px; font-weight:600; color:#14161a; text-decoration:none; cursor:pointer;">${p}${m?` →`:``}</a>`),b+=`</div>`),b+=`</div>`,s&&(b+=`<button data-role="dismiss" style="position:absolute; top:14px; right:14px; background:none; border:none; cursor:pointer; color:#6b7280; font-size:13px; line-height:1; padding:3px;">✕</button>`),y.innerHTML=b;let x=y.querySelector(`[data-role="dismiss"]`);x&&x.addEventListener(`click`,h);let S=y.querySelector(`[data-role="action1"]`);S&&S.addEventListener(`click`,g);let C=y.querySelector(`[data-role="action2"]`);return C&&C.addEventListener(`click`,_),y}var n,r,i=e((()=>{n={info:`i`,warning:`!`,warning2:`!!`,star:`★`},r={default:{bg:`#EEF3FC`,border:`#CBDCF6`,icon:`#17499E`},success:{bg:`#EAF7EE`,border:`#CDEBD6`,icon:`#1E9E4E`},warning:{bg:`#FDF6E5`,border:`#F3E3AE`,icon:`#B7791F`},danger:{bg:`#FCEAEA`,border:`#F3C6C6`,icon:`#C0392B`}}})),a,o,s,c,l,u,d;e((()=>{i(),a={title:`Components/Alert`,tags:[`autodocs`],render:e=>t(e),parameters:{docs:{description:{component:`Inline alert with 4 colour variants, optional leading + trailing icons, and up to 2 action buttons.`}}},argTypes:{variant:{control:`select`,options:[`default`,`success`,`warning`,`danger`]},title:{control:`text`},description:{control:`text`},leadingIcon:{control:`boolean`},leadingIconType:{control:`select`,options:[`info`,`warning`,`warning2`,`star`],if:{arg:`leadingIcon`}},trailingIcon:{control:`boolean`,description:`Shows the dismiss (✕) button`},showAction:{control:`boolean`,description:`Master toggle for the whole actions row`},showAction1:{control:`boolean`,if:{arg:`showAction`}},action1Label:{control:`text`,if:{arg:`showAction1`}},action1ShowIcon:{control:`boolean`,if:{arg:`showAction1`}},showAction2:{control:`boolean`,if:{arg:`showAction`}},action2Label:{control:`text`,if:{arg:`showAction2`}},action2ShowIcon:{control:`boolean`,if:{arg:`showAction2`}},onDismiss:{action:`dismissed`},onAction1:{action:`action1 clicked`},onAction2:{action:`action2 clicked`}},args:{variant:`default`,title:`New App version available`,description:`Update your app now to experience latest features on the app`,leadingIcon:!0,leadingIconType:`info`,trailingIcon:!0,showAction:!0,showAction1:!0,action1Label:`Learn more`,action1ShowIcon:!1,showAction2:!0,action2Label:`Button Text`,action2ShowIcon:!0}},o={args:{variant:`default`}},s={args:{variant:`success`,title:`Changes saved`,description:`Everyone on the team can see this now.`,showAction2:!1}},c={args:{variant:`warning`,title:`Storage almost full`,description:`You're at 92% of your plan limit.`,showAction2:!1}},l={args:{variant:`danger`,title:`Payment failed`,description:`Check your card details and try again.`,showAction1:!1,showAction2:!1}},u={args:{}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Changes saved',
    description: 'Everyone on the team can see this now.',
    showAction2: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Storage almost full',
    description: "You're at 92% of your plan limit.",
    showAction2: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Payment failed',
    description: 'Check your card details and try again.',
    showAction1: false,
    showAction2: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Success`,`Warning`,`Danger`,`Playground`]}))();export{l as Danger,o as Default,u as Playground,s as Success,c as Warning,d as __namedExportsOrder,a as default};