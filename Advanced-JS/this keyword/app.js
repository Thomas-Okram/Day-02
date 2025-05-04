// The JS this keyword refers to the object it belongs to.
// It has different values depending on where it is used.

// Inside a method -> this refers to the owner object.
// Alone --> this refer to the global object.
// In a function --> this refers to the global object.

// Using "this" as a global scope
// console.log(window);
// console.log(this);
// console.log(this === window);

// window.firstName = "Tomba";
// this.lastName = "Meitei";

// let fullName = function () {
//   console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
// };

// fullName();

// Using "this" in object
// const obj = {
//   name: "Thoibi",
//   lastName: "Chanu",
//   fullName: function () {
//     // this keyword will now refer to the owner object --> (obj)

//     return `${this.name} ${this.lastName}`;
//   },
// };

// const res = obj.fullName();
// console.log(res);

// // Using "this" inside a function
// function callThis() {
//   return this;
// }

// const res2 = callThis();
// console.log(res2);

// using "this" inside arrow func()
const obj2 = {
  name: "John",
  regularFunc: function () {
    return this.name;
  },
  arrowFunction: () => this.name,
};

console.log(obj2.regularFunc());
console.log(obj2.arrowFunction());

let tomba = {
  firstName: "Tomba",
  lastNAme: "Meitei",
  fullName: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastNAme}`);
  },
};

tomba.fullName();
