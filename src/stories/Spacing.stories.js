import { SPACING } from '../foundations.js';

export default {
  title: 'Foundations/Spacing',
};

export const Default = {
  render: () => {
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    const max = Math.max(...SPACING);
    const trackMaxWidth = 540;

    const rows = SPACING.map((px) => {
      const fillWidth = Math.round((px / max) * trackMaxWidth);
      return `<div class="space-row">
        <div class="space-label"><span class="px">${px}px</span><span class="token">--space-${px}</span></div>
        <div class="space-track" style="max-width:${trackMaxWidth}px;">
          <div class="space-fill" style="width:${fillWidth}px;"></div>
        </div>
      </div>`;
    }).join('');

    el.innerHTML = `
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Spacing</div>
        <h1>A 2-based scale</h1>
        <p>One scale, used for padding, gaps, and stack rhythm. Every value is a multiple of 2 — predictable, snap-friendly, never arbitrary.</p>
      </div>
      <div class="space-scale">${rows}</div>
    `;
    return el;
  },
};
