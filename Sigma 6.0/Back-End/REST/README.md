# REST

## 📘 What is REST?

**REST** stands for **Representational State Transfer**.

It is an **architectural style** used to design **web APIs** — a set of rules for building scalable, maintainable, and stateless services that work over HTTP.

---

## 💡 Real-World Analogy

Think of REST like ordering food at a restaurant:

* **You** = the client (browser or app)
* **Waiter** = the API
* **Kitchen** = the server (back-end)
* **Menu** = the API documentation

You make a request (order), and the waiter (API) brings back a response (your food).

---

## 🧱 REST Basics

REST APIs are based on standard **HTTP methods**:

| HTTP Method | Purpose             | Example                                   |
| ----------- | ------------------- | ----------------------------------------- |
| `GET`       | Read/fetch data     | `GET /users` – Get a list of users        |
| `POST`      | Create new data to the servers       | `POST /users` – Create a new user         |
| `PUT`       | Update existing (entire) data  | `PUT /users/1` – Update user #1           |
| `PATCH`     | Update part of data | `PATCH /users/1` – Update part of user #1 |
| `DELETE`    | Delete data         | `DELETE /users/1` – Delete user #1        |

---

## 📦 REST is About **Resources**

Everything in REST is treated as a **resource**, which can be:

* A user
* A product
* A blog post
* etc.

Each resource is accessed by a **URL endpoint**.

For example:

```
GET /posts               → To get data for all posts      → Index(main)
POST /posts              → To add a new post              → CREATE
GET /posts/:id           → To get one post (using id)     → VIEW
PUT /posts/:id           → To update specific post        → UPDATE
DELETE /posts/:id        → To delete specific post        → DESTROY
```

---

## 🔄 REST is **Stateless**

REST doesn’t store anything between requests.

Each request is **independent** — it must contain **all necessary information** (like authentication tokens).

---

## 🌍 REST Uses Standard HTTP Response Codes

| Code | Meaning               | When Used                      |
| ---- | --------------------- | ------------------------------ |
| 200  | OK                    | Successful GET, PUT, DELETE    |
| 201  | Created               | Successful POST                |
| 204  | No Content            | Successful DELETE              |
| 400  | Bad Request           | Invalid input                  |
| 401  | Unauthorized          | Missing or invalid credentials |
| 404  | Not Found             | Resource not found             |
| 500  | Internal Server Error | Server crash or bug            |

---

## 🧑‍💻 Example REST API in Express (Node.js)

```js
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
});

// POST create new user
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update entire user
app.put('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users[index] = { id: users[index].id, name: req.body.name };
    res.json(users[index]);
  } else {
    res.status(404).send("User not found");
  }
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
```

---

## 📋 Summary

| Term              | Meaning                                       |
| ----------------- | --------------------------------------------- |
| **REST**          | Rules for designing APIs                      |
| **Resource**      | Things you interact with (e.g., users, posts) |
| **Method**        | HTTP verbs (`GET`, `POST`, `PUT`, etc.)       |
| **Stateless**     | Each request is independent                   |
| **Response Code** | Standard codes like `200`, `404`, `500`       |

---

## 📘 What is CRUD?

**CRUD** stands for the 4 basic operations you can perform on data:

| Letter | Operation | Purpose              |
| ------ | --------- | -------------------- |
| **C**  | Create    | Add new data         |
| **R**  | Read      | Get existing data    |
| **U**  | Update    | Modify existing data |
| **D**  | Delete    | Remove existing data |

---

## 🚀 How CRUD Maps to REST and HTTP

| CRUD   | HTTP Method | Endpoint Example       | Description               |
| ------ | ----------- | ---------------------- | ------------------------- |
| Create | POST        | `/users`               | Add a new user            |
| Read   | GET         | `/users` or `/users/1` | Get all users or one user |
| Update | PUT / PATCH | `/users/1`             | Update user with ID = 1   |
| Delete | DELETE      | `/users/1`             | Delete user with ID = 1   |

---

## 🧑‍💻 RESTful CRUD Example in Node.js (with Express)

We'll create a simple REST API for `users`.

### ✅ Step 1: Setup

```bash
npm init -y
npm install express
```

### ✅ Step 2: Create `server.js`

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
```

---

### 🔵 C - **Create** (POST)

```js
app.post('/users', (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: Date.now(),
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
```

---

### 🟢 R - **Read** (GET)

**Get all users:**

```js
app.get('/users', (req, res) => {
  res.json(users);
});
```

**Get a single user:**

```js
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
});
```

---

### 🟡 U - **Update** (PUT or PATCH)

```js
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  
  user.name = req.body.name;
  res.json(user);
});
```

> 🔁 Use `PUT` to replace the entire object, or `PATCH` to update just part of it.

---

### 🔴 D - **Delete**

```js
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).send();
});
```

---

### 🏁 Start the Server

```js
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## 📋 Final RESTful Endpoints Summary

| Endpoint     | Method | Action          |
| ------------ | ------ | --------------- |
| `/users`     | GET    | Get all users   |
| `/users/:id` | GET    | Get user by ID  |
| `/users`     | POST   | Create new user |
| `/users/:id` | PUT    | Update user     |
| `/users/:id` | DELETE | Delete user     |

---

## ✅ Test Your API Using:

* 🧪 [Postman](https://www.postman.com/)
* 💻 `curl` from terminal
* 🌐 A front-end app (HTML form or React, etc.)

---

## 🔁 Redirects in Express.js

### 📘 What is `res.redirect()`?

`res.redirect()` sends a **redirect response** to the client, telling the browser to visit a different URL.

---

### 🔧 Syntax

```js
res.redirect(statusCode, path);
```

| Form                                 | Meaning                         |
| ------------------------------------ | ------------------------------- |
| `res.redirect('/home')`              | Default 302 redirect to `/home` |
| `res.redirect(301, '/about')`        | Permanent redirect to `/about`  |
| `res.redirect('https://google.com')` | Redirect to external URL        |

---

### 🧪 Example: Route Redirection

#### `index.js`

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("🏠 Home Page");
});

app.get('/old-home', (req, res) => {
  res.redirect('/'); // temporary 302 redirect
});

app.get('/google', (req, res) => {
  res.redirect('https://www.google.com');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
```

---

### 🔁 Permanent vs Temporary Redirect

| Code | Type      | Use Case                            |
| ---- | --------- | ----------------------------------- |
| 301  | Permanent | SEO-friendly redirects              |
| 302  | Temporary | Default behavior (unless specified) |

---

### 💡 Use Cases

* Redirect `/old-route` to `/new-route`
* Redirect logged-in users to dashboard
* Redirect external links (Google, GitHub, etc.)
* Handle route deprecations

---

### 🧠 Tips

* You don’t need to end the response manually after `res.redirect()`
* Works with both internal and external URLs

---


