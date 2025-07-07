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

## Best Practices

* Avoid using spaces or special characters in database names.
* Use lowercase with underscores for naming consistency (e.g., `student_portal`).
* Always check with `SHOW DATABASES;` to avoid name conflicts.

---

## Practice Tips

* Use **phpMyAdmin**, **MySQL CLI**, or **PostgreSQL shell** to practice.
* Try creating databases for common domains like `ECommerce`, `HRSystem`, `Hospital`, etc.
* Delete and recreate databases to reinforce understanding.

---

## Constraints

* **NOT NULL**: Columns cannot have a null value  
    **Example:**  
    ```sql
    CREATE TABLE Employees (
        EmployeeID INT NOT NULL,
        Name VARCHAR(100) NOT NULL
    );
    ```

* **UNIQUE**: All values in the column must be different  
    **Example:**  
    ```sql
    CREATE TABLE Users (
        UserID INT PRIMARY KEY,
        Email VARCHAR(255) UNIQUE
    );
    ```

* **DEFAULT**: Sets a default value for a column  
    **Example:**  
    ```sql
    CREATE TABLE Orders (
        OrderID INT PRIMARY KEY,
        Status VARCHAR(20) DEFAULT 'Pending'
    );
    ```

* **CHECK**: Limits the values allowed in a column  
    **Example:**  
    ```sql
    CREATE TABLE Products (
        ProductID INT PRIMARY KEY,
        Price DECIMAL(10,2) CHECK (Price > 0)
    );
    ```

---

## Key Constraints

Key constraints are used to enforce uniqueness and relationships between tables.

### 1. **PRIMARY KEY**

* Uniquely identifies each row in a table.
* Cannot be `NULL`.
* Automatically enforces `UNIQUE` and `NOT NULL`.

**Example:**

```sql
CREATE TABLE IF NOT EXISTS insta_users (
     id INT,
     name VARCHAR(30) NOT NULL,
     email VARCHAR(50) UNIQUE,
     followers INT DEFAULT 0,
     following INT DEFAULT 0,
     age INT,
     CONSTRAINT age_check CHECK (age >= 15),
     PRIMARY KEY (id)
);
```

### 2. **FOREIGN KEY**

* Creates a relationship between two tables.
* The value in the child table must exist in the parent table.

**Example:**

```sql
CREATE TABLE post (
   id INT PRIMARY KEY,
   content VARCHAR(100),
   user_id INT,
   FOREIGN KEY (user_id) REFERENCES insta_users(id)
);
```

### 4. **COMPOSITE KEY**

* A primary key made from two or more columns.
* Used when a single column cannot uniquely identify a record.

**Example:**

```sql
CREATE TABLE Enrollment (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID)
);
```

---

## Tips for Constraints

* Use **`PRIMARY KEY`** when you want a unique identifier for a record.
* Use **`FOREIGN KEY`** to model relationships between tables.
* Use **`UNIQUE`** to avoid duplicate values.
* Use **`CHECK`** to enforce domain-specific rules (e.g., price > 0).
* Use **`DEFAULT`** to provide a fallback value if none is specified.

---
