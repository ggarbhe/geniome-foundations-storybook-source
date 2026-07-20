import { PALETTES, STEPS, hslFor, registerBaseTokens } from '../foundations.js';

export default {
  title: 'Colours/Base',
};

/* ===================== BASE ===================== */
export const Default = {
  render: () => {
    registerBaseTokens();
    const el = document.createElement('div');
    el.className = 'fnd-wrap';
    el.innerHTML = `
      <div class="fnd-head">
        <div class="fnd-eyebrow">Geniome · Foundations · Colours</div>
        <h1>The raw palette</h1>
        <p>Ten palettes, ninety chromatic shades plus pure neutrals. Authored in Figma with HSL and rendered through Display-P3 for full vibrancy on wide-gamut displays.</p>
      </div>
      <div id="base-grid"></div>
    `;
    const grid = el.querySelector('#base-grid');
    PALETTES.forEach((p) => {
      const block = document.createElement('div');
      block.className = 'palette-block';
      const h3 = document.createElement('h3');
      h3.textContent = p.name;
      block.appendChild(h3);
      const swatchGrid = document.createElement('div');
      swatchGrid.className = 'swatch-grid';
      STEPS.forEach((step) => {
        const hsl = hslFor(p.name, step);
        const card = document.createElement('div');
        card.className = 'swatch-card';
        card.innerHTML = `<div class="swatch-rect" style="background:${hsl}"></div>
          <div class="swatch-cap"><span class="step">${step}</span><span class="hsl">${hsl.replace('hsl(', '').replace(')', '')}</span></div>`;
        swatchGrid.appendChild(card);
      });
      block.appendChild(swatchGrid);
      grid.appendChild(block);
    });
    return el;
  },
};
