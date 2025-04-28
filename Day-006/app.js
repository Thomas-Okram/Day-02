// // console.log("Day-06");

// // // 3. Logical Operators
// // // Definition: Logical operators are used to combine
// // // conditional statements or return a Boolean value based
// // // on logical operations.

// // // 1. Logical AND (&&), OR(||), NOT(!)
// // // const a = true;
// // // const b = false;

// // // const c = 4;

// // // console.log("Logical AND");
// // // console.log(a && b);
// // // console.log(a && a);
// // // console.log(b && b);

// // // console.log("Logical OR");
// // // console.log(a || b);
// // // console.log(b || b);
// // // console.log(a || a);

// // // console.log("Logical NOT");
// // // console.log(!a);
// // // console.log(!b);

// // // console.log("Program");
// // // let password = "1234567890";

// // // if (password.length >= 8 && password.includes("123")) {
// // //   console.log("VALID PASSWORD!");
// // // } else {
// // //   console.log("INVALID PASSWORD!");
// // // }

// // // 4. Reference Types
// // // Definition: Reference types are data types that store
// // // references to their values rather than the actual value
// // // itself. When assigned to another variable, the reference
// // // is shared, meaning changes to one variable affect the
// // // other.

// // // 5. Arrays
// // // Definition: An array is an ordered collection of items,
// // // which can be of any data type. It is used to store
// // // multiple values in a single variable.

// // const user = ["Tomba", "Chaoba", "Malem"];
// // console.log(user);

// // // empty array
// // // const fruits = [];

// // // Array of Numbers
// // const num = [2, 1, 5, 7, 9];

// // // array of strings
// // const stringArr = ["Hello", "Welcome", ["John", "Doe"], "Thank-You"];

// // // mixed array
// // const mixedArr = ["Good-Evening", 7, true];

// // // ACCESING ITEMS
// // const myArr = ["h", "e", "l", "l", "o"];
// // console.log(myArr);

// // // Accessing First element
// // console.log(myArr[0]);

// // let programmingLanguage = ["JavaScript", "GoLang", "Python", "Java"];
// // let number = [3, 8, 1, 9, 0, 4, 5];

// // // ARRAY METHOD :
// // // 1. concat() -> joins two or moe
// // // arrays and return a results
// // const fruits = ["apple", "mango", "banana"];
// // console.log(fruits);
// // let someMoreFruits = ["strawberry", "pineapple", "papaya"];
// // console.log(someMoreFruits);
// // let allFruits = fruits.concat(someMoreFruits);
// // console.log(allFruits);

// // // 2. includes() -> checks if an array contains a
// // // specified elements.
// // console.log(programmingLanguage.includes("GoLang"));

// // // 3. push() -> adds a new element to the end of an
// // // array and returns the new lenght of an array
// // console.log(fruits);
// // fruits.push("grapes");
// // console.log(fruits);

// // // 4. unshift() -> adds a new element to the beginning
// // // of an array and returns the new length of an array.
// // fruits.unshift("orange");
// // console.log(fruits);
// // // 5. pop() -> removes the last element of an array and
// // // returns the removed element.
// // // fruits.pop();
// // // console.log(fruits);

// // // 6. shift() -> removes the first element of an array
// // // and returns the removed element.
// // // fruits.shift();
// // // console.log(fruits);
// // // sort() -> sorts the elements alphabetically in strings
// // // and in ascending order.
// // console.log(number.sort());

// // // slice() -> selects the part of an array and returns the
// // //  new array.
// // console.log(programmingLanguage.slice(0, 2));

// // // splice() -> removes or replaces existing elements and/or
// // // adds new elements.

// // // join()
// // // console.log(programmingLanguage.join("-"));

// // // // reverse()
// // // console.log(programmingLanguage.reverse());

// // 6. Objects
// // Definition: An object is a collection of key-value pairs,
// // where each key (or property) corresponds to a value,
// // which can be of any data type.
// let user = {
//   firstName: "John",
//   lastName: "Optivoxx",
//   isProgrammer: "true",
//   location: ["Planet", "Earth"],
// };
// console.log(user);

// // Accessing Property
// console.log(typeof user);
// console.log(user.location[1]);
// console.log(user.isProgrammer);
// // console.log(user[isProgrammer]);

// // Updating Properties
// console.log(user.firstName);
// console.log((user.firstName = "James"));

// Functions
// Definition: A function is a reuseble block of code designed
// to perform a particular task, and it can accept inputs and
// return an output.
// function greet() {
//   console.log("Hii there....");
// }

// greet();

// function sayHello(username) {
//   console.log(`Hello ${username}`);
// }

// sayHello("John");

// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// const result = sum(2, 3);
// console.log(result);

// // Function Expression
// const greetings = function (user) {
//   console.log(`Hello ${user}`);
// };

// greetings("Malem");

// 8. Callback Functions
// Definition: A callback function is a function passed
// as an argument to another function, which is then
// executed after a specific task is completed.

// main function
// function greet(name, callMe) {
//   console.log(`Hello ${name}`);
//   callMe();
// }

// // callback function
// function callMe() {
//   console.log("I am a callback function");
// }

// // passing function as an argument(callback)
// greet("Tomba", callMe);

// 9. Scope
// Definition: Scope refers to the visibility or
// accessibility of variables within different parts of a
// program. In JavaScript, scope can be global or local.

// Block Scope: Variables declared with let or const
// inside a block (like an if statement) are scoped to
// that block.

// let message = "Hii there.....";

// function showMessage() {
//   let newMessage = "Hello.....";
//   console.log(newMessage);
// }

// showMessage();

// const person = {
//   name: "John Optivoxx",
//   age: "30",
//   greet: function greet() {
//     return `Hello, my name is ${person.name} and I'm ${person.age} years old`;
//   },
// };

// console.log(person.greet());

// JSON -> JavaScript Object Notation :
// Definition: JSON is a lightweight data-interchange
// format that is easy for humans to read and write, and
// easy for machines to parse and generate. It is used to
// store and transmit data between a server and a client.
const people = {
  name: "John Doe",
  age: "40",
  email: "john@optivoxx.com",
  isSuscribed: true,
  hobbies: ["Reading", "Coding", "Playing"],
  address: {
    city: "New York",
    "zip-code": "1001",
  },
};

// Convert JS object to JSON String
const jsonString = JSON.stringify(people);

console.log(jsonString);

// Parse JSON string back to JS Object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

console.log(parsedObject.name);
console.log(parsedObject.age);
console.log(parsedObject.hobbies);

// 12. Date and Time
// Definition: JavaScript’s Date object is used to work
// with dates and times. It can be used to get the current
// date and time, as well as to manipulate dates.

// Create a Date object representing the current date and time
const currentDate = new Date();
console.log(currentDate);

// Create a date object for a specific date and time (year, month, day, hours, minutes, seconds, milliseconds)
const specificDate = new Date(2025, 3, 26, 22, 20, 0, 0);
console.log(specificDate);

// Getting Different Parts of the Date
// extract -> year, month, day, hours, minutes, seconds, milliseconds, etc.
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minute);
console.log(second);
console.log(millisecond);

// Formatting Dates:
