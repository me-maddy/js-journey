// const user = {
//   username: "Madan",
//   loggedInId: "mdansrma",
//   isLoggedIn: true,

//   info: function () {
//     // console.log("Your information is here.");
//     // console.log(`Username : ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.info());

function User(username, logCount, isLoggedIn) {
  this.username = username;
  this.logCount = logCount;
  this.isLoggedIn = isLoggedIn;
  this.info = function () {
    console.log(`Username : ${this.username}`);
  };
  //   return this;
}

// const userOne = User("Madan", 5, true);
// const userTwo = User("Maddy", 2, false);

const userOne = new User("Madan", 5, true);
const userTwo = new User("Maddy", 2, false);
console.log(userOne.info());
console.log(userTwo.info());
// console.log(userOne.username);
// console.log(typeof userOne);
// console.log(userOne);
// console.log(userOne.constructor);
// console.log(userOne instanceof User);
// console.log(userOne instanceof Object);
// console.log(userTwo);
// console.log(this);

// function User(username, logCount, isLoggedIn) {
//   const obj = {};
//   obj.username = username;
//   obj.logCount = logCount;
//   obj.isLoggedIn = isLoggedIn;
//   return obj;
// }

// const userOne = User("Madan", 5, true);
// const userTwo = User("Maddy", 2, false);
// console.log(userOne);
// console.log(userTwo);
