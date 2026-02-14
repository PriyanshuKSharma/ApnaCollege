// Mongoose practice (run with Node.js)
// 1) npm install mongoose
// 2) node practice.js

const mongoose = require("mongoose");

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");
  console.log("DB connected");

  const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    age: { type: Number, min: 0, max: 120 },
    course: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    performance: {
      marks: Number,
      grade: String
    }
  });

  const Student = mongoose.model("Student", studentSchema);

  // Create
  await Student.create({
    name: "Farah",
    age: 25,
    course: "B. Tech",
    performance: { marks: 88, grade: "A" }
  });

  // Read
  const students = await Student.find();
  console.log("All students:", students);

  const nestedResult = await Student.find({ "performance.marks": 88 });
  console.log("Nested query result:", nestedResult);

  // Update
  await Student.updateOne({ name: "Farah" }, { $set: { age: 26 } });

  const updated = await Student.findOneAndUpdate(
    { name: "Farah" },
    { course: "B.Tech CSE" },
    { new: true, runValidators: true }
  );
  console.log("Updated:", updated);

  // Delete
  await Student.deleteOne({ name: "Farah" });

  await mongoose.connection.close();
  console.log("DB connection closed");
}

run().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
