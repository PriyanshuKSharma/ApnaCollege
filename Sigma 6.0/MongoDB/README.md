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

## Important Terms in MongoDB

- Database: A container that holds collections.
- Collection: A group of MongoDB documents (similar to a table in SQL).
- Document: A single record in MongoDB stored as key-value pairs (BSON/JSON-like).
- Field: A key in a document (similar to a column in SQL).
- `_id`: Unique identifier for each document. MongoDB creates it automatically if not provided.
- ObjectId: Default data type of `_id`; a 12-byte unique value.
- Schema: Structure of documents. MongoDB has a flexible schema (not strictly fixed).
- Embedded Document: A document stored inside another document.
- Array: A field that stores multiple values in one document.
- Query: A request to read/filter documents from a collection.
- Projection: Selecting specific fields to return in query results.
- Index: A data structure that improves query speed.
- CRUD: Basic operations: Create, Read, Update, Delete.
- Aggregation: Framework to process and transform data in stages (like pipelines).
- Replica Set: A group of MongoDB servers that maintain copies of data for high availability.
- Sharding: Splitting data across multiple servers for horizontal scaling.

## Collections and Documents

## Collection
A collection is a group of MongoDB documents.
It is similar to a table in MySQL, but without a strict fixed schema.

## Document
A document is a single record in MongoDB.
It stores data as key-value pairs (BSON format), similar to a JSON object.

## Collection vs Document

| Term | Meaning | SQL Equivalent |
| --- | --- | --- |
| Collection | Group of related records | Table |
| Document | One individual record | Row |
| Field | One key inside a document | Column |

## Example
Collection: `students`

Documents inside `students`:
```json
{
  "_id": "1",
  "name": "Aman",
  "age": 20,
  "course": "B.Tech"
}
```

```json
{
  "_id": "2",
  "name": "Riya",
  "age": 21,
  "skills": ["Java", "MongoDB"]
}
```

Note: Documents in the same collection can have different fields.

![Collections v/s Documents](images/Collections.png)

## Important Notes
- If `_id` is not provided, MongoDB creates it automatically.
- Collection is created automatically on first insert if it does not exist.
- Insert order in `insertMany()` is ordered by default.

## Show and Create Database (MongoDB)

## 1) Show all databases
Use:

```javascript
show dbs
```

This lists all available databases on the MongoDB server.

## 2) Create (or switch to) a database
Use:

```javascript
use collegeDB
db.students.insertOne({ name: "First User" })
```

- `use collegeDB` selects the database name.
- MongoDB actually creates `collegeDB` after first write operation (like `insertOne`).

## 3) Show current database
Use:

```javascript
db
```

This prints the currently selected database name.

## Insert in DB (MongoDB)

In MongoDB, data is inserted into a collection using insert operations.

## 1) Insert One Document
Use `insertOne()` to add a single document.

```javascript
db.students.insertOne({
  name: "Aman",
  age: 20,
  course: "B.Tech"
});
```

Result:
- One document is inserted.
- MongoDB returns `acknowledged: true` and an `insertedId`.

## 2) Insert Multiple Documents
Use `insertMany()` to add multiple documents at once.

```javascript
db.students.insertMany([
  { name: "Riya", age: 21, course: "BCA" },
  { name: "Karan", age: 22, course: "B.Sc" },
  { name: "Neha", age: 20, course: "B.Com" }
]);
```

Result:
- Multiple documents are inserted.
- MongoDB returns `acknowledged: true` and `insertedIds`.


