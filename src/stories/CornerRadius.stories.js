import { RADII } from '../foundations.js';

export default {
  title: 'Foundations/Radii',
};

export const Default = {
  render: () => {
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    const items = RADII.map(
      (px) => `<div class="radius-item">
        <div class="radius-rect" style="border-radius:${px}px;"></div>
        <div class="radius-meta"><div class="val">${px}px</div><div class="token">--radius-${px}</div></div>
      </div>`
    ).join('');

    el.innerHTML = `
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Corner Radius</div>
        <h1>From sharp to round</h1>
        <p>Eleven radii covering everything from input fields to pills and avatars. The round value uses an oversized radius so any element becomes a perfect capsule.</p>
      </div>
      <div class="radius-row">${items}</div>
    `;
    return el;
  },
};
