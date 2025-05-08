const promiseObj = fetch("text.txt");
console.log(promiseObj);

promiseObj.then((res) => console.log(res));

promiseObj
  .then((res) => {
    return res.text();
  })
  .then((data) => console.log(data));

fetch("text.txt")
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch("text.txt")
  .then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.text();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//   Displaying Results to the browser

// const result = document.querySelector(".result");

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => (result.innerHTML = data))
//   .catch((err) => console.log(err));

//   Using async/await
const result = document.querySelector(".result");

async function readData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    result.textContent = data;
  } catch (error) {
    console.log(error);
  }
}

readData();
