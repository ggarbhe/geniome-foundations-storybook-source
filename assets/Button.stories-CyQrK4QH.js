import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(s)return;s=!0;let e=document.createElement(`style`);e.textContent=`
    .gbtn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 9px;
      border: 1.5px solid transparent;
      font-family: var(--font-body, sans-serif);
      font-weight: 600;
      cursor: pointer;
      transition: .12s;
      white-space: nowrap;
    }
    .gbtn:disabled {
      cursor: not-allowed;
    }
    .gbtn .gbtn-spinner {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,.4);
      border-top-color: #fff;
      animation: gbtn-spin .7s linear infinite;
      flex-shrink: 0;
    }
    .gbtn.secondary .gbtn-spinner,
    .gbtn.outline .gbtn-spinner,
    .gbtn.ghost .gbtn-spinner {
      border-color: rgba(20,22,26,.25);
      border-top-color: var(--text-heading);
    }
    @keyframes gbtn-spin { to { transform: rotate(360deg); } }
  `,document.head.appendChild(e)}function n(e={}){t();let{variant:n=`primary`,size:s=`md`,label:c=`Button`,leadingIcon:l=!1,leadingIconType:u=`plus`,trailingIcon:d=!1,trailingIconType:f=`arrow`,loading:p=!1,disabled:m=!1,fullWidth:h=!1,onClick:g}=e,_=r[n]??r.primary,v=i[s]??i.md,y=document.createElement(`button`);y.type=`button`,y.className=`gbtn ${n}`,y.style.background=_.bg,y.style.borderColor=_.border,y.style.color=_.text,y.style.padding=v.padding,y.style.fontSize=v.fontSize,y.style.width=h?`100%`:`auto`,y.style.opacity=m?`0.45`:`1`,y.style.cursor=m||p?`not-allowed`:`pointer`,y.disabled=m||p;let b=document.createElement(`span`);b.className=`gbtn-leading`;let x=document.createElement(`span`);x.className=`gbtn-label`,x.textContent=c;let S=document.createElement(`span`);if(S.className=`gbtn-trailing`,p){let e=document.createElement(`span`);e.className=`gbtn-spinner`,b.appendChild(e),b.style.display=`inline-flex`,S.style.display=`none`}else b.style.display=l?`inline-flex`:`none`,b.textContent=l?a[u]:``,S.style.display=d?`inline-flex`:`none`,S.textContent=d?o[f]:``;return y.append(b,x,S),typeof g==`function`&&y.addEventListener(`click`,g),y}var r,i,a,o,s,c=e((()=>{r={primary:{bg:`var(--accent)`,border:`var(--accent)`,text:`#ffffff`},secondary:{bg:`#ffffff`,border:`var(--border)`,text:`var(--text-heading)`},outline:{bg:`transparent`,border:`var(--accent)`,text:`var(--accent)`},ghost:{bg:`transparent`,border:`transparent`,text:`var(--text-heading)`},danger:{bg:`var(--destructive)`,border:`var(--destructive)`,text:`#ffffff`}},i={sm:{padding:`7px 14px`,fontSize:`12.5px`,iconSize:13},md:{padding:`10px 18px`,fontSize:`13.5px`,iconSize:14},lg:{padding:`13px 22px`,fontSize:`14.5px`,iconSize:15}},a={plus:`+`,arrow:`→`,download:`⬇`},o={arrow:`→`,chevron:`⌄`,external:`↗`},s=!1})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{c(),l={title:`Components/Button`,tags:[`autodocs`],render:e=>n(e),argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},label:{control:`text`},leadingIcon:{control:`boolean`},leadingIconType:{control:`select`,options:[`plus`,`arrow`,`download`],if:{arg:`leadingIcon`,truthy:!0}},trailingIcon:{control:`boolean`},trailingIconType:{control:`select`,options:[`arrow`,`chevron`,`external`],if:{arg:`trailingIcon`,truthy:!0}},loading:{control:`boolean`},disabled:{control:`boolean`},fullWidth:{control:`boolean`},onClick:{action:`clicked`}},args:{variant:`primary`,size:`md`,label:`Button`,leadingIcon:!1,leadingIconType:`plus`,trailingIcon:!1,trailingIconType:`arrow`,loading:!1,disabled:!1,fullWidth:!1}},u={args:{variant:`primary`}},d={args:{variant:`secondary`}},f={args:{variant:`outline`}},p={args:{variant:`ghost`}},m={args:{variant:`danger`,label:`Delete`}},h={args:{size:`sm`}},g={args:{size:`md`}},_={args:{size:`lg`}},v={args:{leadingIcon:!0,leadingIconType:`plus`,label:`Add item`}},y={args:{trailingIcon:!0,trailingIconType:`arrow`,label:`Continue`}},b={args:{loading:!0,label:`Saving`}},x={args:{disabled:!0}},S={args:{fullWidth:!0},parameters:{layout:`padded`}},C={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.gap=`12px`,t.style.flexWrap=`wrap`,[`primary`,`secondary`,`outline`,`ghost`,`danger`].forEach(r=>{t.appendChild(n({...e,variant:r}))}),t}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Delete'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: true,
    leadingIconType: 'plus',
    label: 'Add item'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    trailingIcon: true,
    trailingIconType: 'arrow',
    label: 'Continue'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Saving'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.gap = '12px';
    wrap.style.flexWrap = 'wrap';
    ['primary', 'secondary', 'outline', 'ghost', 'danger'].forEach(variant => {
      wrap.appendChild(createButton({
        ...args,
        variant
      }));
    });
    return wrap;
  }
}`,...C.parameters?.docs?.source}}},w=[`Primary`,`Secondary`,`Outline`,`Ghost`,`Danger`,`Small`,`Medium`,`Large`,`WithLeadingIcon`,`WithTrailingIcon`,`Loading`,`Disabled`,`FullWidth`,`AllVariants`]}))();export{C as AllVariants,m as Danger,x as Disabled,S as FullWidth,p as Ghost,_ as Large,b as Loading,g as Medium,f as Outline,u as Primary,d as Secondary,h as Small,v as WithLeadingIcon,y as WithTrailingIcon,w as __namedExportsOrder,l as default};