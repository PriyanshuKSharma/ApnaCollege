const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to MongoDB");
    return runDemo();
  })
  .catch((err) => console.log(err))
  .finally(async () => {
    await mongoose.connection.close();
  });

async function main() {
  // mongodb://127.0.0.1:27017/<database-name>
  // If DB doesn't exist, MongoDB creates it on first write.
  // mongoose.connect() is asynchronous and returns a Promise.
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Schema: blueprint/structure for documents in a collection
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  age: { type: Number, min: 0, max: 120 },
  course: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

// Model: interface for CRUD on the "students" collection
const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", studentSchema); // Same schema, different collection

async function runDemo() {
  // -----------------------------------
  // 1) Create operations
  // -----------------------------------
  // const student1 = new Student({ name: "Aman", age: 20, course: "BCA" });
  // await student1.save();

  // try {
  //   const students = await Student.insertMany([
  //     { name: "Riya", age: 22, course: "BBA" },
  //     { name: "Vikram", age: 19, course: "BTech" },
  //     { name: "Karan", age: 23, course: "BSc" },
  //     { name: "New User", age: 20, course: "B.Com" }
  //   ]);
  //   console.log("Inserted students:", students.length);
  // } catch (err) {
  //   console.error("Error inserting students:", err);
  // }

  // -----------------------------------
  // 2) Read operations
  // -----------------------------------
  // const allStudents = await Student.find();
  // const bcaStudents = await Student.find({ course: "BCA" });
  // const oneStudent = await Student.findOne({ name: "Aman" });
  // const byId = oneStudent ? await Student.findById(oneStudent._id) : null;
  // console.log("Read counts(Using findById):", {
  //   all: allStudents.length,
  //   bca: bcaStudents.length,
  //   oneStudent: !!oneStudent,
  //   byId: !!byId
  // });

  // try {
  //   const students = await Student.find({ age: { $gte: 20 } });
  //   console.log("BCA students:", students.length);
  // } catch (err) {
  //   console.error("Error reading students:", err);
  // }

  // -----------------------------------
  // 3) Update operations
  // -----------------------------------
  await Student.updateOne({ name: "Aman" }, { $set: { age: 21 } });
  await Student.updateMany({ age: { $lt: 21 } }, { $set: { status: "junior" } });
  await Student.updateOne(
    { name: "NoUser" },
    { $set: { age: 19, course: "BBA" } },
    { upsert: true }
  );

  // -----------------------------------
  // 4) Delete operations
  // -----------------------------------
  // await Student.deleteOne({ name: "Vikram" });
  // await Student.deleteMany({ age: { $gt: 25 } });
  // await Student.findByIdAndDelete(student1._id);
  // await Student.findOneAndDelete({ name: "Riya" });

  // -----------------------------------
  // 5) Aggregation operations
  // -----------------------------------
  // const aggregationResult = await Student.aggregate([
  //   { $match: { age: { $gte: 20 } } },
  //   { $group: { _id: "$course", averageAge: { $avg: "$age" } } },
  //   { $sort: { averageAge: -1 } }
  // ]);
  // console.log("Aggregation result:", aggregationResult);

  // -----------------------------------
  // 6) Replace operations
  // -----------------------------------
//   await Student.replaceOne(
//     { name: "Riya" },
//     { name: "Riya", age: 22, course: "BCA", city: "Delhi" }
//   );
//   const replacedStudent = await Student.findOneAndReplace(
//     { name: "Karan" },
//     { name: "Karan", age: 23, course: "B.Sc", city: "Pune" },
//     { returnDocument: "after" }
//   );
//   console.log("Replaced student:", replacedStudent);
//   await Student.replaceOne(
//     { name: "New User" },
//     { name: "New User", age: 20, course: "B.Com" },
//     { upsert: true }
//   );
}
