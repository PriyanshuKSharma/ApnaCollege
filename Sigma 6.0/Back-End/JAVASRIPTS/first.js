/*console.log("Welcome to Apna College");
console.log("Priyanshu Kumar Sharma");*/
/*JS: Dynamically typed language */ 

/*Data Types and Variables*/

/*age=25;
name="Tony Stark"
price=99.99;
x=null;
y=undefined;
isFollow=false;
let m = BigInt("123");
let n = Symbol("hello");

console.log(name);
console.log(age);
console.log(x);
console.log(price);
console.log(y);
console.log("Priyanshu K Sharma")

console.log(typeof(m));
console.log(typeof(n));*/

// Variables
/*var keyword
var age = 20;
age = 22; 
console.log(age);

var age = 23//Can be modified and re declared
console.log(age);

//let keyword
let age1 = 20;
age1=21; //Only modification allowed
console.log(age1);

//const
const age2=24
console.log(age2);*/

/*Objects*/
/*const student = {
    name:"Priyanshu",
    age:20,
    cgpa: 9.8,
    isPass: true
};


// Updating key values
student['age'] = student['age'] + 1;

console.log(student);
console.log(student.age);*/

// Condtional Statement
/*if statement
1. age
let age = 25;

if(age >= 18) {
    console.log("You can vote");
}

if(age<18) {
    console.log("You cant vote");
}
*/
// 2. color mode
/*let mode = "dark";
let color;

if(mode==="dark") {
    color="black";
}

if(mode==="light") {
    color="white";
}

console.log(color);*/


// if-else statement
/*let color;

if(mode==="dark") {
    color="black";
} else {
    color="white";
}

console.log(color);*/

// odd or even
/*let num = 20;

if (num%2===0) {
    console.log(num,"is Even");
}   else {
    console.log(num, "is Odd");
}

else if Statement
let age = 18

if(age < 18) {
    console.log("Junior");
}   else if(age>60)  {
    console.log("Senior citizen");
}   else {
    console.log("middle");
}
*/

// For Loop
/*Print 1 to 5
for(let count=1; count<=5; count++) {
    console.log("Priyanshu K Sharma");
}

console.log("Loop has ended");*/

// Average of first 5 num
/*let sum=0;
let num=prompt("Enter the number:")

for(let i=1; i<=num; i++) {
    sum+=i;
}
console.log("Sum = ", sum);*/


// Infinite Loop-> A loop that never ends
/*for(let count=1; count>0; count++) {
    console.log("Priyanshu K Sharma");
}

console.log("Loop has ended");*/

// while loop
/*let i = 1;
while(i<=5) {
    console.log("PriyanshuKSharma");
    i++;
}*/

// do while loop
/*let n =1;
do {
    console.log("PriyanshuKSharma");
    i++;
} while(n<=5);*/

// for-of loop
/*let str = "PriyanshuKSharma";
let size=0;

for(let i of str) {
    console.log("i=", i);
    size++;
}

console.log("String size = ", size);*/


/*let student = {
    name: "Priyanshu",
    age:20,
    cgpa:9.89,
    isPass: true

};

for(let key in student) {
    console.log("key: ", key, "value: ", student[key]);
}
*/
// Strings
/*let str = "Priyanshu K";
let specialString = `This is a template literal`;
let str2 = "Sharma";

let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price}`;
console.log(output);

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str.slice(0, 10))
console.log(str.concat(str2))
console.log(str.replace('s', 'ss'))
console.log(str2.replaceAll('a', 'aa'))
console.log(str.charAt(3))*/

// Arrays
/*let marks = [97,98,95,96,98]
console.log(marks)
console.log(marks.length) //property*/


// Loop in Arrays
// for loop: length is required

/*let heroes=["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

console.log("Using for loop:")
for(let idx=0; idx<heroes.length; idx++) {
    console.log(heroes[idx]);
}*/

// for of
/*console.log("Using for of loop:")
for(let hero of heroes) {
    console.log(hero);
}*/


/*let foodItems = ["potato", "apple", "banana", "tomato"];

foodItems.push("chips"); //single value
foodItems.push("chikoo", "kurkure", "orange"); //multiple items can be added
console.log(foodItems);

foodItems.pop(); //deletes last value
console.log(foodItems);

console.log(foodItems.toString());*/

/*let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];

let heroes= marvelHeroes.concat(dcHeroes);
console.log("Combined heroes are:", heroes);

let indianHeroes = ["shaktiman", "krish"];
let heroes1= marvelHeroes.concat(dcHeroes, indianHeroes);
console.log("Combined heroes are:", heroes1);

marvelHeroes.unshift("antman"); //adds on start
console.log(marvelHeroes);

marvelHeroes.shift(); //deletes from start
console.log(marvelHeroes);*/


// console.log(marvelHeroes.slice(1,3)); //slicing

//splice: (startIdx, no. of elements the user need to delte after the start index, "new element need to be added")
/*marvelHeroes.splice(1,0,"hawkeye")
console.log(marvelHeroes); 
*/
/*let arr=[1,2,3,4,5,6,7,8];

// arr.splice(2,5,8);
arr.splice(2,5,45,67,89,42,32);
console.log(arr);

arr.splice(2,5,45);
console.log(arr);*/

// Functions

/*function myFunction(msg) { 
    //parameter -> input

    console.log(msg);
}*/

// myFunction("Welcome to my website!!"); //argument

/*function sumUp(a, b) {
    sum=a+b;
    console.log(sum);
}

sumUp(Number(prompt("Enter first number:")),Number(prompt("Enter second number:")))

function sumUp1(a, b) {

    //local variables -> can only be accessed within the block scope
    sum=a+b;
    return sum;
    console.log(sum); // it will not run as func will always end at return
}

let val = sumUp1(3, 4);
console.log(val);*/


// Arrow function
/*const sum=(a,b) => {
    return a+b;
}

let addition=sum(Number(prompt("Enter first number:")),Number(prompt("Enter second number:")))
console.log(addition);

const mul=(a,b) => {
    return a*b;
}

let product=mul(Number(prompt("Enter first number:")),Number(prompt("Enter second number:")))
console.log(product);*/

// forEach loop in array
/*let arr=["Priyanshu", "k", "Sharma"];

arr.forEach(function printVal(val) { //value at each index
    console.log(val);
});

arr.forEach((val, idx, arr)=> {
    console.log(val);
    console.log(val.toUpperCase(), idx, arr);
})*/

// Map
/*let nums = [20,33,56,70];

let newArr = nums.map((val)=> {
    return val**2;
});

console.log(newArr);*/

// Filter
/*let nums = [20,33,56,70];

let evenArr = nums.filter((val)=> {
    return val%2===0 && val>=25;
});

console.log(evenArr);
*/
// Reduce
// Sum of all nums
/*const array = [1,2,3,4];

// 0+1+2+3+4
const initialValue=0;
const sumWithInitial = array.reduce(
    (result, currentValue)=> result+currentValue, initialValue,
);*/

/*console.log(sumWithInitial);
Expected value: 10*/

// Greatest of all nums
/*let array1=[3,7,9,6,3,12];

const output = array1.reduce((prev, curr)=> {
    return prev>curr?prev:curr;
});

console.log(output);
*/
// DOM
// console.dir(window.document);
// console.log(document.body.style.background="green"); 
//we use dom to perform dynamic modifications which cannot be done in html and css

// DOM Manipulation:
// by using id:
/*let heading = document.getElementById("heading"); //returns h1
console.log(heading);*/

// by using class:
/*let header=document.getElementsByClassName("header");
console.log(header);*/

// by using tag(keywords of HTML):
/*let tag=document.getElementsByTagName("p");
console.log(tag);*/

// Query Selectors:
// First element:
// let firstEle=document.querySelector(".header"); //for id: #idName
// console.log(firstEle);

// All elements:
/*let allEle=document.querySelectorAll(".header"); //for id: #idName
console.log(allEle);


let inText = document.querySelector("h1");
console.log(inText.innerHTML="<i>Learn with Priyanshu K</i>")*/

// DOM Part-2
// Attributes
/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let naam = div.setAttribute("name", "naam");
console.log(naam);*/

// Style
/*let div = document.querySelector("div");

div.style.backgroundColor="green";*/

// Inserting Elements
/*let newBtn = document.createElement("button");
newBtn.innerText="click me!!";
console.log(newBtn);

let div=document.querySelector("div");
div.prepend(newBtn)
div.append(newBtn)
div.before(newBtn)
div.after(newBtn)

// Removing elements
let para = document.querySelector("p");
para.remove()*/


// Prototype
/*const student = {
    fullName: "Priyanshu",
    marks: 93.9,
    printMarks: function () {
        console.log("marks = ", this.marks)
    }
}*/

// const emp = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
// };

// karanArjun.__proto__=emp;

// const animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walks");
//   }
// };

// const rabbit = {
//   jumps: true,
//   walk() {
//     console.log("Rabbit hops");
//   }
// };

// // Set prototype
// rabbit.__proto__ = animal;

// rabbit.walk();


// Classes
// class ToyotaCar {
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brandName=brand;
//     }
// }

// let fortuner = new ToyotaCar();
// let lexus = new ToyotaCar();
// fortuner.start();
// fortuner.setBrand("fortuner");

// Inheritance
// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   greet() {
//     console.log("Hello from Child");
//   }
// }

// const obj = new Child();
// obj.greet(); 

// class Person {
//     constructor() {
//         console.log("Enter parent class");
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         console.log("Enter child class");
//         super();
//         this.branch=branch;
//         console.log("Exit from child constructor");
//     }
//     work() {
//         super.eat();
//         console.log("Solves problems, build something!!");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }

// let priyanshuObj = new Engineer("IT {CTIS}");
// console.log(priyanshuObj);


// class Parent {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Hello, I'm ${this.name} (Parent)`);
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name);  //to invoke parent class constructor
//     this.age = age;
//   }

//   sayHello() {
//     super.sayHello();
//     console.log(`And I'm ${this.age} years old (Child)`);
//   }
// }

// const kid = new Child("Priyanshu", 20);
// kid.sayHello();

// Error handling in JS
// try {
//   let a = 5;
//   console.log(a + b); // 'b' is not defined → error!
// } catch (err) {
//   console.log(" Error occurred:", err.message);
// } finally {
//     let a = 5;
//     let b = 10;
//     console.log(a + b);
//     console.log("This block always executes, regardless of error.");
// }

// Asynchronous Programming
function hello() {
  console.log("Hello, this is asynchronous function.");
}

setTimeout(hello, 2000); // This will call the hello function after 2 seconds(2000 miliseconds)

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("Hello, this is asynchronous function.");
}, 2000);

console.log("three");
console.log("four");