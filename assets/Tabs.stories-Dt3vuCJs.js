import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(r)return;r=!0;let e=document.createElement(`style`);e.textContent=`
    .gtabs {
      display: inline-flex;
      align-items: flex-end;
      gap: 28px;
      position: relative;
      border-bottom: 1px solid var(--border, #E4E6EB);
      font-family: var(--font-body, sans-serif);
    }
    .gtabs-tab {
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: var(--font-body, sans-serif);
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-muted, #6b7280);
      padding: 0 2px 14px;
      white-space: nowrap;
      transition: color .16s;
    }
    .gtabs-tab:hover {
      color: var(--text-heading, #14161a);
    }
    .gtabs-tab.active {
      color: var(--accent, #17499E);
      font-weight: 600;
    }
    .gtabs-tab:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    .gtabs-indicator {
      position: absolute;
      bottom: -1px;
      height: 2px;
      background: var(--accent, #17499E);
      border-radius: 2px;
      transition: left .18s ease, width .18s ease;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{tabs:n=[`Tab 1`,`Tab 2`,`Tab 3`],activeIndex:r=0,onChange:i}=e,a=Math.min(Math.max(r,0),n.length-1),o=document.createElement(`div`);o.className=`gtabs`;let s=document.createElement(`span`);s.className=`gtabs-indicator`;function c(e){s.style.left=e.offsetLeft+`px`,s.style.width=e.offsetWidth+`px`}let l=n.map((e,t)=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`gtabs-tab`+(t===a?` active`:``),n.textContent=e,n.addEventListener(`click`,e=>{t!==a&&(a=t,l.forEach((e,t)=>e.classList.toggle(`active`,t===a)),c(n),typeof i==`function`&&i(a,e))}),o.appendChild(n),n});return o.appendChild(s),requestAnimationFrame(()=>{let e=l[a];e&&c(e)}),window.addEventListener(`resize`,()=>{let e=l[a];e&&c(e)}),o}var r,i=e((()=>{r=!1})),a,o,s,c,l,u,d,f,p,m;e((()=>{i(),a={title:`Components/Tabs`,tags:[`autodocs`],render:e=>n(e),argTypes:{tabs:{control:`object`},activeIndex:{control:{type:`number`,min:0,max:5,step:1}},onChange:{action:`changed`}},args:{tabs:[`Tab 1`,`Tab 2`,`Tab 3`],activeIndex:0}},o={args:{tabs:[`Overview`,`Details`,`Reviews`]}},s={args:{tabs:[`Overview`,`Details`]}},c={args:{tabs:[`Overview`,`Details`,`Reviews`],activeIndex:1}},l={args:{tabs:[`Overview`,`Details`,`Reviews`,`Shipping`]}},u={args:{tabs:[`Overview`,`Details`,`Reviews`,`Shipping`,`FAQs`]}},d={args:{tabs:[`Overview`,`Details`,`Reviews`,`Shipping`,`FAQs`,`Support`]}},f={args:{tabs:[`Overview`,`Details`,`Reviews`],activeIndex:2}},p={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.alignItems=`flex-start`,t.style.gap=`32px`,[[`Overview`,`Details`],[`Overview`,`Details`,`Reviews`],[`Overview`,`Details`,`Reviews`,`Shipping`],[`Overview`,`Details`,`Reviews`,`Shipping`,`FAQs`],[`Overview`,`Details`,`Reviews`,`Shipping`,`FAQs`,`Support`]].forEach(r=>{t.appendChild(n({...e,tabs:r}))}),t}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details', 'Reviews']
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details']
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details', 'Reviews'],
    activeIndex: 1
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details', 'Reviews', 'Shipping']
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs']
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs', 'Support']
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Overview', 'Details', 'Reviews'],
    activeIndex: 2
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '32px';
    [['Overview', 'Details'], ['Overview', 'Details', 'Reviews'], ['Overview', 'Details', 'Reviews', 'Shipping'], ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs'], ['Overview', 'Details', 'Reviews', 'Shipping', 'FAQs', 'Support']].forEach(tabs => {
      wrap.appendChild(createTabs({
        ...args,
        tabs
      }));
    });
    return wrap;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`TwoTabs`,`ThreeTabs`,`FourTabs`,`FiveTabs`,`SixTabs`,`LastTabActive`,`AllCounts`]}))();export{p as AllCounts,o as Default,u as FiveTabs,l as FourTabs,f as LastTabActive,d as SixTabs,c as ThreeTabs,s as TwoTabs,m as __namedExportsOrder,a as default};