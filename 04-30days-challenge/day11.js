// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
function task1() {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Task 1: Promise resolved after 2 seconds");
    }, 2000);
  });

  promise.then(function (message) {
    console.log(message);
  });
}

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
function task2() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Task 2: Promise rejected after 2 seconds");
    }, 2000);
  });

  promise.catch(function (error) {
    console.log(error);
  });
}

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function task3() {
  let fetchData = function (data) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(data);
      }, 2000);
    });
  };

  fetchData("Task 3: Fetching data 1")
    .then(function (data) {
      console.log(data);
      return fetchData("Task 3: Fetching data 2");
    })
    .then(function (data) {
      console.log(data);
      return fetchData("Task 3: Fetching data 3");
    })
    .then(function (data) {
      console.log(data);
    });
}

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function task4() {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Task 4: Promise resolved after 2 seconds");
    }, 2000);
  });

  let message = await promise;
  console.log(message);
}

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function task5() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Task 5: Promise rejected after 2 seconds");
    }, 2000);
  });

  try {
    let message = await promise;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
function task6() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Task 6:", data);
    })
    .catch(function (error) {
      console.log("Task 6 Error:", error);
    });
}

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function task7() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Task 7:", data);
  } catch (error) {
    console.log("Task 7 Error:", error);
  }
}

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
function task8() {
  let promise1 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Task 8: Promise 1 resolved");
    }, 2000);
  });

  let promise2 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Task 8: Promise 2 resolved");
    }, 3000);
  });

  Promise.all([promise1, promise2]).then(function (values) {
    console.log("Task 8:", values);
  });
}

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
function task9() {
  let promise1 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Task 9: Promise 1 resolved");
    }, 2000);
  });

  let promise2 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Task 9: Promise 2 resolved");
    }, 3000);
  });

  Promise.race([promise1, promise2]).then(function (value) {
    console.log("Task 9:", value);
  });
}

// Execute all tasks
task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
