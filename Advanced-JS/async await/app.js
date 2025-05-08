console.log("Hello and Welcome to the last Day of JS");

// Async/Await => Allows you to write asynchronous code
// in a synchronous manner.
// Async dosen't have resolve or reject parameters.
// Everything after await is placed in a queue.

// 1. Async => makes a function return a promise.
// 2. Await => make an async function wait for a promise.

function learnToCode() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const learnToCode = true;

      if (learnToCode) {
        resolve("You have learned to code!");
      } else {
        reject("You haven't learn to code yet!");
      }
    }, 1000);
  });
}

function getHired() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isHired = true;

      if (isHired) {
        resolve("You're hired!");
      } else {
        reject("Please find a Job!");
      }
    }, 2000);
  });
}

function startEarning() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasEarned = true;

      if (hasEarned) {
        resolve("You have earned a lot!");
      } else {
        reject("You haven't anything!");
      }
    }, 1000);
  });
}

async function secureYourCareer() {
  try {
    const learnToCodeResult = await learnToCode();
    console.log(learnToCodeResult);

    const getHiredResult = await getHired();
    console.log(getHiredResult);

    const startEarningResult = await startEarning();
    console.log(startEarningResult);
  } catch (error) {
    console.log("Error: ", error);
  }
}

secureYourCareer();
