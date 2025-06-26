# SQL

##  What is a Database?

A **database** is a structured collection of data stored electronically. In SQL (Structured Query Language), a **database** is a container for tables, views, stored procedures, and other related objects.

Creating a database is usually the **first step** in working with SQL.

---

##  SQL Syntax to Create a Database

```sql
CREATE DATABASE database_name;
```

###  Example

```sql
CREATE DATABASE StudentManagement;
```

---

##  Common Options (MySQL / PostgreSQL)

You can optionally specify:

* **Character set** (how text is stored)
* **Collation** (how text is sorted and compared)

```sql
CREATE DATABASE StudentManagement
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;
```

---

##  Use-Cases in Interviews

Interviewers may test your understanding by asking:

* Why do we create separate databases?
* Can a database contain multiple tables?
* What happens if the database already exists?

They may ask you to:

* Create a database
* Check if it exists
* Drop a database (as part of cleanup)

---

##  Sample Queries

### 1. Create a new database

```sql
CREATE DATABASE LibraryDB;
```

### 2. Use the database

```sql
USE LibraryDB;
```

### 3. Check all databases

```sql
SHOW DATABASES;
```

### 4. Delete (drop) a database

```sql
DROP DATABASE LibraryDB;
```

### 5. Conditional creation (MySQL-specific)

```sql
CREATE DATABASE IF NOT EXISTS LibraryDB;
```

### 6. Conditional deletion (MySQL-specific)

```sql
DROP DATABASE IF EXISTS LibraryDB;
```

### 7. Check all tables

```sql
SHOW TABLES;
```

---

## 🔐 Best Practices

* Avoid using spaces or special characters in database names.
* Use lowercase with underscores for naming consistency (e.g., `student_portal`).
* Always check with `SHOW DATABASES;` to avoid name conflicts.

---

## 🔁 Practice Tips

* Use **phpMyAdmin**, **MySQL CLI**, or **PostgreSQL shell** to practice.
* Try creating databases for common domains like `ECommerce`, `HRSystem`, `Hospital`, etc.
* Delete and recreate databases to reinforce understanding.

---
