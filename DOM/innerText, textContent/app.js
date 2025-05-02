// innerText
// textContent
// innerHTML

const p = document.querySelector("p");

console.log(p);
console.log(p.innerText);
console.log(p.textContent);
console.log(p.innerHTML);

const h1 = document.querySelector("h1");
h1.innerText = "Changed Text";
h1.innerHTML = "<em>This is some innerHTML</em>";
