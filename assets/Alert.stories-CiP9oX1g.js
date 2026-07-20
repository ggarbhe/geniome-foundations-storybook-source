import{r as e}from"./preload-helper-CGrDLHbs.js";function t({variant:e=`success`,title:t=`New App version available`,description:r=`Update your app now to experience latest features on the app`,showAction:i=!0,actionText:a=`Learn more`,showAction1:o=!0,actionText1:s=`Button Text →`,trailingIconType:c=`cross`,onDismiss:l=()=>{},onAction:u=()=>{},onAction1:d=()=>{}}={}){let f=document.createElement(`div`);f.className=`alert-cmp variant-${e}`,f.innerHTML=`
    <div class="alert-icon">${n[e]||`i`}</div>
    <div class="alert-body">
      <p class="alert-title">${t}</p>
      ${r?`<p class="alert-desc">${r}</p>`:``}
      <div class="alert-actions">
        ${i?`<a data-role="action">${a}</a>`:``}
        ${o?`<a data-role="action1">${s}</a>`:``}
      </div>
    </div>
    ${c===`cross`?`<button class="alert-dismiss" aria-label="Dismiss">✕</button>`:``}
  `;let p=f.querySelector(`.alert-dismiss`);p&&p.addEventListener(`click`,l);let m=f.querySelector(`[data-role="action"]`);m&&m.addEventListener(`click`,u);let h=f.querySelector(`[data-role="action1"]`);return h&&h.addEventListener(`click`,d),f}var n,r=e((()=>{n={success:`✓`,warning:`!`,error:`✕`,info:`i`}})),i,a,o,s,c,l,u;e((()=>{r(),i={title:`Components/Alert`,tags:[`autodocs`],render:e=>t(e),argTypes:{variant:{control:`select`,options:[`success`,`warning`,`error`,`info`],description:`Semantic tone — maps to component-alert-{variant}-* tokens`},title:{control:`text`},description:{control:`text`},showAction:{control:`boolean`,description:`Show the primary text link`},actionText:{control:`text`,if:{arg:`showAction`}},showAction1:{control:`boolean`,description:`Show a second text link`},actionText1:{control:`text`,if:{arg:`showAction1`}},trailingIconType:{control:`select`,options:[`cross`,`none`],description:`Dismiss affordance in the top-right corner`},onDismiss:{action:`dismissed`},onAction:{action:`action clicked`},onAction1:{action:`action1 clicked`}},args:{variant:`success`,title:`New App version available`,description:`Update your app now to experience latest features on the app`,showAction:!0,actionText:`Learn more`,showAction1:!0,actionText1:`Button Text →`,trailingIconType:`cross`}},a={args:{variant:`success`}},o={args:{variant:`warning`,title:`Storage almost full`,description:`You're at 92% of your plan limit.`,showAction1:!1}},s={args:{variant:`error`,title:`Payment failed`,description:`Check your card details and try again.`,showAction:!1,showAction1:!1}},c={args:{variant:`info`,title:`New version available`,description:`Refresh to update Geniome.`,showAction1:!1}},l={args:{}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Storage almost full',
    description: "You're at 92% of your plan limit.",
    showAction1: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Payment failed',
    description: 'Check your card details and try again.',
    showAction: false,
    showAction1: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'New version available',
    description: 'Refresh to update Geniome.',
    showAction1: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}},u=[`Success`,`Warning`,`Error`,`Info`,`Playground`]}))();export{s as Error,c as Info,l as Playground,a as Success,o as Warning,u as __namedExportsOrder,i as default};