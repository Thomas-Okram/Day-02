// console.log("Welcome to Day-07");

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
// const num = { x: 100, y: 200 };
// const { x: new1, y: new2 } = num;

// console.log(new1);
// console.log(new2);

// Assignment without declaration
// let name, division;
// ({ name, division } = { name: "Ninghtouremba", division: "first" });

// console.log(name);
// console.log(division);

// Object Destructuring and rest operator
// let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
// console.log(a);
// console.log(b);
// console.log(args);

console.log("Welcome to Day-08");

// Assigning new variable names
// const num = { x: 100, y: 200 };
// const { x: new1, y: new2 } = num;

// console.log(new1);
// console.log(new2);

// Assignment without declaration
// let name, division;

// ({ name, division } = { name: "Tomba", division: "First" });
// console.log(name);
// console.log(division);

// Object Destructuring and rest operator
// let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
// console.log(a);
// console.log(b);
// console.log(args);

// const user = {
//   name: "Tomba Meitei",
//   age: 30,
//   country: "USA",
// };

// function printUserDetails({ name, age, country }) {
//   console.log(`Name : ${name}`);
//   console.log(`Age : ${age}`);
//   console.log(`Country : ${country}`);
// }

// printUserDetails(user);

// let options = {
//   title: "My Menu",
//   items: ["item1", "item2"],
// };

// function showMenu({
//   title = "Untitled",
//   width: w = "100",
//   height: h = "200",
//   items: [item1, item2],
// }) {
//   console.log(`${title} ${w} ${h} `);
//   console.log(item1);
//   console.log(item2);
// }

// showMenu(options);

// Definition: Nested destructuring allows extracting
// values from nested objects or arrays.
// const songs = [
//   { name: "song1", singer: "singer1", duration: 4.12 },
//   { name: "song2", singer: "singer2", duration: 3.12 },
//   { name: "song3", singer: "singer3", duration: 2.12 },
//   { name: "song4", singer: "singer4", duration: 5.12 },
//   { name: "song5", singer: "singer5", duration: 1.12 },
// ];

// const [, , { singer }] = songs;
// const [, , { singer: s }] = songs;

// console.log(s);

// const data = {
//   user: {
//     id: 123,
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       country: "USA",
//     },
//     hobbies: ["Reading", "Painting", "Cooking"],
//     scores: {
//       math: 95,
//       science: 88,
//       history: 75,
//     },
//   },
//   products: [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 500 },
//   ],
//   settings: {
//     darkMode: true,
//     notifications: {
//       email: true,
//       sms: false,
//       push: true,
//     },
//     language: "English",
//   },
// };
// const {
//   user: {
//     name,
//     age,
//     address: { city, country },
//     hobbies,
//     scores: { math, science, history },
//     email,
//   },
//   products: [product1, product2, product3],
//   settings: {
//     darkMode,
//     notifications: {
//       email: emailNotifications,
//       sms: smsNotifications,
//       push: pushNotifications,
//     },
//     language,
//   },
// } = data;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}. ${country}`);
// console.log(`Hobbies: ${hobbies.join(",")}`);
// console.log(`Math Scores: ${math}`);
// console.log(`Science Scores: ${science}`);
// console.log(`History Scores: ${history}`);

// Definition: The ternary operator is a concise version of an
// if-else statement. It takes three operands: a condition, a result
// for true, and a result for false.

// syntax --> contidon ? code if true : code if false

// let password = 8;

// function passwordCheck(ps) {
//   //   if(password === 8) {
//   //     return "Strong Password"
//   //   } else {
//   //     return "Weak Password"
//   //   }
//   return ps === 8 ? "Strong Password" : "Weak Password";
// }

// console.log(passwordCheck(password));

// // Example 2
// const age = 16;

// const isAdult = age >= 18 ? "Adult" : "Underaged";

// console.log(isAdult);

// Definition: The for...in loop iterates over the keys (properties)
// of an object.
// let person = {
//   name: "Tomba",
//   age: "30",
//   gender: "Male",
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// let list = ["one", "two", "three", "four"];

// for (let index in list) {
//   console.log(`${index}: ${list[index]}`);
// }

// Definition: The for...of loop iterates over the values of an
// iterable object (arrays, strings, etc.).

// The "for...of" loop in JavaScript is a modern iteration statement
//  introduced in ECMAScript 6 (ES6) that provides a concise and easy
// way to loop over elements in iterable objects like arrays, strings,
//  maps, sets, and more. It allows you to iterate directly over the
// values of the elements, rather than dealing with their indices or
// keys, which makes the code more readable and less error-prone.

// for (variable of iterable) {...}

// let users = ["Tomba", "Chaoba", "Thoibi", "John"];

// for (let user of users) {
//   console.log(user);
// }

// const text = "Hello";

// for (const char of text) {
//   console.log(char);
// }

// forEach Helper
// Definition: forEach is an array method that executes a provided
// function once for each element in the array.

// const colors = ["teal", "red", "green", "blue"];

// colors.forEach((color) => console.log(color));

// const words = ["hello", "good-morning", "good-afternoon", "good-evening"];

// const upperCase = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });

// console.log(words);

// Map Helper:
// Definition: map creates a new array by applying a function to each
// element of the original array.

// let numbers = [1, 2, 3, 4, 5];

// let double = numbers.map((num) => num * 2);
// console.log(double);

// let user = [
//   { firstName: "Tomba", lastName: "Meitei" },
//   { firstName: "Chaoba", lastName: "Singh" },
//   { firstName: "Thoibi", lastName: "Chanu" },
// ];

// const results = user.map((person) => {
//   return [person.firstName, person.lastName];
// });

// console.log(results);

// The filter() method is a built-in array method in JavaScript that
// allows you to create a new array containing elements that pass a
// certain condition. It provides a clean and concise way to filter
// out elements from an array based on a specified criteria.

// const songs = [
//   { name: "song1", singer: "singer1", duration: 4.12 },
//   { name: "song2", singer: "singer2", duration: 3.12 },
//   { name: "song3", singer: "singer3", duration: 2.12 },
//   { name: "song4", singer: "singer4", duration: 5.12 },
//   { name: "song5", singer: "singer5", duration: 1.12 },
// ];

// console.log(songs.filter((songs) => songs.duration > 3));

// const computers = [
//   { ram: 4, ssd: 128 },
//   { ram: 8, ssd: 256 },
//   { ram: 16, ssd: 512 },
//   { ram: 32, ssd: 1024 },
// ];

// console.log(computers.filter((com) => com.ram > 4));

// The every() and some() are two built-in array methods in JavaScript
// that allow you to check the elements of an array based on a given
// condition. Both methods take a callback function as an argument,
// which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the
// condition specified by the provided callback function. It returns
// true if the callback function returns true for every element, and
// false if any element fails the condition.

// The some() method tests whether at least one element in the array
// passes the condition specified by the provided callback function.
// It returns true if the callback function returns true for at least
// one element, and false if no element passes the condition.

// const users = ["Tomba", "Chaoba", "Thoibi"];

// const res = users.every((user) => user.length === 4);
// const res2 = users.some((user) => user.length < 3);

// console.log(res);
// console.log(res2);

// const songs = [
//   { name: "song1", singer: "singer1", duration: 4.12 },
//   { name: "song2", singer: "singer2", duration: 3.12 },
//   { name: "song3", singer: "singer3", duration: 2.12 },
//   { name: "song4", singer: "singer4", duration: 5.12 },
//   { name: "song5", singer: "singer5", duration: 1.12 },
// ];

// const everyRes = songs.every((song) => song.duration > 3);
// const someRes = songs.some((song) => song.duration > 3);

// console.log(everyRes);
// console.log(someRes);

// The find() method is another built-in array helper in JavaScript
// that allows you to find the first element in an array that matches
// a specific condition. It returns the value of the first element that
// satisfies the given testing function, or undefined if no element is
// found.

// const users = [
//   { name: "Tomba", age: 17 },
//   { name: "Chaoba", age: 18 },
//   { name: "Thoibi", age: 20 },
//   { name: "Malem", age: 30 },
//   { name: "Sadananda", age: 30 },
// ];

// const res = users.find((user) => user.name === "Malem");

// console.log(res);

// const posts = [
//   { id: 1, content: "Good Post" },
//   { id: 1, content: "Funny Post" },
//   { id: 1, content: "Sad Post" },
// ];

// const postRes = posts.find((post) => post.content === "Funny Post");
// console.log(postRes);

// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

// array.reducer(function(arg1, arg2, arg3), initialValue)

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((p, c) => {
//   console.log(`Previous : ${p}`);
//   console.log(`Current : ${c}`);
//   return p + c;

//   //   reduce function will run for every item in the array.
//   // 0 + 1 = 1
//   // 1 + 2 = 3
//   // 3 + 3 = 6
//   // 6 + 4 = 10
//   // 10 + 5 = 15
// }, 0);

// console.log(sum);

// const user = [
//   {
//     name: "Tomba Meitei",
//     age: 18,
//   },
//   {
//     name: "Chaoba Meitei",
//     age: 60,
//   },
//   {
//     name: "Thoibi Chanu",
//     age: 56,
//   },
// ];

// // Ternary Operator
// const eldestOne = user.reduce((p, c) => (c.age > p ? c.age : p), 0);
// console.log(eldestOne);

// Maps
// Definition: A Map is a collection of key-value pairs where keys can
// be any data type (not just strings), and the insertion order is
// preserved.

// const map = new Map();

// const keyOne = "String";
// const keyTwo = {};
// const keyThree = function () {};

// map.set(keyOne, "Value of Key One");
// map.set(keyTwo, "Value of Key Two");
// map.set(keyThree, "Value of Key Three");

// console.log(map.get(keyOne));
// console.log(map.get(keyTwo));
// console.log(map.get(keyThree));

// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyTwo));
// console.log(map.size);

// // Iterating over map
// for (let [key, value] of map) {
//   console.log(`${key} -- ${value}`);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// Set is a built-in data structure introduced in (ES6) that represents
// a collection of unique values. Unlike arrays, Set allows you to store
// only unique values, which means duplicate values are automatically
// removed. Each value can occur only once within a Set.

// const set = new Set();

// set.add();
// set.add("string");
// set.add({ name: "Tomba" });
// set.add(10);

// console.log(set.size);
// console.log(set.keys);
// console.log(set.has({ name: "Tomba" }));

// set.delete(10);
// console.log(set);

// // Iterate over sets.
// for (let item of set) {
//   console.log(item);
// }

// const mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("oranges");
// mySet.add("apple");

// // console.log(mySet);
// console.log(mySet.has("banana"));
// console.log(mySet.has("grapes"));

// mySet.delete("oranges");
// console.log(mySet);

// mySet.clear();
// console.log(mySet);

// Symbol is a unique and immutable primitive data type introduced in
// ECMAScript 6 (ES6). A symbol is often used as an identifier for
// object properties to avoid potential naming conflicts.

// const mySymbol = Symbol();
// const mySymboll = Symbol("My custom symbol");

// const mySymbol1 = Symbol();
// const mySymbol2 = Symbol("My custom symbol");

// const symbol1 = Symbol("name");
// const symbol2 = Symbol("name");

// console.log(symbol1);
// console.log(typeof symbol1);
// console.log(symbol1 === symbol2);
