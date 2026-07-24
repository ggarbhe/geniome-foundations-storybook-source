import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(a)return;a=!0;let e=document.createElement(`style`);e.textContent=`
    .gtitlebar {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 14px;
      min-height: 56px;
      font-family: var(--font-body, sans-serif);
      transition: .15s;
      position: relative;
    }
    .gtitlebar.surface-page {
      background: var(--bg-page, #fff);
      border-bottom: 1px solid var(--border, #E4E6EB);
      color: var(--text-heading, #14161a);
    }
    .gtitlebar.surface-sunken {
      background: var(--bg-sunken, #F6F7FA);
      border-bottom: 1px solid var(--border, #E4E6EB);
      color: var(--text-heading, #14161a);
    }
    .gtitlebar.surface-accent {
      background: var(--accent, #17499E);
      border-bottom: none;
      color: #fff;
    }
    .gtitlebar.unfilled {
      background: transparent;
      border-bottom: none;
    }
    .gtitlebar-icon-btn {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
      transition: .12s;
    }
    .gtitlebar.surface-page .gtitlebar-icon-btn:hover,
    .gtitlebar.surface-sunken .gtitlebar-icon-btn:hover {
      background: rgba(20, 22, 26, .06);
    }
    .gtitlebar.surface-accent .gtitlebar-icon-btn:hover {
      background: rgba(255, 255, 255, .16);
    }
    .gtitlebar-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
      justify-content: center;
    }
    .gtitlebar-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gtitlebar-subtitle {
      font-size: 12px;
      opacity: .72;
      margin-top: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gtitlebar-trailing {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{surface:n=`page`,filled:a=!0,showContent:o=!0,title:s=``,subtitle:c=``,showSubtitle:l=!1,showLeadingIcon:u=!1,leadingIconType:d=`back`,showTrailingIcons:f=!1,trailingIconCount:p=1,onLeadingIconClick:m,onTrailingIconClick:h}=e,g=document.createElement(`div`);if(g.className=`gtitlebar surface-`+n+(a?``:` unfilled`),u){let e=document.createElement(`button`);e.type=`button`,e.className=`gtitlebar-icon-btn`,e.innerHTML=(r[d]??r.back)(20),typeof m==`function`&&e.addEventListener(`click`,m),g.appendChild(e)}let _=document.createElement(`div`);if(_.className=`gtitlebar-content`,o){if(s){let e=document.createElement(`div`);e.className=`gtitlebar-title`,e.textContent=s,_.appendChild(e)}if(l&&c){let e=document.createElement(`div`);e.className=`gtitlebar-subtitle`,e.textContent=c,_.appendChild(e)}}if(g.appendChild(_),f){let e=Math.min(Math.max(p,1),3),t=document.createElement(`div`);t.className=`gtitlebar-trailing`,i.slice(0,e).forEach((e,n)=>{let i=document.createElement(`button`);i.type=`button`,i.className=`gtitlebar-icon-btn`,i.innerHTML=r[e](20),typeof h==`function`&&i.addEventListener(`click`,e=>h(n,e)),t.appendChild(i)}),g.appendChild(t)}return g}var r,i,a,o=e((()=>{r={back:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,close:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,menu:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,search:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.9"/><path d="M20 20l-4.35-4.35" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,bell:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M6 10a6 6 0 1112 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M10 19a2 2 0 004 0" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,more:e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="18" cy="12" r="1.6" fill="currentColor"/></svg>`},i=[`search`,`bell`,`more`],a=!1})),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{o(),s={title:`Components/TitleBar`,tags:[`autodocs`],render:e=>n(e),argTypes:{surface:{control:`select`,options:[`page`,`sunken`,`accent`]},filled:{control:`boolean`},showContent:{control:`boolean`},title:{control:`text`},subtitle:{control:`text`},showSubtitle:{control:`boolean`},showLeadingIcon:{control:`boolean`},leadingIconType:{control:`select`,options:[`back`,`close`,`menu`,`search`]},showTrailingIcons:{control:`boolean`},trailingIconCount:{control:{type:`number`,min:1,max:3,step:1}},onLeadingIconClick:{action:`leading icon clicked`},onTrailingIconClick:{action:`trailing icon clicked`}},args:{surface:`page`,filled:!0,showContent:!0,title:`Screen title`,subtitle:`Supporting subtitle text`,showSubtitle:!0,showLeadingIcon:!0,leadingIconType:`back`,showTrailingIcons:!0,trailingIconCount:2}},c={args:{}},l={args:{title:`Messages`,showSubtitle:!0,subtitle:`3 unread`}},u={args:{title:`Settings`,showSubtitle:!1}},d={args:{showContent:!1}},f={args:{surface:`sunken`}},p={args:{surface:`accent`,title:`Checkout`}},m={args:{filled:!1}},h={args:{leadingIconType:`close`,title:`New message`}},g={args:{leadingIconType:`menu`,title:`Home`}},_={args:{showLeadingIcon:!1,title:`Dashboard`}},v={args:{trailingIconCount:1}},y={args:{trailingIconCount:3}},b={args:{showTrailingIcons:!1}},x={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`2px`,t.style.width=`320px`,[`page`,`sunken`,`accent`].forEach(r=>{t.appendChild(n({...e,surface:r}))}),t}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Messages',
    showSubtitle: true,
    subtitle: '3 unread'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    showSubtitle: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showContent: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    surface: 'sunken'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    surface: 'accent',
    title: 'Checkout'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    filled: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIconType: 'close',
    title: 'New message'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIconType: 'menu',
    title: 'Home'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    showLeadingIcon: false,
    title: 'Dashboard'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    trailingIconCount: 1
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    trailingIconCount: 3
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    showTrailingIcons: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '2px';
    wrap.style.width = '320px';
    ['page', 'sunken', 'accent'].forEach(surface => {
      wrap.appendChild(createTitleBar({
        ...args,
        surface
      }));
    });
    return wrap;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithSubtitle`,`NoSubtitle`,`IconOnly`,`SunkenSurface`,`AccentSurface`,`Unfilled`,`CloseIcon`,`MenuIcon`,`NoLeadingIcon`,`OneTrailingIcon`,`ThreeTrailingIcons`,`NoTrailingIcons`,`AllSurfaces`]}))();export{p as AccentSurface,x as AllSurfaces,h as CloseIcon,c as Default,d as IconOnly,g as MenuIcon,_ as NoLeadingIcon,u as NoSubtitle,b as NoTrailingIcons,v as OneTrailingIcon,f as SunkenSurface,y as ThreeTrailingIcons,m as Unfilled,l as WithSubtitle,S as __namedExportsOrder,s as default};