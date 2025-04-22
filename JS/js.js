// This is a console statement
// console.log("My name is John Doe");

// This is an alert statement
// alert("This is an alert message!");

// Variables

// Declaration of variables
// (reserved keywords)  (variable name)  (type of value);
// let fullName = "Tomba Technologies";

// console.log(fullName);

// 1. create viriable name (name) and store your name
// 2. create viriable name
// (whatDoYouWantToBecomeInYourLife) & store (Programmer)
// 3.create viriable name (gender) and store your gender
// 4. finally log all the variables to the console.

// const randomNumber = 75643;
// const favNumber = 77;
// let num = 2;

// Basic math
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);

// console.log(num--);

// console.log(10 % 3);

// BOOLEAN yes or no true or false or 1 or 0
// let isLoggedIn = NaN;

// let numbers = 10;

// console.log(numbers + undefined);

// //false
// // null
// // undefined
// // 0
// // -0
// // NaN
// // '', "", ``, (empty sting);

// Comparision Operators

// > Greater Than
// < Less Than
// >= Greater than or equal to
// <= Less than or Equal to

// console.log(10 > 10);
// console.log(10 < 10);
// console.log(10 >= 10);
// console.log(10 <= 10);

// console.log("Strict equality");

// === strict equlity (Type + Value)
// !== Strict n0n-equality (Type + Value)
// == Loose Equality (Value)
// != Loose non-equality (Value)

// console.log(10 === 10);
// console.log(10 !== 10);
// console.log(10 == 10);
// console.log(10 != 10);

// console.log("Equality check");

// let a = "10";
// let b = 10;

// console.log(a !== b);

// STRING
// A string is a sequence of character used to represent text.
// let firstName = "Optivoxx";
// let lastName = "Technologies";
// let fullName = firstName + lastName; //Concatenation

// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

// console.log("Sting Concatenantion");

// 1. CONCATENATION
// let finalFullName = firstName + " " + lastName;
// console.log(finalFullName);
// let lastFullName = firstName.concat(lastName);
// console.log(lastFullName);

// 2. APPEND
// let stingAppend = (firstName += " Tomba");
// console.log(stingAppend);

// 3. LENGTH
// console.log(lastName.length);

// CASES
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());

// SLICE
// console.log(lastName.slice(0, 3));

// SPLIT & JOIN
// console.log(lastName.split("").join("_"));

// INCLUDES
// console.log(lastName.includes("o"));

// TRIM
// console.log(lastName.trim());

// favActorFirstName & favActorLastName,
// favActorName favActorFirstName + favActorLastName
// uppercase
// message = `My Favourite Actor is ${favActorName}
// & Say SOmething as a message -> append a message after this.

// TYPE CONVERSION
// converting a value from one data type to another,
// like string to number or number to boolean.

// let amount = 100;
// let money = "100";
// let floatValue = "99.6";

// // Convert String to a number
// money = parseInt(money); //parseInt() -> string to number
// console.log(typeof money);

// amount = toString(amount); //toSting() -> number to sting
// console.log(typeof amount);

// Control Flow.
// 1. Conditional statements
// A conditional statement lets you execut a block of code
//  only if a specific condition is true. It's like
// "if this happens, then do that".

// if (condition) {....}
// else if (second condition) {...}
// else (...)

console.log("Conditional Statements");

let a = 200;
let b = 200;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a == b) {
  console.log(`${a} and ${b} are equal`);
} else {
  console.log(`${b} is greater than ${a}`);
}

let time = 20;

if (time < 12) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good evening");
}

console.log("Even odd program");

let num = 12345678901;

if (num % 2 == 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

// A switch statement is used to perform different
// actions based on different conditions,
// especially when clicking one variable
// against multiple values

// Syntax
// switch (expression){
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }

let day = "Jauary";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;

  case "Tuesday":
    console.log("Today is Tuesday");
    break;

  case "Wednesday":
    console.log("Today is Wednesday");
    break;

  case "Thursday":
    console.log("Today is Thursday");
    break;

  case "Friday":
    console.log("Today is Friday");
    break;

  case "Saturday":
    console.log("Today is Saturday");
    break;

  default:
    console.log("Don't know what day is today!");
}

// For Loop -> A for loop repeats a block of code
// a specific number of times, usially
// when you know how many times to run the loop

// Syntax
// for (initialization; CSSConditionRule; increment){
//     // code block
// }

let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);

for (let i = 0; i <= 5; i++) {
  console.log("Optivoxx John ", i);
}

// print your name & numbers from 0 to 1000

// While Loop -> A while Loop repeats a block of
// code as long as a condition is true.
// You use it  when the number of repetition
// is not known in instance

// Syntax
// while (condition){
//     // code block
// }

// let userClicked = false;
// while (!userClicked) {
//   console.log("Waiting for User to click....");
// }

let i = 10;

while (i <= 100) {
  console.log("John Optivoxx using while loop", i);
  i++;
}
