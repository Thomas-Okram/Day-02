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

let amount = 100;
let money = "100";
let floatValue = "99.6";

// Convert String to a number
money = parseInt(money); //parseInt() -> string to number
console.log(typeof money);

amount = toString(amount); //toSting() -> number to sting
console.log(typeof amount);
