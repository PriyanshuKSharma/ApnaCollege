document.getElementById('navToggle')?.addEventListener('click', function() {
  const nav = document.getElementById('siteNav');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  if (nav) {
    nav.classList.toggle('active');
  }
});
