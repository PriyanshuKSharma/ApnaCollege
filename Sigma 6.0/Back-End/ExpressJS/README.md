# ExpressJS

## Library v/s Framework

### 📚 What is a Library?

- A **library** is a collection of pre-written code that **you call** when needed.
- You are **in control** of the flow.
- You decide **when and where** to use its functions.

#### Example:
```js
const _ = require('lodash');
let arr = [1, 2, 3];
let reversed = _.reverse(arr); // You call the function
```

> Lodash is a utility **library**

---

### 🧠 What is a Framework?

* A **framework** provides a **structure** for building applications.
* The framework is **in control** and it **calls your code** at certain points (Inversion of Control).
* You **follow its rules and lifecycle**.

#### Example:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});
```

> Express.js is a **framework** for building web servers

---

### 🔍 Key Differences

| Feature              | Library                  | Framework                 |
| -------------------- | ------------------------ | ------------------------- |
| Control              | You call the code        | Framework calls your code |
| Flexibility          | More flexible            | More opinionated          |
| Learning Curve       | Generally easier         | May be more complex       |
| Example              | Lodash, Axios, Moment.js | Express, Angular, Next.js |
| Inversion of Control | ❌ No                     | ✅ Yes                     |

---

### 🎯 Mnemonic

> **“You call a Library, but a Framework calls you.”**

---

## What is Express.js?

### 🧾 Definition

**Express.js** is a minimal and flexible **Node.js web application framework** that provides a robust set of features to build web and mobile applications.

It simplifies the process of:
- Setting up a web server
- Handling HTTP requests and responses
- Building RESTful APIs
- Managing routes and middleware

---

### 🚀 Why Use Express?

- Lightweight and fast
- Simple to learn and use
- Handles routing with ease
- Integrates easily with databases (e.g., MongoDB, MySQL)
- Middleware support
- Large community and ecosystem

---

### 🔧 Installation

```bash
npm install express
```

---

### 📦 Basic Example

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```
> `Ports` are the logical endpoints of a network connection that is used to exchange information between a web server and web client.
---

### 🌐 Use Cases

* Web servers
* REST APIs
* Single-page apps (SPAs) backend
* Middleware-based request handling
* Full-stack JavaScript apps (MEAN/MERN)

---

### 🔗 Related Technologies

| Technology | Role                      |
| ---------- | ------------------------- |
| Node.js    | JavaScript runtime engine |
| Express.js | Web framework for Node.js |
| MongoDB    | NoSQL database            |
| Mongoose   | ODM for MongoDB + Node.js |

---

## `app.use()` in Express.js

### 🔧 What is `app.use()`?

- `app.use()` is a method to **mount middleware** in an Express app.
- Middleware is a function that has access to:
  - `req` (request)
  - `res` (response)
  - `next()` (to pass control to the next middleware)

---

### 🔍 Syntax

```js
app.use([path], callback)
```

* `path` (optional): Mount point (default is `/`)
* `callback`: Middleware function

---

### 📦 Example 1: Global Middleware

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next handler
});
```

> This logs every incoming request.

---

### 📦 Example 2: Middleware for Specific Path

```js
app.use('/admin', (req, res, next) => {
  console.log('Accessing admin section');
  next();
});
```

> Executes only for routes starting with `/admin`.

---

### 📦 Example 3: Serving Static Files

```js
app.use(express.static('public'));
```

> Serves static files from the `public/` directory.

---

### 📦 Example 4: Using Third-Party Middleware

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

> Logs HTTP requests in the console using `morgan`.

---

### ✅ When to Use `app.use()`

| Use Case               | Use `app.use()`?  |
| ---------------------- | ----------------- |
| Global middleware      | ✅ Yes             |
| Static file serving    | ✅ Yes             |
| Custom request logging | ✅ Yes             |
| Route-specific logic   | ✅ Yes (with path) |

---

### 📌 Summary

* Mounts middleware globally or for specific routes
* Executes in the **order** it’s declared
* Crucial for logging, parsing, validation, authentication, etc.

---

## Sending a Response in Express.js

### 🧾 What is a Response?

In Express.js, the `res` object is used to send a response back to the client (browser or API caller).

---

### 🔧 Common Response Methods

#### 1. `res.send()`
- Sends a **text**, **HTML**, **object**, or **array**
- Automatically sets `Content-Type`

```js
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

```js
res.send({ success: true });
```

---

#### 2. `res.json()`

* Sends a **JSON** response
* Automatically sets `Content-Type: application/json`

```js
app.get('/api', (req, res) => {
  res.json({ name: 'Priyanshu', role: 'Developer' });
});
```

> Similar to `res.send()`, but explicitly for JSON

---

#### 3. `res.status(code)`

* Sets the **HTTP status code** for the response
* Can be chained with other methods

```js
res.status(404).send('Page Not Found');
```

```js
res.status(201).json({ message: 'Created' });
```

---

#### 4. `res.redirect()`

* Redirects the client to a different URL

```js
res.redirect('/login');
```

---

#### 5. `res.sendFile()`

* Sends a file as the response

```js
res.sendFile(__dirname + '/index.html');
```

> Make sure to use absolute paths

---

### ✅ Summary

| Method           | Description               |
| ---------------- | ------------------------- |
| `res.send()`     | Sends any type of content |
| `res.json()`     | Sends JSON specifically   |
| `res.status()`   | Sets HTTP status code     |
| `res.redirect()` | Redirects to another URL  |
| `res.sendFile()` | Sends a file as response  |

---

## Routing in Express.js

### 🧭 What is Routing?

* It is the process of selecting a path for traffic in a network or between or across multiple networks.
* Refers to **how your application responds** to client requests at specific URLs using **HTTP methods** like:
    - GET
    - POST
    - PUT
    - DELETE

---

### 🛣️ Basic Route Syntax

```js
app.METHOD(PATH, HANDLER)
```

* `METHOD` → HTTP method (`get`, `post`, etc.)
* `PATH` → Route path (`/`, `/users`, etc.)
* `HANDLER` → Callback function `(req, res) => {}`

---

### 📦 Example Routes

#### GET Request

```js
app.get('/', (req, res) => {
  res.send('Home Page');
});
```

#### POST Request

```js
app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});
```

#### PUT Request

```js
app.put('/update/:id', (req, res) => {
  res.send(`Updated item with ID: ${req.params.id}`);
});
```

#### DELETE Request

```js
app.delete('/delete/:id', (req, res) => {
  res.send(`Deleted item with ID: ${req.params.id}`);
});
```

---

### 🧩 Route Parameters

#### Example: `/user/:username`

```js
app.get('/user/:username', (req, res) => {
  res.send(`Hello, ${req.params.username}`);
});
```

---

### 🧪 Handling Query Parameters

```js
app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`Search result for: ${q}`);
});
```

URL: `/search?q=express`

---

### 🔗 Chaining Route Methods

```js
app.route('/item')
  .get((req, res) => res.send('Get item'))
  .post((req, res) => res.send('Create item'))
  .put((req, res) => res.send('Update item'));
```

---

### 🚦 Order Matters!

Routes are matched in the **order they are defined**.

* Place general routes (like `*`) at the bottom.

---

### 🛑 404 Handling (Fallback Route)

```js
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});
```

---

### 🧠 Summary

| HTTP Method | Use For                  |
| ----------- | ------------------------ |
| GET         | Read/Fetch data          |
| POST        | Create new resource      |
| PUT         | Update existing resource |
| DELETE      | Delete a resource        |

---

## 🔁 Nodemon – Auto-Restarting Node.js Server

### 📘 What is Nodemon?

- **Nodemon** is a development tool that **automatically restarts your Node.js app** whenever file changes are detected.
- Saves time by avoiding manual `Ctrl+C` and `node index.js`.

---

### ⚙️ Installation

#### 1. Local (recommended for projects)
```bash
npm install nodemon --save-dev
```

#### 2. Global (available in any project)

```bash
npm install -g nodemon
```

---

### 🚀 Usage

#### Run your app with nodemon:

```bash
nodemon index.js
```

> Replaces `node index.js`

---

### 🛠 Add Script in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

#### Then run:

```bash
npm run dev
```

---

### ✅ Benefits

* Automatically watches `.js`, `.json`, `.mjs`, etc.
* Detects changes and restarts the server
* Supports custom extensions & ignore patterns

---

### 📦 Ignore Files (optional)

You can add a `.nodemonignore` file:

```
node_modules
README.md
logs/
```

---

### 🧪 Check Version

```bash
nodemon -v
```

---

### 📌 Summary

| Feature          | Description                         |
| ---------------- | ----------------------------------- |
| Auto-reload      | ✅ Yes, on file changes              |
| Install globally | `npm install -g nodemon`            |
| Run command      | `nodemon index.js` or `npm run dev` |

---

## 🛣️ Path Parameters in Express.js

### 📘 What are Path Parameters?

- Path parameters are **dynamic values** in a route's URL.
- Denoted by a **colon (`:`)** in the route definition.
- Accessed using `req.params` in the route handler.

---

### 🔧 Syntax

```js
app.get('/user/:username', (req, res) => {
  res.send(`Welcome, ${req.params.username}`);
});
```

* URL: `/user/priyanshu`
* Response: `Welcome, priyanshu`

---

### 🔢 Multiple Parameters

```js
app.get('/post/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.send(`Post ID: ${id} in category: ${category}`);
});
```

* URL: `/post/tech/42`
* Output: `Post ID: 42 in category: tech`

---

### 🧪 Accessing Params

```js
console.log(req.params);
// Example Output:
// { username: 'priyanshu' }
```

---

### ❌ Invalid Example

```js
app.get('/:', ...) // ❌ This will throw an error (missing parameter name)
```

You must **name** every parameter after the colon:

```js
app.get('/:id', ...) // ✅ Valid
```

---

### ✅ Use Cases

| Use Case         | Example Route             | Description                        |
| ---------------- | ------------------------- | ---------------------------------- |
| User Profile     | `/user/:username`         | View a user by username            |
| Blog Post        | `/post/:postId`           | Fetch post by ID                   |
| Product Category | `/shop/:category/:itemId` | Dynamic route with multiple params |

---

### 📦 Summary

* Defined using `:paramName` in route
* Accessed via `req.params.paramName`
* Useful for dynamic content like user IDs, blog slugs, etc.

---

## 🔍 Query Strings in Express.js

### 📘 What are Query Strings?

- Query strings are **key-value pairs** sent in the URL **after a `?`**
- Used to send **non-sensitive data** like filters, search terms, page numbers, etc.
- Accessed via `req.query` in Express

---

### 🔧 Syntax

```js
app.get('/search', (req, res) => {
  console.log(req.query);
  res.send(`You searched for: ${req.query.q}`);
});
```

#### URL Example:

```
http://localhost:3000/search?q=express
```

#### Output:

```
You searched for: express
```

---

### 🧪 Multiple Query Parameters

```js
app.get('/products', (req, res) => {
  const { category, sort } = req.query;
  res.send(`Category: ${category}, Sort by: ${sort}`);
});
```

#### URL Example:

```
/products?category=shoes&sort=price
```

#### Output:

```
Category: shoes, Sort by: price
```

---

### 🔍 Accessing Query Object

```js
console.log(req.query);
// Output:
// { q: 'express' }
// or { category: 'shoes', sort: 'price' }
```

---

### 🔗 Difference: Path Param vs Query String

| Feature      | Path Parameter  | Query String               |
| ------------ | --------------- | -------------------------- |
| Location     | `/user/:id`     | `/user?id=123`             |
| Accessed via | `req.params.id` | `req.query.id`             |
| Usage        | Resource ID     | Filters, searches, options |

---

### ✅ Summary

* Query strings = optional URL parameters after `?`
* Access with `req.query`
* Multiple query params are separated by `&`
* Common for **search**, **filters**, **pagination**

---

