import{i as e}from"./preload-helper-BdFrVu1K.js";function t({type:e=`icon`,size:t=`m`,status:a=`busy`,src:o=`https://randomuser.me/api/portraits/men/32.jpg`,initials:s=`HB`,alt:c=`Avatar`}={}){let l=n[t],u=document.createElement(`div`);u.style.cssText=`position:relative; width:${l}px; height:${l}px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0;`;let d=document.createElement(`div`);d.style.cssText=`width:100%; height:100%; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; background:#DCE6F9;`,e===`image`?d.innerHTML=`<img src="${o}" alt="${c}" style="width:100%; height:100%; object-fit:cover; display:block;">`:e===`icon`?d.innerHTML=i(l):d.innerHTML=`<div style="width:100%; height:100%; background:#17499E; color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Space Grotesk',sans-serif; font-weight:600; font-size:${Math.max(10,Math.round(l*.38))}px;">${s}</div>`;let f=Math.max(8,Math.round(l*.28)),p=document.createElement(`span`);return p.style.cssText=`position:absolute; bottom:2%; right:2%; width:${f}px; height:${f}px; border-radius:50%; border:2px solid #fff; background:${r[a]};`,u.appendChild(d),u.appendChild(p),u}var n,r,i,a=e((()=>{n={xs:24,s:32,m:40,l:56},r={busy:`#D0342C`,online:`#1E9E4E`,away:`#B7791F`,offline:`#9AA1AC`},i=e=>`<svg width="${Math.round(e*.55)}" height="${Math.round(e*.55)}" viewBox="0 0 24 24" fill="currentColor" style="color:#5578B8"><path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z"/></svg>`})),o,s,c,l,u,d,f,p;e((()=>{a(),o={title:`Components/Avatar`,tags:[`autodocs`],render:e=>t(e),parameters:{docs:{description:{component:`Circular avatar in 3 modes (image / icon / initials) × 4 sizes, with optional status notifier dot.`}}},argTypes:{type:{control:`select`,options:[`image`,`icon`,`initials`]},size:{control:`select`,options:[`xs`,`s`,`m`,`l`]},status:{control:`select`,options:[`busy`,`online`,`away`,`offline`]},src:{control:`text`,if:{arg:`type`,eq:`image`}},initials:{control:`text`,if:{arg:`type`,eq:`initials`}},alt:{control:`text`}},args:{type:`icon`,size:`m`,status:`busy`,src:`https://randomuser.me/api/portraits/men/32.jpg`,initials:`HB`,alt:`Avatar`}},s={args:{type:`icon`}},c={args:{type:`image`}},l={args:{type:`initials`}},u={render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:flex; align-items:flex-end; gap:20px;`,[`xs`,`s`,`m`,`l`].forEach(n=>{e.appendChild(t({type:`image`,size:n,status:`online`}))}),e}},d={render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:flex; align-items:center; gap:20px;`,[`busy`,`online`,`away`,`offline`].forEach(n=>{e.appendChild(t({type:`initials`,initials:`HB`,status:n}))}),e}},f={args:{}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'icon'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'image'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'initials'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:flex-end; gap:20px;';
    ['xs', 's', 'm', 'l'].forEach(size => {
      row.appendChild(createAvatar({
        type: 'image',
        size,
        status: 'online'
      }));
    });
    return row;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:center; gap:20px;';
    ['busy', 'online', 'away', 'offline'].forEach(status => {
      row.appendChild(createAvatar({
        type: 'initials',
        initials: 'HB',
        status
      }));
    });
    return row;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...f.parameters?.docs?.source}}},p=[`Icon`,`Image`,`Initials`,`Sizes`,`StatusVariants`,`Playground`]}))();export{s as Icon,c as Image,l as Initials,f as Playground,u as Sizes,d as StatusVariants,p as __namedExportsOrder,o as default};