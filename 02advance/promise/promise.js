// Promise 1
const taskOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 1 complete");
    resolve();
  }, 1000);
});

taskOne.then(() => {
  console.log("Task 1 consumed");
});

// Promise 2
const taskTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 2 complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Task 2 consumed");
});

// Promise 3
const userPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      userName: "heyyman",
      age: 19,
    });
  }, 1000);
});

userPromise.then((user) => {
  console.log(user);
});

// Promise 4 with error handling
const userInfoPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let errorOccurred = false;
    if (!errorOccurred) {
      resolve({
        userName: "heyyman",
        age: 19,
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

userInfoPromise
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected");
  });

// Promise 5 with async/await
const fetchLanguageDetails = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        let errorOccurred = true;
        if (!errorOccurred) {
          resolve({
            lang: "js",
            engine: "v8",
          });
        } else {
          reject("Error: Something went wrong");
        }
      }, 1000);
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

fetchLanguageDetails();

// Fetch users from an API
const fetchAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.forEach((user) => {
      console.log(user.id, user.name, user.address);
    });
  } catch (error) {
    console.log("Error fetching users:", error);
  }
};

fetchAllUsers();

new Promise((resolve, reject) => {
  setTimeout(() => {
    let errorOccurred = false; // example value
    if (!errorOccurred) {
      resolve("Success");
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
