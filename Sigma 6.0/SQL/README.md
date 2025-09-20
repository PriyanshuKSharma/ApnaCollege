# SQL

##  What is a Database?

A **database** is a structured collection of data stored electronically. In SQL (Structured Query Language), a **database** is a container for tables, views, stored procedures, and other related objects.

Creating a database is usually the **first step** in working with SQL.

---

## 1. Introduction to SQL and RDBMS
### SQL (Structured Query Language)
*   **Definition**: SQL, or Structured Query Language, is used to access and manipulate data in a database. It is a query language, not a database itself.
*   **CRUD Operations**: SQL communicates with a database using CRUD operations:
    *   **CREATE**: Inserts a new tuple (row) into a relation (table) using `INSERT` statements.
    *   **READ**: Reads data that is already in the relations.
    *   **UPDATE**: Modifies existing data in a relation.
    *   **DELETE**: Deletes one or more data points, tuples, or rows.

### RDBMS (Relational Database Management System)
*   **Definition**: An RDBMS is software that allows you to implement a designed relational model.
*   **Examples**: MySQL, MS SQL, Oracle, IBM.
*   **Data Storage**: In a relational database, the simplest form of data storage is a **Table** or **Relation**. Data is stored in tables.

### MySQL
*   **MySQL** is an open-source RDBMS that uses SQL for all its CRUD operations.
*   It operates on a **client-server model**, where a client (like a Command Line Interface or a frontend application) uses services provided by the MySQL server.

### SQL vs. MySQL
*   **SQL** is the language used to perform CRUD operations in a relational database.
*   **MySQL** is the RDBMS used to store, manage, and administer databases, using SQL as its language.

---
## 2. Types of SQL Commands

SQL commands are categorised as follows:

*   **DDL (Data Definition Language)**: Used for defining the relation schema.
    *   `CREATE`: Creates a new table, database, or view.
    *   `ALTER TABLE`: Modifies the structure of a table, such as changing a column's data type or adding/removing columns.
    *   `DROP`: Deletes a table, database, or view.
    *   `TRUNCATE`: Removes all tuples (rows) from a table.
    *   `RENAME`: Renames a database, table, or column.
*   **DRL/DQL (Data Retrieval/Query Language)**: Used to retrieve data from tables.
    *   `SELECT`.
*   **DML (Data Manipulation Language)**: Used to perform modifications to the data in the database.
    *   `INSERT`: Inserts data into a relation.
    *   `UPDATE`: Updates data in a relation.
    *   `DELETE`: Deletes rows from a relation.
*   **DCL (Data Control Language)**: Used to grant or revoke user authority.
    *   `GRANT`: Provides access privileges to the database.
    *   `REVOKE`: Takes back user access privileges.
*   **TCL (Transaction Control Language)**: Used to manage database transactions.
    *   `START TRANSACTION`: Begins a transaction.
    *   `COMMIT`: Applies all changes and ends the transaction.
    *   `ROLLBACK`: Discards changes and ends the transaction.
    *   `SAVEPOINT`: Creates a point within a group of transactions to which you can later roll back.

### Filtering and Sorting
*   **`WHERE`**: Filters rows based on specified conditions.
*   **`BETWEEN`**: Selects values within a given range (inclusive).
*   **`IN`**: Reduces the need for multiple `OR` conditions by specifying a list of values to match.
*   **`AND` / `OR` / `NOT`**: Logical operators to combine or negate conditions.
*   **`IS NULL`**: Used to check for null values.
*   **Pattern Matching (`LIKE`)**: Searches for a specified pattern in a column, using wildcards:
    *   `%`: Matches any number of characters (0 to n).
    *   `_`: Matches a single character.
*   **`ORDER BY`**: Sorts the result set in ascending (`ASC`) or descending (`DESC`) order.

### Aggregation and Grouping
*   **`DISTINCT`**: Returns only distinct (different) values from a column.
*   **`GROUP BY`**: Groups rows that have the same values into summary rows.
    *   It is generally used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()`.
    *   **Note**: All column names in the `SELECT` statement must also be in the `GROUP BY` clause to execute the query successfully.
    *   `GROUP BY` can also be used to find distinct values, as SQL is smart enough to infer this if no aggregation function is used.
*   **`HAVING`**: Filters the results of a `GROUP BY` clause based on a condition. It is similar to `WHERE` but is used *after* `GROUP BY`.

| `WHERE`                                        | `HAVING`                                          |
| :--------------------------------------------- | :------------------------------------------------ |
| Filters rows from a table before grouping.     | Filters groups after `GROUP BY` has been applied. |
| Used before `GROUP BY`.                        | Used after `GROUP BY`.                            |
| `GROUP BY` is not necessary.                   | `GROUP BY` is necessary.                          |
| Can be used with `SELECT`, `UPDATE`, `DELETE`. | Used only with `SELECT`.                          |



---

## 3. SQL Data Types

In an SQL database, data stored in tables can be of different types.

| Data Type           | Description                                                 |
| :------------------ | :---------------------------------------------------------- |
| **String Types**    |                                                             |
| `CHAR(size)`        | A string with a fixed size between 0 and 255.               |
| `VARCHAR(size)`     | A variable-length string with a size between 0 and 255.     |
| `TINYTEXT`          | A string with a maximum length of 255 characters.           |
| `TEXT`              | A string with a maximum length of 65,535 characters.        |
| `BLOB`              | Binary Large Object, for strings up to 65,535 bytes.        |
| `MEDIUMTEXT`        | A string with a maximum length of 16,777,215 characters.    |
| `MEDIUMBLOB`        | For strings up to 16,777,215 bytes.                         |
| `LONGTEXT`          | A string with a maximum length of 4,294,967,295 characters. |
| `LONGBLOB`          | For strings up to 4,294,967,295 bytes.                      |
| **Numeric Types**   |                                                             |
| `TINYINT`           | Integer from -128 to 127.                                   |
| `SMALLINT`          | Integer from -32768 to 32767.                               |
| `MEDIUMINT`         | Integer from -8388608 to 8388607.                           |
| `INT`               | Integer from -2147483648 to 2147483647.                     |
| `BIGINT`            | Integer from -9.22 x 10^18 to 9.22 x 10^18.                 |
| `FLOAT`             | Decimal with precision up to 23 digits.                     |
| `DOUBLE`            | Decimal with precision from 24 to 53 digits.                |
| `DECIMAL`           | A double stored as a string.                                |
| `BIT(n)`            | Stores values in bits, up to n=64.                          |
| `BOOLEAN`           | Stores 0 or 1.                                              |
| **Date/Time Types** |                                                             |
| `DATE`              | Format: YYYY-MM-DD.                                         |
| `DATETIME`          | Format: YYYY-MM-DD HH\:MM\:SS.                              |
| `TIMESTAMP`         | Format: YYYYMMDDHHMMSS.                                     |
| `TIME`              | Format: HH\:MM\:SS.                                         |
| **Other Types**     |                                                             |
| `ENUM`              | Can only be one of a set of preset values.                  |
| `SET`               | Can be one or many of a set of preset values.               |

    Notes:

    Integer Sizing: TINYINT < SMALLINT < MEDIUMINT < INT < BIGINT.

    Variable Length Types: Data types like VARCHAR are often preferred because they only occupy space equal to the actual data size.

    Unsigned Values: Numeric types can be declared as UNSIGNED (e.g., INT UNSIGNED).


---
## 4. DDL: Managing Databases and Tables

### Database Commands
*   Create a database: `CREATE DATABASE IF NOT EXISTS db_name;`.
*   Select a database to use: `USE db_name;` (This is necessary to run commands on a specific database).
*   Delete a database: `DROP DATABASE IF EXISTS db_name;`.
*   List all databases: `SHOW DATABASES;`.
*   List tables in the current database: `SHOW TABLES;`.

### Constraints
Constraints are rules enforced on data columns in a table.

*   **PRIMARY KEY**: A column that is `NOT NULL` and `UNIQUE`. A table can only have one primary key.
*   **FOREIGN KEY**: A key used to link two tables together. It refers to the `PRIMARY KEY` of another table. A table can have multiple foreign keys.
*   **UNIQUE**: Ensures all values in a column are different. It can accept `NULL` values, and a table can have multiple unique attributes.
*   **CHECK**: Ensures that the values in a column satisfy a specific condition. You can name the constraint (e.g., `CONSTRAINT age_check`) or let MySQL name it automatically.
*   **DEFAULT**: Sets a default value for a column when no value is specified.

### ALTER Operations
These commands modify the schema of an existing table.

*   **ADD Column**: Adds a new column to a table.
    ```sql
    ALTER TABLE customer ADD age INT NOT NULL;
    ```
*   **MODIFY Column**: Changes the data type of a column.
    ```sql
    ALTER TABLE customer MODIFY name CHAR(1024);
    ```
*   **CHANGE COLUMN**: Renames a column and can also change its data type.
    ```sql
    ALTER TABLE customer CHANGE COLUMN name customer_name VARCHAR(1024);
    ```
*   **DROP COLUMN**: Deletes a column from a table.
    ```sql
    ALTER TABLE customer DROP COLUMN middle_name;
    ```
*   **RENAME Table**: Renames the table itself.
    ```sql
    ALTER TABLE customer RENAME TO customer_details;
    ```

---

## 5. DML: Data Manipulation Language

### INSERT
Adds new rows of data into a table.
```sql
INSERT INTO table_name(col1, col2) VALUES (v1, v2), (val1, val2);
```

### UPDATE
Modifies existing records in a table.
```sql
UPDATE table_name SET col1 = 'new_value' WHERE id = 1;
```
*   **ON UPDATE CASCADE**: If a primary key in a parent table is updated, this will automatically update the corresponding foreign key in the child table.

### DELETE
Deletes existing records from a table.
```sql
DELETE FROM table_name WHERE id = 1;
```
*   **ON DELETE CASCADE**: If a parent table's entry is deleted, the corresponding child entries are also deleted.
*   **ON DELETE SET NULL**: If a parent entry is deleted, the foreign key in the child entry is set to `NULL`.

### REPLACE
This command works as follows:
*   If the record (identified by its primary key) already exists, it acts like an `UPDATE` and replaces the row.
*   If the record does not exist, it acts like an `INSERT` and adds a new row.
```sql
REPLACE INTO student (id, class) VALUES (4, 3);
```

---

## 6. DRL: Data Retrieval and Queries

The `SELECT` statement is used to query the database and retrieve data.

### Basic `SELECT`
*   **Syntax**: `SELECT <set_of_column_names> FROM <table_name>;`.
*   **Execution Order**: Queries are executed from right to left.
*   **Dual Tables**: `SELECT` can be used without a `FROM` clause for certain actions by using a dummy table created by MySQL called a Dual Table.
    ```sql
    SELECT 55 + 11;
    SELECT now();
    ```

---

## 7. Joining Tables
Joins are used to combine rows from two or more tables based on a related column between them.

*   **Alias (`AS`)**: An alias provides a temporary name for a table or column to make a query shorter and neater.
*   **`INNER JOIN`**: Returns records that have matching values in both tables.
*   **`OUTER JOIN`**:
    *   **`LEFT JOIN`**: Returns all records from the left table, and the matched records from the right table.
    *   **`RIGHT JOIN`**: Returns all records from the right table, and the matched records from the left table.
    *   **`FULL JOIN`**: Returns all records when there is a match in either the left or the right table. In MySQL, this is emulated using `LEFT JOIN UNION RIGHT JOIN`.
*   **`CROSS JOIN`**: Returns the Cartesian product of the two tables (all possible combinations of rows).
*   **`SELF JOIN`**: A table is joined with itself. This is emulated using an `INNER JOIN`.
*   **Join without keywords**: Joins can also be performed by listing tables in the `FROM` clause and specifying the join condition in the `WHERE` clause.

---
## 8. Set Operations

Set operations combine the results of two or more `SELECT` statements and always return distinct rows.

| JOIN                                                                              | SET Operations                                                                       |
| :-------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| Combines multiple tables based on a matching condition (column-wise combination). | Combines the result set from two or more `SELECT` statements (row-wise combination). |
| Data types of columns can be different.                                           | Data types of corresponding columns must be the same.                                |
| Can generate both distinct and duplicate rows.                                    | Generates distinct rows.                                                             |
| The number of selected columns can be different.                                  | The number of selected columns must be the same.                                     |
| Combines results horizontally.                                                    | Combines results vertically.                                                         |


*   **`UNION`**: Combines the result-set of two or more `SELECT` statements. The number and order of columns must be the same. `UNION ALL` can be used to include duplicate values.
*   **`INTERSECT`**: Returns the common values between two tables. This is emulated in MySQL using an `INNER JOIN`.
*   **`MINUS`**: Returns distinct rows from the first table that are not in the second. This is emulated in MySQL using a `LEFT JOIN` with a `WHERE ... IS NULL` condition.

---

## 9. Subqueries

A subquery is a nested query where the outer query depends on the result of the inner query. They are an alternative to joins.

*   **Location**: Subqueries can exist in the `WHERE`, `FROM`, or `SELECT` clause.
*   **Correlated Subqueries**: Unlike a normal subquery where the inner query runs once, a correlated subquery executes once for each candidate row considered by the outer query.

#### `JOIN` vs. `Subqueries`
| JOINS                                         | SUBQUERIES                                           |
| :-------------------------------------------- | :--------------------------------------------------- |
| Faster.                                       | Slower.                                              |
| Maximises the calculation burden on the DBMS. | Keeps the responsibility of calculation on the user. |
| Can be complex and difficult to understand.   | Comparatively easy to understand and implement.      |

---

## 10. MySQL Views

*   **Definition**: A view is a virtual table whose contents are based on the result-set of an SQL statement. It contains rows and columns like a real table but does not store any data of its own.
*   **Dynamic Nature**: If the data in the underlying base table changes, the changes are reflected in the view.
*   **Commands**:
    *   `CREATE VIEW view_name AS SELECT ...;`.
    *   `ALTER VIEW view_name AS SELECT ...;`.
    *   `DROP VIEW IF EXISTS view_name;`.

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

## Inserting values


### Example Data for `insta_users`

```sql
INSERT INTO insta_users (id, name, email, followers, following, age)
VALUES 
(1, 'Alice Johnson', 'alice@example.com', 1200, 300, 25),
(2, 'Bob Smith', 'bob@example.com', 950, 180, 19),
(3, 'Charlie Kim', 'charlie@example.com', 5600, 500, 32),
(4, 'Diana Lee', 'diana@example.com', 150, 200, 21),
(5, 'Evan Thomas', 'evan@example.com', 80, 75, 16);
```

---

### Explanation

| id | name          | email                                             | followers | following | age |
| -- | ------------- | ------------------------------------------------- | --------- | --------- | --- |
| 1  | Alice Johnson | [alice@example.com](mailto:alice@example.com)     | 1200      | 300       | 25  |
| 2  | Bob Smith     | [bob@example.com](mailto:bob@example.com)         | 950       | 180       | 19  |
| 3  | Charlie Kim   | [charlie@example.com](mailto:charlie@example.com) | 5600      | 500       | 32  |
| 4  | Diana Lee     | [diana@example.com](mailto:diana@example.com)     | 150       | 200       | 21  |
| 5  | Evan Thomas   | [evan@example.com](mailto:evan@example.com)       | 80        | 75        | 16  |

* All users meet the age requirement (`age >= 15`).
* Each `email` is unique.
* `followers` and `following` use the default if omitted, but are included here for clarity.

---

## SELECT Command

### 1. **Select All Columns for All Users**

This will retrieve all columns for all users in the `insta_users` table:

```sql
SELECT * FROM insta_users;
```

---

### 2. **Select Specific Columns**

If you only need specific columns (like `name` and `email`):

```sql
SELECT name, email FROM insta_users;
```

---

### 3. **Select with a Condition (Where Clause)**

To find users who are **older than 20**:

```sql
SELECT * FROM insta_users WHERE age > 20;
```

To find users with **more than 1000 followers**:

```sql
SELECT * FROM insta_users WHERE followers > 1000;
```

---

### 4. **Select with Multiple Conditions**

To find users who are **older than 18** and have **more than 500 followers**:

```sql
SELECT * FROM insta_users WHERE age > 18 AND followers > 500;
```

To find users with age **between 15 and 30**:

```sql
SELECT * FROM insta_users WHERE age BETWEEN 15 AND 30;
```

---

### 5. **Select with Sorting (ORDER BY)**

To sort users by **name** in ascending order:

```sql
SELECT * FROM insta_users ORDER BY name ASC;
```

To sort users by **followers** in descending order (most popular first):

```sql
SELECT * FROM insta_users ORDER BY followers DESC;
```

| id | name          | email                                             | followers | following | age |
| -- | ------------- | ------------------------------------------------- | --------- | --------- | --- |
| 3  | Charlie Kim   | [charlie@example.com](mailto:charlie@example.com) | 5600      | 500       | 32  |
| 1  | Alice Johnson | [alice@example.com](mailto:alice@example.com)     | 1200      | 300       | 25  |
| 2  | Bob Smith     | [bob@example.com](mailto:bob@example.com)         | 950       | 180       | 19  |
| 4  | Diana Lee     | [diana@example.com](mailto:diana@example.com)     | 150       | 200       | 21  |
| 5  | Evan Thomas   | [evan@example.com](mailto:evan@example.com)       | 80        | 75        | 16  |

---

This table shows a list of users with their respective **id**, **name**, **email**, **followers**, **following**, and **age**. You can use this format for further SQL queries or other data representations.

---

### 6. **Select with LIMIT (Limiting Results)**

If you only want the **first 3 users**:

```sql
SELECT * FROM insta_users LIMIT 3;
```

---

### 7. **Select with DISTINCT (Unique Values)**

To get a list of **unique ages**:

```sql
SELECT DISTINCT age FROM insta_users;
```

---

### 8. **Select Users with a Specific Pattern in Email (LIKE)**

To find users with **gmail** in their email:

```sql
SELECT * FROM insta_users WHERE email LIKE '%@gmail.com';
```

To find users whose **name starts with "A"**:

```sql
SELECT * FROM insta_users WHERE name LIKE 'A%';
```

---

### 9. **Select with Aggregation (COUNT, AVG, SUM, etc.)**

To find the **total number of users**:

```sql
SELECT COUNT(*) AS total_users FROM insta_users;
```

To find the **average number of followers**:

```sql
SELECT AVG(followers) AS average_followers FROM insta_users;
```

---

### 10. **Select Users Grouped by Age (GROUP BY)**

To see how many users are in each **age group**:

```sql
SELECT age, COUNT(*) AS users_count FROM insta_users GROUP BY age;
```

| age | users\_count |
| --- | ------------ |
| 25  | 1            |
| 19  | 1            |
| 32  | 1            |
| 21  | 1            |
| 16  | 1            |

* Explanation:

    * This query groups all users by their `age` and counts how many users fall into each age group.
    * Each age has exactly **1 user** in this dataset.


---

### 11. **Select Users with Sorting and Limiting Results (Most Popular Users)**

To get the **top 3 users by followers**:

```sql
SELECT * FROM insta_users ORDER BY followers DESC LIMIT 3;
```

---

### Example Output from `SELECT * FROM insta_users`

| id | name          | email                                             | followers | following | age |
| -- | ------------- | ------------------------------------------------- | --------- | --------- | --- |
| 1  | Alice Johnson | [alice@example.com](mailto:alice@example.com)     | 1200      | 300       | 25  |
| 2  | Bob Smith     | [bob@example.com](mailto:bob@example.com)         | 950       | 180       | 19  |
| 3  | Charlie Kim   | [charlie@example.com](mailto:charlie@example.com) | 5600      | 500       | 32  |
| 4  | Diana Lee     | [diana@example.com](mailto:diana@example.com)     | 150       | 200       | 21  |
| 5  | Evan Thomas   | [evan@example.com](mailto:evan@example.com)       | 80        | 75        | 16  |

---

### **Tips for SQL SELECT Queries**:

* **Use `WHERE`** to filter rows based on conditions.
* **Use `ORDER BY`** to sort your result.
* **Use `LIMIT`** to restrict the number of rows.
* **Combine `WHERE` and `ORDER BY`** to fine-tune your queries (like sorting filtered data).

---

# SQL `WHERE` Clause and Operators

The `WHERE` clause in SQL is used to **filter records** and fetch only the rows that meet certain conditions. It's essential for **query optimization** and **data retrieval** in relational databases.

---

## **What is the `WHERE` Clause?**

The `WHERE` clause is used in **SQL queries** to filter data based on a given condition. It is applied after the **`FROM`** clause and before **`ORDER BY`** and **`GROUP BY`** clauses, if present.

### **Basic Syntax**:

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

### **Example**:

```sql
SELECT * FROM insta_users
WHERE age > 20;
```

This will return all rows from the `insta_users` table where the `age` is greater than 20.

---

##  **Common SQL Operators in the `WHERE` Clause**

### 1. **Comparison Operators**

These operators allow us to compare values in SQL queries.

* **`=`**: Equal to
* **`!=`** or **`<>`**: Not equal to
* **`>`**: Greater than
* **`<`**: Less than
* **`>=`**: Greater than or equal to
* **`<=`**: Less than or equal to

**Example:**

```sql
SELECT * FROM insta_users
WHERE age >= 18;
```

This will return all rows where `age` is greater than or equal to 18.

### 2. **Logical Operators**

Logical operators are used to combine multiple conditions in the `WHERE` clause.

* **`AND`**: Returns true if all conditions are true.
* **`OR`**: Returns true if any one of the conditions is true.
* **`NOT`**: Reverses the result (returns true if the condition is false).

**Examples:**

```sql
SELECT * FROM insta_users
WHERE age > 20 AND followers > 1000;
```

This will return all rows where `age` is greater than 20 **AND** `followers` are greater than 1000.

```sql
SELECT * FROM insta_users
WHERE age > 20 OR followers > 1000;
```

This will return all rows where `age` is greater than 20 **OR** `followers` are greater than 1000.

```sql
SELECT * FROM insta_users
WHERE NOT age > 30;
```

This will return all rows where `age` is **not** greater than 30.

### 3. **BETWEEN Operator**

The `BETWEEN` operator is used to filter results within a specific range, inclusive of the boundary values.

**Syntax:**

```sql
SELECT * FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

**Example:**

```sql
SELECT * FROM insta_users
WHERE age BETWEEN 18 AND 30;
```

This will return all rows where `age` is between 18 and 30 (inclusive).

### 4. **IN Operator**

The `IN` operator is used to match a value against a list of values.

**Syntax:**

```sql
SELECT * FROM table_name
WHERE column_name IN (value1, value2, ...);
```

**Example:**

```sql
SELECT * FROM insta_users
WHERE name IN ('Alice Johnson', 'Bob Smith');
```

This will return all rows where `name` is either **'Alice Johnson'** or **'Bob Smith'**.

### 5. **LIKE Operator**

The `LIKE` operator is used to search for a specified pattern in a column. It is often used with wildcard characters.

* **`%`**: Represents zero, one, or multiple characters.
* **`_`**: Represents a single character.

**Syntax:**

```sql
SELECT * FROM table_name
WHERE column_name LIKE pattern;
```

**Example:**

```sql
SELECT * FROM insta_users
WHERE email LIKE '%@gmail.com';
```

This will return all rows where the `email` ends with **'@gmail.com'**.

### 6. **IS NULL / IS NOT NULL**

The `IS NULL` operator is used to check if a column has a **NULL** value.

**Syntax:**

```sql
SELECT * FROM table_name
WHERE column_name IS NULL;
```

**Example:**

```sql
SELECT * FROM insta_users
WHERE followers IS NULL;
```

This will return all rows where the `followers` column is `NULL`.

### 7. **EXISTS Operator**

The `EXISTS` operator checks whether the subquery returns any records. It is commonly used with **subqueries**.

**Syntax:**

```sql
SELECT column_name
FROM table_name
WHERE EXISTS (subquery);
```

**Example:**

```sql
SELECT * FROM insta_users
WHERE EXISTS (
    SELECT * FROM post WHERE insta_users.id = post.user_id
);
```

This will return all users who have at least one post.

---

## **Examples of `WHERE` with Different Operators**

### 1. **Check if the user is an adult and has many followers:**

```sql
SELECT * FROM insta_users
WHERE age >= 18 AND followers > 1000;
```

### 2. **Find users whose name starts with "A"**

```sql
SELECT * FROM insta_users
WHERE name LIKE 'A%';
```

### 3. **Get users between 18 and 30 years of age, inclusive**

```sql
SELECT * FROM insta_users
WHERE age BETWEEN 18 AND 30;
```

### 4. **Find users from a specific set of emails**

```sql
SELECT * FROM insta_users
WHERE email IN ('alice@example.com', 'bob@example.com');
```

### 5. **Get users with no `followers` value (NULL)**

```sql
SELECT * FROM insta_users
WHERE followers IS NULL;
```

---

## **Conclusion**

The `WHERE` clause is a powerful tool in SQL that allows you to filter records based on various conditions. By combining operators like **`AND`**, **`OR`**, **`BETWEEN`**, **`IN`**, and **`LIKE`**, you can build complex queries that match exactly the data you need.

---

# SQL Aggregate Functions

Aggregate functions in SQL are used to **perform calculations** on a set of rows and return a **single value**. They are often used with the `GROUP BY` clause, but they can also be used independently in queries.

---

## **What are Aggregate Functions?**

An **aggregate function** performs a **calculation** on a set of values and returns a **single result**. These functions are useful for summarizing or analyzing data, such as **counting**, **averaging**, or finding the **maximum** or **minimum** value.

### **Syntax:**

```sql
SELECT AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition;
```

---

## **Common Aggregate Functions**

### 1. **COUNT()**

* **Purpose**: Returns the number of rows that match a specified condition.
* **Usage**: `COUNT(*)` counts all rows, and `COUNT(column_name)` counts non-NULL values in a specific column.

**Example:**

```sql
SELECT COUNT(*) AS total_users
FROM insta_users;
```

This will return the total number of rows in the `insta_users` table.

To count non-NULL values in a specific column:

```sql
SELECT COUNT(email) AS total_users_with_email
FROM insta_users;
```

This will return the number of rows where `email` is not NULL.

---

### 2. **SUM()**

* **Purpose**: Returns the sum of the values in a numeric column.
* **Usage**: Used to calculate the total sum of a numeric column, such as the total sales or total followers.

**Example:**

```sql
SELECT SUM(followers) AS total_followers
FROM insta_users;
```

This will return the total number of followers across all users.

---

### 3. **AVG()**

* **Purpose**: Returns the average value of a numeric column.
* **Usage**: It calculates the mean of a specified numeric column, such as the average age of users.

**Example:**

```sql
SELECT AVG(age) AS average_age
FROM insta_users;
```

This will return the average `age` of all users in the `insta_users` table.

---

### 4. **MIN()**

* **Purpose**: Returns the smallest (minimum) value in a specified column.
* **Usage**: Often used to find the minimum value, like the youngest age in the database.

**Example:**

```sql
SELECT MIN(age) AS youngest_user
FROM insta_users;
```

This will return the smallest (minimum) `age` value.

---

### 5. **MAX()**

* **Purpose**: Returns the largest (maximum) value in a specified column.
* **Usage**: Commonly used to find the maximum value, such as the oldest user or the user with the highest number of followers.

**Example:**

```sql
SELECT MAX(followers) AS most_popular_user
FROM insta_users;
```

This will return the maximum number of followers across all users.

---

### 6. **GROUP_CONCAT()** (MySQL-specific)

* **Purpose**: Concatenates values from multiple rows into a single string.
* **Usage**: Useful when you want to list all values from a column for each group, such as collecting all users' names in a comma-separated list.

**Example:**

```sql
SELECT GROUP_CONCAT(name) AS user_names
FROM insta_users;
```

This will return a single string of all user names, separated by commas.

---

## **Using Aggregate Functions with GROUP BY**

Aggregate functions are frequently used with the **`GROUP BY`** clause to calculate values for different groups or categories. For example, to find the average age of users in each `age` group:

### **Syntax:**

```sql
SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name;
```

---

### **Example 1: Count users by age group**

```sql
SELECT age, COUNT(*) AS user_count
FROM insta_users
GROUP BY age;
```

This will return the count of users in each age group.

| age | user_count |
| --- | ----------- |
| 16  | 1           |
| 19  | 1           |
| 25  | 1           |
| 30  | 2           |

---

### **Example 2: Get total followers per user**

```sql
SELECT id, SUM(followers) AS total_followers
FROM insta_users
GROUP BY id;
```

This will return the total followers for each user.

| id | total_followers |
| -- | ---------------- |
| 1  | 1200             |
| 2  | 950              |
| 3  | 5600             |
| 4  | 150              |
| 5  | 80               |

---

### **Example 3: Get average followers per user**

```sql
SELECT AVG(followers) AS average_followers
FROM insta_users;
```

This will return the average followers across all users.

---

## **Using Aggregate Functions with HAVING**

The **`HAVING`** clause is used to filter results after the `GROUP BY` operation. It works like the `WHERE` clause but is used for aggregated data.

### **Syntax:**

```sql
SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name
HAVING condition;
```

### **Example:**

```sql
SELECT age, AVG(followers) AS average_followers
FROM insta_users
GROUP BY age
HAVING AVG(followers) > 500;
```

This will return the average followers for each age group, but only for groups where the average followers are greater than 500.

---

## **Use Cases for Aggregate Functions**

* **Data Analysis**: Quickly calculate the **total**, **average**, **max**, and **min** values of columns.
* **Reporting**: Generate reports that summarize key data, such as total sales, average age, or total revenue.
* **Performance Optimization**: Use **COUNT()** and **SUM()** to quickly check if your data meets specific conditions (e.g., how many users meet a certain age or purchase threshold).
* **Data Grouping**: With **`GROUP BY`**, aggregate functions help you break down your data by categories, such as calculating total sales by region or users by age group.

---

## **Conclusion**

SQL **aggregate functions** provide powerful tools to summarize, analyze, and group data in meaningful ways. Whether you're counting rows, calculating sums or averages, or finding the highest or lowest values, these functions help you make sense of large datasets.

By combining aggregate functions with clauses like **`GROUP BY`** and **`HAVING`**, you can extract insights and create reports that highlight the key metrics you care about.


---

# Difference Between `GROUP BY` and `HAVING` in SQL

In SQL, both `GROUP BY` and `HAVING` are used with **aggregate functions** (like `COUNT()`, `SUM()`, `AVG()`, `MAX()`, and `MIN()`) to summarize and filter data. However, they serve **different purposes** and operate at **different stages** of query execution.

---

## What is `GROUP BY`?

The `GROUP BY` clause is used to **organize similar data into groups**. It is typically used with aggregate functions to calculate values for each group.

### Example:

```sql
SELECT age, COUNT(*) AS users_count
FROM insta_users
GROUP BY age;
```

### Explanation:

This groups all rows in the `insta_users` table **by `age`** and returns the **count of users** for each unique age value.

---

## What is `HAVING`?

The `HAVING` clause is used to **filter the results** **after** grouping has occurred. It's like a `WHERE` clause, but specifically for use with **aggregated/grouped data**.

### Example:

```sql
SELECT age, AVG(followers) AS average_followers
FROM insta_users
GROUP BY age
HAVING AVG(followers) > 500;
```

### Explanation:

* First, the query **groups users by age**.
* Then, it **calculates the average followers** per age group.
* Finally, it **filters** those groups to only show those where the average is greater than 500.

---

## Key Differences

| Feature                | `GROUP BY`                                         | `HAVING`                                          |
| ---------------------- | -------------------------------------------------- | ------------------------------------------------- |
| **Purpose**            | Groups rows with the same values into summary rows | Filters grouped results based on conditions       |
| **Clause Type**        | Grouping clause                                    | Filtering clause (used after grouping)            |
| **Execution Order**    | Executed **before** `HAVING`                       | Executed **after** `GROUP BY`                     |
| **Works On**           | Raw rows (before aggregation)                      | Aggregated/grouped data                           |
| **Can Use Aggregates** | No (just defines groups)                           | Yes (designed for use with aggregate functions)   |
| **Similar To**         | `DISTINCT` + aggregation                           | `WHERE`, but for groups                           |
| **Required With**      | Aggregate functions like `COUNT`, `AVG`, etc.      | Usually used along with `GROUP BY`                |

---

## Analogy

Imagine a spreadsheet of users:

* `GROUP BY` is like **sorting and grouping rows** by the "age" column, and then calculating summary stats (like the average followers).
* `HAVING` is like saying: **"Only show me age groups where the average followers are more than 500."**

---

## Example in Practice

Let’s say you have the following table `insta_users`:

| id | name          | age | followers |
| -- | ------------- | --- | --------- |
| 1  | Alice Johnson | 25  | 1200      |
| 2  | Bob Smith     | 19  | 950       |
| 3  | Charlie Kim   | 32  | 5600      |
| 4  | Diana Lee     | 21  | 150       |
| 5  | Evan Thomas   | 16  | 80        |

### Query using `GROUP BY` only:

```sql
SELECT age, COUNT(*) AS users_count
FROM insta_users
GROUP BY age;
```

This tells you how many users are in each **age group**.

### Query using `GROUP BY` + `HAVING`:

```sql
SELECT age, AVG(followers) AS average_followers
FROM insta_users
GROUP BY age
HAVING AVG(followers) > 500;
```

This gives you only the **age groups** where the **average followers** are **greater than 500**.

---

## Conclusion

* **`GROUP BY`** is used to **group data**.
* **`HAVING`** is used to **filter grouped data** based on aggregated conditions.

You often use them **together**:
1. First use `GROUP BY` to **summarize**,
2. Then use `HAVING` to **filter** the summarized results.

---


# General Order to Write SQL Queries

In practice, you typically **write** SQL queries in the following order:

```sql
SELECT column1, column2, AGG_FUNC(column3)
FROM table_name
WHERE condition
GROUP BY column1
HAVING aggregate_condition
ORDER BY column1 [ASC|DESC]
LIMIT number;
```

---

## Logical Execution Order (How SQL Executes It)

Although we **write** SQL queries in the order above, SQL **executes** the clauses in a different logical sequence:

| Step | Clause     | What It Does                                                   |
| ---- | ---------- | -------------------------------------------------------------- |
| 1    | `FROM`     | Identifies the table(s) from which to retrieve data            |
| 2    | `WHERE`    | Filters rows **before grouping** (on raw data)                 |
| 3    | `GROUP BY` | Groups filtered data into buckets                              |
| 4    | `HAVING`   | Filters groups based on aggregate conditions                   |
| 5    | `SELECT`   | Chooses which columns and expressions to include in the output |
| 6    | `ORDER BY` | Sorts the result set                                           |
| 7    | `LIMIT`    | Limits the number of rows returned                             |

---

## Example Query

```sql
SELECT age, COUNT(*) AS user_count
FROM insta_users
WHERE followers > 100
GROUP BY age
HAVING COUNT(*) >= 2
ORDER BY user_count DESC
LIMIT 5;
```

### What it does:

1. **FROM**: Looks in `insta_users`
2. **WHERE**: Keeps only users with more than 100 followers
3. **GROUP BY**: Groups remaining users by `age`
4. **HAVING**: Keeps only age groups that have 2 or more users
5. **SELECT**: Returns `age` and the number of users
6. **ORDER BY**: Sorts the result by `user_count` in descending order
7. **LIMIT**: Returns only the top 5 rows

---

## Summary

| Clause     | Mandatory | Used For                       |
| ---------- | --------- | ------------------------------ |
| `SELECT`   | Yes       | Choosing output columns        |
| `FROM`     | Yes       | Defining the data source       |
| `WHERE`    | No        | Filtering rows before grouping |
| `GROUP BY` | No        | Grouping rows                  |
| `HAVING`   | No        | Filtering after grouping       |
| `ORDER BY` | No        | Sorting the results            |
| `LIMIT`    | No        | Limiting number of rows        |

---

## Operations on Tables

### 1. `ALTER` – Modify Table Structure

Used to **change the structure of a table**.

#### Common Uses:

* Add, delete, or modify columns
* Rename a column or table
* Add or remove constraints (e.g., primary key)

#### Syntax:

```sql
-- Add a column
ALTER TABLE table_name ADD column_name datatype;

-- Modify a column
ALTER TABLE table_name MODIFY column_name new_datatype;

-- Drop a column
ALTER TABLE table_name DROP COLUMN column_name;

-- Rename a column (MySQL)
ALTER TABLE table_name CHANGE old_column_name new_column_name datatype;

-- Rename table
ALTER TABLE old_table_name RENAME TO new_table_name;
```

---

### 2. `UPDATE` – Modify Existing Data

Used to **change data inside rows** of a table.

#### Common Uses:

* Change specific column values
* Conditional updates

#### Syntax:

```sql
-- Update all rows
UPDATE table_name SET column_name = new_value;

-- Update with condition
UPDATE table_name
SET column_name = new_value
WHERE condition;
```

#### Warning:

Always use `WHERE` to avoid updating **every row** unintentionally.

---

### 3. `TRUNCATE` – Delete All Data (Fast)

Used to **remove all rows** from a table **without logging individual row deletions** (faster than `DELETE`).

#### Key Points:

* Cannot use `WHERE`
* Resets auto-increment values
* Cannot be rolled back (in most DBMS)

#### Syntax:

```sql
TRUNCATE TABLE table_name;
```

#### Difference from `DELETE`:

| Feature      | DELETE                  | TRUNCATE    |
| ------------ | ----------------------- | ----------- |
| Row by row   | Yes                     | No          |
| WHERE clause | Yes                     | No          |
| Rollback     | Yes (If in transaction) | Usually not |
| Resets ID    | No                      | Yes         |
| Faster       | No                      | Yes         |

---
