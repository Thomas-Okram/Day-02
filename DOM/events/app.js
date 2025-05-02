const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Hello World");
};

const best = document.querySelector(".best");

best.addEventListener("click", () => {
  console.log("Clicked");
});

// Event (e) Object ---------

const para = document.querySelector(".para");

para.addEventListener("click", (e) => {
  console.log(e);
});
