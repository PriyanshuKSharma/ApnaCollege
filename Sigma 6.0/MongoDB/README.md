# MongoDB: What, Why, and Difference from MySQL

## What is MongoDB?
MongoDB is a NoSQL, document-oriented database.
It stores data in JSON-like documents (BSON) instead of rows and columns.

## Why use MongoDB?
- Flexible schema (easy to change data structure)
- Good for fast development and evolving apps
- Handles large-scale data and high traffic well
- Natural fit for nested/hierarchical data (like user profiles, carts, posts)

## MongoDB vs MySQL

| Feature | MongoDB | MySQL |
| --- | --- | --- |
| Database type | NoSQL (document) | SQL (relational) |
| Data format | Collections + Documents | Tables + Rows |
| Schema | Flexible / dynamic | Fixed / predefined |
| Relations | Embedded docs or references | Strong joins with foreign keys |
| Query language | MongoDB Query Language | SQL |
| Best for | Rapidly changing, semi-structured data | Structured data, complex relationships, transactions |

## Simple example
- MySQL: `users` table with columns (`id`, `name`, `email`)
- MongoDB: `users` collection with documents like:

```json
{
  "_id": "101",
  "name": "Aman",
  "email": "aman@mail.com",
  "address": {
    "city": "Delhi",
    "pin": "110001"
  }
}
```
