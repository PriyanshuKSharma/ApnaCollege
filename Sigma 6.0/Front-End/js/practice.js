// Objects
// 1. Create a const object called product to store info about the object
/*const product = {
  title: "ball pen",
  rating: 4.5,
  offer: 5,
  price: 79
}*/


// 2. Create a const object called "profile" to store info about the person
/*const profile = {
  uname: "the_priyanshuk_sharma",
  isFollow: true, 
  followers: 230,
  following: 340,
  posts: 41,
  bioDetails: "This ofiicial profile of Priyanshu Kumar Sharma"
}*/


// Conditional Statements & Operators
//  1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
/*let num = prompt("Enter a number:");

if(num%5===0) {
  console.log(num, "is divided by 5");
} else {
  console.log(num, "is not divided divided by 5");
}
*/
// 2. Write a code which can give grades to students according to their scopes:

/*let marks = prompt("Enter your marks:");

if(marks>=90) {
  console.log("You got A");
} else if(marks>=80 && marks<=89) {
  console.log("You got B");
} else if(marks>=70 && marks<=79) {
  console.log("You got C");
} else if(marks>=60 && marks<=69) {
  console.log("You got D");
} else if(marks>=50 && marks<=59) {
  console.log("You got E");
} else {
  console.log("You failed");
}*/

// Loops and Strings
// Loops
// 1. Print all even numbers from 0 to 100
/*let num=0;
let n=100;

while(num<=n) {
  if(num%2===0) {
    console.log(num)
  }
  num++;
}*/

// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
/*let gameNum = 25;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum) {
  userNum = prompt("Wrong number entered, enter again: ");
}

console.log("Numbers matched");*/


// Strings
// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length
/*let fullName=prompt("Enter your username: ");

let userName = '@'+fullName+fullName.length;
console.log(userName);*/


// Arrays
// 1. For a given array with marks of students -> [85,97,44,37,76,60], find the average marks of the entire class

/*let marks = [85,97,44,37,76,60];

let sum=0;

for(let val of marks) {
  sum+=val;
}

average=sum/marks.length;
console.log("Average is: ", average);*/


// 2. For a given array with prices of 5 items-> [250,645,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

/*let items=[250,645,300,900.50];

let offer = 0;

let i=0;
for(let val of items) {
  console.log(`Original price of ${val}: ${items[i]}`);
  offer=val/10;
  items[i]=items[i]-offer;
  console.log(`Discounted price of ${val}: ${items[i]}`);
  i++;
}


let items1=[250,645,300,900.50];
console.log("Original price of items:", items1);

for(let idx=0; idx<items1.length; idx++) {
  offer=items1[idx]/10;
  items1[idx]=items1[idx]-offer;
}

console.log("Discounted price of items:", items1);
*/
// 3. Create an array to store companies ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
/*
a. Remove the first company from the array
b. Remove Uber & add Ola in its place
c. Add amazon at the end
*/

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a. Remove the first company from the array
// console.log(companies.shift())

// b. Remove Uber & add Ola in its place
/*let update=companies.splice(2,1,"Ola");
console.log(companies);*/

// c. Add amazon at the end
/*companies.push("Amazon");
console.log(companies);*/

// Functions
// 1. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string

/*function countVowels(str) {
  let count=0;
  for(const s of str) {

    if(
      s==="a" || 
      s==="e" || 
      s==="i" || 
      s==="o" || 
      s==="u") {
 
        count++;
    }
  }
  console.log(str)
  console.log("No. of vowels are:",count);

}

countVowels(prompt("Enter the word:"));
*/
// same with arrow func

/*const countVow = (str) =>{
  let count=0;
  for(const s of str) {

    if(
      s==="a" || 
      s==="e" || 
      s==="i" || 
      s==="o" || 
      s==="u") {
 
        count++;
    }
  }
  console.log(str)
  console.log("No. of vowels are:",count);

}

countVow(prompt("Enter the word:"));*/

// 2. For a given array of numbers, print the square f each value using "forEach" loop

/*let arr=[1,2,3,4,5];

let calSquare= (num)=>{
  console.log(num**2);
};

arr.forEach(calSquare);*/

// 3. (Filter) -> We are given array of marks of students. Filter out the students who have scored 90+.
/*let marks = [87,98,94,45,78,90]

let bestMarks = marks.filter((val)=> {
  return val>=90;
})

console.log(bestMarks);*/

/* 4. Take a number 'n' as input from user. Create an array of numbers from 1 to 'n'.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

/*let n = prompt("Enter a new number: ");

Creating new array
let arr = [];

for(let i=1; i<=n; i++) {
  arr[i-1]=i;
}

console.log("The array is: ", arr)*/

// Sum of all elements
/*let initialValue=0;
const sumOfAll = arr.reduce(
  (accumulator, currentValue)=> {
    return accumulator+currentValue;
  });

console.log("Sum of elements: ", sumOfAll);*/

// Factorial
/*const prodOfAll = arr.reduce(
    (accumulator, currentValue)=>{
      return accumulator*currentValue;
    });

console.log("Product of elements: ", prodOfAll);*/

// /DOM
// 1. Create a H2 heading element with text - "Hello JS". Append "from Apna College students" to this text using JS".

/*let h2 = document.querySelector("h2");
console.dir(h2.innerText=h2.innerText+" from Apna College students to this text using JS");*/

// 2. Create 3 divs with common class name - "box". Access them & add some unique text to each of them
// let divs= document.querySelectorAll(".box");
// console.log(divs);

// Normal way to perform
/*console.log(divs[0].innerText="Priyanshu")
console.log(divs[1].innerText="K")
console.log(divs[2].innerText="Sharma")*/

// Performing using for of loop
/*or(div of divs){
  div.innerText = prompt("Enter your text:");

  // console.log(div.innerText);
}*/


// 3. Create a new button element. Give it a text "click me", background color of red & text color of white
// Insert the button as the first element inside the body tag

/*let newBtn = document.createElement("button");
newBtn.innerText="click me!!";
console.log(newBtn);

let body=document.querySelector("body");
body.prepend(newBtn);*/


// 4. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// let para = document.querySelector("p");
// para.setAttribute("class", "newClass");

// OOP in JS
// 1. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

// 2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it ti edit website data.

// let DATA = "secret information";
// class User {
//   constructor(name, email) {
//     this.name=name;
//     this.email=email;
//   }

//   viewData() {
//     console.log("data =", DATA);
//   }
// }

// class Admin extends User {
//   editData() {
//     DATA = "some new value";

//   }
// }


// let student1 = new User("priyanshu", "priyanshu@email.com");
// let student2 = new User("kumar","kumar@email.com");
// let student3 = new User("sharma", "sharma@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// let admin1 = new Admin("admin", "admin@college.com");
// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.viewData();
// teacher1.viewData();

// console.log(admin1);
// console.log(admin1.editData());
// console.log(DATA);