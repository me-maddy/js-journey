// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an Async work
//   // Cryptography, network-call, Db connection
//   setTimeout(function () {
//     console.log("Async work is done!");
//     resolve();
//   }, 1000);
// });

new Promise(function (resolve, reject) {
  // Do an Async work
  // Cryptography, network-call, Db connection
  setTimeout(function () {
    console.log("Async work is done!");
    resolve("Work is resolved!");
  }, 1000);
}).then((response) => {
  console.log(response);
});

// promiseOne.then(function () {
//   console.log("Work is completed!");
// });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async work 2 is done!");
//     resolve({ username: "Madan", password: 1234 });
//   }, 1000);
// });

// promiseTwo.then((response) => {
//   console.log(response);
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = true;
//     if (!error) {
//       resolve({ username: "Madan", password: 1234 });
//     } else {
//       reject("Async 3 : Something went wrong.");
//     }
//   }, 1000);
// });

// promiseThree
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = false;
//     if (!error) {
//       console.log("Async work 4 is done");
//       resolve({ username: "Madan", password: 1234 });
//     } else {
//       reject("Async 4 : Something went wrong.");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((response) => {
//     console.log(response);
//     return response.username;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = true;
//     if (!error) {
//       console.log("Async work 5 is done");
//       resolve({ username: "Madan", password: 1234 });
//     } else {
//       reject("Async 5 : Something went wrong.");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise();

// async function getUserInfo() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserInfo();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
