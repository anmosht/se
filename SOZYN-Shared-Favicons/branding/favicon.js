/* SOZYN shared browser icons. Publish this directory with GitHub Pages.
   Change VERSION whenever replacing icons; portals keep the same script URL. */
(() => {
  'use strict';
  const script = document.currentScript;
  if (!script) return;
  const VERSION = '20261025-1';
  const base = new URL('icons/', script.src);
  const icons = [
    { rel: 'icon', file: 'favicon.ico', type: 'image/x-icon', sizes: 'any' },
    { rel: 'icon', file: 'favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    { rel: 'apple-touch-icon', file: 'apple-touch-icon.png', sizes: '180x180' }
  ];
  const isIcon = link => /^(?:icon|apple-touch-icon(?:-precomposed)?|mask-icon)$/.test(link.rel.toLowerCase()) || /(?:^|\s)icon(?:\s|$)/i.test(link.rel);
  const signature = link => [link.rel, link.getAttribute('href'), link.type, link.sizes.value].join('|');
  const expected = icons.map(icon => {
    const link = document.createElement('link');
    link.rel = icon.rel;
    link.href = new URL(icon.file + '?v=' + VERSION, base).href;
    if (icon.type) link.type = icon.type;
    link.sizes = icon.sizes;
    link.dataset.sozynIcon = 'shared';
    return link;
  });
  function sync() {
    const found = new Set();
    document.head.querySelectorAll('link').forEach(link => {
      if (!isIcon(link)) return;
      const key = signature(link);
      if (!expected.some(icon => signature(icon) === key) || found.has(key)) link.remove();
      else found.add(key);
    });
    expected.forEach(icon => {
      if (!found.has(signature(icon))) document.head.append(icon.cloneNode());
    });
  }
  // Remove declarations added later by older portal scripts as well.
  sync();
  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => { queued = false; sync(); });
  }).observe(document.head, { childList: true, subtree: true, attributes: true, attributeFilter: ['rel', 'href', 'type', 'sizes'] });
})();
