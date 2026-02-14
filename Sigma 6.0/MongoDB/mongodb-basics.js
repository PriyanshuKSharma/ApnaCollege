// MongoDB practice script (run in mongosh)
// Use section by section for practice.

use("collegeDB");

// Optional reset for clean practice:
// db.students.drop();
// db.flags.drop();
// db.places.drop();

// -----------------------------------
// 1) Insert operations
// -----------------------------------
db.students.insertOne({
  name: "Aman",
  age: 20,
  course: "B.Tech",
  skills: ["C", "C++"],
  marks: [78, 85, 92],
  profile: { city: "Mumbai", state: "MH" }
});

db.students.insertMany([
  {
    name: "Riya",
    age: 21,
    course: "BCA",
    skills: ["Java", "MongoDB"],
    marks: [88, 81, 79],
    profile: { city: "Delhi", state: "DL" }
  },
  {
    name: "Karan",
    age: 22,
    course: "B.Sc",
    skills: ["Python"],
    marks: [69, 74, 80],
    profile: { city: "Pune", state: "MH" }
  },
  {
    name: "Neha",
    age: 20,
    course: "B.Com",
    skills: ["Excel"],
    marks: [91, 89, 93],
    profile: { city: "Jaipur", state: "RJ" }
  }
]);

// -----------------------------------
// 2) Find + projection
// -----------------------------------
db.students.find();
db.students.find({ age: { $gte: 20, $lte: 22 } });
db.students.findOne({ name: "Aman" });
db.students.find({ age: 21 }, { name: 1, course: 1, _id: 0 });

// -----------------------------------
// 3) Comparison query operators
// -----------------------------------
db.students.find({ age: { $eq: 21 } });
db.students.find({ course: { $ne: "B.Tech" } });
db.students.find({ age: { $gt: 20 } });
db.students.find({ age: { $gte: 21 } });
db.students.find({ age: { $lt: 21 } });
db.students.find({ age: { $lte: 20 } });
db.students.find({ course: { $in: ["B.Tech", "BCA"] } });
db.students.find({ course: { $nin: ["B.Tech", "BCA"] } });

// -----------------------------------
// 4) Logical query operators
// -----------------------------------
db.students.find({
  $and: [{ age: { $gte: 20 } }, { course: "B.Tech" }]
});
db.students.find({
  $or: [{ course: "B.Tech" }, { age: { $lt: 20 } }]
});
db.students.find({
  age: { $not: { $gte: 21 } }
});
db.students.find({
  $nor: [{ course: "B.Tech" }, { age: { $lt: 20 } }]
});

// -----------------------------------
// 5) Other query operators
// -----------------------------------
db.students.find({ skills: { $exists: true } }); // element
db.students.find({ name: { $regex: "^A" } }); // evaluation
db.students.find({ skills: { $all: ["Java", "MongoDB"] } }); // array
db.students.find({ marks: { $elemMatch: { $gte: 80, $lt: 90 } } }); // array
db.students.find({ skills: { $size: 2 } }); // array

// Bitwise sample collection
db.flags.insertOne({ user: "admin", permissions: 10 });
db.flags.find({ permissions: { $bitsAllSet: [1, 3] } });

// Geospatial sample collection
db.places.createIndex({ location: "2dsphere" });
db.places.insertMany([
  { name: "Center", location: { type: "Point", coordinates: [77.1025, 28.7041] } },
  { name: "Far", location: { type: "Point", coordinates: [77.5, 28.9] } }
]);
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [77.1025, 28.7041] },
      $maxDistance: 5000
    }
  }
});

// Projection operators
db.students.find({ marks: { $gte: 80 } }, { name: 1, marks: { $slice: 2 }, _id: 0 });

// -----------------------------------
// 6) Update operations
// -----------------------------------
db.students.updateOne({ name: "Aman" }, { $set: { age: 21 } });
db.students.updateMany({ age: { $lt: 21 } }, { $set: { status: "junior" } });
db.students.updateOne(
  { name: "NoUser" },
  { $set: { age: 19, course: "BBA" } },
  { upsert: true }
);

// Update operators
db.students.updateOne({ name: "Aman" }, { $set: { city: "Mumbai" } });
db.students.updateOne({ name: "Aman" }, { $unset: { city: "" } });
db.students.updateOne({ name: "Aman" }, { $rename: { course: "program" } });
db.students.updateOne({ name: "Aman" }, { $currentDate: { updatedAt: true } });
db.students.updateOne(
  { name: "Brand New" },
  { $setOnInsert: { createdBy: "admin" } },
  { upsert: true }
);
db.students.updateOne({ name: "Aman" }, { $inc: { age: 1 } });
db.students.updateOne({ name: "Aman" }, { $mul: { age: 2 } });
db.students.updateOne({ name: "Aman" }, { $min: { age: 18 } });
db.students.updateOne({ name: "Aman" }, { $max: { age: 30 } });
db.students.updateOne({ name: "Aman" }, { $push: { skills: "MongoDB" } });
db.students.updateOne({ name: "Aman" }, { $addToSet: { skills: "MongoDB" } });
db.students.updateOne({ name: "Aman" }, { $pull: { skills: "MongoDB" } });
db.students.updateOne({ name: "Aman" }, { $pullAll: { skills: ["C", "C++"] } });
db.students.updateOne({ name: "Aman" }, { $pop: { skills: 1 } });
db.students.updateOne(
  { name: "Aman" },
  {
    $push: {
      marks: { $each: [82, 90, 76], $sort: -1, $slice: 3 }
    }
  }
);

// -----------------------------------
// 7) Replace operations
// -----------------------------------
db.students.replaceOne(
  { name: "Riya" },
  { name: "Riya", age: 22, course: "BCA", city: "Delhi" }
);
db.students.findOneAndReplace(
  { name: "Karan" },
  { name: "Karan", age: 23, course: "B.Sc", city: "Pune" },
  { returnDocument: "after" }
);
db.students.replaceOne(
  { name: "New User" },
  { name: "New User", age: 20, course: "B.Com" },
  { upsert: true }
);

// -----------------------------------
// 8) Aggregation stages
// -----------------------------------
db.students.aggregate([
  { $addFields: { isAdult: { $gte: ["$age", 18] } } }
]);
db.students.aggregate([
  { $set: { fullInfo: { $concat: ["$name", " - ", "$course"] } } }
]);
db.students.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      course: 1,
      ageIn5Years: { $add: ["$age", 5] }
    }
  }
]);
db.students.aggregate([
  { $unset: ["age", "marks"] }
]);
db.students.aggregate([
  { $match: { profile: { $exists: true } } },
  { $replaceRoot: { newRoot: "$profile" } }
]);
db.students.aggregate([
  { $match: { profile: { $exists: true } } },
  { $replaceWith: "$profile" }
]);

// -----------------------------------
// 9) Nesting in MongoDB
// -----------------------------------
db.students.insertOne({
  name: "Nested User",
  age: 24,
  address: {
    city: "Mumbai",
    pin: "400001"
  },
  skills: [
    { name: "Java", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" }
  ]
});

// Query nested fields (dot notation)
db.students.find({ "address.city": "Mumbai" });
db.students.find({ "skills.name": "MongoDB" });

// Update nested field
db.students.updateOne(
  { name: "Nested User" },
  { $set: { "address.city": "Pune" } }
);

// Push into nested array
db.students.updateOne(
  { name: "Nested User" },
  { $push: { skills: { name: "Node.js", level: "Beginner" } } }
);

// Real nested-field example (performance.marks)
db.students.insertOne({
  name: "Farah",
  age: 25,
  course: "B. Tech",
  performance: { marks: 88, grade: "A" }
});
db.students.find({ "performance.marks": 88 });

// -----------------------------------
// 10) Delete operations
// -----------------------------------

// deleteOne: removes first matching document
db.students.deleteOne({ name: "First User" });

// deleteMany: removes all matching documents
db.students.deleteMany({ city: "Pune" });

// findOneAndDelete: returns deleted doc
db.students.findOneAndDelete({ name: "Neha" });

// Delete all documents (keeps collection)
// db.students.deleteMany({});

// Drop collection (removes collection + data)
// db.students.drop();

// Drop database (removes current DB)
// db.dropDatabase();
