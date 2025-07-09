# NodeJS

# Node.js REPL (Read-Eval-Print Loop)

## 📌 What is REPL?

- REPL stands for **Read-Eval-Print Loop**.
- It is an interactive shell that allows you to:
  - Read: Read the user’s input
  - Eval: Evaluate the input
  - Print: Print the result
  - Loop: Repeat the process

It is useful for **quick testing**, **debugging**, or exploring Node.js features interactively.

---

## 🚀 How to Start REPL

To enter the Node.js REPL environment, run the following command in your terminal:

```bash
node
````

You will see a prompt like:

```bash
>
```

---

## 🛠️ Using REPL

### 1. Basic JavaScript Operations

```js
> 2 + 2
4

> "Hello".toUpperCase()
'HELLO'
```

### 2. Variable Declarations

```js
> let x = 10
undefined
> x * 2
20
```

### 3. Multiline Code (Press Enter after opening braces)

```js
> function greet(name) {
...   return "Hello, " + name;
... }
undefined
> greet("Priyanshu")
'Hello, Priyanshu'
```

---

## 🔁 Special REPL Commands

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `.help`          | Show all available commands         |
| `.exit`          | Exit REPL                           |
| `.editor`        | Enter editor mode (multi-line code) |
| `.save filename` | Save REPL session to a file         |
| `.load filename` | Load code from a file               |

---

## 🧪 REPL Tips

* Use `_` to access the **last evaluated result**:

```js
> 5 + 5
10
> _ * 2
20
```

* Use `Tab` for **auto-completion**.
* Use arrow keys (`↑`, `↓`) to navigate command history.

---

## 📂 Example: Saving REPL Session

```bash
> .save session.js
Session saved to: session.js
```

Then you can exit and open the file to review or run later.

---

## Process
* `process `: This object provides information about and control over the curretn Node.js process.
```bash
    node
    > process
```
* `process.argv`: returns an array containing the comand-line arguments passed when the Node.JS process was launched.

```js
let args = process.argv;

for(let i=2; i<args.length; i++) {
    console.log("Hello to",args[i]);
}
console.log(process.argv);
```

```bash
node script.js priyanshu kumar sharma

    >Hello to priyanshu
    >Hello to kumar
    >Hello to sharma
```

## Module Export in Node.js

### What are Modules?
- In Node.js, every file is treated as a **module**.
- Modules help organize code into reusable components.

### Exporting from a Module

#### 1. `module.exports`
Used to export a single value (object, function, class, etc.)

```js
// math.js
const sum = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;
const g=9.8; 

module.exports = 123;
```

```js
// script.js
console.log(someValue);
console.log(someValue.sum(5, 10));
console.log(someValue.subtract(5, 10));
console.log(someValue.multiply(5, 10));
console.log(someValue.divide(5, 10));
console.log(someValue.g);
```

```bash
OUTPUT:
{
  sum: [Function: sum],
  subtract: [Function: subtract],
  multiply: [Function: multiply],
  divide: [Function: divide],
  g: 9.8
}
15
-5
50
0.5
9.8
```


#### 2. `exports` Object

Used to export multiple properties.

```js
// utils.js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

```js
// app.js
const utils = require('./utils');
console.log(utils.add(4, 2)); // 6
console.log(utils.sub(4, 2)); // 2
```

> ⚠️ Do not assign `exports = something` directly. Use `module.exports` for full assignment.

> If module is not exported then it will return empty object

> By default datatype of modules: Object. But can be changed explicitly.

## Summary

| Export Style     | Use When                        |
| ---------------- | ------------------------------- |
| `module.exports` | Export a single thing(a special object)          |
| `exports`        | Export multiple named functions |
| `require`        | a built-in function to include external modules that exist in separate files.       |

---
Here's a neat and clear Markdown note for **Exporting from a Directory** in Node.js:

---


## Exporting from a Directory in Node.js

### Goal
- Organize multiple related modules in a directory
- Export them cleanly through a central `index.js`

### Folder Structure

```
Maths/
│
├── add.js
├── sub.js
└── index.js
```

#### `add.js`
```js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

#### `sub.js`

```js
function sub(a, b) {
  return a - b;
}
module.exports = sub;
```

#### `index.js` (Aggregator)

```js
const add = require('./add');
const sub = require('./sub');

module.exports = {
  add,
  sub
};
```

### Usage

```js
// script.js
const utils = require('./utils');

console.log(utils.add(5, 3)); // 8
console.log(utils.sub(5, 3)); // 2
```

### Benefits

* Cleaner imports
* Centralized module management
* Scalable for larger projects

---

## What is NPM?
- Default package manager for Node.js
- Comes installed with Node.js
- Helps manage:
  - Packages (libraries)
  - Versioning
  - Dependencies

### Common Commands

#### 1. Initialize a Project
```bash
npm init
```

Use `-y` to skip prompts:

```bash
npm init -y
```

#### 2. Install a Package

```bash
npm install <package-name>
```

Example:

```bash
npm install express
```

#### 3. Install a Package Globally

```bash
npm install -g nodemon
```

#### 4. Uninstall a Package

```bash
npm uninstall <package-name>
```

#### 5. List Installed Packages

```bash
npm list
```

Use `-g` for global packages:

```bash
npm list -g
```

### `package.json`

* File that holds metadata and dependencies for the project

#### Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### `node_modules/`

* Directory where installed packages are stored
* Should be ignored in `.gitignore`

### `.gitignore` Example

```
node_modules/
```

---


