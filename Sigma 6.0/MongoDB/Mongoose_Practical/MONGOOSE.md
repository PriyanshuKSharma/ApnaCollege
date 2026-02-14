# Mongoose

Mongoose is an **ODM (Object Data Modeling)** library for ***MongoDB*** and ***Node.js***.
It provides schemas, models, validation, middleware, and cleaner query APIs.

## What is ODM?

ODM stands for **Object Data Modeling**.
It maps app-level objects to MongoDB documents and collections.

In simple mapping:

- JavaScript object <-> MongoDB document
- Mongoose model <-> MongoDB collection

## Why ODM is useful

- Adds structure to schemaless MongoDB data
- Validates data before save/update
- Makes queries cleaner and easier to maintain
- Supports middleware, methods, and hooks

## ODM vs ORM

- **ODM**: used for NoSQL/document DBs (MongoDB)
- **ORM**: used for SQL/relational DBs (MySQL, PostgreSQL)

## Why use Mongoose?

- Schema-based structure for MongoDB documents
- Built-in validation
- Cleaner CRUD APIs
- Middleware/hooks support (`pre`, `post`)
- Better code organization in Node.js projects

## Install

```bash
npm install mongoose
```

## Connect to MongoDB

```javascript
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
```

## What is Asynchronous?

Asynchronous means a task starts, but the program does not stop and wait for it to finish.
It continues running other code, and handles the result later.

In Mongoose:

- `mongoose.connect()` is asynchronous.
- It returns a Promise.
- You handle it using `.then()` / `.catch()` or `async/await`.

## `mongoose.connect()` is Asynchronous and Returns a Promise

`mongoose.connect(uri)` runs asynchronously.  
It starts the DB connection process and returns a Promise.

So you can handle success/failure using either:

### 1) `.then()` / `.catch()`

```javascript
mongoose
  .connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log("Connection error:", err));
```

### 2) `async/await`

```javascript
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");
    console.log("Connection successful");
  } catch (err) {
    console.log("Connection error:", err);
  }
}

main();
```

Important:

- Wait for successful connection before running queries.
- If connection fails, handle the error to avoid app crash.

## What is Schema?

A **Schema** is a blueprint that defines how documents should look in a collection.
It defines:

- field names
- data types
- validation rules
- default values

Example:

```javascript
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  course: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});
```

Then create model from schema:

```javascript
const Student = mongoose.model("Student", studentSchema);
```

## What is Model?

A **Model** is a constructor created from a schema.
It is used to perform database operations on a collection.

In simple words:

- Schema defines structure/rules.
- Model lets you do CRUD on that schema's collection.

Syntax:

```javascript
const Student = mongoose.model("Student", studentSchema);
```

Here:

- `"Student"` is model name
- Collection name becomes `students` (plural, lowercase by Mongoose)
- `studentSchema` defines document rules

## Common Model Operations

```javascript
// Create
await Student.create({ name: "Aman", age: 20, course: "B.Tech" });

// Read
await Student.find();
await Student.findOne({ name: "Aman" });

// Update
await Student.updateOne({ name: "Aman" }, { $set: { age: 21 } });
await Student.findByIdAndUpdate(id, { course: "BCA" }, { new: true });

// Delete
await Student.deleteOne({ name: "Aman" });
await Student.findByIdAndDelete(id);
```

## Create Schema and Model

```javascript
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  course: String,
  isActive: { type: Boolean, default: true }
});

const Student = mongoose.model("Student", studentSchema);
```

## CRUD with Mongoose

### Create

```javascript
await Student.create({ name: "Aman", age: 20, course: "B.Tech" });
```

### Read

```javascript
const allStudents = await Student.find();
const oneStudent = await Student.findOne({ name: "Aman" });
```

### Update

```javascript
await Student.updateOne({ name: "Aman" }, { $set: { age: 21 } });
await Student.findOneAndUpdate(
  { name: "Aman" },
  { course: "B.Tech CSE" },
  { new: true, runValidators: true }
);
```

### Delete

```javascript
await Student.deleteOne({ name: "Aman" });
await Student.findOneAndDelete({ name: "Aman" });
```

## Validation Example

```javascript
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  age: { type: Number, min: 0, max: 120 },
  email: { type: String, lowercase: true, trim: true }
});
```

## Notes

- MongoDB is schemaless, but Mongoose enforces schema at application level.
- Use `new: true` in `findOneAndUpdate` to get updated document.
- Use `runValidators: true` in update operations when needed.

## Mongoose Operation Buffering

By default, Mongoose buffers model operations if the database is not connected yet.
That means ***queries are queued in memory and executed after connection is established***.

Example:

- You call `Student.find()` before `mongoose.connect()` is ready.
- Mongoose keeps that operation in buffer and runs it later.

Why you may see buffering issues:

- Wrong MongoDB URL/port
- MongoDB server is not running
- Connection takes too long or fails

How to avoid problems:

1. Connect first, then run queries.
2. Handle connection errors properly.
3. (Optional) Disable buffering if you want immediate failure.

Disable buffering:

```javascript
mongoose.set("bufferCommands", false);
```

## Find in Mongoose

Mongoose provides multiple `find` methods to read documents.

- Note: Mongoose Queries are not promises. But they have .then() / .catch() methods.


## 1) `find()`
Returns all matching documents (array).

```javascript
const students = await Student.find();
const bcaStudents = await Student.find({ course: "BCA" });
```

## 2) `findOne()`
Returns first matching document (single object or `null`).

```javascript
const student = await Student.findOne({ name: "Aman" });
```

## 3) `findById()`
Finds a document by MongoDB `_id`.

```javascript
const student = await Student.findById("66f1c1a4e4d0f8a0e8b12345");
```

## 4) Projection (select fields)

```javascript
const students = await Student.find({ age: { $gte: 20 } })
  .select("name course -_id");
```

## 5) Sort, limit, skip

```javascript
const students = await Student.find()
  .sort({ age: -1 })   // descending
  .limit(5)            // top 5
  .skip(0);            // pagination offset
```

## 6) Count and existence

```javascript
const total = await Student.countDocuments({ course: "BCA" });
const exists = await Student.exists({ name: "Aman" });
```

## 7) Distinct values

```javascript
const courses = await Student.distinct("course");
```

## Notes
- `find()` -> array
- `findOne()` / `findById()` -> single document
- Use `.lean()` if you only need plain JS objects for faster reads:

```javascript
const students = await Student.find().lean();
```

## Update in Mongoose

Mongoose provides different update methods based on use case.

## 1) `updateOne()`
Updates the first matching document.

```javascript
await Student.updateOne(
  { name: "Aman" },
  { $set: { age: 21 } }
);
```

## 2) `updateMany()`
Updates all matching documents.

```javascript
await Student.updateMany(
  { course: "BCA" },
  { $set: { isActive: true } }
);
```

## 3) `findOneAndUpdate()`
Finds one document and updates it.

```javascript
const updated = await Student.findOneAndUpdate(
  { name: "Aman" },
  { $inc: { age: 1 } },
  { new: true, runValidators: true }
);
```

## 4) `findByIdAndUpdate()`
Updates a document using `_id`.

```javascript
const updatedById = await Student.findByIdAndUpdate(
  "66f1c1a4e4d0f8a0e8b12345",
  { course: "B.Tech CSE" },
  { new: true, runValidators: true }
);
```

## 5) Upsert
Insert a new document when no match is found.

```javascript
await Student.updateOne(
  { name: "New User" },
  { $set: { age: 20, course: "B.Com" } },
  { upsert: true, runValidators: true }
);
```

## Common Update Operators
- `$set`: set/update field value
- `$inc`: increment/decrement number
- `$unset`: remove field
- `$push`: add value to array
- `$addToSet`: add unique value in array
- `$pull`: remove value from array

## Important Notes
- `updateOne()` and `updateMany()` return write result, not updated document.
- Use `{ new: true }` in `findOneAndUpdate`/`findByIdAndUpdate` to get updated doc.
- Use `{ runValidators: true }` to enforce schema validation on updates.

## Practice File

Use `Sigma 6.0/MongoDB/Mongoose_Practical/index.js` to run Mongoose commands.
