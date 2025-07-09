-- SQL Commands Practice File
-- Extracted from README.md for hands-on practice

-- ========================================
-- DATABASE OPERATIONS
-- ========================================

-- Create a database
CREATE DATABASE database_name;

-- Example: Create StudentManagement database
CREATE DATABASE StudentManagement;

-- Create database with character set and collation (MySQL/PostgreSQL)
CREATE DATABASE StudentManagement
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

-- Create a new database
CREATE DATABASE LibraryDB;

-- Use the database
USE LibraryDB;

-- Check all databases
SHOW DATABASES;

-- Delete (drop) a database
DROP DATABASE LibraryDB;

-- Conditional creation (MySQL-specific)
CREATE DATABASE IF NOT EXISTS LibraryDB;

-- Conditional deletion (MySQL-specific)
DROP DATABASE IF EXISTS LibraryDB;

-- Check all tables
SHOW TABLES;

-- ========================================
-- TABLE CREATION WITH CONSTRAINTS
-- ========================================

-- NOT NULL constraint
CREATE TABLE Employees (
    EmployeeID INT NOT NULL,
    Name VARCHAR(100) NOT NULL
);

-- UNIQUE constraint
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Email VARCHAR(255) UNIQUE
);

-- DEFAULT constraint
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    Status VARCHAR(20) DEFAULT 'Pending'
);

-- CHECK constraint
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    Price DECIMAL(10,2) CHECK (Price > 0)
);

-- PRIMARY KEY constraint with multiple constraints
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

-- FOREIGN KEY constraint
CREATE TABLE post (
   id INT PRIMARY KEY,
   content VARCHAR(100),
   user_id INT,
   FOREIGN KEY (user_id) REFERENCES insta_users(id)
);

-- COMPOSITE KEY
CREATE TABLE Enrollment (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID)
);

-- ========================================
-- INSERT OPERATIONS
-- ========================================

-- Insert sample data into insta_users
INSERT INTO insta_users (id, name, email, followers, following, age)
VALUES 
(1, 'Alice Johnson', 'alice@example.com', 1200, 300, 25),
(2, 'Bob Smith', 'bob@example.com', 950, 180, 19),
(3, 'Charlie Kim', 'charlie@example.com', 5600, 500, 32),
(4, 'Diana Lee', 'diana@example.com', 150, 200, 21),
(5, 'Evan Thomas', 'evan@example.com', 80, 75, 16);

-- ========================================
-- SELECT OPERATIONS
-- ========================================

-- Select all columns for all users
SELECT * FROM insta_users;

-- Select specific columns
SELECT name, email FROM insta_users;

-- Select with WHERE clause - users older than 20
SELECT * FROM insta_users WHERE age > 20;

-- Select users with more than 1000 followers
SELECT * FROM insta_users WHERE followers > 1000;

-- Select with multiple conditions - AND
SELECT * FROM insta_users WHERE age > 18 AND followers > 500;

-- Select with age between 15 and 30
SELECT * FROM insta_users WHERE age BETWEEN 15 AND 30;

-- Select with sorting by name (ascending)
SELECT * FROM insta_users ORDER BY name ASC;

-- Select with sorting by followers (descending)
SELECT * FROM insta_users ORDER BY followers DESC;

-- Select with LIMIT - first 3 users
SELECT * FROM insta_users LIMIT 3;

-- Select with DISTINCT - unique ages
SELECT DISTINCT age FROM insta_users;

-- Select with LIKE - gmail users
SELECT * FROM insta_users WHERE email LIKE '%@gmail.com';

-- Select users whose name starts with "A"
SELECT * FROM insta_users WHERE name LIKE 'A%';

-- ========================================
-- AGGREGATE FUNCTIONS
-- ========================================

-- Count total number of users
SELECT COUNT(*) AS total_users FROM insta_users;

-- Count non-NULL values in email column
SELECT COUNT(email) AS total_users_with_email FROM insta_users;

-- Sum of all followers
SELECT SUM(followers) AS total_followers FROM insta_users;

-- Average age of users
SELECT AVG(age) AS average_age FROM insta_users;

-- Average number of followers
SELECT AVG(followers) AS average_followers FROM insta_users;

-- Minimum age (youngest user)
SELECT MIN(age) AS youngest_user FROM insta_users;

-- Maximum followers (most popular user)
SELECT MAX(followers) AS most_popular_user FROM insta_users;

-- GROUP_CONCAT (MySQL-specific) - concatenate user names
SELECT GROUP_CONCAT(name) AS user_names FROM insta_users;

-- ========================================
-- GROUP BY OPERATIONS
-- ========================================

-- Count users by age group
SELECT age, COUNT(*) AS users_count FROM insta_users GROUP BY age;

-- Get total followers per user (grouped by id)
SELECT id, SUM(followers) AS total_followers FROM insta_users GROUP BY id;

-- Get average followers per age group
SELECT age, AVG(followers) AS average_followers FROM insta_users GROUP BY age;

-- ========================================
-- HAVING CLAUSE
-- ========================================

-- Get average followers per age group, only for groups with average > 500
SELECT age, AVG(followers) AS average_followers 
FROM insta_users 
GROUP BY age 
HAVING AVG(followers) > 500;

-- ========================================
-- WHERE CLAUSE OPERATORS
-- ========================================

-- Comparison operators
SELECT * FROM insta_users WHERE age >= 18;
SELECT * FROM insta_users WHERE age != 25;
SELECT * FROM insta_users WHERE age <> 25;
SELECT * FROM insta_users WHERE age > 20;
SELECT * FROM insta_users WHERE age < 30;
SELECT * FROM insta_users WHERE age <= 25;

-- Logical operators
SELECT * FROM insta_users WHERE age > 20 AND followers > 1000;
SELECT * FROM insta_users WHERE age > 20 OR followers > 1000;
SELECT * FROM insta_users WHERE NOT age > 30;

-- BETWEEN operator
SELECT * FROM insta_users WHERE age BETWEEN 18 AND 30;

-- IN operator
SELECT * FROM insta_users WHERE name IN ('Alice Johnson', 'Bob Smith');

-- LIKE operator with wildcards
SELECT * FROM insta_users WHERE email LIKE '%@gmail.com';
SELECT * FROM insta_users WHERE name LIKE 'A%';
SELECT * FROM insta_users WHERE name LIKE '_ob%';

-- IS NULL / IS NOT NULL
SELECT * FROM insta_users WHERE followers IS NULL;
SELECT * FROM insta_users WHERE followers IS NOT NULL;

-- EXISTS operator with subquery
SELECT * FROM insta_users 
WHERE EXISTS (
    SELECT * FROM post WHERE insta_users.id = post.user_id
);

-- ========================================
-- COMPLEX QUERIES
-- ========================================

-- Check if user is adult and has many followers
SELECT * FROM insta_users WHERE age >= 18 AND followers > 1000;

-- Get users between 18 and 30 years of age, inclusive
SELECT * FROM insta_users WHERE age BETWEEN 18 AND 30;

-- Find users from specific set of emails
SELECT * FROM insta_users WHERE email IN ('alice@example.com', 'bob@example.com');

-- Get top 3 users by followers
SELECT * FROM insta_users ORDER BY followers DESC LIMIT 3;

-- Complex query with multiple clauses
SELECT age, COUNT(*) AS user_count
FROM insta_users
WHERE followers > 100
GROUP BY age
HAVING COUNT(*) >= 2
ORDER BY user_count DESC
LIMIT 5;

-- ========================================
-- PRACTICE EXERCISES
-- ========================================

-- TODO: Practice these queries:
-- 1. Find all users with more than 500 followers
-- 2. Get the average age of users who have more than 200 followers
-- 3. Count how many users have gmail addresses
-- 4. Find the user with the most followers
-- 5. Get all users ordered by age, then by followers (descending)
-- 6. Find users whose names contain 'a' or 'A'
-- 7. Get the total number of followers for users above age 20
-- 8. Find age groups that have more than 1 user
-- 9. Get users with followers between 100 and 1000
-- 10. Find users who are either very young (< 18) or very popular (> 1000 followers)

