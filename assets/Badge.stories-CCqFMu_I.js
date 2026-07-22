import{i as e}from"./preload-helper-BdFrVu1K.js";function t({tone:e=`default`,style:t=`light`,children:a=`Badge Text`,leadingIcon:o=!0,leadingIconType:s=`warning`,enableNumberBadge:c=!1,numberBadge:l=2,trailingIcon:u=!0,trailingIconType:d=`cross`,onTrailingClick:f=()=>{}}={}){let p=n[e],m=t===`heavy`,h=m?`#ffffff`:p.lightText,g=m?p.heavyBg:p.lightBg,_=document.createElement(`span`);_.style.cssText=`
    display:inline-flex; align-items:center; gap:6px; border-radius:999px; font-weight:600;
    white-space:nowrap; padding:6px 12px; font-size:12.5px; font-family:'Inter',sans-serif;
    background:${g}; color:${h};
  `;let v=``;if(o&&(v+=`<span style="font-size:11px;">${r[s]}</span>`),v+=`<span>${a}</span>`,c){let e=m?`rgba(255,255,255,.3)`:p.heavyBg;v+=`<span style="display:inline-flex; align-items:center; justify-content:center; width:17px; height:17px; border-radius:50%; font-size:10px; font-weight:700; background:${e}; color:#fff;">${l}</span>`}u&&(v+=`<span data-role="trailing" style="font-size:11px; cursor:pointer;">${i[d]}</span>`),_.innerHTML=v;let y=_.querySelector(`[data-role="trailing"]`);return y&&y.addEventListener(`click`,f),_}var n,r,i,a=e((()=>{n={default:{lightBg:`#F1F2F4`,lightText:`#3a3f47`,heavyBg:`#4B5563`},success:{lightBg:`#EAF7EE`,lightText:`#1E9E4E`,heavyBg:`#1E9E4E`},warning:{lightBg:`#FDF6E5`,lightText:`#B7791F`,heavyBg:`#B7791F`},error:{lightBg:`#FCEAEA`,lightText:`#C0392B`,heavyBg:`#C0392B`},info:{lightBg:`#EEF3FC`,lightText:`#17499E`,heavyBg:`#17499E`}},r={warning:`!`,dot:`●`,star:`★`},i={cross:`✕`,down:`⌄`}})),o,s,c,l,u,d,f,p,m;e((()=>{a(),o={title:`Components/Badge`,tags:[`autodocs`],render:e=>t(e),parameters:{docs:{description:{component:`Pill-shaped badge with 5 tones × 2 styles (light/heavy), optional leading icon, trailing icon, and number badge.`}}},argTypes:{tone:{control:`select`,options:[`default`,`success`,`warning`,`error`,`info`]},style:{control:`select`,options:[`light`,`heavy`]},children:{control:`text`},leadingIcon:{control:`boolean`},leadingIconType:{control:`select`,options:[`warning`,`dot`,`star`],if:{arg:`leadingIcon`}},enableNumberBadge:{control:`boolean`},numberBadge:{control:{type:`range`,min:0,max:99,step:1},if:{arg:`enableNumberBadge`}},trailingIcon:{control:`boolean`},trailingIconType:{control:`select`,options:[`cross`,`down`],if:{arg:`trailingIcon`}},onTrailingClick:{action:`trailing icon clicked`}},args:{tone:`default`,style:`light`,children:`Badge Text`,leadingIcon:!0,leadingIconType:`warning`,enableNumberBadge:!1,numberBadge:2,trailingIcon:!0,trailingIconType:`cross`}},s={args:{tone:`default`}},c={args:{tone:`success`,children:`Completed`,leadingIconType:`dot`}},l={args:{tone:`warning`,children:`Pending`}},u={args:{tone:`error`,children:`Failed`}},d={args:{tone:`info`,children:`New`,leadingIconType:`star`}},f={args:{tone:`info`,children:`Messages`,leadingIcon:!1,enableNumberBadge:!0,numberBadge:12,trailingIcon:!1}},p={args:{}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'default'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    children: 'Completed',
    leadingIconType: 'dot'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Pending'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    children: 'Failed'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    children: 'New',
    leadingIconType: 'star'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    children: 'Messages',
    leadingIcon: false,
    enableNumberBadge: true,
    numberBadge: 12,
    trailingIcon: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Success`,`Warning`,`Error`,`Info`,`WithNumberBadge`,`Playground`]}))();export{s as Default,u as Error,d as Info,p as Playground,c as Success,l as Warning,f as WithNumberBadge,m as __namedExportsOrder,o as default};