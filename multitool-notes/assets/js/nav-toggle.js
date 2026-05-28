document.getElementById('navToggle')?.addEventListener('click', function() {
  const nav = document.getElementById('siteNav');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  if (nav) nav.classList.toggle('active');
});

// Outline button — toggles the notes sidebar as a popup
(function() {
  const btn = document.getElementById('drawerToggle');
  const sidebar = document.getElementById('noteSidebar');
  const overlay = document.getElementById('outlineOverlay');
  if (!btn || !sidebar) return;

  function open() {
    sidebar.classList.add('open');
    overlay && overlay.removeAttribute('hidden');
    requestAnimationFrame(() => overlay && overlay.classList.add('is-open'));
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    sidebar.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (overlay) {
      overlay.classList.remove('is-open');
      overlay.addEventListener('transitionend', () => overlay.setAttribute('hidden', ''), { once: true });
    }
  }

  btn.addEventListener('click', () =>
    btn.getAttribute('aria-expanded') === 'true' ? close() : open()
  );
  overlay && overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();
