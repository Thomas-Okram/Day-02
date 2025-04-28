console.log("Welcome to Day-07");

// setInterval:
// Definition: setInterval is a method used to repeatedly
// call a function or execute code at specified intervals
// (in milliseconds).

// Usage: It is ideal for situations where you need
// periodic execution, like updating a clock or
// refreshing data at regular intervals.

// Execute a funtion every 2 seconds
// setInterval(function () {
//   console.log("This funtion will be executed ecery 2 seconds.");
// }, 2000);

// setTimeout:
// Definition: setTimeout is used to execute a function
// or a block of code after a specified delay
// (in milliseconds).

// Usage: It's useful for executing one-time actions,
// such as alerting the user after a delay or executing
// a function after a certain time.

// setTimeout(function () {
//   console.log("This function will be executed after 3 seconds");
// }, 3000);

// Note: The setInterval function will continue to
// execute the specified code at the specified interval
// until it is stopped using the clearInterval function.

// Stop interval after 10seconds
// const intervalId = setInterval(function () {
//   console.log("This funtion is bieng executed at the interval");
// }, 1000);

// Stop the interval after 10 seconds
// setTimeout(function () {
//   clearInterval(intervalId);
//   console.log("Interval Stopped");
// }, 10000);

// Template Strings
// Definition: Template strings (or literals) allow
//  embedding expressions inside string literals, which
// can be multi-line and include variables easily without
//  the need for concatenation.

// Usage: It simplifies the process of constructing
// dynamic strings, especially when variables are
// involved.

// console.log(`This is an example of template literals`);
// let firstName = "Tomba";
// let lastName = "Meitei";

// console.log(
//   `Hello my first name is ${firstName} and my last name is ${lastName}`
// );

// Arrow Functions
// Definition: Arrow functions provide a more concise way
//  to write functions. They are syntactically shorter
// and automatically bind the this keyword, which makes
// them especially useful in callbacks and event handlers.

// Usage: Arrow functions are ideal for inline functions
// or when you want a function that doesn't have its own
// this context.

// function greet(username) {
//   return `Hello ${username}`;
// }

// console.log(greet("Tontonba"));

// Arrow Function
// greet = (username) => `Hello ${username}`;

// console.log(greet("Tomba"));

// const double = (number) => number * 2;
// console.log(double(6));

// Enhanced Object Literals
// Definition: ES6 introduced shorthand syntax for
// defining object properties and methods. This allows
// you to omit the key: value repetition when property
// names and variables are the same.

// Usage: Simplifies the creation of objects, especially
// when object properties and method names are similar to
// variable names.

// function user(name, age, work) {
//   return {
//     name: name,
//     age: age,
//     work: work,
//     intro: function () {
//       console.log(
//         `My name is ${name}. I am ${age} years old and I'm a ${work}.`
//       );
//     },
//   };
// }

// const luwangamba = user("Luwangamba", 18, "Programmer");
// luwangamba.intro();

// const ningthouremba = user("Ningthouremba", 19, "Programmer");
// ningthouremba.intro();

// const saad = user("Mohamad SAAD", 20, "Programmer");
// saad.intro();

// Default Function Parameters
// Definition: Default parameters allow you to assign
// default values to function parameters if no value is
// provided when calling the function.

// Usage: This is useful for ensuring that your function
//  has valid arguments, even if the caller doesn't
// provide all values.

// function countTo5(count = false) {
//   if (count === true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`Count: ${i}`);
//     }
//   }
// }

// countTo5(true);

// function rating(rate = 0) {
//   if (rate === 5) {
//     console.log("Thank you : High Rating!");
//   } else if (rate === 0) {
//     console.log("Low Ratings");
//   }
// }

// rating(5);

// Spread Operator
// Definition: The spread operator (...) is used to unpack
// elements from arrays or properties from objects into
// individual elements or properties.

// Usage: It allows easy copying of arrays/objects or
// combining multiple arrays/objects into one.

// let mx = Math.max(2, 4, 6, 1456789, 8, 12, 639);
// console.log(mx);

// const nums = [47, 78, 34, 96, 11, 18];
// console.log(Math.max(nums));
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));

// function giveMe4(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// giveMe4(1, 2, 3, 4);

// const colors = ["Red", "Green", "Blue", "White"];
// giveMe4(...colors);

// Spread in Array
// const srtNums = ["one", "two", "three"];
// const moreStrNums = ["four", "five", "Six"];

// const concat = [...srtNums, ...moreStrNums];
// console.log(concat);

// let peoples = ["Bidyananda", "Luwangamba", "Robert"];
// console.log("Manish", ...peoples, "Ningthouremba");

// let friends = ["Milan", "Deepakumar", ...peoples];
// console.log(friends);

// SPREAD OPERATOR with OBJECT
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const objConcat = { ...obj1, ...obj2 };
// console.log(objConcat);

// let user = {
//   name: "Tomba Meitei",
//   age: 27,
//   gender: "Male",
// };
// console.log(user);

// const clone = { ...user, work: "Programming", location: "Manipur" };
// console.log(clone);

// Rest Operator
// Definition: The rest operator (...) is used to collect
//  multiple elements into a single array. It's the
// opposite of the spread operator.

// Usage: It's often used in functions to handle variable
//  numbers of arguments.

// function user(...userData) {
//   console.log(userData);
// }

// user("Tomba", 17, "Programming");

// double = (...numbers) => numbers.map((num) => num * 2);
// console.log(double(4, 6, 2, 8, 9, 5, 7));

// function user(firstName, lastName, ...hobbies) {
//   console.log("First Name :", firstName);
//   console.log("Last Name :", lastName);
//   console.log("Hobbies :", hobbies);
// }

// user("Chaoba", "Meitei", "Programming", "Playing", "Dancing");

// Destructuring
// Definition: Destructuring allows you to unpack values
// from arrays or properties from objects into distinct
// variables.

// Usage: It simplifies the extraction of values from
// arrays and objects, improving code readability and
// reducing the need for repetitive code.

// Basic Variable assignment
// const nums = ["one", "two", "three"];

// const [red, yellow, green] = nums;
// console.log(red);
// console.log(yellow);
// console.log(green);

// const nums = ["ten", "twenty", "thirty", "forty"];
// const [red, yellow, green, blue] = nums;
// console.log(red);
// console.log(yellow);
// console.log(green);
// console.log(blue);

// Default values
// let a, b;

// [a = 5, b = 7] = [1];
// console.log(a);
// console.log(b);

// // Swapping variables
// let x = 2;
// let y = 3;

// [x, y] = [y, x];

// console.log(x);
// console.log(y);

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr);

// // Parsing an array returned from a function
// function f() {
//   return [1, 2];
// }

// let a, b;
// [a, b] = f();
// console.log(a);
// console.log(b);

// // Ignoring some returned values
// function g() {
//   return [1, 2, 3];
// }

// const [x, , y] = g();
// console.log(x);
// console.log(y);

// // Assigning the rest of an array to a variable
// const [q, ...r] = [1, 2, 3, 4, 5, 6];
// console.log(q);
// console.log(r);

// OBJECT DESTRUCTURING
// const students = { name: "Dudeja", position: "first", rollno: "0016" };
// const { name, position, rollno } = students;
// console.log(name);
// console.log(position);
// console.log(rollno);

// Assigning a new variable name
const num = { x: 100, y: 200 };
const { x: new1, y: new2 } = num;

console.log(new1);
console.log(new2);

// Assignment without declaration
let name, division;
({ name, division } = { name: "Ninghtouremba", division: "first" });

console.log(name);
console.log(division);

// Object Destructuring and rest operator
let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(args);
