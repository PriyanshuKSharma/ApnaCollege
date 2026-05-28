(() => {
  const commandsData = [
    // Git (VCS)
    { category: 'Git (VCS)', desc: 'Initialize local Git repository', cmd: 'git init' },
    { category: 'Git (VCS)', desc: 'Stage specific or all modified files for committing', cmd: 'git add [file-name]  # or git add .' },
    { category: 'Git (VCS)', desc: 'Record staged changes as a historical snapshot', cmd: 'git commit -m "commit message"' },
    { category: 'Git (VCS)', desc: 'View state of working directory and staging area', cmd: 'git status' },
    { category: 'Git (VCS)', desc: 'Link local repository to a remote repository URL', cmd: 'git remote add origin [URL]' },
    { category: 'Git (VCS)', desc: 'Upload local commits to remote branch', cmd: 'git push origin [branch-name]' },
    { category: 'Git (VCS)', desc: 'Download a remote repository to local machine', cmd: 'git clone [URL]' },
    { category: 'Git (VCS)', desc: 'Create a new branch or delete an existing one', cmd: 'git branch [branch-name]  # or git branch -D [name]' },
    { category: 'Git (VCS)', desc: 'Switch branches or create a new one immediately', cmd: 'git checkout [branch-name]  # or git checkout -b [name]' },
    { category: 'Git (VCS)', desc: 'View commit logs, optional graphs, and formats', cmd: 'git log  # or git log --graph --pretty=oneline' },
    { category: 'Git (VCS)', desc: 'Temporarily stash changes, keeping working directory clean', cmd: 'git stash  # or git stash pop' },
    { category: 'Git (VCS)', desc: 'Revert changes from a commit by creating a new commit', cmd: 'git revert [commit-id]' },
    { category: 'Git (VCS)', desc: 'Show differences between commits, files, or branches', cmd: 'git diff [commit1] [commit2]' },
    { category: 'Git (VCS)', desc: 'Merge changes from one branch into another', cmd: 'git merge [branch-name]' },
    { category: 'Git (VCS)', desc: 'Reapply commits onto another base commit for clean logs', cmd: 'git rebase [base]' },
    { category: 'Git (VCS)', desc: 'Retrieve updates from remote repo without merging', cmd: 'git fetch' },
    { category: 'Git (VCS)', desc: 'Reset repository to previous commit, discarding changes', cmd: 'git reset --hard [commit-id]' },
    { category: 'Git (VCS)', desc: 'Fetch and merge updates from remote into current branch', cmd: 'git pull origin [branch-name]' },
    
    // SQL
    { category: 'SQL Databases', desc: 'Create new database schema', cmd: 'CREATE DATABASE IF NOT EXISTS college_db;' },
    { category: 'SQL Databases', desc: 'Create table with primary & foreign keys', cmd: 'CREATE TABLE posts (id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(100), user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));' },
    { category: 'SQL Databases', desc: 'Insert new row records', cmd: 'INSERT INTO users (username, email, age) VALUES ("aman", "aman@mail.com", 21);' },
    { category: 'SQL Databases', desc: 'Fetch rows with matching conditions', cmd: 'SELECT * FROM users WHERE age >= 21 ORDER BY username ASC;' },
    { category: 'SQL Databases', desc: 'Join two tables on primary/foreign relation', cmd: 'SELECT posts.id, posts.title, users.username FROM posts INNER JOIN users ON posts.user_id = users.id;' },
    { category: 'SQL Databases', desc: 'Aggregate row counts grouped by field', cmd: 'SELECT age, COUNT(id) FROM users GROUP BY age HAVING COUNT(id) > 1;' },
    
    // MongoDB
    { category: 'MongoDB Shell', desc: 'Select or create active database scope', cmd: 'use collegeDB' },
    { category: 'MongoDB Shell', desc: 'Insert single JSON document', cmd: 'db.students.insertOne({ name: "Aman", age: 20, course: "B.Tech" });' },
    { category: 'MongoDB Shell', desc: 'Find documents with operators ($gte, $in)', cmd: 'db.students.find({ age: { $gte: 20 }, course: { $in: ["B.Tech", "BCA"] } });' },
    { category: 'MongoDB Shell', desc: 'Update fields on matching document', cmd: 'db.students.updateOne({ name: "Aman" }, { $set: { age: 21 } });' },
    { category: 'MongoDB Shell', desc: 'Aggregate pipeline ($match, $group, $sort)', cmd: 'db.students.aggregate([{ $match: { age: { $gt: 19 } } }, { $group: { _id: "$course", total: { $sum: 1 } } }]);' },
    { category: 'MongoDB Shell', desc: 'Access nested JSON properties', cmd: 'db.students.find({ "address.city": "Delhi" });' },

    // Docker
    { category: 'Docker Container', desc: 'Build Docker image from Dockerfile', cmd: 'docker build -t node-app:1.0 .' },
    { category: 'Docker Container', desc: 'Run container mapping local port', cmd: 'docker run -d -p 3000:3000 --name web-server node-app:1.0' },
    { category: 'Docker Container', desc: 'List all running containers', cmd: 'docker ps' },
    { category: 'Docker Container', desc: 'List local stored images', cmd: 'docker images' },
    { category: 'Docker Container', desc: 'View container console output logs', cmd: 'docker logs -f web-server' },
    { category: 'Docker Container', desc: 'Execute command inside running container', cmd: 'docker exec -it web-server sh' },

    // Kubernetes
    { category: 'Kubernetes', desc: 'Deploy resources from local manifest file', cmd: 'kubectl apply -f deployment.yaml' },
    { category: 'Kubernetes', desc: 'List all running Pods in default namespace', cmd: 'kubectl get pods' },
    { category: 'Kubernetes', desc: 'List all active Services', cmd: 'kubectl get services' },
    { category: 'Kubernetes', desc: 'Describe structural details of active Pod', cmd: 'kubectl describe pod <pod_name>' },
    { category: 'Kubernetes', desc: 'View streaming container logs in Pod', cmd: 'kubectl logs -f <pod_name>' },
    { category: 'Kubernetes', desc: 'List and switch default namespace scope', cmd: 'kubens <namespace_name>' }
  ];

  const cheatsGrid = document.getElementById('cheatsGrid');
  const searchInput = document.getElementById('cmdSearchInput');

  // HSL category colors for cheat sheets
  const themeColors = {
    'Git (VCS)': 'var(--labs)',
    'SQL Databases': 'var(--db)',
    'MongoDB Shell': 'var(--accent)',
    'Docker Container': 'var(--back)',
    'Kubernetes': 'var(--devops)'
  };
  const themeGlows = {
    'Git (VCS)': 'rgba(236, 72, 153, 0.05)',
    'SQL Databases': 'rgba(111, 66, 193, 0.05)',
    'MongoDB Shell': 'rgba(79, 70, 229, 0.05)',
    'Docker Container': 'rgba(40, 167, 69, 0.05)',
    'Kubernetes': 'rgba(253, 126, 20, 0.05)'
  };

  function renderCheats(query = '') {
    cheatsGrid.innerHTML = '';
    const q = query.toLowerCase().trim();

    // Group commands by category
    const grouped = {};
    commandsData.forEach(item => {
      // Apply filtering check
      const matchesSearch = !q || 
        item.desc.toLowerCase().includes(q) || 
        item.cmd.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q);
      
      if (!matchesSearch) return;

      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    const categories = Object.keys(grouped);
    if (!categories.length) {
      cheatsGrid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <div class="empty-mark">0</div>
          <p>No terminal commands match your search phrase.</p>
        </div>
      `;
      return;
    }

    categories.forEach(cat => {
      const color = themeColors[cat] || 'var(--accent)';
      const glow = themeGlows[cat] || 'rgba(255, 255, 255, 0.03)';

      const card = document.createElement('article');
      card.className = 'cheats-card';
      card.style.setProperty('--theme-color', color);
      card.style.setProperty('--theme-glow', glow);

      const itemsHtml = grouped[cat].map(item => `
        <div class="cheats-item">
          <span class="cheats-desc">${item.desc}</span>
          <div class="cheats-cmd-container">
            <code class="cheats-cmd">${item.cmd}</code>
            <button class="cheats-copy-btn" aria-label="Copy command">
              <svg viewBox="0 0 24 24" stroke="currentColor">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      `).join('');

      card.innerHTML = `
        <h2>
          <span>${cat}</span>
        </h2>
        <div class="cheats-list">
          ${itemsHtml}
        </div>
      `;

      // Attach copy events on rendered card elements
      card.querySelectorAll('.cheats-item').forEach(el => {
        const btn = el.querySelector('.cheats-copy-btn');
        const code = el.querySelector('.cheats-cmd');
        btn.addEventListener('click', () => {
          navigator.clipboard.writeText(code.textContent).then(() => {
            btn.classList.add('copied');
            // Change SVG to Checkmark briefly
            btn.innerHTML = `
              <svg viewBox="0 0 24 24" stroke="currentColor" style="color: var(--success);">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            `;

            setTimeout(() => {
              btn.classList.remove('copied');
              btn.innerHTML = `
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              `;
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy command:', err);
          });
        });
      });

      cheatsGrid.appendChild(card);
    });
  }

  // Initial render
  renderCheats();

  // Search input events
  if (searchInput) {
    searchInput.addEventListener('input', e => renderCheats(e.target.value));
  }
})();
