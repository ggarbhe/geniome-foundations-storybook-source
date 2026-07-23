import{i as e}from"./preload-helper-BdFrVu1K.js";function t(){if(c)return;c=!0;let e=document.createElement(`style`);e.textContent=`
    .gemptystate {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: var(--bg-page, #fff);
      border: 1px solid var(--border, #E4E6EB);
      font-family: var(--font-body, sans-serif);
    }
    .gemptystate-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--accent-tint, #EBF1FD);
      color: var(--accent, #17499E);
      flex-shrink: 0;
      margin-bottom: 4px;
    }
    .gemptystate-icon.error {
      background: #FBEAE8;
      color: var(--destructive, #C0392B);
    }
    .gemptystate-icon svg {
      display: block;
    }
    .gemptystate-title {
      font-family: var(--font-display, sans-serif);
      font-weight: 600;
      color: var(--text-heading, #14161a);
      line-height: 1.35;
    }
    .gemptystate-desc {
      color: var(--text-muted, #6b7280);
      line-height: 1.6;
    }
    .gemptystate-actions {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gemptystate-btn {
      font-family: var(--font-body, sans-serif);
      font-weight: 600;
      border: none;
      cursor: pointer;
      background: var(--accent, #17499E);
      color: #fff;
      white-space: nowrap;
    }
    .gemptystate-btn:hover {
      background: var(--accent-hover, #123B80);
    }
    .gemptystate-btn-secondary {
      font-family: var(--font-body, sans-serif);
      font-weight: 600;
      border: none;
      cursor: pointer;
      background: transparent;
      color: var(--accent, #17499E);
      white-space: nowrap;
    }
    .gemptystate-btn-secondary:hover {
      text-decoration: underline;
    }
  `,document.head.appendChild(e)}function n(e={}){t();let{variant:n=`default`,size:i=`md`,title:a=`No results found`,description:o=``,actionLabel:c=``,secondaryActionLabel:l=``,icon:u=!0,onAction:d,onSecondaryAction:f}=e,p=r[i]??r.md,m=document.createElement(`div`);if(m.className=`gemptystate`,m.style.width=p.cardWidth+`px`,m.style.padding=p.pad,m.style.gap=p.gap+`px`,m.style.borderRadius=p.cardRadius,u){let e=document.createElement(`div`);e.className=`gemptystate-icon`+(n===`error`?` error`:``),e.style.width=p.iconBox+`px`,e.style.height=p.iconBox+`px`,e.innerHTML=(s[n]??s.default)(p.iconInner),m.appendChild(e)}let h=document.createElement(`div`);if(h.className=`gemptystate-title`,h.style.fontSize=p.title,h.textContent=a,m.appendChild(h),o){let e=document.createElement(`div`);e.className=`gemptystate-desc`,e.style.fontSize=p.desc,e.style.maxWidth=p.descMaxWidth+`px`,e.textContent=o,m.appendChild(e)}if(c||l){let e=document.createElement(`div`);if(e.className=`gemptystate-actions`,e.style.gap=p.actionsGap+`px`,e.style.marginTop=p.gap+`px`,c){let t=document.createElement(`button`);t.type=`button`,t.className=`gemptystate-btn`,t.style.padding=p.btnPad,t.style.fontSize=p.btnFont,t.style.borderRadius=p.radius,t.textContent=c,typeof d==`function`&&t.addEventListener(`click`,d),e.appendChild(t)}if(l){let t=document.createElement(`button`);t.type=`button`,t.className=`gemptystate-btn-secondary`,t.style.padding=p.btnPad,t.style.fontSize=p.btnFont,t.style.borderRadius=p.radius,t.textContent=l,typeof f==`function`&&t.addEventListener(`click`,f),e.appendChild(t)}m.appendChild(e)}return m}var r,i,a,o,s,c,l=e((()=>{r={sm:{cardWidth:280,pad:`28px 24px`,gap:10,iconBox:40,iconInner:18,radius:`8px`,cardRadius:`14px`,title:`14.5px`,desc:`12.5px`,descMaxWidth:220,btnPad:`8px 14px`,btnFont:`12px`,actionsGap:6},md:{cardWidth:340,pad:`40px 32px`,gap:14,iconBox:52,iconInner:22,radius:`9px`,cardRadius:`15px`,title:`17px`,desc:`13.5px`,descMaxWidth:260,btnPad:`10px 18px`,btnFont:`13px`,actionsGap:8},lg:{cardWidth:400,pad:`52px 40px`,gap:16,iconBox:64,iconInner:28,radius:`10px`,cardRadius:`16px`,title:`20px`,desc:`14.5px`,descMaxWidth:300,btnPad:`11px 22px`,btnFont:`14px`,actionsGap:10}},i=e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M3 7l2-3h14l2 3M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7M3 7h18M9 12h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,a=e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-4.35-4.35" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,o=e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none"><path d="M12 3l10 18H2L12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 10v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>`,s={default:i,search:a,error:o},c=!1})),u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l(),u={title:`Components/EmptyStateCard`,tags:[`autodocs`],render:e=>n(e),argTypes:{variant:{control:`select`,options:[`default`,`search`,`error`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},title:{control:`text`},description:{control:`text`},actionLabel:{control:`text`},secondaryActionLabel:{control:`text`},icon:{control:`boolean`},onAction:{action:`action clicked`},onSecondaryAction:{action:`secondary action clicked`}},args:{variant:`default`,size:`md`,title:`No projects yet`,description:`Create your first project to get started.`,actionLabel:`Create project`,secondaryActionLabel:``,icon:!0}},d={args:{variant:`default`}},f={args:{variant:`search`,title:`No results found`,description:`Try adjusting your search or filters to find what you're looking for.`,actionLabel:`Clear filters`}},p={args:{variant:`error`,title:`Couldn't load projects`,description:`Something went wrong while fetching your data. Please try again.`,actionLabel:`Retry`}},m={args:{size:`sm`}},h={args:{size:`md`}},g={args:{size:`lg`}},_={args:{secondaryActionLabel:`Learn more`}},v={args:{icon:!1}},y={args:{description:``}},b={render:e=>{let t=document.createElement(`div`);return t.style.display=`flex`,t.style.flexWrap=`wrap`,t.style.gap=`24px`,[`default`,`search`,`error`].forEach(r=>{t.appendChild(n({...e,variant:r}))}),t}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'search',
    title: 'No results found',
    description: "Try adjusting your search or filters to find what you're looking for.",
    actionLabel: 'Clear filters'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: "Couldn't load projects",
    description: 'Something went wrong while fetching your data. Please try again.',
    actionLabel: 'Retry'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    secondaryActionLabel: 'Learn more'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    description: ''
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexWrap = 'wrap';
    wrap.style.gap = '24px';
    ['default', 'search', 'error'].forEach(variant => {
      wrap.appendChild(createEmptyStateCard({
        ...args,
        variant
      }));
    });
    return wrap;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Search`,`ErrorState`,`Small`,`Medium`,`Large`,`WithSecondaryAction`,`NoIcon`,`NoDescription`,`AllVariants`]}))();export{b as AllVariants,d as Default,p as ErrorState,g as Large,h as Medium,y as NoDescription,v as NoIcon,f as Search,m as Small,_ as WithSecondaryAction,x as __namedExportsOrder,u as default};