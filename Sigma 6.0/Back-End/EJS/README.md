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


