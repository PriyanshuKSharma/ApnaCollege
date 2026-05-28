(() => {
  const notes = window.SigmaNotes || [];

  const el = id => document.getElementById(id);
  const noteSidebar = el('noteSidebar');
  const noteTitle = el('noteTitle');
  const noteMeta = el('noteMeta');
  const noteContent = el('noteContent');
  const breadcrumbCategory = el('breadcrumbCategory');
  const prevNoteBtn = el('prevNoteBtn');
  const prevNoteTitle = el('prevNoteTitle');
  const nextNoteBtn = el('nextNoteBtn');
  const nextNoteTitle = el('nextNoteTitle');

  // HSL category colors for tags and sidebar highlights
  const categoryColors = {
    'Front-End': 'var(--front)',
    'Back-End': 'var(--back)',
    'Databases': 'var(--db)',
    'DevOps': 'var(--devops)'
  };
  const categoryGlows = {
    'Front-End': 'rgba(0, 180, 216, 0.1)',
    'Back-End': 'rgba(40, 167, 69, 0.1)',
    'Databases': 'rgba(111, 66, 193, 0.1)',
    'DevOps': 'rgba(253, 126, 20, 0.1)'
  };

  // Get active note ID from URL params
  function getActiveNoteId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || (notes[0] ? notes[0].id : null);
  }

  const activeId = getActiveNoteId();
  const activeNoteIndex = notes.findIndex(n => n.id === activeId);
  const activeNote = activeNoteIndex !== -1 ? notes[activeNoteIndex] : notes[0];

  // Render Note detailed contents
  function renderActiveNote() {
    if (!activeNote) {
      noteTitle.textContent = "Guide Not Found";
      noteContent.innerHTML = "<p>The requested study guide could not be located in our notes database.</p>";
      return;
    }

    const themeColor = categoryColors[activeNote.category] || 'var(--accent)';
    document.getElementById('noteContainer').style.setProperty('--note-theme-color', themeColor);
    el('progress').style.background = themeColor;

    // Load static contents
    noteTitle.textContent = activeNote.title;
    breadcrumbCategory.innerHTML = `<a href="index.html?cat=${activeNote.category}">${activeNote.category}</a> &nbsp;/&nbsp; <span>${activeNote.subCategory || activeNote.category}</span>`;
    
    // Inject Tags & Optional Video Button
    const tagsHtml = activeNote.tags
      .map(tag => `<span>#${tag}</span>`)
      .join('');
    
    const videoBtnHtml = activeNote.videoUrl
      ? `<a href="${activeNote.videoUrl}" target="_blank" rel="noopener" class="video-btn" style="color: var(--warning); text-decoration: none; font-weight: 700; border: 1px solid var(--warning); padding: 4px 10px; border-radius: 8px; font-size: 11px; display: inline-flex; align-items: center; gap: 6px; background: rgba(245, 158, 11, 0.05); margin-left: auto; transition: all 0.2s ease;">🎥 Watch Video Tutorial ↗</a>`
      : '';

    noteMeta.innerHTML = `
      <span>Category: ${activeNote.category}</span>
      <span>${activeNote.subCategory || activeNote.category}</span>
      ${tagsHtml}
      ${videoBtnHtml}
    `;

    // Inject static html body content
    noteContent.innerHTML = activeNote.content;

    // Attach copy clipboard buttons on code segments
    setupCodeBlockCopyButtons();

    // Configure footer navigation toggles
    setupFooterNavigation();
  }

  // Setup dynamic list sidebar tree
  function renderSidebar() {
    if (!noteSidebar) return;
    noteSidebar.innerHTML = '';

    // Group notes by high level category
    const categories = {};
    notes.forEach(n => {
      if (!categories[n.category]) {
        categories[n.category] = [];
      }
      categories[n.category].push(n);
    });

    Object.keys(categories).forEach(cat => {
      const groupColor = categoryColors[cat] || 'var(--accent)';
      const groupGlow = categoryGlows[cat] || 'rgba(255, 255, 255, 0.05)';

      const groupDiv = document.createElement('div');
      groupDiv.className = 'sidebar-category-group';
      groupDiv.style.setProperty('--category-color', groupColor);

      const titleDiv = document.createElement('div');
      titleDiv.className = 'sidebar-category-title';
      titleDiv.textContent = cat;
      groupDiv.appendChild(titleDiv);

      const linksUl = document.createElement('ul');
      linksUl.className = 'sidebar-links';

      categories[cat].forEach(n => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'sidebar-link';
        a.href = `note.html?id=${n.id}`;
        a.textContent = n.title.replace('—', '•'); // Clean visual dashes
        a.style.setProperty('--category-color', groupColor);
        a.style.setProperty('--category-glow', groupGlow);

        if (n.id === activeId) {
          a.classList.add('active');
        }

        li.appendChild(a);
        linksUl.appendChild(li);
      });

      groupDiv.appendChild(linksUl);
      noteSidebar.appendChild(groupDiv);
    });
  }

  // Append a premium "Copy" button inside Pre-formatted blocks
  function setupCodeBlockCopyButtons() {
    const codeBlocks = noteContent.querySelectorAll('pre');
    codeBlocks.forEach(pre => {
      // Avoid appending duplicates
      if (pre.querySelector('.copy-btn')) return;

      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy Code';

      btn.addEventListener('click', () => {
        const codeText = pre.querySelector('code')?.textContent || pre.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');

          setTimeout(() => {
            btn.textContent = 'Copy Code';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text:', err);
        });
      });

      pre.appendChild(btn);
    });
  }

  // Setup previous and next buttons at bottom of notes
  function setupFooterNavigation() {
    // 1. Prev Button
    if (activeNoteIndex > 0) {
      const prevNote = notes[activeNoteIndex - 1];
      prevNoteBtn.style.display = 'inline-flex';
      prevNoteBtn.href = `note.html?id=${prevNote.id}`;
      prevNoteTitle.textContent = prevNote.title;
    } else {
      prevNoteBtn.style.display = 'none';
    }

    // 2. Next Button
    if (activeNoteIndex !== -1 && activeNoteIndex < notes.length - 1) {
      const nextNote = notes[activeNoteIndex + 1];
      nextNoteBtn.style.display = 'inline-flex';
      nextNoteBtn.href = `note.html?id=${nextNote.id}`;
      nextNoteTitle.textContent = nextNote.title;
    } else {
      nextNoteBtn.style.display = 'none';
    }
  }

  // Fallback for browsers that do not support scroll-driven CSS timelines
  function setupScrollProgressIndicatorFallback() {
    if (!CSS.supports('animation-timeline', 'scroll()')) {
      const progress = el('progress');
      if (!progress) return;

      window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressPercentage = scrollable > 0 ? (scrolled / scrollable) : 0;
        progress.style.transform = `scaleX(${progressPercentage})`;
      });
    }
  }

  // Initialize page components
  renderActiveNote();
  renderSidebar();
  setupScrollProgressIndicatorFallback();
})();
