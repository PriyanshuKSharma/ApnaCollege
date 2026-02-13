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

## BSON and Difference from JSON

## What is BSON?
BSON stands for Binary JSON.
It is a binary-encoded format used by MongoDB to store documents internally.

## Why MongoDB uses BSON
- Faster parsing in many database operations
- Supports more data types than plain JSON
- Efficient for storage and traversal inside MongoDB

## BSON vs JSON

| Feature | BSON | JSON |
| --- | --- | --- |
| Full form | Binary JSON | JavaScript Object Notation |
| Format | Binary | Text |
| Readability | Not human-readable directly | Human-readable |
| Data types | More types (`Date`, `ObjectId`, `Binary`, `Decimal128`) | Limited basic types |
| Size | Can be larger in some cases (metadata/type info) | Usually smaller for simple text data |
| Use case | Internal DB storage and transfer in MongoDB | APIs, configs, data exchange |

## Example
JSON:
```json
{
  "name": "Aman",
  "age": 21
}
```

BSON (concept):
- Same logical data, but stored in binary format with explicit type information.
