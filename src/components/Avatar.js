// Real component: pure function of props → DOM element.

const SIZE_PX = { xs: 24, s: 32, m: 40, l: 56 };
const STATUS_COLOR = { busy: '#D0342C', online: '#1E9E4E', away: '#B7791F', offline: '#9AA1AC' };
const ICON_SVG = (size) =>
  `<svg width="${Math.round(size * 0.55)}" height="${Math.round(size * 0.55)}" viewBox="0 0 24 24" fill="currentColor" style="color:#5578B8"><path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z"/></svg>`;

export function createAvatar({
  type = 'icon',
  size = 'm',
  status = 'busy',
  src = 'https://randomuser.me/api/portraits/men/32.jpg',
  initials = 'HB',
  alt = 'Avatar',
} = {}) {
  const px = SIZE_PX[size];

  const root = document.createElement('div');
  root.style.cssText = `position:relative; width:${px}px; height:${px}px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0;`;

  const inner = document.createElement('div');
  inner.style.cssText = `width:100%; height:100%; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; background:#DCE6F9;`;

  if (type === 'image') {
    inner.innerHTML = `<img src="${src}" alt="${alt}" style="width:100%; height:100%; object-fit:cover; display:block;">`;
  } else if (type === 'icon') {
    inner.innerHTML = ICON_SVG(px);
  } else {
    const fontSize = Math.max(10, Math.round(px * 0.38));
    inner.innerHTML = `<div style="width:100%; height:100%; background:#17499E; color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Space Grotesk',sans-serif; font-weight:600; font-size:${fontSize}px;">${initials}</div>`;
  }

  const dotSize = Math.max(8, Math.round(px * 0.28));
  const dot = document.createElement('span');
  dot.style.cssText = `position:absolute; bottom:2%; right:2%; width:${dotSize}px; height:${dotSize}px; border-radius:50%; border:2px solid #fff; background:${STATUS_COLOR[status]};`;

  root.appendChild(inner);
  root.appendChild(dot);
  return root;
}
