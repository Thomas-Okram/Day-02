let firstLi = document.querySelector("li");

console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement.parentElement);

let ul = document.querySelector("ul");

console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].innerText);
console.log((ul.children[2].innerText = "Apple"));
console.log(ul.children[2].innerText);

// Next Element Sibling
console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent);
console.log(
  firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent
);

// Previous Element Siblings
let forthLi = document.querySelector(".fourth");
console.log(forthLi);
console.log(forthLi.previousElementSibling.textContent);
console.log(forthLi.previousElementSibling.previousElementSibling.textContent);
console.log(
  forthLi.previousElementSibling.previousElementSibling.previousElementSibling
    .textContent
);
