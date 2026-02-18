/**
 * Gov Banner block: renders an optional government/initiative banner from block content.
 * Content: row 1 = primary line (e.g. "AN OFFICIAL WEBSITE OF THE UNITED STATES GOVERNMENT");
 *          row 2 = optional secondary line (e.g. "A National Design Studio Initiative").
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const lines = [];
  [...block.children].forEach((row) => {
    const cell = row.querySelector('div');
    const text = cell ? cell.textContent.trim() : row.textContent.trim();
    if (text) lines.push(text);
  });

  block.textContent = '';
  if (lines.length === 0) return;

  const banner = document.createElement('div');
  banner.className = 'gov-banner-inner';
  lines.forEach((line) => {
    const p = document.createElement('p');
    p.className = 'gov-banner-line';
    p.textContent = line;
    banner.append(p);
  });
  block.append(banner);
}
