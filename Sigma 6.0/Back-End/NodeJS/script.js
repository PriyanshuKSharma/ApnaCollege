// let n=5;

// for(let i=0; i<=n; i++) {
//     console.log(i);
// }

// console.log("bye");


// let args = process.argv;

// for(let i=2; i<args.length; i++) {
//     console.log("Hello to",args[i]);
// }


// Export in file
// const someValue = require("./math.js");

// console.log(someValue);
// console.log(someValue.sum(5, 10));
// console.log(someValue.subtract(5, 10));
// console.log(someValue.multiply(5, 10));
// console.log(someValue.divide(5, 10));
// console.log(someValue.g);

// Importing the fruits module(Exporting in directory)
const info = require("./Fruits/index.js");
console.log(info);

const utils = require('./Maths');

console.log(utils.add(5, 3)); // 8
console.log(utils.sub(5, 3)); // 2