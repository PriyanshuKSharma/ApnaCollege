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
