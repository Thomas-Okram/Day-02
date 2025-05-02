// href
// value
// type
// getAttribute(attribute Name)
// setAtribute(what, where)

const a = document.querySelector("a");
const input = document.querySelector("input");

// Getting attribute
console.log(a);
console.log(a.href);
console.log(input.value);
console.log(input.type);

// Setting Attribute
a.href = "https://youtube.com";
console.log((input.value = "Hello"));
console.log((input.type = "password"));
console.log((input.placeholder = "Enter your password"));

// getAttribute(arrName)
console.log(input.getAttribute("type"));

// setAttribute(arrName, value)
console.log(input.setAttribute("placeholder", "Email"));
