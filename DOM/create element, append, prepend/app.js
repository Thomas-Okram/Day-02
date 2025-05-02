// createElement()
// appendChild()
// prepend()
// insertBefore()

//  insertAdjacentElement(
//     "beforebegin"
//     "afterend"
//     "beforeend"
// )

// removeChild()
// remove()

// -------------------------------

// Creating an Element
const h1 = document.createElement("h1");
const body = document.body;

// Adding Text
h1.textContent = "Hello World";
body.appendChild(h1);

const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.innerText = "I am a newly added li";
ul.appendChild(newLi);

// insertBeofre(what, where)
const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

// insertAjacentElement
const firstP = document.querySelector("p");
const i = document.createElement("i");

i.innerText = "I am italic";
i.style.color = "red";

firstP.insertAdjacentElement("beforebegin", i);
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);
firstP.insertAdjacentElement("afterend", i);

// append()
let section = document.querySelector("section");
section.append(i, firstLi);

// prepend()
let newList = document.querySelector(".new-list");
let a = document.createElement("a");
a.textContent = "Tomba Optivoxx";
a.href = "https://facebook.com";
newList.prepend(a);

// remove() and removeChild()
newList.removeChild(a);
newList.remove();
