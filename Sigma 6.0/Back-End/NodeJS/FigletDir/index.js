var figlet = require("figlet");
NodeJS
figlet("Priyanshu K Sharma", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
}); 