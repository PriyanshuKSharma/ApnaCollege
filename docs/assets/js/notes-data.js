(function() {
  const notes = [
    {
      id: "html-basics",
      videoUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4&pp=ygUEaHRtbA%3D%3D",
      title: "HTML — Structure & Semantics",
      category: "Front-End",
      subCategory: "HTML",
      tags: ["html", "semantics", "structure", "accessibility"],
      excerpt: "Comprehensive guide to HTML5: semantic grouping elements, input elements, tables, media formats, ARIA accessibility, SEO schemas, and loading optimization.",
      content: `
        <h2>HTML (HyperText Markup Language) Standard & Semantics</h2>
        <p>HTML is the declarative markup language forming the structural skeleton and semantic baseline of all web documents, parsed by browsers into the Document Object Model (DOM).</p>
        
        <h3>1. Complete HTML5 Document Skeleton</h3>
        <p>Standard-compliant documents require a strict structure containing metadata, encoding schemas, and mobile viewport controls:</p>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;!-- Crucial character set encoding (supports multi-language unicode characters) --&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;!-- Renders layouts responsively by configuring viewport scales to target device width --&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  
  &lt;title&gt;Sigma 6.0 | Interactive Front-End Guide&lt;/title&gt;
  &lt;meta name="description" content="Extensive study notes covering HTML5 semantics, validations, and SEO best practices."&gt;
  &lt;meta name="author" content="Priyanshu K. Sharma"&gt;
  
  &lt;!-- Resource hints for performant asset loading --&gt;
  &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;
    &lt;h1&gt;Interactive Learning Portal&lt;/h1&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <h3>2. Structural vs Semantic Layout Elements</h3>
        <p>Using semantic HTML elements over raw generic <code>&lt;div&gt;</code> tags is critical for Search Engine Optimization (SEO) indexing and screen-reader accessibility:</p>
        <ul>
          <li><strong><code>&lt;header&gt;</code></strong>: Contains branding logos, search panels, or navigation lists.</li>
          <li><strong><code>&lt;nav&gt;</code></strong>: Specifies a block containing main site links.</li>
          <li><strong><code>&lt;main&gt;</code></strong>: Contains the primary, unique content of the active page. Exactly one main element is allowed per page.</li>
          <li><strong><code>&lt;section&gt;</code></strong>: Combines related content together, typically featuring a heading element.</li>
          <li><strong><code>&lt;article&gt;</code></strong>: A self-contained component designed to be independent (e.g. blog posts, forum threads, news cards).</li>
          <li><strong><code>&lt;aside&gt;</code></strong>: Supplementary sidebar content tangentially related to the surrounding layouts.</li>
          <li><strong><code>&lt;footer&gt;</code></strong>: Holds copyright statements, corporate links, privacy forms, and author contacts.</li>
        </ul>

        <h3>3. Standard HTML Input Control Matrix</h3>
        <p>Forms gather user datasets, utilizing input types to enforce built-in browser validation routines:</p>
        <table>
          <thead>
            <tr>
              <th>Input Type</th>
              <th>Operational Purpose</th>
              <th>Validation & Specific Attributes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type="text"</code></td>
              <td>Single-line text string inputs.</td>
              <td><code>maxlength</code>, <code>minlength</code>, <code>placeholder</code>, <code>pattern</code></td>
            </tr>
            <tr>
              <td><code>type="email"</code></td>
              <td>Enforces format validation conforming to RFC structures.</td>
              <td><code>placeholder</code>, <code>multiple</code></td>
            </tr>
            <tr>
              <td><code>type="password"</code></td>
              <td>Obscures characters typed into input fields.</td>
              <td><code>minlength</code>, <code>maxlength</code></td>
            </tr>
            <tr>
              <td><code>type="number"</code></td>
              <td>Accepts only numerical float/integer values.</td>
              <td><code>min</code>, <code>max</code>, <code>step</code></td>
            </tr>
            <tr>
              <td><code>type="file"</code></td>
              <td>Allows selecting files from local directory to upload.</td>
              <td><code>accept</code>, <code>multiple</code></td>
            </tr>
            <tr>
              <td><code>type="radio"</code></td>
              <td>Selects a single value from a grouped set.</td>
              <td><code>name</code> (must match across group), <code>checked</code></td>
            </tr>
            <tr>
              <td><code>type="checkbox"</code></td>
              <td>Selects multiple concurrent values.</td>
              <td><code>checked</code>, <code>value</code></td>
            </tr>
          </tbody>
        </table>

        <h3>4. Complex Table Architectures</h3>
        <p>HTML tables organize structured grid data logically using dedicated columns and group rows:</p>
        <pre><code class="language-html">&lt;table&gt;
  &lt;caption&gt;Quarterly Database Usage Summary&lt;/caption&gt;
  &lt;colgroup&gt;
    &lt;col style="background-color: var(--card);"&gt;
    &lt;col span="2" style="background-color: transparent;"&gt;
  &lt;/colgroup&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Database Type&lt;/th&gt;
      &lt;th scope="col"&gt;Average Connection latency&lt;/th&gt;
      &lt;th scope="col"&gt;Total Operations&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;PostgreSQL pool&lt;/td&gt;
      &lt;td&gt;1.8ms&lt;/td&gt;
      &lt;td&gt;1,240,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

        <h3>5. Multimedia & Interactive Elements</h3>
        <p>Modern HTML5 native controls embed video, audio, and expandable widgets directly:</p>
        <ul>
          <li><strong>\`&lt;picture&gt;\` and Responsive Images</strong>: Swaps images depending on screen sizes:
            <pre><code class="language-html">&lt;picture&gt;
  &lt;source media="(min-width: 768px)" srcset="desktop.webp"&gt;
  &lt;img src="mobile.jpg" alt="Responsive image fallback" loading="lazy"&gt;
&lt;/picture&gt;</code></pre>
          </li>
          <li><strong>\`&lt;details&gt;\` and \`&lt;summary&gt;\`</strong>: Standard collapsible drawer widgets:
            <pre><code class="language-html">&lt;details&gt;
  &lt;summary&gt;Show Advanced Deployment Commands&lt;/summary&gt;
  &lt;pre&gt;&lt;code&gt;kubectl rollout status deployment/web&lt;/code&gt;&lt;/pre&gt;
&lt;/details&gt;</code></pre>
          </li>
        </ul>

        <h3>6. Advanced Web Accessibilities: ARIA Landmarks</h3>
        <p>Accessible Rich Internet Applications (ARIA) specify metadata properties representing interactive state changes for screen readers:</p>
        <table>
          <thead>
            <tr>
              <th>ARIA Attribute</th>
              <th>Description</th>
              <th>Syntax Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>role="..."</code></td>
              <td>Defines element behavior if tag isn't semantic.</td>
              <td><code>role="button"</code></td>
            </tr>
            <tr>
              <td><code>aria-expanded</code></td>
              <td>Tracks whether a menu drawer or dialog is open.</td>
              <td><code>aria-expanded="false"</code></td>
            </tr>
            <tr>
              <td><code>aria-live</code></td>
              <td>Announces dynamic AJAX content changes immediately.</td>
              <td><code>aria-live="polite"</code></td>
            </tr>
            <tr>
              <td><code>aria-hidden</code></td>
              <td>Hides decorative graphics from assistive screens.</td>
              <td><code>aria-hidden="true"</code></td>
            </tr>
          </tbody>
        </table>

        <h3>7. SEO Best Practices & JSON-LD Structured Data</h3>
        <p>Google prioritizes structured data schema formats loaded inside the header using JSON-LD:</p>
        <pre><code class="language-html">&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Sigma 6.0 Full-Stack & DevOps",
  "description": "Basics to Advanced modern web study notes.",
  "provider": {
    "@type": "Organization",
    "name": "Apna College"
  }
}
&lt;/script&gt;</code></pre>
      `
    },
    {
      id: "css-basics",
      videoUrl: "https://www.youtube.com/watch?v=ESnrn1kAD4E&pp=ygUDY3Nz",
      title: "CSS — Styling & Layouts",
      category: "Front-End",
      subCategory: "CSS",
      tags: ["css", "box-model", "flexbox", "grid", "responsive"],
      excerpt: "Advanced CSS styling rules: specificity scores, spacing models, relative/absolute/sticky positionings, Flexbox and Grid layout engines, transitions, and native custom properties.",
      content: `
        <h2>CSS styling & Advanced Layout Engines</h2>
        <p>Cascading Style Sheets (CSS) describe the presentation of HTML semantic elements. Modern CSS provides highly flexible layout engines and native custom variables.</p>
        
        <h3>1. Selector Specificity & Scoring Rules</h3>
        <p>CSS resolves conflicting declarations by scoring the specificity weight of matched selectors:</p>
        <table>
          <thead>
            <tr>
              <th>Selector Category</th>
              <th>Specificity Score</th>
              <th>Example Selector</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inline Styles</td>
              <td>1000</td>
              <td><code>style="color: red;"</code></td>
            </tr>
            <tr>
              <td>ID Selectors</td>
              <td>100</td>
              <td><code>#main-header</code></td>
            </tr>
            <tr>
              <td>Classes, Attributes, and Pseudo-classes</td>
              <td>10</td>
              <td><code>.card-item</code>, <code>[type="text"]</code>, <code>:hover</code></td>
            </tr>
            <tr>
              <td>Elements and Pseudo-elements</td>
              <td>1</td>
              <td><code>div</code>, <code>h1</code>, <code>::before</code>, <code>::after</code></td>
            </tr>
            <tr>
              <td>Universal Selector</td>
              <td>0</td>
              <td><code>*</code></td>
            </tr>
          </tbody>
        </table>
        
        <h3>2. Combinators & Advanced Selectors</h3>
        <p>Target elements precisely based on sibling or parent nesting structures:</p>
        <pre><code class="language-css">/* Descendant Selector: Targets ALL span inside divs */
div span { color: red; }

/* Child Selector: Targets only DIRECT child span of divs */
div > span { font-weight: bold; }

/* Adjacent Sibling: Targets p immediately following h1 */
h1 + p { margin-top: 0; }

/* General Sibling: Targets all p siblings following h1 */
h1 ~ p { opacity: 0.8; }</code></pre>

        <h3>3. Box Model Spacing and Dimensions</h3>
        <p>Every HTML block element computes as nested rectangular boxes. Use \`box-sizing: border-box\` so paddings and borders do not distort layout widths:</p>
        <pre><code class="language-css">.note-card {
  box-sizing: border-box; /* Enforces padding is calculated inside width */
  width: 100%;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 16px;
  border-radius: 8px;
}</code></pre>

        <h3>4. Element Positioning Mechanics</h3>
        <p>Position elements within viewports or relative container structures:</p>
        <ul>
          <li><strong>static</strong> (default): Natural document block flow. Positions parameters (\`top\`, \`left\`, etc.) are ignored.</li>
          <li><strong>relative</strong>: Kept in natural document flow, but offset from normal position using coordinate markers. Used to create positioning contexts for absolute child elements.</li>
          <li><strong>absolute</strong>: Placed out of normal document flow, positioned strictly relative to its nearest positioned ancestor.</li>
          <li><strong>fixed</strong>: Anchored relative to the viewport. Stays locked during scrolling.</li>
          <li><strong>sticky</strong>: Hybrid positioning. Acts as \`relative\` until the scrolling boundary meets target offsets, then sticks to that position like \`fixed\`.</li>
        </ul>

        <h3>5. Flexbox: 1-Dimensional Flex Layout</h3>
        <p>Distribute items along rows or columns, managing alignment ratios easily:</p>
        <pre><code class="language-css">.flex-center-container {
  display: flex;
  flex-direction: row;            /* row | row-reverse | column | column-reverse */
  justify-content: space-between; /* horizontal alignment along main axis */
  align-items: center;            /* vertical alignment along cross axis */
  flex-wrap: wrap;                /* wraps elements to next line if squeezed */
  gap: 16px;                      /* uniform spacing between children */
}

/* Flex item controls */
.flex-grow-item {
  flex: 1 1 200px; /* flex-grow (1) | flex-shrink (1) | flex-basis (200px) */
}</code></pre>

        <h3>6. CSS Grid: 2-Dimensional Layout Grid</h3>
        <p>CSS Grid handles columns and rows simultaneously, perfect for complex pages and dashboards:</p>
        <pre><code class="language-css">.dynamic-grid {
  display: grid;
  /* Automatically columns based on viewport. Grows up to 1fr, min 280px */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* Merging adjacent grid cells */
.span-two-columns {
  grid-column: span 2;
  grid-row: span 1;
}</code></pre>

        <h3>7. Transitions, backdrop-filters, & Design Tokens</h3>
        <p>Apply modern glassmorphism styling and custom property theme values:</p>
        <pre><code class="language-css">:root {
  --primary-glow: #4f46e5;
  --bg-slate: #0b1220;
  --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card {
  background: rgba(11, 18, 32, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  transition: var(--transition-smooth);
}

.glass-card:hover {
  border-color: var(--primary-glow);
  transform: translateY(-4px); /* Micro-animation lift */
}</code></pre>
      `
    },
    {
      id: "js-basics",
      videoUrl: "https://www.youtube.com/watch?v=VlPiVmYuoqw&pp=ygUKamF2YXNjcmlwdA%3D%3D",
      title: "JavaScript — Core Language & Collections",
      category: "Front-End",
      subCategory: "JavaScript",
      tags: ["javascript", "variables", "functions", "arrays", "objects", "loops"],
      excerpt: "Deep dive into JS variables, data types, template literals, conditional switches, loops, custom function references, arrays, and object destructuring.",
      content: `
        <h2>JavaScript Core Language & Collections</h2>
        <p>JavaScript is a dynamic, weakly-typed, single-threaded interpreted language featuring a prototype-based object model and a robust ecosystem for managing in-memory datasets.</p>

        <h3>1. Scoping Rules: var, let, and const (Basics)</h3>
        <p>Lexical scope controls variable visibility. Modern JS relies on strict block-level scoping to prevent memory leaks and hoisting side-effects:</p>
        <table>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Re-declare</th>
              <th>Update</th>
              <th>Scope Block</th>
              <th>Hoisting Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>var</code></td>
              <td>✅ Yes</td>
              <td>✅ Yes</td>
              <td>Global / Function</td>
              <td>Hoists identifier as <code>undefined</code>. Ignores block braces.</td>
            </tr>
            <tr>
              <td><code>let</code></td>
              <td>❌ No</td>
              <td>✅ Yes</td>
              <td>Lexical Block <code>{}</code></td>
              <td>Hoists into Temporal Dead Zone (throws ReferenceError if read early).</td>
            </tr>
            <tr>
              <td><code>const</code></td>
              <td>❌ No</td>
              <td>❌ No</td>
              <td>Lexical Block <code>{}</code></td>
              <td>Must be initialized at declaration. Reference pointer is immutable.</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Advanced Data Types & Memory Locations (Intermediate)</h3>
        <ul>
          <li><strong>Primitives (Stack Allocation)</strong>: Stored directly in stack memory by value. Immutable in nature:
            <br><code>Number</code>, <code>String</code>, <code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>BigInt</code>, and <code>Symbol</code>.
          </li>
          <li><strong>Objects (Heap Allocation)</strong>: References pointing to memory locations in heap storage. Mutable by nature:
            <br>Objects, Arrays, and Functions. Even when stored as <code>const</code>, properties can be altered.
          </li>
        </ul>
        <pre><code class="language-javascript">const userObj = { name: "Tony" };
userObj.name = "Stark"; // Valid property change!
// userObj = { name: "Steve" }; // Throws TypeError: Assignment to constant variable</code></pre>

        <h3>3. Loops, Iteration Protocols & Switches</h3>
        <p>Choose optimal loops based on your collection types:</p>
        <ul>
          <li><strong>for-of Loop</strong>: Best for iterating over values of iterable collections (like Arrays, Strings, Maps, Sets):
            <pre><code class="language-javascript">for (const item of ["node", "react", "sql"]) {
  console.log("Core item:", item);
}</code></pre>
          </li>
          <li><strong>for-in Loop</strong>: Used to inspect the enumerable keys/properties of an Object:
            <pre><code class="language-javascript">const config = { host: "localhost", port: 8080 };
for (const key in config) {
  console.log(key, "=>", config[key]);
}</code></pre>
          </li>
        </ul>

        <h3>4. Arrays & High-Performance Array Algorithms (Advanced)</h3>
        <p>Arrays are ordered index lists. Standard developers use both mutative and non-mutative methods:</p>
        <ul>
          <li><code>push()</code> / <code>pop()</code>: Fast O(1) mutations adding/removing items at the end.</li>
          <li><code>unshift()</code> / <code>shift()</code>: Slower O(N) operations because they must shift all indices at the beginning.</li>
          <li><code>slice(start, end)</code>: Non-mutative array extractor:
            <pre><code class="language-javascript">const items = [10, 20, 30, 40];
const middle = items.slice(1, 3); // Returns [20, 30]</code></pre>
          </li>
          <li><code>splice(start, deleteCount, items)</code>: Mutates arrays by deleting/inserting items at specific indices:
            <pre><code class="language-javascript">const list = ["apple", "banana", "orange"];
list.splice(1, 1, "grape"); // Replaces "banana" with "grape"</code></pre>
          </li>
        </ul>
        <p align="center">
          <img src="assets/arrays.png" alt="Array indices visual structure diagram" style="max-width: 100%; border-radius: 8px; margin: 12px 0;">
        </p>

        <h3>5. Array Higher-Order Methods (Advanced)</h3>
        <p>Declaratively process data using aggregate callbacks:</p>
        <pre><code class="language-javascript">const nums = [1, 2, 3, 4, 5];

// Map: Transform values
const squares = nums.map(n => n * n); // [1, 4, 9, 16, 25]

// Filter: Filter records
const odds = nums.filter(n => n % 2 !== 0); // [1, 3, 5]

// Reduce: Accumulate outputs
const totalSum = nums.reduce((accumulator, current) => accumulator + current, 0); // 15</code></pre>

        <h3>6. Object Destructuring, Spread Operators & Rest Parameters</h3>
        <p>ES6 provides shorthand structures to spread arrays or destructure configurations:</p>
        <pre><code class="language-javascript">const settings = { theme: "dark", lang: "en", debug: true };

// Destructure values with custom fallbacks
const { theme, lang, debug = false } = settings;

// Spread values to copy configurations
const extraSettings = { ...settings, analytics: true };

// Rest parameters to aggregate inputs
function sumAll(...numbersList) {
  return numbersList.reduce((acc, curr) => acc + curr, 0);
}</code></pre>
      `
    },
    {
      id: "js-dom-oop",
      videoUrl: "https://www.youtube.com/watch?v=VlPiVmYuoqw",
      title: "JavaScript — DOM & OOP Principles",
      category: "Front-End",
      subCategory: "JavaScript",
      tags: ["javascript", "dom", "events", "oops", "classes", "prototypes", "async"],
      excerpt: "Dynamic DOM selectors, structural nodes traversal, event listeners and delegation, prototype chains, ES6 class models, and asynchronous promises.",
      content: `
        <h2>JavaScript: Client-Side DOM & Object Oriented Programming</h2>
        <p>Client-side JavaScript interacts with the browser's parsed Document Object Model (DOM) to alter layouts dynamically, capture user inputs, and process asynchronous network promises.</p>

        <h3>1. DOM Selection & Nodes Traversal (Basics)</h3>
        <p>The DOM compiles the HTML document into a structural node tree:</p>
        <p align="center">
          <img src="assets/dom.png" alt="Document Object Model Tree Architecture" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>
        <ul>
          <li><strong>Element Selectors</strong>: Use <code>document.getElementById()</code> or standard CSS-selector query engines <code>document.querySelector()</code> and <code>document.querySelectorAll()</code>.</li>
          <li><strong>Traversal Methods</strong>: Traverse parent, children, and sibling coordinates:
            <pre><code class="language-javascript">const card = document.querySelector('.note-card');
const parentGroup = card.parentElement;
const nextCard = card.nextElementSibling;
const childElements = card.children;</code></pre>
          </li>
        </ul>
        <p align="center">
          <img src="assets/dom-hierarchy.png" alt="DOM Nodes Hierarchy and interfaces map" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h3>2. Dynamic DOM Manipulation (Intermediate)</h3>
        <p>Modify text, inject markup safely, configure classes, and create elements programmatically:</p>
        <pre><code class="language-javascript">const header = document.querySelector('h1');

// Text modification (escapes tags, safe from XSS)
header.textContent = "Sigma Notes Portal";

// Class management (enforces CSS rules)
header.classList.add('active');
header.classList.toggle('dark-mode');

// Create and append child nodes dynamically
const newDiv = document.createElement('div');
newDiv.className = "alert alert-tip";
newDiv.textContent = "New update deployed successfully!";
document.body.appendChild(newDiv);</code></pre>

        <h3>3. Event Listeners & Event Delegation (Advanced)</h3>
        <p>Attach listeners to element interactions. In production, utilize **Event Delegation** (listening on a parent element and filtering targets) to reduce memory consumption when handling hundreds of children:</p>
        <pre><code class="language-javascript">// Event Delegation pattern
const listContainer = document.querySelector('.dynamic-list');

listContainer.addEventListener('click', function(event) {
  // closest matches targets or their parents conforming to the selector
  const clickedCard = event.target.closest('.list-item');
  
  if (clickedCard) {
    event.preventDefault(); // Blocks default link navigation if needed
    console.log("Card successfully clicked:", clickedCard.dataset.id);
  }
});</code></pre>

        <h3>4. Prototype Chaining & ES6 Class Systems (Advanced)</h3>
        <p>JavaScript implements object inheritance natively using prototype linkages, using the ES6 class syntax as a clean syntax abstraction over prototypes:</p>
        <pre><code class="language-javascript">// 1. Parent Class Blueprint
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  
  introduce() {
    return \`User: \${this.username} | Email: \${this.email}\`;
  }
}

// 2. Child Inherited Class
class Admin extends User {
  constructor(username, email, role) {
    super(username, email); // CRITICAL: Invokes User's constructor first!
    this.role = role;
  }
  
  introduce() {
    // Call parent method via super keyword
    return \`\${super.introduce()} | Role: \${this.role}\`;
  }
}

const sysAdmin = new Admin("priyanshu", "admin@domain.com", "Superuser");
console.log(sysAdmin.introduce());</code></pre>

        <h3>5. Asynchronous JavaScript: Promises & Async/Await (Advanced)</h3>
        <p>Asynchronous executions handle non-blocking processes (e.g. database querying, server requests) via the event queue, avoiding UI locks:</p>
        <pre><code class="language-javascript">// Dynamic Fetch API integration with Async/Await
async function loadServerData(url) {
  try {
    // 1. Fetch triggers a Promise wrapper
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`HTTP failure status: \${response.status}\`);
    }
    
    // 2. Resolve JSON payload
    const parsedData = await response.json();
    console.log("Data resolved:", parsedData);
  } catch (error) {
    // 3. Graceful error boundary interception
    console.error("Failed to load server data:", error.message);
  } finally {
    console.log("Asynchronous fetch operation completed.");
  }
}</code></pre>
      `
    },
    {
      id: "nodejs-basics",
      videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUGTm9kZWpz",
      title: "NodeJS — Server-Side Runtime & Core APIs",
      category: "Back-End",
      subCategory: "NodeJS",
      tags: ["nodejs", "event-loop", "fs", "streams", "modules"],
      excerpt: "Comprehensive guide to NodeJS: asynchronous V8 engine runtime, event loops, CommonJS aggregators, filesystem streams, and native HTTP servers.",
      content: `
        <h2>NodeJS Server-Side Runtime & Core System APIs</h2>
        <p>NodeJS is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine that executes JavaScript code outside of a web browser, utilizing an event-driven, non-blocking I/O model.</p>
        
        <h3>1. V8 Engine & Asynchronous Event Loop</h3>
        <p>NodeJS operates on a single-threaded event loop, delegating blocking tasks (database queries, network requests, disk operations) to the system kernel or background threads via Libuv, keeping the execution thread free to accept new incoming operations.</p>
        <ul>
          <li><strong>Event Queue</strong>: Holds asynchronous callback tasks ready for execution.</li>
          <li><strong>Thread Pool (Libuv)</strong>: Manages worker threads for expensive system file operations.</li>
          <li><strong>Non-Blocking I/O</strong>: NodeJS methods accept callbacks or return promises, returning execution immediately instead of waiting for disk or network tasks to finish.</li>
        </ul>

        <h3>2. CLI Arguments & Process Controls</h3>
        <p>The global <code>process</code> object provides utility hooks into the executing process context, including argument reading:</p>
        <pre><code class="language-javascript">// process.argv returns an array containing terminal execution markers
const argumentsList = process.argv;
// argumentsList[0] = absolute path of the node binary
// argumentsList[1] = absolute path of the executing script
// argumentsList[2...] = user-passed command line arguments

console.log("Arguments:", argumentsList.slice(2));</code></pre>

        <h3>3. CommonJS (CJS) vs ES6 Modules (ESM)</h3>
        <p>JavaScript supports two module systems to organize and reuse code across files:</p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>CommonJS (CJS)</th>
              <th>ES6 Modules (ESM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Keywords</strong></td>
              <td><code>require()</code> / <code>module.exports</code></td>
              <td><code>import</code> / <code>export</code></td>
            </tr>
            <tr>
              <td><strong>Load Type</strong></td>
              <td>Synchronous (blocking execution)</td>
              <td>Asynchronous (non-blocking)</td>
            </tr>
            <tr>
              <td><strong>Scope Location</strong></td>
              <td>Can be declared dynamically inside blocks.</td>
              <td>Must reside strictly at the top-level scope.</td>
            </tr>
            <tr>
              <td><strong>Configuration</strong></td>
              <td>Default NodeJS behavior.</td>
              <td>Set <code>"type": "module"</code> in package.json.</td>
            </tr>
          </tbody>
        </table>

        <h3>4. File System (fs) and Streams API</h3>
        <p>The core <code>fs</code> module manages reading, writing, and streaming filesystem files asynchronously:</p>
        <pre><code class="language-javascript">const fs = require('fs');

// Asynchronous File Read (Non-blocking)
fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File read completed:", data);
});

// High-performance streaming for large files (memory efficient)
const readStream = fs.createReadStream('logs.txt');
const writeStream = fs.createWriteStream('backup.txt');
readStream.pipe(writeStream); // Streams chunks directly without buffering full file!</code></pre>

        <h3>5. Native HTTP Server Creation</h3>
        <p>Before using Express, NodeJS builds primitive server routing using its native <code>http</code> module:</p>
        <pre><code class="language-javascript">const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: "running" }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Not Found");
  }
});

server.listen(3000, () => console.log("Native server listening on port 3000"));</code></pre>
      `
    },
    {
      id: "express-basics",
      videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUJRXhwcmVlc0pT",
      title: "ExpressJS — Web Server Framework",
      category: "Back-End",
      subCategory: "Express",
      tags: ["express", "routing", "middleware", "error-handling", "server"],
      excerpt: "In-depth guide to ExpressJS: routing structures, middleware pipelines, dynamic static directories, and robust global error handling blocks.",
      content: `
        <h2>ExpressJS Web Server & Middleware Framework</h2>
        <p>ExpressJS is a minimalist, unopinionated web framework built on Node's HTTP module, simplifying routing, middleware configurations, and response parsing.</p>
        
        <h3>1. Inversion of Control: Libraries vs Frameworks</h3>
        <blockquote>
          <strong>Library Paradigm</strong>: You import functions and call them inside your code structure when needed. The developer controls execution (e.g. Lodash).
          <br><br>
          <strong>Framework Paradigm</strong>: The framework provides the structural template and executes your custom handlers within its defined lifecycle.
        </blockquote>

        <h3>2. Robust Express Listener Server</h3>
        <pre><code class="language-javascript">const express = require('express');
const app = express();
const PORT = 3000;

// Body Parsers Middlewares
app.use(express.json()); // Parses incoming application/json body payloads
app.use(express.urlencoded({ extended: true })); // Parses urlencoded HTML form data

app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(\`Express server running on port \${PORT}\`);
});</code></pre>

        <h3>3. Middleware: Dynamic Lifecycle Pipelines</h3>
        <p>Middleware functions execute sequentially, inspecting incoming requests, modifying properties, and calling <code>next()</code> to pass execution control forward:</p>
        <pre><code class="language-javascript">// Custom Request Logger Middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // CRITICAL: Continues execution pipeline
});

// Built-in static assets directory middleware
app.use('/static', express.static('public'));</code></pre>

        <h3>4. Global Error Handling Middleware</h3>
        <p>Gracefully handle execution crashes using specific 4-argument Express error middleware layers at the end of routes:</p>
        <pre><code class="language-javascript">// Route that triggers error
app.get('/crash', (req, res, next) => {
  const err = new Error("Database query failed!");
  next(err); // Passes error objects forward to error middleware
});

// Global Error Handler (Must have exactly 4 arguments)
app.use((err, req, res, next) => {
  console.error("Unhandled Crash:", err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    details: err.message
  });
});</code></pre>

        <h3>5. Standard HTTP Response Options</h3>
        <ul>
          <li><strong>\`res.send()\`</strong>: Sends generic data, string buffers, or compiled HTML snippets, calculating headers automatically.</li>
          <li><strong>\`res.json()\`</strong>: Explicitly sends JSON structures, setting the header to <code>application/json</code>.</li>
          <li><strong>\`res.status()\`</strong>: Sets response status codes. Can be chained: <code>res.status(201).json(record)</code>.</li>
          <li><strong>\`res.redirect()\`</strong>: Redirects client view: <code>res.redirect('/login')</code>.</li>
          <li><strong>\`res.sendFile()\`</strong>: Streams physical files from absolute filesystem directories directly.</li>
        </ul>
      `
    },
    {
      id: "ejs-basics",
      videoUrl: "https://www.youtube.com/watch?v=Kah88N8W5rs&pp=ygUDRUpT",
      title: "EJS — Dynamic View Templating",
      category: "Back-End",
      subCategory: "Express",
      tags: ["ejs", "templating", "render", "views", "html"],
      excerpt: "Building dynamic HTML layouts: view engine registers, loop iterations, conditional views, passing datasets, and modular EJS partial separations.",
      content: `
        <h2>EJS (Embedded JavaScript) Templating Engine</h2>
        <p>EJS executes standard JavaScript expressions inside static HTML markup during the server rendering cycle, outputting valid structured HTML directly to clients.</p>
        
        <h3>1. View Engine Setup and Variables Injection</h3>
        <p>Configure the template engine to compile view structures stored inside the <code>views/</code> directory:</p>
        <pre><code class="language-javascript">const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/profile', (req, res) => {
  const user = { name: "Priyanshu", age: 21, isModerator: true };
  // Compiles views/profile.ejs, injecting user object data
  res.render('profile', { user });
});</code></pre>

        <h3>2. Core EJS Tag Reference Chart</h3>
        <table>
          <thead>
            <tr>
              <th>Tag syntax</th>
              <th>Operational Purpose</th>
              <th>Practical Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;%= %&gt;</code></td>
              <td>Escapes HTML tags and outputs values.</td>
              <td><code>&lt;p&gt;Welcome, &lt;%= user.name %&gt;&lt;/p&gt;</code></td>
            </tr>
            <tr>
              <td><code>&lt;% %&gt;</code></td>
              <td>Scriptlet tag: Runs JS control flow logic (loops, definitions) without displaying output.</td>
              <td><code>&lt;% if (user.age &gt;= 18) { %&gt;</code></td>
            </tr>
            <tr>
              <td><code>&lt;%- %&gt;</code></td>
              <td>Outputs raw, unescaped HTML content. Used to load layout subcomponents.</td>
              <td><code>&lt;%- include('partials/header') %&gt;</code></td>
            </tr>
            <tr>
              <td><code>&lt;%# %&gt;</code></td>
              <td>Developer comments (skipped during compilation entirely).</td>
              <td><code>&lt;%# This is a hidden EJS comment %&gt;</code></td>
            </tr>
          </tbody>
        </table>

        <h3>3. Dynamic Loops & Conditional Layout Rendering</h3>
        <p>Generate highly dynamic lists and validation indicators directly inside EJS view templates:</p>
        <pre><code class="language-html">&lt;!-- views/profile.ejs --&gt;
&lt;h1&gt;Control Center&lt;/h1&gt;

&lt;!-- Conditional rendering block --&gt;
&lt;% if (user.isModerator) { %&gt;
  &lt;div class="note-alert tip"&gt;
    &lt;p&gt;Moderator Privileges Active!&lt;/p&gt;
  &lt;/div&gt;
&lt;% } %&gt;

&lt;!-- Loop iteration block --&gt;
&lt;ul&gt;
  &lt;% const skillList = ["Express", "MongoDB", "Kubernetes"]; %&gt;
  &lt;% skillList.forEach(function(skill) { %&gt;
    &lt;li&gt;Skill Element: &lt;%= skill %&gt;&lt;/li&gt;
  &lt;% }); %&gt;
&lt;/ul&gt;</code></pre>

        <h3>4. EJS Layout Partials (Modular Subcomponents)</h3>
        <p>Dry up HTML structures by separating headers, dynamic navigations, and footer blocks into reusable partial fragments:</p>
        <pre><code class="language-html">&lt;!-- views/dashboard.ejs --&gt;
&lt;%- include('partials/header') %&gt;
&lt;%- include('partials/nav') %&gt;

&lt;main class="container"&gt;
  &lt;h2&gt;User Dashboard&lt;/h2&gt;
  &lt;p&gt;Dynamic application stats...&lt;/p&gt;
&lt;/main&gt;

&lt;%- include('partials/footer') %&gt;</code></pre>
      `
    },
    {
      id: "rest-crud",
      videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUJRXhwcmVlc0pT",
      title: "REST APIs — CRUD Implementation",
      category: "Back-End",
      subCategory: "Express",
      tags: ["rest", "api", "crud", "query", "params"],
      excerpt: "REST design principles: mapping HTTP methods, difference between path parameters (req.params) and query strings (req.query), and full CRUD controller templates.",
      content: `
        <h2>RESTful API Architecture & CRUD Mechanics</h2>
        <p>REST (Representational State Transfer) is a standard architectural design pattern for network APIs, mapping stateless HTTP request verbs (GET, POST, PUT, DELETE) to database operations over distinct resources.</p>
        
        <h3>1. Strict REST Endpoint Conventions</h3>
        <p>Configure API paths cleanly to reflect collection resources and target keys:</p>
        <table>
          <thead>
            <tr>
              <th>HTTP Method</th>
              <th>REST Route Path</th>
              <th>CRUD Operation</th>
              <th>Operational Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GET</strong></td>
              <td><code>/api/posts</code></td>
              <td>Read (Index)</td>
              <td>Retrieves all items inside target collection.</td>
            </tr>
            <tr>
              <td><strong>GET</strong></td>
              <td><code>/api/posts/:id</code></td>
              <td>Read (Show)</td>
              <td>Retrieves a single item matching the ID identifier.</td>
            </tr>
            <tr>
              <td><strong>POST</strong></td>
              <td><code>/api/posts</code></td>
              <td>Create</td>
              <td>Inserts new resources into database.</td>
            </tr>
            <tr>
              <td><strong>PUT</strong></td>
              <td><code>/api/posts/:id</code></td>
              <td>Update</td>
              <td>Replaces values of target item matching ID.</td>
            </tr>
            <tr>
              <td><strong>DELETE</strong></td>
              <td><code>/api/posts/:id</code></td>
              <td>Destroy</td>
              <td>Removes target resource matching ID.</td>
            </tr>
          </tbody>
        </table>

        <h3>2. dynamic Path Parameters vs Query Strings</h3>
        <ul>
          <li><strong>Path Parameters</strong> (<code>req.params</code>): Variables embedded within the URL path. Essential for identifying specific records:
            <br><em>Syntax:</em> <code>/api/posts/:id</code> &rarr; <code>/api/posts/42</code> maps to <code>req.params.id = "42"</code>.
          </li>
          <li><strong>Query Strings</strong> (<code>req.query</code>): Optional parameters appended after a <code>?</code>. Used for sorting, filtering, searching:
            <br><em>Syntax:</em> <code>/api/posts?author=aman&limit=5</code> maps to <code>req.query.author = "aman"</code>.
          </li>
        </ul>

        <h3>3. Complete REST CRUD Controller Template</h3>
        <pre><code class="language-javascript">const express = require('express');
const app = express();
app.use(express.json());

let usersList = [
  { id: 1, name: "Aman", course: "BCA" },
  { id: 2, name: "Riya", course: "B.Tech" }
];

// 1. GET (INDEX) - Retrieve resources (Optional filter)
app.get('/api/users', (req, res) => {
  const { course } = req.query;
  if (course) {
    const filtered = usersList.filter(u => u.course.toLowerCase() === course.toLowerCase());
    return res.status(200).json(filtered);
  }
  res.status(200).json(usersList);
});

// 2. GET (SHOW) - Retrieve single resource
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersList.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "User record not found" });
  res.status(200).json(user);
});

// 3. POST - Create new resource
app.post('/api/users', (req, res) => {
  const { name, course } = req.body;
  if (!name || !course) return res.status(400).json({ error: "Missing payload data" });

  const newUser = { id: usersList.length + 1, name, course };
  usersList.push(newUser);
  res.status(201).json(newUser);
});

// 4. PUT - Update resource
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersList.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "User record not found" });

  user.name = req.body.name || user.name;
  user.course = req.body.course || user.course;
  res.status(200).json(user);
});

// 5. DELETE - Remove resource
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  usersList = usersList.filter(u => u.id !== id);
  res.status(200).json({ message: "Record deleted successfully" });
});</code></pre>
      `
    },
    {
      id: "sql-basics",
      title: "SQL — Relational Database Basics",
      category: "Databases",
      subCategory: "SQL",
      tags: ["sql", "mysql", "relational", "schema", "queries", "joins"],
      excerpt: "Comprehensive guide to SQL databases: DDL/DML divisions, validation constraints, aggregation grouping (GROUP BY / HAVING), and multi-table Joins.",
      content: `
        <h2>SQL & Relational Databases (MySQL)</h2>
        <p>Structured Query Language (SQL) is the standard language for managing and querying Relational Database Management Systems (RDBMS) like MySQL, PostgreSQL, and SQL Server. Relational databases store structured, tabular data matching strict schemas, enforcing relationships between entities through primary and foreign keys.</p>
        
        <h3>1. Architectural Divisions: DDL, DML, DQL & DCL</h3>
        <p>SQL operations are classified into specialized subsets based on their target level in the database lifecycle:</p>
        <table>
          <thead>
            <tr>
              <th>Division</th>
              <th>Command Set</th>
              <th>Scope & Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>DDL</strong> (Data Definition Language)</td>
              <td><code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code></td>
              <td>Defines, alters, and manages structural blueprints (databases, tables, views, indexes, schemas).</td>
            </tr>
            <tr>
              <td><strong>DML</strong> (Data Manipulation Language)</td>
              <td><code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></td>
              <td>Manages individual records residing inside tables. Direct impact on database state.</td>
            </tr>
            <tr>
              <td><strong>DQL</strong> (Data Query Language)</td>
              <td><code>SELECT</code></td>
              <td>Retrieves data records from one or more tables without altering the underlying structures.</td>
            </tr>
            <tr>
              <td><strong>DCL</strong> (Data Control Language)</td>
              <td><code>GRANT</code>, <code>REVOKE</code></td>
              <td>Configures security levels, roles, and administrative user permissions.</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Schema Definition & Table Constraints (DDL - Basics)</h3>
        <p>Defining a relational schema requires declaring tables, data types, and structural constraints that protect data integrity:</p>
        <ul>
          <li><strong><code>PRIMARY KEY</code></strong>: A column (or set of columns) that uniquely identifies each row in a table. It cannot contain <code>NULL</code> values.</li>
          <li><strong><code>NOT NULL</code></strong>: Guarantees that a column cannot store a null value.</li>
          <li><strong><code>UNIQUE</code></strong>: Enforces uniqueness across all values in the column.</li>
          <li><strong><code>CHECK</code></strong>: Validates that data matches a specific boolean rule before allowing an insertion or update.</li>
          <li><strong><code>DEFAULT</code></strong>: Configures a fallback value if no value is explicitly passed during insertion.</li>
        </ul>
        <pre><code class="language-sql">-- Establish database context
CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;

-- 1. Create independent Parent Table
CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(100) NOT NULL UNIQUE,
  budget DECIMAL(12, 2) DEFAULT 50000.00
);

-- 2. Create dependent Child Table with constraints
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT,
  dept_id INT,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Validation constraints
  CONSTRAINT age_min_limit CHECK (age >= 18),
  
  -- Foreign Key relationship mapping
  FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL
);</code></pre>

        <h3>3. Data Querying, Filtering & Sorting (DQL - Intermediate)</h3>
        <p>Write robust queries to filter datasets using conditional predicates, sort outcomes, and control response volume:</p>
        <pre><code class="language-sql">-- Filter using wildcards, ranges, and boolean combinations
SELECT id, username, age 
FROM students
WHERE age BETWEEN 18 AND 25
  AND (email LIKE '%@gmail.com' OR email LIKE '%@edu.in')
  AND dept_id IS NOT NULL;

-- Sort outcomes dynamically with limit offsets (Pagination pattern)
SELECT * FROM students
ORDER BY age DESC, enrolled_at ASC
LIMIT 10 OFFSET 20; -- Skips first 20 records, returns next 10 (Page 3)</code></pre>

        <h3>4. Complex Query Aggregation (DQL - Advanced)</h3>
        <p>Aggregations calculate summary statistics (e.g. counts, sums, averages) across blocks of rows. When grouping data, the <strong><code>HAVING</code></strong> clause must be used instead of <code>WHERE</code> to filter summary statistics, since <code>WHERE</code> only filters raw rows before grouping occurs:</p>
        <pre><code class="language-sql">-- Calculate age profiles grouped by department
SELECT 
  dept_id, 
  COUNT(id) AS total_students,
  ROUND(AVG(age), 1) AS average_age,
  MAX(age) AS oldest_student
FROM students
WHERE dept_id IS NOT NULL       -- 1. Filters raw records first (WHERE)
GROUP BY dept_id                 -- 2. Groups remaining records
HAVING total_students >= 3        -- 3. Filters groups after calculation (HAVING)
ORDER BY average_age DESC;       -- 4. Sorts output</code></pre>

        <h3>5. Multi-Table Joins & Schema Relationships</h3>
        <p>Joins combine columns from multiple tables by matching common fields (typically Primary Keys matching Foreign Keys):</p>
        <ul>
          <li><strong><code>INNER JOIN</code></strong>: Returns rows only when there is a match in both tables.</li>
          <li><strong><code>LEFT OUTER JOIN</code></strong>: Returns all rows from the left table, and matched rows from the right table. If no match is found, columns on the right return <code>NULL</code>.</li>
          <li><strong><code>RIGHT OUTER JOIN</code></strong>: Returns all rows from the right table, and matched rows from the left table.</li>
        </ul>
        <pre><code class="language-sql">-- Query students with their department names (INNER JOIN)
SELECT s.id, s.username, d.dept_name
FROM students s
INNER JOIN departments d ON s.dept_id = d.id;

-- Query ALL departments and their associated student counts (LEFT JOIN keeps empty departments)
SELECT d.dept_name, COUNT(s.id) AS student_count
FROM departments d
LEFT JOIN students s ON s.dept_id = d.id
GROUP BY d.id, d.dept_name;</code></pre>

        <h3>6. Advanced SQL: Subqueries & Database Indexes</h3>
        <p>Optimizing and nesting queries are critical skills for scaling relational architectures:</p>
        <ul>
          <li><strong>Subquery (Nested SELECT)</strong>: A query embedded inside another query. Perfect for dynamic filtering:
            <pre><code class="language-sql">-- Retrieve students in departments with budgets > 100,000
SELECT username, email 
FROM students 
WHERE dept_id IN (
  SELECT id FROM departments WHERE budget > 100000
);</code></pre>
          </li>
          <li><strong>Database Indexes (B-Tree)</strong>: Speeds up <code>SELECT</code> queries targeting specific columns dramatically. However, indexes slow down write operations (<code>INSERT</code>/<code>UPDATE</code>/<code>DELETE</code>) because the database must update both the physical table and the index structures:
            <pre><code class="language-sql">-- Create an index to speed up email lookups
CREATE INDEX idx_student_email ON students(email);</code></pre>
          </li>
        </ul>
      `
    },
    {
      id: "node-sql",
      videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUGTm9kZWpz",
      title: "Node + SQL — Dynamic Integrations",
      category: "Databases",
      subCategory: "SQL",
      tags: ["sql", "mysql2", "node-sql", "pools", "injection", "transactions"],
      excerpt: "Secure database connectivity: configuring mysql2 driver, connection pooling, prepared parameter sets, and transactional blocks.",
      content: `
        <h2>Securely Connecting NodeJS to MySQL Databases</h2>
        <p>Connecting Node.js backends to relational SQL databases requires the use of database drivers. In production, we utilize the high-performance <code>mysql2</code> driver, which features connection pools, promise wrappers, and native prepared statements.</p>
        
        <h3>1. Database Connection Pooling vs Single Connections</h3>
        <p>Opening and closing raw TCP database connections for every HTTP request degrades server throughput and wastes CPU resources. A <strong>Connection Pool</strong> maintains a collection of active, reusable database connections. When a query needs to execute, Node borrows a connection from the pool, runs the SQL, and immediately releases the connection back to the pool.</p>
        <pre><code class="language-javascript">const mysql = require('mysql2');

// Configure connection pool parameters
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysecurepassword',
  database: 'college_db',
  waitForConnections: true,
  connectionLimit: 10,       // Max simultaneous active database connections
  queueLimit: 0,             // Unlimited queue length for waiting queries
  enableKeepAlive: true,     // Prevents TCP connection timeouts
  keepAliveInitialDelay: 10000
});

// Export promise-enabled pool for modern async/await syntax
const db = pool.promise();
module.exports = db;</code></pre>

        <h3>2. Standard Query Executions with Promise Wrappers</h3>
        <p>Using the promise pool allows you to write clean, non-blocking asynchronous queries with standard ES6 <code>async/await</code> handlers:</p>
        <pre><code class="language-javascript">const db = require('./db');

async function getAllStudents() {
  try {
    // db.query returns an array: [rows_dataset, metadata_fields]
    const [rows] = await db.query('SELECT id, username, age FROM students');
    return rows;
  } catch (error) {
    console.error("Database query failed:", error.message);
    throw error; // Propagates error to global express handler
  }
}</code></pre>

        <h3>3. Preventing SQL Injection with Prepared Statements</h3>
        <p>SQL Injection is a severe security vulnerability where attackers inject malicious SQL statements into user input fields, manipulating the database to leak confidential data or delete tables.</p>
        
        <div class="note-alert warning">
          <strong>❌ Vulnerable Code (DO NOT USE):</strong>
          <p>Direct string interpolation merges user inputs directly into the SQL command before parsing. Attackers can alter query logic easily.</p>
          <pre><code class="language-javascript">// DANGEROUS: String interpolation is vulnerable to injections!
const badInput = "hacker' OR '1'='1";
const query = \`SELECT * FROM students WHERE username = '\${badInput}'\`;
// Executes: SELECT * FROM students WHERE username = 'hacker' OR '1'='1'; (Leaks all records!)</code></pre>
        </div>

        <div class="note-alert tip">
          <strong>✅ Secure Code (Prepared Statements):</strong>
          <p>Always use <strong>placeholders (<code>?</code>)</strong>. Prepared statements send the SQL query template and parameters separately to the database engine. The engine compiles the SQL template first, then treats inputs as literal strings, completely neutralizing injection payloads.</p>
          <pre><code class="language-javascript">// SECURE: Using placeholders parameterizes the inputs safely
const secureInput = "hacker' OR '1'='1";
const query = 'SELECT * FROM students WHERE username = ?';
const [rows] = await db.query(query, [secureInput]); // Returns zero matches safely!</code></pre>
        </div>

        <h3>4. Advanced Node + SQL: Database Transactions</h3>
        <p>A <strong>Transaction</strong> is a sequence of operations executed as a single logical unit of work. Transactions must adhere to **ACID** properties (Atomicity, Consistency, Isolation, Durability). All statements must execute successfully, or all changes must be completely undone (rolled back).</p>
        <pre><code class="language-javascript">const db = require('./db');

async function transferStudentDepartment(studentId, oldDeptId, newDeptId) {
  // Borrow a single, dedicated connection from pool for transaction isolation
  const connection = await db.getConnection();
  
  try {
    // 1. Begin the Transaction boundaries
    await connection.beginTransaction();
    
    // Operation A: Deduct department counts
    await connection.query(
      'UPDATE departments SET budget = budget - 5000 WHERE id = ?',
      [oldDeptId]
    );
    
    // Operation B: Add department counts
    await connection.query(
      'UPDATE departments SET budget = budget + 5000 WHERE id = ?',
      [newDeptId]
    );
    
    // Operation C: Transfer Student
    await connection.query(
      'UPDATE students SET dept_id = ? WHERE id = ?',
      [newDeptId, studentId]
    );
    
    // 2. Commit all changes to disk permanently
    await connection.commit();
    console.log("Transaction successfully completed!");
  } catch (error) {
    // If ANY step fails, rollback ALL operations to original state
    await connection.rollback();
    console.error("Transaction failed. Changes rolled back.", error.message);
    throw error;
  } finally {
    // CRITICAL: Release connection back to pool
    connection.release();
  }
}</code></pre>
      `
    },
    {
      id: "mongodb-basics",
      title: "MongoDB — Document Database Basics",
      category: "Databases",
      subCategory: "MongoDB",
      tags: ["mongodb", "nosql", "bson", "crud", "aggregation", "indexing"],
      excerpt: "Comprehensive NoSQL document guide: BSON types, shell CRUD operations, complex aggregation pipeline stages, indexing, and embedding schemas.",
      content: `
        <h2>MongoDB & NoSQL Document Databases</h2>
        <p>MongoDB is a leading document-oriented NoSQL database designed for high performance, high availability, and easy scalability. Unlike traditional relational databases with rigid tables, MongoDB stores data in flexible, JSON-like documents called BSON.</p>
        
        <p align="center">
          <img src="assets/Collections.png" alt="Relational Tables vs MongoDB Collections structure" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h3>1. BSON: Binary JSON</h3>
        <p>While MongoDB records are written in standard JSON formats, they are compiled and stored internally as <strong>BSON (Binary JSON)</strong>. BSON provides binary representation of JSON documents, adding speed, space optimization, and support for additional data types:</p>
        <ul>
          <li><strong>ObjectId</strong>: 12-byte unique identifier containing timestamps, machine identifiers, process IDs, and increment counters.</li>
          <li><strong>Date</strong>: 64-bit integer representing milliseconds since epoch.</li>
          <li><strong>Binary Data</strong>: Used to store files or binary data payloads directly.</li>
          <li><strong>Double, Decimal128</strong>: High-precision numerical types for financial computations.</li>
        </ul>

        <h3>2. Essential MongoDB Shell CRUD Matrix (Basics & Intermediate)</h3>
        
        <h4>A) Create / Insert Operations</h4>
        <p>Insert single or multiple documents into a collection. If a collection does not exist, MongoDB creates it automatically upon insertion:</p>
        <pre><code class="language-javascript">// Insert a single student record
db.students.insertOne({
  name: "Aman",
  age: 20,
  course: "B.Tech",
  skills: ["Java", "SQL"],
  profileViews: 12
});</code></pre>
        <p align="center">
          <img src="assets/insertOne.png" alt="MongoDB insertOne success terminal logs" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <pre><code class="language-javascript">// Insert multiple documents simultaneously
db.students.insertMany([
  { name: "Riya", age: 21, course: "BCA", skills: ["Express", "React"] },
  { name: "Karan", age: 22, course: "B.Sc", skills: ["Python", "Flask"] }
]);</code></pre>
        <p align="center">
          <img src="assets/insertMany.png" alt="MongoDB insertMany batch success response" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h4>B) Read / Find (Comparison & Logical Operators)</h4>
        <p>Query documents matching specific criteria. MongoDB provides comparison operators (<code>$gt</code>, <code>$gte</code>, <code>$lt</code>, <code>$lte</code>, <code>$ne</code>, <code>$in</code>) and logical operators (<code>$or</code>, <code>$and</code>, <code>$not</code>):</p>
        <pre><code class="language-javascript">// Query students where age is >= 21
db.students.find({ age: { $gte: 21 } });</code></pre>
        <p align="center">
          <img src="assets/find.png" alt="MongoDB basic find query response" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <pre><code class="language-javascript">// Query with logical $or, projecting specific fields and hiding _id
db.students.find(
  {
    $or: [
      { course: "B.Tech" },
      { age: { $lt: 21 } }
    ]
  },
  { name: 1, course: 1, _id: 0 } // Projection: 1 to show, 0 to hide
);</code></pre>
        <p align="center">
          <img src="assets/selectedFind.png" alt="MongoDB field projections visual display" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h4>C) Update Operations & Modifiers ($set, $inc, $push)</h4>
        <p>Updates must use update operators to modify specific fields without overwriting the entire document:</p>
        <ul>
          <li><strong><code>$set</code></strong>: Replaces or adds fields with new values.</li>
          <li><strong><code>$inc</code></strong>: Increments a numeric field by a specified value.</li>
          <li><strong><code>$push</code></strong>: Appends an element to a nested array.</li>
        </ul>
        <pre><code class="language-javascript">// Modify Aman's age and increment his profileViews
db.students.updateOne(
  { name: "Aman" },
  {
    $set: { age: 21 },
    $inc: { profileViews: 1 }
  }
);</code></pre>
        <p align="center">
          <img src="assets/after-set.png" alt="Document state before and after using $set" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h3>3. Aggregate Pipelines (Advanced)</h3>
        <p>Aggregation pipelines process collections of documents through multiple stages, transforming and grouping datasets into compiled analytics summaries:</p>
        <ul>
          <li><strong><code>$match</code></strong>: Filters documents based on a query (like <code>WHERE</code> in SQL).</li>
          <li><strong><code>$group</code></strong>: Groups input documents by specified identifier key and performs calculations (like <code>GROUP BY</code>).</li>
          <li><strong><code>$sort</code></strong>: Orders documents (like <code>ORDER BY</code>).</li>
        </ul>
        <pre><code class="language-javascript">db.students.aggregate([
  // Stage 1: Match students older than 19
  { $match: { age: { $gt: 19 } } },
  
  // Stage 2: Group by course and compute averages
  {
    $group: {
      _id: "$course",
      totalStudents: { $sum: 1 },
      averageAge: { $avg: "$age" }
    }
  },
  
  // Stage 3: Sort by averageAge descending
  { $sort: { averageAge: -1 } }
]);</code></pre>

        <h3>4. Schema Design: Embedding vs Referencing</h3>
        <p>MongoDB supports two main options for structural modeling:</p>
        <table>
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Schema Blueprint</th>
              <th>Best Used For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Embedded Documents</strong> (Denormalization)</td>
              <td>Store child objects directly inside parent fields (e.g. nested lists).</td>
              <td>1-to-Few relationships, static read-heavy data. Single query reads all.</td>
            </tr>
            <tr>
              <td><strong>Referenced Documents</strong> (Normalization)</td>
              <td>Store an <code>ObjectId</code> pointer linking documents across collections.</td>
              <td>1-to-Many or Many-to-Many relationships, dynamic, rapidly-growing data. Prevents hitting the 16MB document size limit.</td>
            </tr>
          </tbody>
        </table>
        
        <h3>5. Performance Indexing</h3>
        <p>Without indexes, MongoDB must perform a full collection scan (scanning every document) to resolve queries. Indexes store a small portion of the collection's data in an easy-to-traverse B-Tree index structure:</p>
        <pre><code class="language-javascript">// Create a single index on student email address
db.students.createIndex({ email: 1 }); // 1 = Ascending index</code></pre>
      `
    },
    {
      id: "mongoose-basics",
      title: "Mongoose — Object Data Modeling",
      category: "Databases",
      subCategory: "MongoDB",
      tags: ["mongoose", "mongodb", "schema", "validation", "models", "middleware"],
      excerpt: "Advanced Mongoose ODM: schema validations, dynamic CRUD models, custom validators, pre/post middleware hooks, and references population.",
      content: `
        <h2>Mongoose ODM (Object Data Modeling) for Node.js</h2>
        <p>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between code objects and BSON representations in MongoDB.</p>
        
        <h3>1. Schema Definition, Strict Types & Models (Basics)</h3>
        <p>A Schema defines the structure, strict types, default values, and data structures for documents. Compiled models act as constructors to perform database operations:</p>
        <pre><code class="language-javascript">const mongoose = require('mongoose');

// Establish connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/collegeDB')
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(error => console.error('MongoDB connection error:', error.message));

// Create a strict Schema blueprint
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is mandatory'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  age: {
    type: Number,
    min: [15, 'Minimum allowed age is 15'],
    max: [30, 'Maximum allowed age is 30']
  },
  course: {
    type: String,
    enum: {
      values: ['B.Tech', 'BCA', 'B.Sc'],
      message: 'Course must be B.Tech, BCA, or B.Sc'
    },
    default: 'B.Tech'
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  }
});

// Compile Schema into active model constructor
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;</code></pre>

        <h3>2. Standard CRUD Helpers (Intermediate)</h3>
        <p>Mongoose provides powerful abstractions to perform CRUD operations smoothly:</p>
        <pre><code class="language-javascript">const Student = require('./models/Student');

// CREATE: Instantiate and save document
async function createStudent() {
  try {
    const studentObj = new Student({
      name: "Riya Sharma",
      age: 21,
      course: "BCA"
    });
    const saved = await studentObj.save();
    console.log("Student saved:", saved);
  } catch (error) {
    console.error("Save failed:", error.message);
  }
}

// UPDATE: Use findByIdAndUpdate with validation overrides
async function changeCourse(studentId) {
  const updated = await Student.findByIdAndUpdate(
    studentId,
    { $set: { course: 'B.Tech' } },
    { 
      new: true,            // Returns the modified document instead of original
      runValidators: true   // CRITICAL: Forces validation check on updates
    }
  );
  console.log("Updated record:", updated);
}</code></pre>

        <div class="note-alert important">
          <strong>⚠️ Operational Note:</strong> By default, Mongoose only runs schema validation checks when calling <code>save()</code>. On updates (such as <code>findByIdAndUpdate</code> or <code>updateOne</code>), validations are completely skipped unless you explicitly supply <code>runValidators: true</code> in the options block!
        </div>

        <h3>3. Advanced Mongoose: Middleware Hooks & Virtuals (Advanced)</h3>
        <p>Supercharge your schemas with custom execution hooks, virtual properties, and reference population:</p>
        <ul>
          <li><strong>Pre-Save Middleware (Hooks)</strong>: Executes a function automatically before saving data to MongoDB (e.g. hashing passwords or auto-formatting strings):
            <pre><code class="language-javascript">// Format student name to lowercase before saving
studentSchema.pre('save', function(next) {
  this.name = this.name.toLowerCase();
  next(); // Continues save operation
});</code></pre>
          </li>
          <li><strong>Virtual Properties</strong>: Properties that can be read but are not stored in the database. Calculated dynamically on retrieval:
            <pre><code class="language-javascript">// Compute age category virtual field
studentSchema.virtual('ageCategory').get(function() {
  return this.age >= 21 ? 'Adult' : 'Junior';
});</code></pre>
          </li>
          <li><strong>Referenced Populations (.populate)</strong>: Dynamically replace foreign <code>ObjectId</code> references with actual documents from other collections, acting as a lightweight join query:
            <pre><code class="language-javascript">// Schema reference definition
const postSchema = new mongoose.Schema({
  title: String,
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
});

const Post = mongoose.model('Post', postSchema);

// Query posts and populate references
async function getPostsWithCreators() {
  const posts = await Post.find().populate('student');
  console.log("Posts populated:", posts);
}</code></pre>
          </li>
        </ul>
      `
    },
    {
      id: "docker-basics",
      videoUrl: "https://www.youtube.com/watch?v=exmSJpJvIPs&pp=ygUGRG9ja2Vy",
      title: "Docker — Containerization & Networks",
      category: "DevOps",
      subCategory: "Docker",
      tags: ["docker", "containers", "images", "dockerfile", "networking"],
      excerpt: "Introduction to containerization, essential CLI commands, writing custom Dockerfiles, images vs containers, virtual bridge networking, and Docker Hub distribution.",
      content: `
        <h2>Docker Containerization & Virtual Networking</h2>
        <p>Docker is an open-source platform that enables developers to package, distribute, and execute applications as lightweight, isolated, and portable container environments.</p>

        <h3>1. What is Containerization?</h3>
        <p>Unlike Virtual Machines (VMs) which require a full guest Operating System (OS) and a hypervisor, Docker containers share the host machine's OS kernel. This makes them extremely lightweight, fast to boot, and minimal in resource consumption.</p>
        <p align="center">
          <img src="assets/Docker_Workflow.png" alt="Docker Workflow Blueprint" style="max-width: 100%; border-radius: 8px; margin: 12px 0;">
        </p>

        <h3>2. Core Benefits</h3>
        <ul>
          <li>🚀 <strong>Portability</strong>: Once built, the container runs identically on any system (local dev, staging, cloud) without environment discrepancies.</li>
          <li>⚡ <strong>Resource Efficiency</strong>: Share host kernel resources, utilizing a fraction of the memory and CPU required by traditional VMs.</li>
          <li>🛠 <strong>Consistency</strong>: Prevents the classic "works on my machine" bug by locking down runtime dependencies, binary versions, and system packages.</li>
        </ul>

        <h3>3. Essential Docker CLI Reference</h3>
        <pre><code class="language-bash"># Check installed version
docker --version

# List running containers
docker ps

# List all containers (active and stopped)
docker ps -a

# List all local cached images
docker images

# Stop and remove containers
docker stop &lt;container_id&gt;
docker rm &lt;container_id&gt;

# Remove local image
docker rmi &lt;image_id&gt;</code></pre>

        <h3>4. Running Containers (Port & Volume Maps)</h3>
        <p>Containers are started from images with operational arguments to map ports, bind external directories, and name processes:</p>
        <pre><code class="language-bash"># Run detached with port mapping (HostPort:ContainerPort)
docker run -d -p 8080:80 --name my-web nginx:latest

# Run detached with mounted volumes (HostDir:ContainerDir)
docker run -d -v \$(pwd):/app --name my-app node:20

# Access running container shell interactively
docker exec -it my-web /bin/bash</code></pre>

        <h3>5. How to Write a Dockerfile</h3>
        <p>A <code>Dockerfile</code> is a plaintext configuration file containing step-by-step instructions to compile a custom Docker image:</p>
        <pre><code class="language-dockerfile"># 1. Base image layer
FROM node:18-alpine

# 2. Establish context working directory inside container
WORKDIR /app

# 3. Copy dependency files first (optimizes image caching layers)
COPY package*.json ./

# 4. Execute installation command
RUN npm install --production

# 5. Copy the remaining application source code
COPY . .

# 6. Document listener port
EXPOSE 3000

# 7. Start application process
CMD ["npm", "start"]</code></pre>

        <h3>6. Image vs Container Mechanics</h3>
        <p>Understanding this relationship is crucial for proper architecture:</p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Docker Image 🖼️</th>
              <th>Docker Container 📦</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Definition</strong></td>
              <td>Static read-only template containing configurations and code.</td>
              <td>Dynamic, live running instance compiled from the image.</td>
            </tr>
            <tr>
              <td><strong>Mutability</strong></td>
              <td>Immutable. Rebuilding is required to modify files.</td>
              <td>Writable overlay layer. State changes occur during runtime.</td>
            </tr>
            <tr>
              <td><strong>Lifecycle</strong></td>
              <td>Stored in local cache or registries (e.g. Docker Hub).</td>
              <td>Started, stopped, restarted, or terminated dynamically.</td>
            </tr>
            <tr>
              <td><strong>OOP Analogy</strong></td>
              <td>Class / ISO Blueprint.</td>
              <td>Object / Running instance.</td>
            </tr>
          </tbody>
        </table>
        <p align="center">
          <img src="assets/container_image.png" alt="Docker Image vs Container Relation" style="max-width: 100%; border-radius: 8px; margin: 12px 0;">
        </p>

        <h3>7. Docker Virtual Networking</h3>
        <p>Docker uses virtual networks to establish secure communication pipelines between containers and the outside world:</p>
        <ul>
          <li><strong>bridge</strong> (default): Private virtual bridge network. Containers can reach each other via IP addresses, but not name-based DNS unless using custom bridges.</li>
          <li><strong>host</strong>: Eliminates isolation, binding the container processes directly to the host's physical network ports.</li>
          <li><strong>none</strong>: Fully isolated network stack. No internet or inter-container access.</li>
          <li><strong>User-Defined Bridge Network (Recommended)</strong>: Promotes isolated namespaces and automatic DNS name resolution:</li>
        </ul>
        <pre><code class="language-bash"># Create virtual subnet
docker network create app-network

# Link app and database containers on the same network
docker run -d --name mysql-db --network app-network -e MYSQL_ROOT_PASSWORD=secret mysql:8
docker run -d --name node-app --network app-network -p 3000:3000 my-node-image

# Now node-app queries database using standard hostname "mysql-db"!</code></pre>

        <h3>8. Pushing Images to Docker Hub</h3>
        <p>Share local images with team members or orchestrators via registries:</p>
        <pre><code class="language-bash"># 1. Login to Hub securely
docker login

# 2. Tag local image matching user registry path
docker tag my-app:latest priyanshuksharma/myapp:1.0

# 3. Push targeted image tag to registry
docker push priyanshuksharma/myapp:1.0</code></pre>
        <p align="center">
          <img src="assets/Continuous_Docker_Workflow.png" alt="Continuous Integration and Docker Hub registry pushing workflow diagram" style="max-width: 100%; border-radius: 8px; margin: 12px 0;">
        </p>
      `
    },
    {
      id: "k8s-arch",
      videoUrl: "https://www.youtube.com/watch?v=W04brGNgxN4&pp=ygUKS3ViZXJuZXRlcw%3D%3D",
      title: "Kubernetes — Cluster Architecture",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["k8s", "architecture", "pods", "namespaces", "control-plane"],
      excerpt: "Control Plane components (apiserver, etcd, scheduler), worker node agents (kubelet, kube-proxy), and namespace partitions.",
      content: `
        <h2>Kubernetes (K8s) Cluster Architecture</h2>
        <p>Kubernetes is an open-source container orchestration engine that automates the deployment, scaling, management, and networking of containerized applications. It shifts manual system admin operations into a declarative state-driven automation pipeline.</p>
        
        <p align="center">
          <img src="assets/k8s_arch.png" alt="Kubernetes Cluster Control Plane and Worker Node Architecture Map" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h3>1. The Master Node (Control Plane) Deep-Dive (Advanced)</h3>
        <p>The Control Plane acts as the brain of the cluster, maintaining the desired state, scheduling user workloads, monitoring node health, and executing reconciliation loops:</p>
        <ul>
          <li><strong>API Server (<code>kube-apiserver</code>)</strong>: The central nerve center. It acts as the gateway for all REST requests (from <code>kubectl</code>, internal nodes, or controllers), performs authentication/authorization checks, and reads/writes directly to the database.</li>
          <li><strong>ETCD (<code>etcd</code>)</strong>: A highly-available, distributed key-value database that stores the entire cluster configuration and real-time state. It is the absolute source of truth; no other Control Plane component writes directly to <code>etcd</code> except the API Server.</li>
          <li><strong>Scheduler (<code>kube-scheduler</code>)</strong>: Monitors newly created pods that have no assigned node. It evaluates resource requirements (CPU, memory), affinity/anti-affinity rules, and node constraints to choose the optimal worker node for execution.</li>
          <li><strong>Controller Manager (<code>kube-controller-manager</code>)</strong>: Combines multiple background controller reconciliation loops into a single process. It continuously compares the actual state of the cluster (e.g. active pods) with the declared desired state (e.g. replica count) and performs actions to align them.</li>
        </ul>

        <h3>2. Worker Node Components (Intermediate)</h3>
        <p>Worker nodes execute container workloads, managing local network paths and local resource limits:</p>
        <ul>
          <li><strong>Kubelet (<code>kubelet</code>)</strong>: An essential agent running on every worker node. It registers the node with the Control Plane, watches the API Server for assigned pods, and commands the local container runtime to start/stop containers, while reporting status back to the API.</li>
          <li><strong>Kube Proxy (<code>kube-proxy</code>)</strong>: A network proxy running on each node. It maintains local network IP tables or IPVS routing rules on the host, handling load-balanced traffic across backend pod IP addresses.</li>
          <li><strong>Container Runtime</strong>: The software that runs containers (typically <code>containerd</code> or <code>CRI-O</code>), communicating with Kubelet via the standard Container Runtime Interface (CRI).</li>
        </ul>

        <h3>3. Namespace Partitions & Resource Limits</h3>
        <p>A Kubernetes cluster can be logically divided into virtual sub-clusters called **Namespaces**, enabling clean team isolation, environment staging (e.g., <code>dev</code>, <code>staging</code>, <code>prod</code>), and resource quotas:</p>
        <pre><code class="language-bash"># Create dev environment partition
kubectl create namespace dev

# View all active namespaces
kubectl get ns

# Launch a pod explicitly inside the dev namespace
kubectl run my-app --image=nginx:alpine -n dev</code></pre>
      `
    },
    {
      id: "k8s-objects",
      videoUrl: "https://www.youtube.com/watch?v=W04brGNgxN4&pp=ygUKS3ViZXJuZXRlcw%3D%3D",
      title: "Kubernetes — Core Resources",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["k8s", "pods", "deployments", "services", "ingress"],
      excerpt: "Declarative resource models: Pod configurations, ReplicaSet deployments, stable load-balancing Services, and Layer 7 Ingress routing.",
      content: `
        <h2>Kubernetes Core Objects & Resources</h2>
        <p>Kubernetes utilizes declarative API resource models to manage workloads. You declare the desired state of your resources in YAML files, submit them to the API Server, and the cluster reconciles them automatically.</p>
        
        <h3>1. Pods: The Core Execution Unit (Basics)</h3>
        <p>A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process, wrapping one or more tightly-coupled application containers that share the same network namespace (IP and port space) and storage volumes.</p>
        <pre><code class="language-yaml"># pod-nginx.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: web
spec:
  containers:
    - name: nginx-container
      image: nginx:1.25
      ports:
        - containerPort: 80</code></pre>

        <h3>2. Deployments: Declarative Replicas & Rolling Updates</h3>
        <p>Deployments manage ReplicaSets, ensuring the requested number of Pod replicas are running. They support scaling and zero-downtime rolling updates.</p>
        <p align="center">
          <img src="assets/deployment.png" alt="Kubernetes Deployment ReplicaSet management diagram" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>
        <pre><code class="language-yaml"># deployment-web.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-deployment
spec:
  replicas: 3 # Reconciles exactly 3 Pod instances
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: web-container
          image: nginx:1.25
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "64Mi"
              cpu: "250m"
            limits:
              memory: "128Mi"
              cpu: "500m"</code></pre>

        <h3>3. Services: Stable Internal & External Networking (Intermediate)</h3>
        <p>Since Pods are ephemeral and their IP addresses change when rescheduled, a **Service** provides a stable DNS name and virtual IP to load-balance traffic across matching Pods.</p>
        <p align="center">
          <img src="assets/service.png" alt="Kubernetes Service matching Pod selectors diagram" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>
        <ul>
          <li><strong>ClusterIP</strong> (default): Exposes the Service on an internal cluster IP, reachable only within the cluster.</li>
          <li><strong>NodePort</strong>: Exposes the Service on each Node's IP at a static port (in the range 30000-32767).</li>
          <li><strong>LoadBalancer</strong>: Provisions an external cloud load balancer to route traffic directly to the service.</li>
        </ul>
        <p align="center">
          <img src="assets/external-ip.png" alt="NodePort and LoadBalancer Service network path" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>
        <pre><code class="language-yaml"># service-web.yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: ClusterIP
  selector:
    app: web # Routes traffic to Pods with this label
  ports:
    - port: 80
      targetPort: 80</code></pre>

        <h3>4. Ingress: Layer 7 Smart Routing (Advanced)</h3>
        <p>Ingress sits in front of Services, routing external HTTP/HTTPS traffic to internal services based on HTTP host headers or paths, supporting SSL/TLS termination and virtual hosting.</p>
        <p align="center">
          <img src="assets/ingress.png" alt="Kubernetes Ingress Controller path-based routing blueprint" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>
        <pre><code class="language-yaml"># ingress-web.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
    - host: notes.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web-service
                port:
                  number: 80</code></pre>
      `
    },
    {
      id: "k8s-configs",
      videoUrl: "https://www.youtube.com/watch?v=W04brGNgxN4&pp=ygUKS3ViZXJuZXRlcw%3D%3D",
      title: "Kubernetes — Configuration & Storage",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["k8s", "configmap", "secrets", "storage", "volumes"],
      excerpt: "Decoupling config and secrets via ConfigMaps and Secrets, and persistent storage using PV, PVC, and StorageClasses.",
      content: `
        <h2>Decoupling Configurations & Storage in K8s</h2>
        <p>To build stateless, scalable cloud-native applications, you must separate application code from environment configurations, credentials, and persistent data storage layers.</p>
        
        <p align="center">
          <img src="assets/configmap-secret.png" alt="Kubernetes ConfigMaps and Secrets injection diagram" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>

        <h3>1. ConfigMaps: Non-Sensitive Configurations (Basics)</h3>
        <p>ConfigMaps store configuration key-value pairs, which can be injected into containers as environment variables or mounted as configuration files inside volumes.</p>
        <pre><code class="language-yaml"># configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: "mongodb-service"
  LOG_LEVEL: "debug"</code></pre>

        <h3>2. Secrets: Base64-Encoded Confidential Data (Intermediate)</h3>
        <p>Secrets store confidential credentials (like passwords, keys, and tokens), encoding values in Base64 format to prevent accidental leakage in YAML declarations.</p>
        <pre><code class="language-yaml"># secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  DB_PASSWORD: bXlzZWN1cmVwYXNzd29yZCA= # "mysecurepassword" encoded in Base64</code></pre>

        <h3>3. Storage Architecture: PV, PVC & StorageClasses (Advanced)</h3>
        <p>Since container filesystems are temporary, Kubernetes uses persistent storage systems to preserve data across Pod restarts:</p>
        <p align="center">
          <img src="assets/volumes.png" alt="Kubernetes Persistent Volumes and Claims binding workflow" style="max-width: 100%; border-radius: 8px; margin: 12px 0; border: 1px solid rgba(255, 255, 255, 0.05);">
        </p>
        <ul>
          <li><strong>PersistentVolume (PV)</strong>: A physical storage partition provisioned by an administrator or a cloud script.</li>
          <li><strong>PersistentVolumeClaim (PVC)</strong>: A storage request by a developer. K8s searches for a matching PV and binds it to the claim automatically.</li>
          <li><strong>StorageClass</strong>: Enables dynamic provisioning. When a developer submits a PVC, the StorageClass provisions physical storage automatically.</li>
        </ul>
        <pre><code class="language-yaml"># pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: db-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi</code></pre>
      `
    },
    {
      id: "cicd-basics",
      videoUrl: "https://www.youtube.com/watch?v=exmSJpJvIPs&pp=ygUGRG9ja2Vy",
      title: "CI/CD — DevOps Pipelines",
      category: "DevOps",
      subCategory: "CI/CD",
      tags: ["cicd", "devops", "pipelines", "actions", "automation"],
      excerpt: "Understanding Continuous Integration and Continuous Deployment workflows, stages, triggers, and deployment targets.",
      content: `
        <h2>Continuous Integration & Continuous Deployment Pipelines</h2>
        <p>CI/CD is a core DevOps practice that automates the pipeline from code commit to production release, ensuring rapid iterations and high software quality.</p>
        
        <h3>1. The Core Lifecycle Stages (Basics)</h3>
        <ul>
          <li><strong>Continuous Integration (CI)</strong>: Developers merge code changes into a central repository frequently. Each commit triggers automated builds, lint checks, and test suites to detect integrations defects immediately.</li>
          <li><strong>Continuous Delivery (CD)</strong>: Automatically builds and packages release-ready artifacts, deploying them to staging environments for manual approval before production deployment.</li>
          <li><strong>Continuous Deployment (CD)</strong>: Automates the entire release cycle, deploying every code change that passes the testing pipeline directly to production servers with zero human intervention.</li>
        </ul>

        <h3>2. Typical Enterprise Pipeline Flow (Intermediate)</h3>
        <pre><code class="language-text">  [Code Commit]  &rarr;  [Auto Build]  &rarr;  [Lint / Test]  &rarr;  [Docker Package]  &rarr;  [Deploy Target]
      (Git)            (Vite/Node)        (Jest/ESLint)       (Docker Hub)         (Kubernetes)</code></pre>

        <h3>3. GitHub Actions Pipeline Example (Advanced)</h3>
        <p>GitHub Actions uses YAML workflows inside the <code>.github/workflows/</code> folder to define automation triggers and jobs:</p>
        <pre><code class="language-yaml"># .github/workflows/ci-pipeline.yml
name: NodeJS App CI Pipeline

on:
  push:
    branches: [ main ] 
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup NodeJS Environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Run Linters
        run: npm run lint

      - name: Execute Tests
        run: npm test

  build-and-push-docker:
    needs: build-and-test # Runs only if testing job passes
    runs-on: ubuntu-latest
    if: github.event_name == 'push'

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Build and Push Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: priyanshuksharma/myapp:latest</code></pre>

        <div class="note-alert tip">
          <strong>Key Benefit:</strong> By automating testing, linting, packaging, and releases, organizations can safely ship software updates multiple times a day with high confidence and minimal manual testing.
        </div>
      `
    },
    {
      id: "k8s-installation",
      videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
      title: "Kubernetes — Tools Installation",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["kubernetes", "k8s", "installation", "kubectl", "minikube"],
      excerpt: "Step-by-step setup guides for Kubernetes, Minikube, kubectl, and kubens on Linux, macOS, and Windows with robust troubleshooting checks.",
      content: `
        <h2>Kubernetes Environment Setup Guide</h2>
        <p>Before managing multi-container production clusters, you must establish a functional local testing environment containing a command-line client, a virtual cluster emulator, and proper namespace utilities.</p>

        <h3>1. Architectural Overview & Component Topology</h3>
        <p>A standard local development topology routes declarations from your native CLI utility through a virtualization network boundary into a single-node sandbox cluster:</p>
        <pre><code class="language-text">
+-----------------------------------------------------------+
|                  DEVELOPER WORKSTATION                    |
|                                                           |
|  +-----------+           +-----------------------------+  |
|  |  kubectl  | &lt;=======&gt; |          minikube           |  |
|  +-----------+ (Port     |                             |  |
|    (Client     8443 API) |  +-----------------------+  |  |
|     Utility)             |  |     docker Engine     |  |  |
|                          |  |                       |  |  |
|                          |  |  +-----------------+  |  |  |
|                          |  |  |  Control Plane  |  |  |  |
|                          |  |  +-----------------+  |  |  |
|                          |  |  |  Worker Node    |  |  |  |
|                          |  |  +-----------------+  |  |  |
|                          |  +-----------------------+  |  |
|                          +-----------------------------+  |
+-----------------------------------------------------------+
        </code></pre>

        <h3>2. Cross-Platform Core Tool Installation</h3>
        <p>Configure your development workspace using the appropriate commands depending on your operating system:</p>

        <table>
          <thead>
            <tr>
              <th>Operating System</th>
              <th>kubectl CLI Client Tool</th>
              <th>minikube Virtual Cluster</th>
              <th>kubens Namespace Plugin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Linux (Ubuntu/Debian)</strong></td>
              <td>
                <pre><code class="language-bash">curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/</code></pre>
              </td>
              <td>
                <pre><code class="language-bash">curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo chmod +x minikube-linux-amd64
sudo mv minikube-linux-amd64 /usr/local/bin/minikube</code></pre>
              </td>
              <td>
                <pre><code class="language-bash">curl -LO https://github.com/ahmetb/kubectx/releases/latest/download/kubens-linux-x86_64.tar.gz
tar -zxvf kubens-linux-x86_64.tar.gz
sudo mv kubens /usr/local/bin/</code></pre>
              </td>
            </tr>
            <tr>
              <td><strong>macOS (Homebrew)</strong></td>
              <td>
                <pre><code class="language-bash">brew install kubectl</code></pre>
              </td>
              <td>
                <pre><code class="language-bash">brew install minikube</code></pre>
              </td>
              <td>
                <pre><code class="language-bash">brew install kubectx</code></pre>
              </td>
            </tr>
            <tr>
              <td><strong>Windows (PowerShell Admin)</strong></td>
              <td>
                <pre><code class="language-powershell">choco install kubernetes-cli</code></pre>
              </td>
              <td>
                <pre><code class="language-powershell">choco install minikube</code></pre>
              </td>
              <td>
                <pre><code class="language-powershell">choco install kubectx</code></pre>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="note-alert important">
          <strong>Hypervisor Requirement:</strong> Minikube requires a virtualization engine. Ensure **Docker Desktop**, **VirtualBox**, or **Hyper-V** is installed and that hardware virtualization is enabled in your BIOS/UEFI settings.
        </div>

        <h3>3. Step-by-Step Initialization & Verification</h3>
        <p>Follow these progressive steps to launch and verify your single-node development cluster:</p>
        <ol>
          <li><strong>Start the Cluster:</strong> Fire up Minikube using the Docker driver for lightweight isolation:
            <pre><code class="language-bash">minikube start --driver=docker</code></pre>
          </li>
          <li><strong>Verify Cluster State:</strong> Confirm the Control Plane API server and the Kubelet are running:
            <pre><code class="language-bash">minikube status</code></pre>
          </li>
          <li><strong>Check Node Readiness:</strong> Verify that the local single-node cluster shows a <code>Ready</code> state:
            <pre><code class="language-bash">kubectl get nodes</code></pre>
          </li>
          <li><strong>Expose a Quick Test App:</strong> Deploy a lightweight test server and expose it dynamically:
            <pre><code class="language-bash">kubectl create deployment test-app --image=k8s.gcr.io/echoserver:1.4
kubectl expose deployment test-app --type=NodePort --port=8080
minikube service test-app --url</code></pre>
          </li>
        </ol>

        <h3>4. VM Virtualization & Cluster Troubleshooting</h3>
        <div class="note-alert warning">
          <strong>Common Gotcha:</strong> If you face <code>Kubeconfig connection refused</code> or cluster startup crashes, run <code>minikube diagnose</code> to check resource constraints. You can run <code>minikube delete --all</code> to wipe corrupt cached VM states and start fresh.
        </div>
      `
    },
    {
      id: "k8s-commands",
      videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
      title: "Kubernetes — Commands Cheatsheet",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["kubernetes", "k8s", "kubectl", "cheatsheet", "commands"],
      excerpt: "Extensive command reference matrices covering cluster operations, workload scaling, namespace contexts, direct environment modifications, log streams, and interactive containers access.",
      content: `
        <h2>Kubernetes Operational Commands Cheatsheet</h2>
        <p>A comprehensive operations matrix for managing, auditing, configuring, and scaling workload resources inside Kubernetes clusters.</p>

        <h3>1. Cluster Interaction Pipeline</h3>
        <p>Commands executed via the <code>kubectl</code> CLI follow a request-response flow through the master Control Plane components:</p>
        <pre><code class="language-text">
[Developer] --(kubectl get pods)--> [kube-apiserver]
                                            |
                                     (Query cluster state)
                                            |
                                            v
[Developer] &lt;---(Print pods list)------- [etcd]
        </code></pre>

        <h3>2. Minikube Management & CLI Contexts</h3>
        <p>Minikube controls the state of your local single-node engine VM, and offers plugins for easier routing:</p>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Operational Purpose</th>
              <th>Developer Context / Why Important</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>minikube start</code></td>
              <td>Starts the local K8s sandbox cluster.</td>
              <td>Launches the control plane and starts system worker containers.</td>
            </tr>
            <tr>
              <td><code>minikube stop</code> / <code>delete</code></td>
              <td>Stops or destroys cluster state completely.</td>
              <td>Halts VM to free RAM resource, or deletes state to start from scratch.</td>
            </tr>
            <tr>
              <td><code>minikube dashboard</code></td>
              <td>Opens K8s graphical dashboard in browser.</td>
              <td>Enables visual debugging of deployments, configmaps, and pods.</td>
            </tr>
            <tr>
              <td><code>minikube service &lt;svc&gt; --url</code></td>
              <td>Returns access URL of NodePort service.</td>
              <td>Since cloud load balancers don't exist locally, this bridges local ports.</td>
            </tr>
            <tr>
              <td><code>minikube addons enable ingress</code></td>
              <td>Enables the Nginx Ingress controller.</td>
              <td>Enables path-based and host-based routing simulations locally.</td>
            </tr>
          </tbody>
        </table>

        <h3>3. The Kubectl Command Matrix</h3>
        <p>The primary command categories used by engineers to inspect, scale, configure, and debug workloads in production:</p>

        <h4>A. Resource Inspection & Queries (<code>get</code> & <code>describe</code>)</h4>
        <pre><code class="language-bash"># Get resource listings with additional details
kubectl get nodes -o wide                  # View worker nodes with internal IPs
kubectl get pods -A --show-labels          # List pods across all namespaces with labels
kubectl get deployments -n kube-system     # List deployments running in the system namespace
kubectl get svc,ingress                    # Combine and list multiple networking elements

# Deep-dive inspection of a specific Pod
kubectl describe pod &lt;pod-name&gt;            # View events, state transitions, and error logs</code></pre>

        <h4>B. Declarative & Imperative Action Triggers (<code>create</code> & <code>apply</code>)</h4>
        <pre><code class="language-bash"># Declarative deployment updates
kubectl apply -f deployment.yaml           # Create/update resource configured in YAML file
kubectl delete -f deployment.yaml          # Safely wipe resources defined in the manifest

# Imperative rapid creation
kubectl create namespace dev               # Spawn a new environment namespace
kubectl create deployment nginx --image=nginx:latest --replicas=3 # Quick deployment spinup</code></pre>

        <h4>C. Live Modifications & Dynamic Set Upgrades (<code>edit</code> & <code>set</code>)</h4>
        <pre><code class="language-bash"># Edit active configurations in real-time
kubectl edit deployment nginx-deploy        # Opens running spec in default system text editor

# Perform rapid image updates
kubectl set image deployment/nginx-deploy nginx=nginx:1.26   # Triggers rolling update
kubectl set env deployment/web LOG_LEVEL=debug               # Sets environment variable dynamically
kubectl set resources deployment/web -c web --limits=cpu=500m,memory=512Mi # Dynamic resource tune</code></pre>

        <h4>D. Namespace Switching Contexts (<code>kubens</code>)</h4>
        <p>Managing namespace scope prevents typing <code>-n &lt;namespace&gt;</code> on every execution:</p>
        <pre><code class="language-bash">kubens                                     # List all active namespaces (highlighting active)
kubens dev                                 # Switch default active context to "dev"
kubens -                                   # Switch back to the previous namespace</code></pre>

        <h3>4. Debugging & Logs Stream (<code>logs</code> & <code>exec</code>)</h3>
        <div class="note-alert tip">
          <strong>Diagnostics Rule:</strong> Use <code>logs</code> to examine container console streams, and use <code>exec</code> to step inside running container filesystems for deep debugging.
        </div>
        <pre><code class="language-bash"># Audit container output
kubectl logs -f &lt;pod-name&gt; --since=10m     # Live stream logs of default container from last 10 mins
kubectl logs &lt;pod-name&gt; -c sidecar-proxy   # Retrieve logs from a specific sidecar container

# Open an interactive shell inside a container
kubectl exec -it &lt;pod-name&gt; -- /bin/sh     # Mount shell process to run inspect commands
kubectl exec &lt;pod-name&gt; -- env             # Instantly read running environment variables</code></pre>

        <h3>5. Safe Deletions & Cleanups</h3>
        <pre><code class="language-bash">kubectl delete pod &lt;pod-name&gt;              # Safely delete single pod (Controller auto-rebuilds)
kubectl delete namespace staging            # Wipe namespace along with all internal child resources
kubectl delete pod &lt;pod-name&gt; --grace-period=0 --force # Force terminate a stuck, unresponsive pod</code></pre>
      `
    },
    {
      id: "k8s-yaml",
      videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
      title: "Kubernetes — YAML Guide",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["kubernetes", "k8s", "yaml", "manifests", "selectors"],
      excerpt: "Mastering declarative manifest templates: mapping metadata vs spec vs status, understanding label-selector queries, multi-document structures, and YAML best practices.",
      content: `
        <h2>Mastering Kubernetes YAML Manifests</h2>
        <p>Kubernetes utilizes declarative YAML configuration manifests to express the desired state of clusters. The system continuously reconciles these definitions against live workloads.</p>

        <h3>1. The Reconciliation Loop System</h3>
        <p>Kubernetes operates on a feedback loop where controllers read your manifest, compare it with running containers, and execute adjustments:</p>
        <pre><code class="language-text">
 +---------------------------------------------------+
 |                 RECONCILIATION LOOP               |
 |                                                   |
 |    +------------------+     (apply)     +----+    |
 |    |   YAML Spec      | ------------&gt; |    |    |
 |    | (Desired State)  |                 | K  |    |
 |    +------------------+                 | 8  |    |
 |             ^                           | S  |    |
 |             | (Adjusts workloads to     |    |    |
 |             |  match desired state)     | C  |    |
 |             |                           | o  |    |
 |    +------------------+                 | n  |    |
 |    |   Actual State   | &lt;-------------- | t  |    |
 |    | (Active Running) |  (Read Status)  | r  |    |
 |    +------------------+                 | o  |    |
 |                                         | l  |    |
 |                                         +----+    |
 +---------------------------------------------------+
        </code></pre>

        <h3>2. Essential Structural Blocks</h3>
        <p>Every Kubernetes manifest contains four root-level properties to declare and identify the resource:</p>
        <table>
          <thead>
            <tr>
              <th>Root Key</th>
              <th>Purpose & Concept</th>
              <th>Example Declarations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>apiVersion</code></td>
              <td>Specifies the API group and version matching the resource schema.</td>
              <td><code>v1</code> (Core Pods/Services), <code>apps/v1</code> (Workload Deployments)</td>
            </tr>
            <tr>
              <td><code>kind</code></td>
              <td>Declares the specific type of resource you are constructing.</td>
              <td><code>Pod</code>, <code>Deployment</code>, <code>Service</code>, <code>ConfigMap</code>, <code>Secret</code></td>
            </tr>
            <tr>
              <td><code>metadata</code></td>
              <td>Holds identifying properties like unique names, namespaces, and labels.</td>
              <td><code>name: web-app</code>, <code>labels: { app: web }</code></td>
            </tr>
            <tr>
              <td><code>spec</code></td>
              <td>Declares the target configurations (desired state specification).</td>
              <td>Container image name, port configurations, and replica targets.</td>
            </tr>
          </tbody>
        </table>

        <h3>3. Dynamic Reconciliation Fields: Spec vs Status</h3>
        <p>Understand the split between developer specifications and system-reported telemetry:</p>
        <ul>
          <li><strong><code>spec</code> (Desired State):</strong> Declared by developers. Tells Kubernetes what to configure (e.g. run 3 replicas of Nginx).</li>
          <li><strong><code>status</code> (Actual State):</strong> Generated dynamically by the Control Plane. Monitors runtime conditions (e.g. 2 replicas ready, 1 container pulling). This is never written by developers.</li>
        </ul>

        <h3>4. Labels and Selectors: Workload Binding</h3>
        <p>Kubernetes decouples resources. Services find and route traffic to Pods using label matching queries:</p>
        
        <div class="note-alert tip">
          <strong>Decoupled Selector Rule:</strong> Services do not bind directly to Pod IDs. They look up dynamic IP endpoints by matching the keys declared under their selector query with labels attached to Pod metadata.
        </div>

        <pre><code class="language-yaml"># 1. Pod Definition with Labels
apiVersion: v1
kind: Pod
metadata:
  name: api-pod
  labels:
    app: api-backend       # Label attached to identify this workload
    env: production
spec:
  containers:
    - name: api
      image: node:20
      ports:
        - containerPort: 3000
---
# 2. Service Definition with Selector
apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  selector:
    app: api-backend       # Selector matches Pod label above to route port traffic
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000</code></pre>

        <h3>5. Selector Type Comparison</h3>
        <p>Kubernetes supports two primary methods for querying and grouping active resources:</p>
        <table>
          <thead>
            <tr>
              <th>Selector Category</th>
              <th>Operation Logic</th>
              <th>YAML Spec Syntax Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Equality-based</strong></td>
              <td>Matches exact single key-value pairings.</td>
              <td>
                <pre><code class="language-yaml">selector:
  matchLabels:
    app: web-server</code></pre>
              </td>
            </tr>
            <tr>
              <td><strong>Set-based</strong></td>
              <td>Supports complex grouping expressions (<code>In</code>, <code>NotIn</code>, <code>Exists</code>).</td>
              <td>
                <pre><code class="language-yaml">selector:
  matchExpressions:
    - key: env
      operator: In
      values: ["prod", "staging"]</code></pre>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>6. Secrets Encoding & Multi-Document Files</h3>
        <p>When provisioning Opaque secrets, sensitive data must be base64 encoded under <code>data</code> keys. Trailing newlines can cause authorization errors, which is why we strip them when encoding:</p>
        <pre><code class="language-bash"># -n flag removes trailing newline characters from base64 hash output
echo -n "db-password" | base64   # Returns clean base64 string "ZGItcGFzc3dvcmQ="</code></pre>

        <p>You can bundle multiple distinct manifests into a single file separated by three dashes <code>---</code> to simplify deployments:</p>
        <pre><code class="language-yaml">apiVersion: v1
kind: ConfigMap
metadata:
  name: app-env
data:
  LOG_LEVEL: "info"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 1
  # specifications continue...</code></pre>

        <div class="note-alert warning">
          <strong>YAML Syntax Watchout:</strong> YAML is strictly space-sensitive. Never use tab characters for indentation, as this will fail parsing validation checks. Validate files before deploying using:
          <code>kubectl apply --dry-run=client -f file.yaml</code>
        </div>
      `
    },
    {
      id: "k8s-mongodb",
      videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
      title: "Kubernetes — MongoDB & Express Labs",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["kubernetes", "mongodb", "secrets", "configmap", "nodeport"],
      excerpt: "Practical hands-on walkthrough to provision a multi-tier database stack: configuring generic base64 secrets, ClusterIP endpoints, Mongo Express workloads, NodePorts, and troubleshooting metrics.",
      content: `
        <h2>Kubernetes Lab: Multi-Tier MongoDB & Express Deployment</h2>
        <p>This hands-on lab takes you through deploying a secure, structured database tier (MongoDB) integrated with a web dashboard gateway (Mongo Express) in your Kubernetes cluster.</p>

        <h3>1. System Lab Architecture Flow</h3>
        <p>The components interact dynamically, linking data from secrets, routing through cluster IP addresses, and exposing nodes externally:</p>
        <pre><code class="language-text">
+---------------------------------------------------------------------------------+
|                              KUBERNETES CLUSTER                                 |
|                                                                                 |
|              +--------------------------+                                       |
|              |    mongodb-configmap     | &lt;----+                                |
|              +--------------------------+      |                                |
|                                                |                                |
|              +--------------------------+      |                                |
|              |      mongodb-secret      | &lt;----+---+                            |
|              +--------------------------+      |   |                            |
|                                                |   |                            |
|  [User Browser]                                |   |                            |
|        | (Port 30081)                          |   |                            |
|        v                                       |   |                            |
|  +---------------------------+                 |   |                            |
|  |   mongo-express-service   |                 |   |                            |
|  |        (NodePort)         |                 |   |                            |
|  +---------------------------+                 |   |                            |
|                |                               |   |                            |
|                v                               |   |                            |
|  +---------------------------+                 |   |                            |
|  |  mongo-express-deployment |                 |   |                            |
|  |  (Reads server from CM,   | ----------------+   |                            |
|  |   credentials from Secret)|                     |                            |
|  +---------------------------+                     |                            |
|                | (Port 27017 connection)           |                            |
|                v                                   |                            |
|  +---------------------------+                     |                            |
|  |      mongodb-service      |                     |                            |
|  |        (ClusterIP)        |                     |                            |
|  +---------------------------+                     |                            |
|                |                                   |                            |
|                v                                   v                            |
|  +---------------------------+       (Mounts Auth credentials)                  |
|  |     mongodb-deployment    | &lt;------------------------+                       |
|  |  (Applies Mongo Spec)     |                                                  |
|  +---------------------------+                                                  |
+---------------------------------------------------------------------------------+
        </code></pre>

        <h3>2. Deployment Steps & YAML Manifest Definitions</h3>
        <p>Apply these resources in order to establish a secure database environment:</p>

        <h4>Step 1: Opaque Base64 Credentials Secret</h4>
        <p>Encode the root username and password, then apply them under the <code>Secret</code> data block:</p>
        <pre><code class="language-bash"># Encode strings to prevent plain-text exposure in YAML
echo -n "mongoadmin" | base64   # returns bW9uZ29hZG1pbg==
echo -n "supersecure" | base64  # returns c3VwZXJzZWN1cmU=</code></pre>
        <pre><code class="language-yaml"># mongodb-secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: mongodb-secret
type: Opaque
data:
  mongo-root-username: bW9uZ29hZG1pbg==
  mongo-root-password: c3VwZXJzZWN1cmU=</code></pre>

        <h4>Step 2: MongoDB Deployment Spec</h4>
        <p>Deploy a single replica container of Mongo 6, binding credentials dynamically from our Secret:</p>
        <pre><code class="language-yaml"># mongodb-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
        - name: mongodb
          image: mongo:6
          ports:
            - containerPort: 27017
          env:
            - name: MONGO_INITDB_ROOT_USERNAME
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-username
            - name: MONGO_INITDB_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-password</code></pre>

        <h4>Step 3: Internal Service (ClusterIP)</h4>
        <p>Provide a stable internal IP address and service name so Mongo Express can locate the MongoDB instance inside the cluster:</p>
        <pre><code class="language-yaml"># mongodb-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: mongodb-service
spec:
  selector:
    app: mongodb
  ports:
    - protocol: TCP
      port: 27017
      targetPort: 27017
  type: ClusterIP</code></pre>

        <h4>Step 4: Non-Sensitive Configurations (ConfigMap)</h4>
        <p>Store metadata properties, like database connection parameters, under a ConfigMap:</p>
        <pre><code class="language-yaml"># mongodb-configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
data:
  database_url: mongodb-service</code></pre>

        <h4>Step 5: Web UI Deployment (Mongo Express)</h4>
        <p>Provision the dashboard, drawing connections parameters from the ConfigMap and authentication passwords from the Secret:</p>
        <pre><code class="language-yaml"># mongo-express-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo-express-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo-express
  template:
    metadata:
      labels:
        app: mongo-express
    spec:
      containers:
        - name: mongo-express
          image: mongo-express:latest
          ports:
            - containerPort: 8081
          env:
            - name: ME_CONFIG_MONGODB_ADMINUSERNAME
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-username
            - name: ME_CONFIG_MONGODB_ADMINPASSWORD
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-password
            - name: ME_CONFIG_MONGODB_SERVER
              valueFrom:
                configMapKeyRef:
                  name: mongodb-configmap
                  key: database_url</code></pre>

        <h4>Step 6: External Exposition Service (NodePort)</h4>
        <p>Map the cluster port to a static node port to allow browsing the UI dashboard from outside the container network boundaries:</p>
        <pre><code class="language-yaml"># mongo-express-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: mongo-express-service
spec:
  selector:
    app: mongo-express
  ports:
    - protocol: TCP
      port: 8081
      targetPort: 8081
      nodePort: 30081
  type: NodePort</code></pre>

        <h3>3. Cluster Execution Workflow & Verification</h3>
        <p>Open your shell console and apply the files systematically:</p>
        <pre><code class="language-bash"># Apply manifests in dependency order
kubectl apply -f mongodb-secret.yaml
kubectl apply -f mongodb-deployment.yaml
kubectl apply -f mongodb-service.yaml
kubectl apply -f mongodb-configmap.yaml
kubectl apply -f mongo-express-deployment.yaml
kubectl apply -f mongo-express-service.yaml

# Verify all deployments are active and running
kubectl get pods -w</code></pre>

        <div class="note-alert tip">
          <strong>Minikube Access Hint:</strong> Cloud load balancers aren't provisioned in local sandbox clusters. To expose NodePort elements, query Minikube for a proxy endpoint using:
          <code>minikube service mongo-express-service --url</code>
        </div>

        <h3>4. Clean Environment Deconstruct</h3>
        <pre><code class="language-bash"># Wipe all lab deployments to free up cluster resources
kubectl delete -f mongo-express-service.yaml,mongo-express-deployment.yaml
kubectl delete -f mongodb-configmap.yaml,mongodb-service.yaml,mongodb-deployment.yaml,mongodb-secret.yaml</code></pre>
      `
    },
    {
      id: "k8s-netflix",
      videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
      title: "Kubernetes — Netflix Architecture Case Study",
      category: "DevOps",
      subCategory: "Kubernetes",
      tags: ["kubernetes", "architecture", "microservices", "netflix", "case-study"],
      excerpt: "Deep dive case study on high-availability distributed systems: domain scopes, edge gateways, service discoveries, circuit breakers, polyglot databases, Open Connect CDN, and QoE engineering.",
      content: `
        <h2>Netflix Architecture: Distributed Systems Case Study</h2>
        <p>A comprehensive examination of the microservices design patterns, CDN methodologies, and platform engineering principles powering Netflix at global scale.</p>

        <h3>1. Monolith vs Microservices Shift</h3>
        <p>Moving from a single monolithic unit to distributed domain-driven components provides decoupling, fast releases, and resilience:</p>
        <table>
          <thead>
            <tr>
              <th>Architecture Type</th>
              <th>Core Strengths & Scalability</th>
              <th>Fault Isolation Boundaries</th>
              <th>Deployment & Operational Overhead</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Monolithic Unit</strong></td>
              <td>Simple initial setup; single codebase. Single resource base makes it easy to run locally.</td>
              <td><strong>Low Isolation:</strong> A memory leak in one feature (e.g. billing) can crash the entire system.</td>
              <td>Requires rebuilding and redeploying the entire application for any minor tweak.</td>
            </tr>
            <tr>
              <td><strong>Microservices (Netflix Model)</strong></td>
              <td><strong>High Scalability:</strong> Scale individual components independently (e.g. recommendation instances during peak hours).</td>
              <td><strong>High Isolation:</strong> Faults in recommendation processes do not prevent playbacks from starting.</td>
              <td>High distributed complexity. Requires service registries, API gateways, and telemetry pipelines.</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Flow Routing & Component Topology</h3>
        <p>Incoming traffic passes through layers designed for authentication, microservice orchestration, and data fetching:</p>
        <pre><code class="language-text">
[Client Request] ----&gt; [Edge Gateway (Zuul)]
                             |
             +---------------+---------------+
             | (Auth verify)                 | (Route Request)
             v                               v
     [Auth Service]                [Recommendation Engine]
                                             |
                                     (Query DB / Cache)
                                             v
                                   [Cassandra / EV Cache]
        </code></pre>

        <h3>3. Netflix Platform Patterns Overview</h3>
        <ul>
          <li><strong>API Gateway (Zuul):</strong> The single entry point for all devices. Handles dynamic routing, SSL termination, and basic rate limiting.</li>
          <li><strong>Service Discovery (Eureka):</strong> A dynamic registry where microservices publish their active IP addresses. Enables services to find each other in auto-scaled environments.</li>
          <li><strong>Circuit Breaker (Hystrix):</strong> Prevents cascading failures. If a service is sluggish or down, it returns a fallback response instead of blocking network sockets.</li>
          <li><strong>Polyglot Persistence:</strong> Netflix maps workloads to specialized storage solutions instead of a single SQL DB:
            <ul>
              <li><strong>Cassandra:</strong> Low-latency high-availability NoSQL database for account profiles and viewing histories.</li>
              <li><strong>EVCache:</strong> Fast memory-caching layer wrapping Memcached cluster blocks.</li>
              <li><strong>Kafka:</strong> Real-time event streams capturing analytical data.</li>
            </ul>
          </li>
        </ul>

        <h3>4. Delivering Quality at Scale (QoE Engineering)</h3>
        <p>Netflix maintains high video quality even over unstable networks by combining smart encoding with local edge delivery systems:</p>
        <ol>
          <li><strong>Smart Video Codecs:</strong> Encourages AV1, HEVC, and AVC streams. Standardizes per-title and per-scene encoding pipelines to minimize bitrates without degrading visual details.</li>
          <li><strong>The Open Connect CDN:</strong> Pre-positions video files in local CDN server boxes situated close to users inside ISP facilities, eliminating trans-oceanic network hops.</li>
          <li><strong>Adaptive Bitrate Streaming:</strong> Algorithms continuously check connection status to switch streams, avoiding buffering delays.</li>
        </ol>

        <h3>5. Streaming Provider Comparison Matrix</h3>
        <p>A comparison of streaming platforms, highlighting their typical strengths and engineering choices:</p>
        <table>
          <thead>
            <tr>
              <th>Streaming Platform</th>
              <th>Primary Engineering Strength</th>
              <th>Practical Bottleneck / Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Netflix</strong></td>
              <td>Highly mature Open Connect CDN, adaptive playback algorithms, and optimized video codecs.</td>
              <td>UHD formats are locked behind premium price tiers and require specific device support.</td>
            </tr>
            <tr>
              <td><strong>Prime Video</strong></td>
              <td>Excellent UHD and HDR support on consumer displays. Extensive global catalog availability.</td>
              <td>User experience can vary. Some regions see longer connection startup times.</td>
            </tr>
            <tr>
              <td><strong>JioHotstar</strong></td>
              <td>Optimized to handle massive spikes during live cricket streams in India.</td>
              <td>Extremely high concurrent demand can degrade picture quality during live sporting events.</td>
            </tr>
            <tr>
              <td><strong>SonyLIV</strong></td>
              <td>Good mix of sports streams and regional Indian entertainment content.</td>
              <td>UI consistency and video playback stability can vary on low-end mobile devices.</td>
            </tr>
            <tr>
              <td><strong>ZEE5</strong></td>
              <td>High catalog penetration in tier-2 and tier-3 regional markets.</td>
              <td>Playback consistency is heavily dependent on local network conditions.</td>
            </tr>
          </tbody>
        </table>

        <div class="note-alert tip">
          <strong>Key Takeaway:</strong> Video quality is not solely determined by bandwidth limits. It relies on the co-ordination of edge CDN pre-positioning, device codec support, and real-time Quality of Experience (QoE) monitoring.
        </div>
      `
    },
    {
      id: "git-github",
      videoUrl: "https://www.youtube.com/watch?v=apGV9Kg7ics",
      title: "Git & GitHub — Version Control",
      category: "DevOps",
      subCategory: "Version Control",
      tags: ["git", "github", "version-control", "commands", "branches"],
      excerpt: "Complete Git workflow: init, stage, commit, branch, merge, rebase, stash, remote repos, and collaboration patterns with GitHub.",
      content: `
        <h2>Git & GitHub — Complete Version Control Guide</h2>
        <p>Git is a distributed version control system that tracks changes in source code. GitHub is a cloud platform hosting Git repositories, enabling team collaboration, pull requests, and project management.</p>

        <h3>1. Git Repository Area & Lifecycle Architecture</h3>
        <p>Git manages code across three local zones and one remote zone. Understanding these zones is the key to mastering Git workflows:</p>
        <pre><code class="language-text">
+------------------------------------------------------------------+
|                         LOCAL COMPUTER                           |   REMOTE
|                                                                  |   REPOS
|  +-----------+   git add    +----------+   git commit            |
|  |  Working  | -----------> | Staging  | -------+                |
|  | Directory |              |  Area    |        |                |
|  +-----------+              +----------+        v                |
|       ^                                   +-----------+          |  +----------+
|       |   git checkout / git restore      |   Local   | push --> |  | Remote   |
|       +-----------------------------------| Repo(.git)|          |  | (GitHub) |
|                                           +-----------+ <-- pull |  +----------+
|                                                 ^                |
|                                                 | git clone      |
+------------------------------------------------------------------+
        </code></pre>

        <h3>2. Core Command Reference Matrix</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose & Usage</th>
              <th>Practical Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>git init</code></td>
              <td>Initializes a new local Git repository by creating a hidden <code>.git</code> folder that tracks all file changes.</td>
              <td><pre><code class="language-bash">git init my-project</code></pre></td>
            </tr>
            <tr>
              <td><code>git add</code></td>
              <td>Stages files to prepare them for the next commit snapshot. Stages specific files, all modified files, or all including untracked.</td>
              <td><pre><code class="language-bash">git add index.js       # Single file
git add .              # All changes
git add -A             # All including deletes</code></pre></td>
            </tr>
            <tr>
              <td><code>git commit</code></td>
              <td>Creates an immutable snapshot of all staged changes with a descriptive message in the local history.</td>
              <td><pre><code class="language-bash">git commit -m "feat: add user auth module"</code></pre></td>
            </tr>
            <tr>
              <td><code>git status</code></td>
              <td>Displays the state of the working directory and staging area — staged, modified, or untracked files.</td>
              <td><pre><code class="language-bash">git status</code></pre></td>
            </tr>
            <tr>
              <td><code>git log</code></td>
              <td>Shows chronological commit history. Can display graphically or with compact one-line format.</td>
              <td><pre><code class="language-bash">git log --graph --pretty=oneline</code></pre></td>
            </tr>
            <tr>
              <td><code>git diff</code></td>
              <td>Shows line-by-line differences between commits, branches, or between working directory and last commit.</td>
              <td><pre><code class="language-bash">git diff HEAD~1 HEAD    # Last two commits</code></pre></td>
            </tr>
          </tbody>
        </table>

        <h3>3. Branching & Navigation Flows</h3>
        <p>Branches are isolated development timelines. Use them to develop features without affecting stable code:</p>
        <pre><code class="language-text">
                              main branch
  A ------- B ------- C ------- D ------- E  (production)
                       \                 /
                        F ----- G ----- H    (feature/login-page)
                         \
                          I --- J             (hotfix/auth-bug)
        </code></pre>
        <pre><code class="language-bash"># Create and switch to a new branch in one command
git checkout -b feature/login-page

# List all local branches (active branch marked with *)
git branch

# Delete a merged branch cleanly
git branch -d feature/login-page

# Merge a feature branch back into main
git checkout main
git merge feature/login-page</code></pre>

        <h3>4. Remote Repository Management</h3>
        <p>Connect your local repository to a GitHub remote to collaborate with a team and back up your code:</p>
        <pre><code class="language-bash"># Link your local repo to a remote GitHub repository
git remote add origin https://github.com/username/repo.git

# Push your branch commits to remote (first push sets tracking)
git push -u origin main

# Fetch AND merge latest remote changes in one step
git pull origin main

# Clone an existing remote repository to your machine
git clone https://github.com/username/repo.git</code></pre>

        <h3>5. Stashing, Reverting & Resetting</h3>
        <div class="note-alert tip">
          <strong>When to stash:</strong> Use <code>git stash</code> when you need to switch branches quickly but have uncommitted work you aren't ready to commit yet. Your changes are saved in a temporary stack and can be re-applied with <code>git stash pop</code>.
        </div>
        <pre><code class="language-bash"># Stash uncommitted changes (including untracked files)
git stash
git stash -u                   # Include untracked files
git stash pop                  # Re-apply and remove from stack
git stash list                 # View all stashed entries

# Safely undo a commit — creates a NEW commit that reverses changes
git revert &lt;commit-id&gt;

# Reapply commits on top of another base (cleaner history)
git rebase main</code></pre>

        <div class="note-alert warning">
          <strong>Destructive Operation:</strong> <code>git reset --hard &lt;commit-id&gt;</code> discards all commits after the target commit AND loses all uncommitted working directory changes permanently. Always create a backup branch before hard resetting.
        </div>

        <h3>6. Fetching & Synchronization</h3>
        <pre><code class="language-bash"># Download remote changes WITHOUT merging (inspect first)
git fetch origin

# View what changed remotely before merging
git diff main origin/main

# Then merge when ready
git merge origin/main</code></pre>

        <h3>7. Professional Git Workflow Pattern</h3>
        <p>The industry-standard Git Feature Branch Workflow used by engineering teams:</p>
        <pre><code class="language-text">
  [1] git checkout -b feature/new-dashboard    (Create branch)
        |
        v
  [2] Write code, test locally                 (Develop)
        |
        v
  [3] git add . && git commit -m "..."         (Stage & commit)
        |
        v
  [4] git push origin feature/new-dashboard    (Push to remote)
        |
        v
  [5] Open Pull Request on GitHub              (Code review)
        |
        v
  [6] git checkout main && git merge feature/  (Merge to main)
        |
        v
  [7] git branch -d feature/new-dashboard      (Clean up)
        </code></pre>
      `
    },
    {
      id: "express-misc-oop",
      videoUrl: "https://www.youtube.com/watch?v=_oHByo8tiEY",
      title: "Express & OOP — HTTP Requests & Classes",
      category: "Back-End",
      subCategory: "ExpressJS",
      tags: ["express", "http", "requests", "oop", "classes", "encapsulation", "inheritance"],
      excerpt: "HTTP GET vs POST deep dive with Express middleware, form body parsing, fetch API, and all four OOP pillars in JavaScript: Classes, Inheritance, Encapsulation, and Polymorphism.",
      content: `
        <h2>Express HTTP Requests & JavaScript OOP</h2>
        <p>A complete guide covering Express.js request handling mechanics and all advanced JavaScript Object-Oriented Programming patterns from constructor functions to private fields.</p>

        <h3>1. HTTP Request Architecture: GET vs POST</h3>
        <p>The two most fundamental HTTP methods have distinct data transport mechanisms and intended use cases:</p>
        <pre><code class="language-text">
+-----------------------------------------------------------------------+
|                     HTTP REQUEST HANDLING IN EXPRESS                  |
|                                                                       |
|   GET Request (Read Data):                                            |
|   [Client Browser] --(URL + Query Params)----> [Express Server]       |
|   e.g. GET /search?q=nodejs&page=2             req.query.q            |
|                                                                       |
|   POST Request (Submit Data):                                         |
|   [Client Browser] --(Request Body Payload)---> [Express Server]      |
|   e.g. POST /submit with {username, email}      req.body.username     |
|                       ^                                               |
|                       |                                               |
|             [Middleware Pipeline]                                     |
|          express.json()          (parses JSON bodies)                 |
|          express.urlencoded()    (parses HTML form submissions)       |
+-----------------------------------------------------------------------+
        </code></pre>

        <h3>2. GET Requests — Query Parameters</h3>
        <p>GET requests encode data in the URL itself as query strings. They are safe (idempotent) and primarily used for reading or filtering data:</p>
        <pre><code class="language-javascript">const express = require('express');
const app = express();

// Basic GET route
app.get('/home', (req, res) =&gt; {
  res.send('Welcome to the Home Page');
});

// Reading URL query parameters: /search?q=nodejs&sort=asc
app.get('/search', (req, res) =&gt; {
  const query = req.query.q;       // "nodejs"
  const sort  = req.query.sort;    // "asc"
  res.json({ query, sort, results: [] });
});

app.listen(3000, () =&gt; console.log('Server running on port 3000'));</code></pre>

        <h3>3. POST Requests — Body Parsing Middleware</h3>
        <p>POST requests carry data in the request body, allowing payloads of any size and type. You <strong>must register parsing middleware</strong> before Express can read <code>req.body</code>:</p>
        <pre><code class="language-javascript">const express = require('express');
const app = express();

// REQUIRED: Register body parsers BEFORE route handlers
app.use(express.urlencoded({ extended: true })); // HTML form submissions
app.use(express.json());                          // API JSON payloads

// Receives HTML form: &lt;form action="/submit" method="POST"&gt;
app.post('/submit', (req, res) =&gt; {
  const { username, email } = req.body;
  console.log(\`Received: \${username}, \${email}\`);
  res.send(\`Welcome, \${username}! We got your email: \${email}\`);
});

// Receives JSON from fetch() or Postman
app.post('/api/user', (req, res) =&gt; {
  const { name, age } = req.body;
  res.json({ message: \`User \${name} aged \${age} created.\`, success: true });
});</code></pre>

        <h3>4. GET vs POST Comparison Matrix</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>GET Request</th>
              <th>POST Request</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Purpose</strong></td>
              <td>Retrieve / read data from server.</td>
              <td>Submit / write data to server.</td>
            </tr>
            <tr>
              <td><strong>Data Location</strong></td>
              <td>Embedded in URL as query strings: <code>?key=value</code></td>
              <td>Hidden inside the request body payload.</td>
            </tr>
            <tr>
              <td><strong>Data Visibility</strong></td>
              <td>Fully visible in browser URL bar and server logs.</td>
              <td>Not visible in URL — safer for sensitive inputs.</td>
            </tr>
            <tr>
              <td><strong>Data Volume</strong></td>
              <td>Limited by URL length restrictions (~2000 chars).</td>
              <td>Essentially unlimited (server-dependent limits).</td>
            </tr>
            <tr>
              <td><strong>Common Uses</strong></td>
              <td>Search pages, pagination, read APIs, filtered listings.</td>
              <td>Login forms, registrations, file uploads, mutations.</td>
            </tr>
            <tr>
              <td><strong>Express Access</strong></td>
              <td><code>req.query.paramName</code></td>
              <td><code>req.body.fieldName</code></td>
            </tr>
          </tbody>
        </table>

        <h3>5. Calling APIs with fetch()</h3>
        <p>JavaScript's built-in <code>fetch()</code> API enables making GET and POST requests from the browser client side:</p>
        <pre><code class="language-javascript">// GET request with fetch (automatic)
const data = await fetch('/api/users?role=admin');
const users = await data.json();

// POST request with JSON payload
const response = await fetch('/api/user', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Priyanshu', age: 21 })
});
const result = await response.json();
console.log(result.message);</code></pre>

        <h3>6. JavaScript OOP — The Four Pillars</h3>
        <p>Object-Oriented Programming organizes code around objects that bundle data (properties) and behavior (methods) together. JavaScript implements OOP through prototype chains and ES6 class syntax.</p>

        <h4>Pillar 1: Classes & Objects (Foundation)</h4>
        <p>A <code>class</code> is a reusable blueprint. An <code>object</code> is an instance created from that blueprint:</p>
        <pre><code class="language-javascript">class Person {
  constructor(name, age) {
    this.name = name;   // Instance property
    this.age  = age;
  }

  // Instance method — accessible on every created object
  greet() {
    return \`Hello! I'm \${this.name}, aged \${this.age}.\`;
  }

  // Static method — called on the Class itself, not on instances
  static species() {
    return 'Homo sapiens';
  }
}

const person1 = new Person('Priyanshu', 21);
console.log(person1.greet());       // Hello! I'm Priyanshu, aged 21.
console.log(Person.species());      // Homo sapiens</code></pre>

        <h4>Pillar 2: Inheritance — Extending Classes</h4>
        <p>A child class inherits all properties and methods from the parent class, and can override or extend them:</p>
        <pre><code class="language-javascript">class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // CRITICAL: Must call super() before using 'this'
    this.breed = breed;
  }

  // Override parent method (Polymorphism)
  speak() {
    return \`\${this.name} (\${this.breed}) barks loudly!\`;
  }
}

const rex = new Dog('Rex', 'German Shepherd');
console.log(rex.speak());   // Rex (German Shepherd) barks loudly!
console.log(rex instanceof Animal); // true — Rex IS an Animal</code></pre>

        <h4>Pillar 3: Encapsulation — Private Fields</h4>
        <p>Encapsulation hides internal state behind controlled getter/setter methods. ES2022 introduced true private fields using the <code>#</code> prefix:</p>
        <pre><code class="language-javascript">class BankAccount {
  #balance = 0;              // TRUE private field — inaccessible outside class
  #owner;

  constructor(owner, initialDeposit) {
    this.#owner   = owner;
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount &lt;= 0) throw new Error('Deposit must be positive');
    this.#balance += amount;
    return this;             // Enable method chaining
  }

  withdraw(amount) {
    if (amount &gt; this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    return this;
  }

  getBalance() {
    return \`\${this.#owner}'s balance: ₹\${this.#balance}\`;
  }
}

const acc = new BankAccount('Priyanshu', 1000);
acc.deposit(500).withdraw(200);        // Method chaining
console.log(acc.getBalance());         // Priyanshu's balance: ₹1300
// console.log(acc.#balance);          // SyntaxError: private field</code></pre>

        <h4>Pillar 4: Polymorphism — Same Method, Different Behavior</h4>
        <p>Polymorphism allows different classes to define the same method name but execute entirely different logic at runtime:</p>
        <pre><code class="language-javascript">class Shape {
  area() { return 0; }
  describe() { return \`I am a shape with area: \${this.area().toFixed(2)}\`; }
}

class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }  // Override
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.width = w; this.height = h; }
  area() { return this.width * this.height; }    // Override
}

class Triangle extends Shape {
  constructor(base, height) { super(); this.base = base; this.height = height; }
  area() { return 0.5 * this.base * this.height; } // Override
}

// Polymorphism: same method call → different results per class
const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];
shapes.forEach(s =&gt; console.log(s.describe()));
// I am a shape with area: 78.54
// I am a shape with area: 24.00
// I am a shape with area: 12.00</code></pre>

        <div class="note-alert tip">
          <strong>OOP Summary:</strong>
          <ul style="margin: 8px 0 0 0; padding-left: 20px;">
            <li><strong>Encapsulation</strong> — Hide state, expose safe interfaces.</li>
            <li><strong>Inheritance</strong> — Reuse parent class behavior in child classes.</li>
            <li><strong>Polymorphism</strong> — Same interface, different implementations.</li>
            <li><strong>Abstraction</strong> — Expose only what's necessary, hide complexity.</li>
          </ul>
        </div>

        <h3>7. Common Mistakes & Fixes</h3>
        <table>
          <thead>
            <tr>
              <th>Mistake</th>
              <th>Root Cause</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>req.body</code> is <code>undefined</code></td>
              <td>Body parser middleware not registered before routes.</td>
              <td>Add <code>app.use(express.urlencoded())</code> and <code>app.use(express.json())</code> <strong>before</strong> routes.</td>
            </tr>
            <tr>
              <td><code>ReferenceError: Must call super()</code></td>
              <td>Accessing <code>this</code> in a child class before calling <code>super()</code>.</td>
              <td>Always call <code>super(...args)</code> as the first line in a child <code>constructor()</code>.</td>
            </tr>
            <tr>
              <td>Private field syntax error</td>
              <td>Accessing <code>obj.#field</code> from outside the class.</td>
              <td>Private fields are class-scoped only. Expose them via getter methods.</td>
            </tr>
          </tbody>
        </table>
      `
    }
  ];

  // Expose notes list to global window scope
  window.SigmaNotes = notes;
})();
