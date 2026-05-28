(() => {
  // Wait for note data to load
  const notes = window.SigmaNotes || [];

  const el = id => document.getElementById(id);
  const catalog = el('notesCatalog');
  const filterBar = el('filterBar');
  const searchInput = el('searchInput');
  const visibleCount = el('visibleCount');
  const statNotes = el('statNotes');
  const statModules = el('statModules');

  // Define Category Theme Variables mapping
  const categoryThemeMap = {
    'Front-End': 'var(--front)',
    'Back-End': 'var(--back)',
    'Databases': 'var(--db)',
    'DevOps': 'var(--devops)'
  };

  function createCard(n) {
    const cardColor = categoryThemeMap[n.category] || 'var(--accent)';
    const d = document.createElement('a');
    d.className = 'note-card';
    d.href = `note.html?id=${n.id}`;
    d.style.setProperty('--card-color', cardColor);

    const tagsHtml = n.tags
      .slice(0, 3)
      .map(tag => `<span>#${tag}</span>`)
      .join('');

    d.innerHTML = `
      <div class="note-meta">
        <span>${n.subCategory || n.category}</span>
        <span class="note-meta-dot"></span>
        <span>Guide</span>
      </div>
      <h3 class="note-title">${n.title}</h3>
      <div class="note-excerpt">${n.excerpt}</div>
      <div class="note-footer">
        <div class="note-tags">${tagsHtml}</div>
        <span class="note-arrow" aria-hidden="true">→</span>
      </div>
    `;
    return d;
  }

  function renderNotes(list) {
    catalog.innerHTML = '';
    if (!list.length) {
      el('noResults').hidden = false;
      el('noResultsQuery').textContent = searchInput.value || 'filter';
      visibleCount.textContent = '0';
      return;
    }
    el('noResults').hidden = true;
    list.forEach(n => catalog.appendChild(createCard(n)));
    visibleCount.textContent = String(list.length);
  }

  function applyFilters() {
    const q = (searchInput.value || '').toLowerCase().trim();
    const activeButton = filterBar.querySelector('.filter-btn.active');
    const activeCat = activeButton ? activeButton.dataset.cat : 'all';

    let list = notes.slice();

    // 1. Filter by category pill selection
    if (activeCat !== 'all') {
      list = list.filter(n => n.category === activeCat);
    }

    // 2. Filter by search text query match
    if (q) {
      list = list.filter(n => {
        const titleMatch = n.title.toLowerCase().includes(q);
        const excerptMatch = n.excerpt.toLowerCase().includes(q);
        const tagMatch = n.tags.some(tag => tag.toLowerCase().includes(q));
        const subCatMatch = (n.subCategory || '').toLowerCase().includes(q);
        return titleMatch || excerptMatch || tagMatch || subCatMatch;
      });
    }

    renderNotes(list);
  }

  // Set Statistics counter
  if (statNotes) statNotes.textContent = String(notes.length);
  
  // Calculate distinct high level categories
  const categoriesCount = new Set(notes.map(n => n.category)).size;
  if (statModules) statModules.textContent = String(categoriesCount);

  // Initialize display
  renderNotes(notes);

  // Bind filtering event listeners
  if (filterBar) {
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => applyFilters());
  }
})();
