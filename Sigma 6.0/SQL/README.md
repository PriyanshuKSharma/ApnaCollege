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

## Inserting values

---

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
