```markdown
# Miscellaneous
### 📘 Concept: GET and POST Requests in Express.js

In Express, **GET** and **POST** requests are the two most common HTTP methods used to handle data between the client (browser) and server.

---

## ✅ 1. GET Request

* A **GET** request is used to **retrieve** data from the server.
* Used to GET some response
* Data sent in query strings (limited, string data & viisible in URL)

* Data sent in query strings (limited, string data & visible in URL)
### Example:

```js
app.get('/home', (req, res) => {
  res.send('Welcome to the Home Page');
### Example:
});
```

* URL: `http://localhost:3000/home`
* Data is sent in the **URL** (as query parameters)
* Used for **reading** or **fetching** data

#### 💡 Query Parameters Example

```js
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`You searched for: ${query}`);
});
```

URL: `/search?q=nodejs` → Output: `You searched for: nodejs`

---

## ✅ 2. POST Request

* A **POST** request is used to **send data to the server**, typically from a form.
* Used to POST something (for create/write/update)
* Data sent via request body (any type of data)

### You need middleware to parse POST data:

```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json()); // For JSON data
```

### Example:

```js
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`Form submitted by: ${name}`);
});
```

### HTML Form Example:

```html
<form action="/submit" method="POST">
  <input type="text" name="name" />
  <button type="submit">Submit</button>
</form>
```

---

## 🔍 Differences Between GET and POST

| Feature       | GET                            | POST                             |
| ------------- | ------------------------------ | -------------------------------- |
| Purpose       | Retrieve data                  | Submit data                      |
| Data location | In URL (query string)          | In request body                  |
| Max length    | Limited (URL length limit)     | No real limit (server-dependent) |
| Visibility    | Visible in URL                 | Hidden from URL                  |
| Use case      | Safe operations (search, read) | Data changes (form submission)   |

---

## 🧪 Test with Postman or Browser

* **GET**: Just visit the URL or use query strings.
* **POST**: Use a form or a tool like [Postman](https://www.postman.com/) or `curl`.

---

### 📘 Concept: Handling POST Requests in Express.js

Handling **POST** requests in Express means setting up your server to **receive and process data** sent by the client — usually via a form or API call.

---

## ✅ 1. Basic Setup to Handle POST Requests

### 🛠 Required Middleware

Before Express can read POST data (especially from forms), you need to enable middleware to parse incoming request bodies.

```js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());
```

---

## 🧾 2. Example: Handling Form Submission

### 🧱 HTML Form (EJS or plain HTML)

```html
<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Enter name" />
  <input type="email" name="email" placeholder="Enter email" />
  <button type="submit">Submit</button>
</form>
```

---

### ⚙️ Express POST Handler

```js
app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  console.log(`Received: ${username}, ${email}`);
  res.send(`Thank you, ${username}. We received your email: ${email}`);
});
```

* `req.body` contains the submitted form data.
* This data is available only if middleware (`express.urlencoded()`) is used.

---

## 📦 3. Handling JSON POST Requests (e.g., API)

If a client sends JSON (e.g., using `fetch()` or Postman):

### 📤 JSON Payload Example:

```json
{
  "name": "Alice",
  "age": 25
}
```

### 🧩 Express Route

```js
app.post('/api/user', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name} (age ${age}) created.` });
});
```

* Make sure `express.json()` middleware is used.

---

## ✅ 4. Response Options

You can respond in several ways:

* `res.send()` — plain text or HTML
* `res.json()` — JSON data (API style)
* `res.redirect()` — send the user to another page

---

## 🧪 5. Testing POST Requests

* **Browser**: Submit an HTML form
* **Postman**: Choose `POST`, set Body to `x-www-form-urlencoded` or `raw > JSON`
* **JavaScript**: Use `fetch()` or `axios`

### Example with `fetch()` in the browser:

```js
fetch('/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: 'Bob', email: 'bob@example.com' })
});
```

---

### 🛑 Common Mistakes

| Mistake                   | Fix                                                             |
| ------------------------- | --------------------------------------------------------------- |
| `req.body` is `undefined` | Make sure to use `express.urlencoded()` and/or `express.json()` |
| POST route not found      | Double-check your `app.post()` path                             |
| Wrong content type        | Match `Content-Type` in the request header                      |

---


## 🧠 What is Object-Oriented Programming (OOP)?

**OOP** is a programming paradigm based on the concept of **objects** — which bundle **data (properties)** and **functions (methods)** together.

Think of an object like a real-world item: a car, a person, or a book. Each has **attributes (color, name, title)** and **actions (drive, speak, open)**.

---

## ✅ Key Concepts of OOP in JavaScript

| Concept           | Meaning (Simplified)                                        |
| ----------------- | ----------------------------------------------------------- |
| **Class**         | A blueprint or template for creating objects                |
| **Object**        | A real instance created from a class                        |
| **Constructor**   | A function that runs when the object is created             |
| **this**          | Refers to the current object’s instance                     |
| **Method**        | A function inside an object                                 |
| **Inheritance**   | One class can reuse (inherit) properties/methods of another |
| **Encapsulation** | Keeping data safe inside objects                            |
| **Polymorphism**  | Same method name behaving differently in different classes  |

---

## 🧱 1. Creating Objects Without Classes (Basic)

```js
const person = {
  name: 'Alice',
  age: 25,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Output: Hello, I'm Alice
```

### ✅ Explanation:

* `person` is an object.
* `name` and `age` are properties.
* `greet` is a method (function inside the object).
* `this.name` refers to the object's `name` property.

---

## 🧱 2. Creating Objects Using Constructor Functions (Before ES6)

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const p1 = new Person('Bob', 30);
p1.greet(); // Hi, I'm Bob
```

### ✅ Explanation:

* `Person` is a constructor function.
* `this.name` creates a property on the object.
* `new Person()` creates a new object from the blueprint.

---

## 🆕 3. Using ES6 Classes (Modern & Recommended)

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const person1 = new Person('Charlie', 28);
person1.greet(); // Hello, I'm Charlie
```

### ✅ Explanation:

* `class Person` defines a class.
* `constructor()` is a special method that runs when an object is created.
* `greet()` is a method.
* `new Person(...)` creates an object.

---

## 🧬 4. Inheritance – Extending Another Class

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

### ✅ Explanation:

* `Dog` **extends** `Animal` → it inherits `Animal`’s properties and methods.
* We override `speak()` to customize behavior (polymorphism).
* `super()` can be used to call the parent class’s constructor.

---

## 🔐 5. Encapsulation – Using Private Fields (ES2022+)

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
// console.log(account.#balance); ❌ Error: private field
```

### ✅ Explanation:

* `#balance` is a **private field**.
* It cannot be accessed directly outside the class.
* Only methods inside the class can access it — this is **encapsulation**.

---

## 🌀 6. Polymorphism – Different Behavior for the Same Method

```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const circle = new Circle(3);
const square = new Square(4);

console.log(circle.area()); // 28.27...
console.log(square.area()); // 16
```

### ✅ Explanation:

* `Circle` and `Square` override the `area()` method.
* Same method name → different behaviors = **polymorphism**.

---

## 📝 Summary

| Concept       | Example Code / Purpose                     |
| ------------- | ------------------------------------------ |
| Class         | `class Person { ... }`                     |
| Object        | `const p = new Person()`                   |
| Method        | `greet() { ... }`                          |
| Inheritance   | `class Dog extends Animal`                 |
| Encapsulation | `#balance` as a private field              |
| Polymorphism  | Overriding `area()` in multiple subclasses |

---


