# 📝 EJS (Embedded JavaScript Templates)

## 📘 EJS

- EJS stands for **Embedded JavaScript Templates**
- It lets you **generate HTML** with **JavaScript logic** inside
- Works with **Express.js** to render dynamic views

---

### ⚙️ Installation

#### Step 1: Install EJS
```bash
npm install ejs
```

#### Step 2: Set EJS as the view engine

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
```

---

### 📁 Folder Structure

EJS files are stored inside the `/views` directory by default:

```
project/
│
├── views/
│   ├── home.ejs
│   └── about.ejs
├── index.js
└── package.json
```

---

### 🚀 Basic Usage

#### 📄 `views/home.ejs`

```html
<h1>Welcome <%= username %>!</h1>
```

#### 📦 `index.js`

```js
app.get('/', (req, res) => {
  res.render('home', { username: 'Priyanshu' });
});
```

---

### 🔧 EJS Syntax

| Use                     | Syntax   | Example                         |
| ----------------------- | -------- | ------------------------------- |
| Output (escaped)        | `<%= %>` | `<%= name %>`                   |
| Output (unescaped HTML) | `<%- %>` | `<%- htmlCode %>`               |
| Logic (no output)       | `<% %>`  | `<% if (user) { %> ... <% } %>` |

---

### 🔄 Example: Looping Through Data

#### 📄 `views/users.ejs`

```html
<ul>
  <% users.forEach(user => { %>
    <li><%= user %></li>
  <% }); %>
</ul>
```

#### 📦 `index.js`

```js
app.get('/users', (req, res) => {
  const users = ['Priyanshu', 'John', 'Jane'];
  res.render('users', { users });
});
```

---

### 🧩 EJS with Static Files

#### Serve CSS/JS/Images from `/public` folder:

```js
app.use(express.static('public'));
```

Then in your EJS:

```html
<link rel="stylesheet" href="/style.css">
```

---

### 📦 Summary

| Feature          | Description                |
| ---------------- | -------------------------- |
| Template engine  | ✅ Yes (for HTML rendering) |
| Syntax           | JavaScript inside HTML     |
| Use with Express | `res.render('view', data)` |
| File extension   | `.ejs`                     |
| Folder           | `/views` by default        |

---

## 📁 View Directory in Express.js (with EJS)

### 📘 What is the View Directory?

- The **view directory** is where Express looks for `.ejs` (or other templating engine) files when using `res.render()`.
- By **default**, it's the `/views` folder located in your project root.

---

### 🏗️ Default Structure

```

my-app/
├── views/
│   ├── home.ejs
│   └── about.ejs
├── public/
├── index.js
└── package.json

```

---

### ⚙️ Setting the View Engine

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // sets EJS as the template engine
````

> This automatically looks inside `/views` folder for `.ejs` files.

---

### 📦 Rendering a View

#### `index.js`

```js
app.get('/', (req, res) => {
  res.render('home'); // will look for views/home.ejs
});
```

---

### 🔄 Customizing the View Directory (Optional)

You can change the default view folder like this:

```js
const path = require('path');

app.set('views', path.join(__dirname, 'templates'));
```

> Now Express will look in `/templates` instead of `/views`.

---

### 🔧 Summary

| Feature          | Default Value            | Customizable? |
| ---------------- | ------------------------ | ------------- |
| View folder path | `/views`                 | ✅ Yes         |
| File type        | `.ejs` (or other)        | ✅ Yes         |
| Set with         | `app.set('views', path)` | ✅ Yes         |

---

### 📌 Tips

* Use consistent naming for your views (`home.ejs`, `about.ejs`, etc.)
* Always place your views in the folder set by `app.set('views', ...)`
* Combine with `app.use(express.static(...))` to serve CSS/JS

---

## 🔡 EJS Interpolation Syntax

### 📘 What is Interpolation?

**Interpolation** in EJS means inserting **dynamic values or logic** directly into your HTML using special tags.

---

### 🧩 Interpolation Tags in EJS

#### 1. `<%= value %>` – Output (Escaped)
- Outputs the **value as plain text**
- **Escapes** HTML to prevent XSS

```ejs
<p>Hello, <%= username %>!</p>
```

##### Example:

```js
res.render('home', { username: 'Priyanshu <script>' });
```

**Output:**

```html
<p>Hello, Priyanshu &lt;script&gt;!</p>
```

---

#### 2. `<%- value %>` – Output (Unescaped)

* Outputs **raw HTML**
* Use when inserting safe HTML content

```ejs
<%- htmlContent %>
```

##### Example:

```js
res.render('page', { htmlContent: "<h1>Welcome</h1>" });
```

##### Output:

```html
<h1>Welcome</h1>
```

---

#### 3. `<% code %>` – Run JavaScript (No Output)

* Use for logic, loops, conditionals, etc.
* Does **not** print anything

```ejs
<% if (isLoggedIn) { %>
  <p>Welcome back!</p>
<% } %>
```

---

#### 4. `<%# comment %>` – EJS Comment

* Does **not appear in rendered HTML**

```ejs
<%# This is an internal comment %>
```

---

### 🧪 Example: Loop with Interpolation

```ejs
<ul>
  <% users.forEach(user => { %>
    <li><%= user %></li>
  <% }); %>
</ul>
```

---


## 🧩 EJS Tag Reference

EJS provides various tags to control how JavaScript is rendered within templates. Here's a full list of them:

| Tag Syntax       | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `<% %>`          | **Scriptlet Tag** – Runs JS code, no output                                 |
| `<%_ %>`         | **Whitespace-Slurping Scriptlet** – Same as above, but removes whitespace before the tag |
| `<%= %>`         | **Escaped Output** – Outputs the value into the template (HTML-escaped)     |
| `<%- %>`         | **Unescaped Output** – Outputs raw HTML content (⚠️ use with caution)        |
| `<%# %>`         | **Comment Tag** – JS comment, not rendered or executed                      |
| `<%%`            | **Literal Output** – Outputs a literal `<%` in the rendered HTML            |
| `%>`             | **Plain End Tag** – Closes the tag                                           |
| `-%>`            | **Trim-mode End Tag** – Trims the trailing newline                          |
| `_%>`            | **Whitespace-Slurping End Tag** – Removes all whitespace after the tag      |

---

### 📌 Example Usage

```ejs
<% if (user) { %>
  Hello, <%= user.name %>!
<% } else { %>
  Hello, Guest!
<% } %>
```

```ejs
<!-- Output unescaped HTML -->
<%- "<strong>Priyanshu</strong>" %>
```

```ejs
<%# This is an internal comment %>
```

```ejs
<%%= Escaped angle brackets like <%= %> will print this literally %>
```

---

### 🧠 Best Practices

* Use `<%= %>` for **safe output**
* Use `<%- %>` only for **trusted HTML** (e.g., templates or icons)
* Use `<% %>` for loops, conditionals, and control flow
* Use `<%# %>` for internal comments (invisible in browser)

---

# 🎲 Passing Data to EJS from Express

## 📘 Concept

You can send data from Express to an EJS view using `res.render(viewName, dataObject)`.  
This allows dynamic content (like a dice roll) to appear inside your HTML.

---

## 📂 File Structure

```

project/
├── views/
│   └── rolldice.ejs
├── index.js
└── package.json

```

---

### 📄 `views/rolldice.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Roll Dice</title>
</head>
<body>
  <h1>Roll the Dice</h1>
  <h1>
    Dice gave value: <%= diceV %>
  </h1>
</body>
</html>
```

> `diceV` is a variable passed from Express using `res.render(...)`.

---

### 📦 `index.js`

```js
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceV: diceValue });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

### 📌 Explanation

* `Math.floor(Math.random() * 6) + 1` simulates a 6-sided dice roll.
* `res.render('rolldice', { diceV: value })` passes the dice value to EJS.
* Inside EJS, `<%= diceV %>` dynamically displays the value.

---

### ✅ Output Example

Visiting `http://localhost:3000/rolldice` might show:

```
Roll the Dice
Dice gave value: 4
```

Every refresh gives a new random dice number from **1 to 6**.

---

### 🧠 Summary

| Feature               | Code                                 |
| --------------------- | ------------------------------------ |
| EJS template file     | `views/rolldice.ejs`                 |
| Pass variable to view | `res.render("view", { key: value })` |
| Access in EJS         | `<%= key %>`                         |

---
Perfect! Let's extend your **Roll Dice** project by adding **conditional statements in EJS** — great for learning how logic works inside EJS templates.

---

## 🤔 Conditional Statements in EJS (Using Roll Dice Example)

### 📘 Why Use Conditionals?

EJS lets you use JavaScript logic inside HTML using `<% %>` tags.  
This is useful for displaying different content based on conditions like:
- if-else blocks
- switch cases
- comparisons

---

### 🎲 Roll Dice with Conditional Messages

#### 🧩 `rolldice.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Roll Dice</title>
</head>
<body>
  <h1>🎲 You rolled: <%= diceV %></h1>

  <% if (diceV === 6) { %>
    <h2>🎉 Congrats! You hit the jackpot!</h2>
  <% } else if (diceV >= 4) { %>
    <h2>👍 Nice roll!</h2>
  <% } else { %>
    <h2>😢 Better luck next time!</h2>
  <% } %>
</body>
</html>
```

---

#### ⚙️ `index.js`

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/rolldice', (req, res) => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  res.render('rolldice', { diceV: diceValue });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

---

### 💡 Output Examples

| Dice Value | Message                  |
| ---------- | ------------------------ |
| 6          | 🎉 Congrats!             |
| 4–5        | 👍 Nice roll!            |
| 1–3        | 😢 Better luck next time |

---

### 🔧 Summary

| Tag                | Use Case                     |
| ------------------ | ---------------------------- |
| `<% if (...) { %>` | Start of a conditional block |
| `<% } else { %>`   | Else block                   |
| `<% } %>`          | End of condition             |
| `<%= var %>`       | Output a value               |

---

### 🧠 Tip

Always remember:

* Use `<% %>` for logic (no output)
* Use `<%= %>` to print a value
---

## 🔁 Loops in EJS

### 📘 What Are Loops in EJS?

You can use regular JavaScript loops inside EJS with `<% %>` scriptlet tags.  
Most commonly used: `for`, `forEach`, and `while`.

---

### 🧪 Example: Displaying a List of Dice Rolls

#### 🧩 `views/rolls.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Multiple Dice Rolls</title>
</head>
<body>
  <h1>🎲 Dice Rolls</h1>

  <ul>
    <% rolls.forEach((val, i) => { %>
      <li>Roll <%= i + 1 %>: <strong><%= val %></strong></li>
    <% }); %>
  </ul>
</body>
</html>
```

---

### ⚙️ `index.js`

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/rolls', (req, res) => {
  let rolls = [];
  for (let i = 0; i < 5; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  res.render('rolls', { rolls });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

### 🔁 Loop Syntax in EJS

| Loop Type  | Syntax Example                                    |
| ---------- | ------------------------------------------------- |
| `for` loop | `<% for (let i = 0; i < 5; i++) { %> ... <% } %>` |
| `forEach`  | `<% items.forEach(item => { %> ... <% }); %>`     |
| `while`    | `<% while (condition) { %> ... <% } %>`           |

---

### 💡 Output Example

```
🎲 Dice Rolls
• Roll 1: 4
• Roll 2: 6
• Roll 3: 2
• Roll 4: 5
• Roll 5: 3
```

---

### 🧠 Tips

* Use `<%= %>` inside loops to output values
* Always close loops with `<% } %>`
* Works for arrays, numbers, objects, etc.

---

### 🧩 Bonus: Loop with Index

```ejs
<% items.forEach((item, index) => { %>
  <p><%= index + 1 %>. <%= item %></p>
<% }); %>
```

---

## 📘 Serving Static Files

### 🧱 1. What Are Static Files?

Static files are resources like:

* CSS files
* JavaScript files (client-side)
* Images, fonts, videos, PDFs, etc.

These files don't change dynamically and are directly served to the client as-is.

---

### 🚀 2. Serving Static Files in Express

#### ✅ Basic Static Middleware

```js
app.use(express.static('public'));
```

* This tells Express to serve files from the `public/` directory.
* Example: `public/css/style.css` → accessible via `http://localhost:3000/css/style.css`

#### ✅ Absolute Path (Best Practice)

```js
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
```

* This avoids relative path issues, especially in different environments (Windows, Linux, etc.).

---

### 📁 3. Folder Structure

Your typical Express project structure:

```
project/
├── public/         <-- Static files
├── views/          <-- EJS templates
└── index.js        <-- Main server file
```

---

### 🧠 4. Using Static Files in EJS

You reference static assets in your EJS views like this:

```html
<link rel="stylesheet" href="/css/style.css">
<script src="/js/script.js"></script>
<img src="/images/logo.png" alt="Logo">
```

The leading `/` matches the root route configured by `express.static`.

---

### 🗂 5. Multiple Static Directories

```js
app.use(express.static('public'));
app.use(express.static('files'));
```

* Express will check `public/` first, then `files/` if the file isn't found.
* Useful for serving from multiple asset sources.

---

### 🔀 6. Virtual Path Prefix

```js
app.use('/static', express.static('public'));
```

* Files are accessed with a prefix.
* Example: `public/css/style.css` becomes `/static/css/style.css`

This is useful for **namespace organization**, especially if you want to distinguish static assets from API routes.

---

### ⚙️ 7. Options for express.static()

```js
app.use(express.static('public', {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false
}));
```

These control behavior:

* `dotfiles: 'ignore'` – skip hidden files (like `.env`)
* `etag: false` – disables HTTP ETag headers (for caching)
* `extensions: ['htm', 'html']` – auto-append extensions
* `index: false` – disables serving `index.html` automatically
* `maxAge: '1d'` – set cache-control header for 1 day
* `redirect: false` – prevents redirecting `/file` → `/file/`

---

### ✅ Summary

Serving static files in Express with EJS involves:

* Hosting static assets with `express.static()`
* Using absolute paths for safety
* Referencing files correctly in EJS
* Optionally customizing middleware behavior

---

## 📘 `include`
In **EJS**, `include` is used to **reuse template parts** across different views — similar to "partials" in other templating systems.

This helps you **avoid repeating common UI elements** like headers, footers, navbars, etc.

---

### 🔧 Syntax

```ejs
<%- include('filename') %>
```

* The file is included **as-is**.
* Use `<%-` instead of `<%=`, because `<%-` will render raw HTML without escaping it.

---

### 📁 Example Folder Structure

```
views/
├── partials/
│   ├── header.ejs
│   └── footer.ejs
├── home.ejs
└── about.ejs
```

---

### 📄 `partials/header.ejs`

```ejs
<header>
  <h1>My Website</h1>
</header>
```

### 📄 `partials/footer.ejs`

```ejs
<footer>
  <p>© 2025 My Website</p>
</footer>
```

---

### 📄 `home.ejs`

```ejs
<%- include('partials/header') %>

<main>
  <h2>Home Page</h2>
  <p>Welcome to the home page.</p>
</main>

<%- include('partials/footer') %>
```

---

### ✅ Benefits of `include`

* **DRY** principle (Don’t Repeat Yourself)
* Easier maintenance
* Cleaner template files
* Promotes modular design

---

### ⚠️ Notes

* Relative paths in `include()` are based on the `views` directory.
* File extension `.ejs` is **optional** in `include()`.
* Don't use `include` inside `<%= %>` — use `<%- %>` for rendering raw output.

---

### 🧠 Bonus: Passing Data to Partials

EJS `include` does **not** support passing local variables directly (unlike some other template engines like Pug). To work around this, use shared variables available in the parent template or render context:

```js
res.render('home', { username: 'Alice' });
```

Then in partial:

```ejs
<p>Welcome, <%= username %></p>
```

---

## 🔗 Official Site

[EJS Docs → https://ejs.co](https://ejs.co)
