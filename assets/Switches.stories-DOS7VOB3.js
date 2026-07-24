import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(r)return;r=!0;let e=document.createElement(`style`);e.textContent=`
    .gswitch {
      display: inline-flex;
      align-items: center;
      background: #E7E9EE;
      border-radius: 999px;
      position: relative;
      font-family: var(--font-body, sans-serif);
    }
    .gswitch.small {
      padding: 3px;
      gap: 2px;
    }
    .gswitch.big {
      padding: 4px;
      gap: 2px;
    }
    .gswitch-seg {
      border: none;
      background: transparent;
      border-radius: 999px;
      cursor: pointer;
      font-family: var(--font-body, sans-serif);
      color: var(--text-muted, #6b7280);
      font-weight: 500;
      white-space: nowrap;
      transition: .16s;
      position: relative;
      z-index: 1;
    }
    .gswitch.small .gswitch-seg {
      font-size: 12px;
      padding: 6px 14px;
    }
    .gswitch.big .gswitch-seg {
      font-size: 13.5px;
      padding: 9px 20px;
    }
    .gswitch-seg:hover {
      color: var(--text-heading, #14161a);
    }
    .gswitch-seg.active {
      background: var(--bg-page, #fff);
      color: var(--accent, #17499E);
      font-weight: 600;
      box-shadow: 0 1px 3px rgba(20, 22, 26, .14);
    }
    .gswitch-seg:disabled {
      cursor: not-allowed;
      color: var(--text-muted, #6b7280);
      opacity: .6;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{segments:n=[`Option 1`,`Option 2`],activeIndex:r=0,size:i=`small`,disabled:a=!1,onChange:o}=e,s=n.slice(0,4),c=Math.min(Math.max(r,0),s.length-1),l=document.createElement(`div`);l.className=`gswitch `+i;let u=s.map((e,t)=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`gswitch-seg`+(t===c?` active`:``),n.textContent=e,n.disabled=a,n.addEventListener(`click`,e=>{t!==c&&(c=t,u.forEach((e,t)=>e.classList.toggle(`active`,t===c)),typeof o==`function`&&o(c,e))}),l.appendChild(n),n});return l}var r,i=e((()=>{r=!1})),a,o,s,c,l,u,d,f,p,m,h;e((()=>{i(),a={title:`Components/Switches`,tags:[`autodocs`],render:e=>n(e),argTypes:{segments:{control:`object`},activeIndex:{control:{type:`number`,min:0,max:3,step:1}},size:{control:`select`,options:[`small`,`big`]},disabled:{control:`boolean`},onChange:{action:`changed`}},args:{segments:[`Option 1`,`Option 2`],activeIndex:0,size:`small`,disabled:!1}},o={args:{segments:[`Monthly`,`Yearly`]}},s={args:{segments:[`List`,`Grid`]}},c={args:{segments:[`Day`,`Week`,`Month`],activeIndex:1}},l={args:{segments:[`All`,`Active`,`Paused`,`Archived`],activeIndex:0}},u={args:{size:`small`,segments:[`Small A`,`Small B`]}},d={args:{size:`big`,segments:[`Big A`,`Big B`]}},f={args:{disabled:!0,segments:[`Monthly`,`Yearly`]}},p={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.alignItems=`flex-start`,t.style.gap=`20px`,[`small`,`big`].forEach(r=>{t.appendChild(n({...e,size:r}))}),t}},m={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.alignItems=`flex-start`,t.style.gap=`20px`,[[`List`,`Grid`],[`Day`,`Week`,`Month`],[`All`,`Active`,`Paused`,`Archived`]].forEach(r=>{t.appendChild(n({...e,segments:r}))}),t}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    segments: ['Monthly', 'Yearly']
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    segments: ['List', 'Grid']
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    segments: ['Day', 'Week', 'Month'],
    activeIndex: 1
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    segments: ['All', 'Active', 'Paused', 'Archived'],
    activeIndex: 0
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    segments: ['Small A', 'Small B']
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'big',
    segments: ['Big A', 'Big B']
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    segments: ['Monthly', 'Yearly']
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '20px';
    ['small', 'big'].forEach(size => {
      wrap.appendChild(createSwitches({
        ...args,
        size
      }));
    });
    return wrap;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'flex-start';
    wrap.style.gap = '20px';
    [['List', 'Grid'], ['Day', 'Week', 'Month'], ['All', 'Active', 'Paused', 'Archived']].forEach(segments => {
      wrap.appendChild(createSwitches({
        ...args,
        segments
      }));
    });
    return wrap;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`TwoSegments`,`ThreeSegments`,`FourSegments`,`SmallSize`,`BigSize`,`Disabled`,`AllSizes`,`AllCounts`]}))();export{m as AllCounts,p as AllSizes,d as BigSize,o as Default,f as Disabled,l as FourSegments,u as SmallSize,c as ThreeSegments,s as TwoSegments,h as __namedExportsOrder,a as default};