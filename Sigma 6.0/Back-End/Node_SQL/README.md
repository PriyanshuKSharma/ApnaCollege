# 🛢️ Node.js with MySQL2 (Using Promises + Async/Await)

## 📘 What is mysql2?

- A modern MySQL driver for Node.js.
- Supports **Promises**, **Prepared Statements**, and **async/await**.
- Backward compatible with the old `mysql` module.

---

### 🔧 Step 1: Install mysql2

```bash
npm install mysql2
```

---

### ⚙️ Step 2: Connect to Database

#### `db.js`

```js
const mysql = require('mysql2/promise');

// Create async connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: '<user-name>',
  password: '<password>',
  database: 'testdb'
});

module.exports = pool;
```

---

### 🧠 Step 3: Sample CRUD Operations Using `async/await`

#### ✅ Insert Data

```js
const db = require('./db');

async function insertUser(username, email) {
  const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
  const [result] = await db.execute(sql, [username, email]);
  console.log('✅ User inserted with ID:', result.insertId);
}
```

---

#### ✅ Read Data

```js
async function getUsers() {
  const [rows] = await db.execute('SELECT * FROM users');
  console.log('📄 All Users:', rows);
}
```

---

#### ✅ Update Data

```js
async function updateUser(id, newEmail) {
  const sql = 'UPDATE users SET email = ? WHERE id = ?';
  await db.execute(sql, [newEmail, id]);
  console.log('🔄 User updated');
}
```

---

#### ✅ Delete Data

```js
async function deleteUser(id) {
  const sql = 'DELETE FROM users WHERE id = ?';
  await db.execute(sql, [id]);
  console.log('❌ User deleted');
}
```

---

### 📦 Sample Table (SQL)

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100)
);
```

---

### 💡 Why mysql2?

* ✅ Native Promise support
* ✅ Fast and lightweight
* ✅ Works with async/await
* ✅ Secure via prepared statements (`?` placeholders)

---

### 🧠 Best Practices

* Use `try/catch` around all async DB calls
* Use connection pooling (`createPool`) instead of single connection
* Store credentials in `.env` and use `dotenv` for security

---

### 🔗 Docs

* [mysql2 GitHub](https://github.com/sidorares/node-mysql2)
* [npm page](https://www.npmjs.com/package/mysql2)

---

## 🤖 Using Faker.js to Generate Fake SQL Data (with MySQL2)

### 📦 Install Faker

```bash
npm install @faker-js/faker
```

---

### 📁 `seed.js` – Seeding Users Table with Fake Data

```js
const { faker } = require('@faker-js/faker');
const db = require('./db'); // mysql2 pool

async function seedUsers(n = 10) {
  for (let i = 0; i < n; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
    await db.execute(sql, [username, email]);
    console.log(`✅ Inserted: ${username} (${email})`);
  }
  console.log(`🌱 Seeded ${n} users successfully!`);
}

seedUsers();
```

---

### 🧠 Faker Use Cases

| Type     | Example Code                 | Output Example                                            |
| -------- | ---------------------------- | --------------------------------------------------------- |
| Name     | `faker.name.fullName()`      | "Priyanshu Sharma"                                        |
| Email    | `faker.internet.email()`     | "[priya.sharma@gmail.com](mailto:priya.sharma@gmail.com)" |
| Username | `faker.internet.userName()`  | "priyanshu\_21"                                           |
| Address  | `faker.location.city()`      | "Pune"                                                    |
| Password | `faker.internet.password(8)` | "x4#P\@sY1"                                               |

---

### ✅ Pro Tips

* Use `await Promise.all([...])` for parallel inserts (advanced).
* Faker is great for populating `products`, `blogs`, `orders`, etc.
* Can be reused in Express APIs for mock responses.

---

### 🔗 Docs

* [Faker.js Docs](https://fakerjs.dev/)
* [GitHub Repo](https://github.com/faker-js/faker)

---


## MySQL2 Package
### 🧩 1. Log In to MySQL

```bash
mysql -u root -p
```

* `-u root` = username
* `-p` = prompt for password

> You'll be asked to enter your MySQL root (or user) password.

---

### 📁 2. View All Databases

```sql
SHOW DATABASES;
```

---

### 📦 3. Create a New Database

```sql
CREATE DATABASE testdb;
```

Use it:

```sql
USE testdb;
```

---

### 🧱 4. Create a Table

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100)
);
```

---

### 📝 5. Insert Data

```sql
INSERT INTO users (username, email)
VALUES ('priyanshu', 'priyan@example.com');
```

---

### 📄 6. Fetch Data

```sql
SELECT * FROM users;
```

---

### 🔁 7. Update Data

```sql
UPDATE users SET email = 'new@mail.com' WHERE id = 1;
```

---

### ❌ 8. Delete Data

```sql
DELETE FROM users WHERE id = 1;
```

---

### ❓ 9. Table Info

```sql
DESCRIBE users;
```

---

### 💡 Extra Commands

| Command              | Description       |
| -------------------- | ----------------- |
| `exit` or `quit`     | Leave MySQL CLI   |
| `SHOW TABLES;`       | List all tables   |
| `DROP TABLE users;`  | Delete a table    |
| `DROP DATABASE xyz;` | Delete a database |

---

### 🧠 Tips

* End every SQL command with a `;`
* Use arrow keys to navigate previous commands
* Use `\c` to cancel a wrong command mid-typing

---

### 🔗 Docs

* [MySQL CLI Manual](https://dev.mysql.com/doc/refman/8.0/en/mysql.html)

---

## 🛡️ SQL Placeholders (Prepared Statements)

### 📘 What Are Placeholders?

Placeholders (or **prepared statements**) are used in SQL to safely insert dynamic values.

✅ They help prevent **SQL injection attacks**  
✅ They auto-handle **escaping values**  
✅ They make code cleaner & more secure

---

### 🔧 Syntax (MySQL2 with Node.js)

```js
const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
const values = ['priyanshu', 'priyan@example.com'];

await db.execute(sql, values);
```

* `?` is a **placeholder**
* `values` is an **array of actual data** sent securely

---

### 🧠 Example: Select with Placeholder

```js
const sql = 'SELECT * FROM users WHERE id = ?';
const [rows] = await db.execute(sql, [3]);
```

---

### 🧪 Example: Update with Multiple Placeholders

```js
const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
const [result] = await db.execute(sql, ['john_doe', 'john@example.com', 2]);
```

---

### 🚫 Never Do This (Insecure)

```js
// ❌ Prone to SQL Injection
const sql = `SELECT * FROM users WHERE username = '${userInput}'`;
db.query(sql);
```

---

### ✅ Always Use This (Safe)

```js
const sql = 'SELECT * FROM users WHERE username = ?';
db.execute(sql, [userInput]);
```

---

### 📦 mysql2 with Named Placeholders (Optional)

Enable support:

```js
const mysql = require('mysql2/promise');
const conn = mysql.createConnection({
  namedPlaceholders: true
});

const sql = 'INSERT INTO users (username, email) VALUES (:user, :email)';
const values = { user: 'priyanshu', email: 'abc@x.com' };

await conn.execute(sql, values);
```

---

### 🧠 Summary

| Placeholder | Used For                                  |
| ----------- | ----------------------------------------- |
| `?`         | Positional placeholder (most common)      |
| `:name`     | Named placeholder (optional, with config) |

---

### 🔗 Related

* [mysql2 Docs](https://github.com/sidorares/node-mysql2#using-prepared-statements)
* [OWASP: SQL Injection Prevention](https://owasp.org/www-community/attacks/SQL_Injection)

---

