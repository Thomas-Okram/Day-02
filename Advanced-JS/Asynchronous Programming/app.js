// 1. Synchronous vs Asynchronous Programming
// 🔹 Synchronous (Sync)
// In synchronous programming, tasks are executed
// sequentially — one after another.
// The execution is blocking, i.e., one operation must
// complete before the next starts.
// If a task takes time (like file I/O or API call), it
// halts the entire thread until completion.

// Synchronous
// function myFunc() {
//   console.log("Inside a function");
// }

// console.log("Start");
// myFunc();
// console.log("End");

// Asynchronous (Async)
// In asynchronous programming, tasks are non-blocking.
// Long-running tasks (network requests, timers, etc.)
// are offloaded, allowing other code to execute.

// Asynchronous
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 2000);

// console.log("End");

// Callback Hell ()
// "Callback Hell" is a term used when multiple nested
// callbacks make code deeply indented, hard to read, and
// difficult to maintain or debug.

// function callbackHell(callback) {
//   setTimeout(() => {
//     const data = "Inside (callbackHell) Function";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }

// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed  First`;
//     console.log(`Inside (firstFunc) Function`);
//     callback(processedData);
//   }, 1000);
// }

// function secondFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed  Second`;
//     console.log(`Inside (secondFunc) Function`);

//     callback(processedData);
//   }, 1500);
// }

// CallbackHell
// callbackHell((data) => {
//   firstFunc(data, (processedData1) => {
//     secondFunc(processedData1, (processedData2) => {
//       console.log(`Final result of all the functions: ${processedData2}`);
//     });
//   });
// });

// A Promise is an object representing the eventual
// completion or failure of an asynchronous operation.
// States:
// Pending: Initial state
// Fulfilled: Operation completed successfully
// Rejected: Operation failed

// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       resolve(`${number} is an even number`);
//     } else {
//       reject(`${number} is an odd number`);
//     }
//   });
// }

// const numberToCheck = 6;

// checkNumber(numberToCheck)
//   .then((message) => {
//     console.log("Success :", message);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//  Example 2

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callbackHell) Function";

      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed  First`;
      console.log(`Inside (firstFunc) Function`);
      resolve(processedData);
    }, 1000);
  });
}

function secondFunc(data) {
  new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed  Second`;
      console.log(`Inside (secondFunc) Function`);

      resolve(processedData);
    }, 1500);
  });
}

fetchData()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) => {
    console.log(
      `Final result of all function with Promises: ${processedData2}`
    );
  })

  .catch((error) => {
    console.log("Error:", error);
  });
