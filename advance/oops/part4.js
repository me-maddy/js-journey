const myName = "Madan      ";
const channel = "WebReb     ";
// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(channel.trim().length);

// console.log(myName.__proto__);
// console.log(String.prototype);
// console.log(String.prototype === myName.__proto__); // returns true

String.prototype.trueLength = function () {
  console.log(this);
  console.log(this === String.prototype);
  console.log(`True length is ${this.trim().length}`);
};

// myName.trueLength(); // 5
// channel.trueLength(); // 6
// "    my    ".trueLength(); // 2

// String.prototype.trueLength();
// console.log(String.prototype);

const arr = ["Madan", "Manjeet"];
const obj1 = { username: "Madan" };

Object.prototype.sayMyName = function () {
  console.log("My name is Madan.");
};

// myName.sayMyName(); // it will work
// arr.sayMyName(); // will work
// obj1.sayMyName(); // will work
// arr.trueLength(); // throw an error because it only reflects only for Strings. Reason is that we only add trueLength method in the prototype of String function and it only attached with proto of strings when we create strings or work with strings.

// ******************* Inheritance *****************************

const friend = {
  one: "Manjeet",
  two: "Himanshu",
  three: "Raghvan",
  four: "Yogesh",
  five: "Gaurav",
};

const user = {
  username: "Madan",
  //   __proto__: friend,
};

const teacher = {
  name: "Hitesh Bhai",
};

Object.setPrototypeOf(user, friend);
Object.setPrototypeOf(user.__proto__, teacher);

// console.log(friend.username); // undefined
// console.log(user.one); // Manjeet
// console.log(user.two); // Himanshu

// user.__proto__.__proto__ = teacher;
// console.log(user.name); // Hitesh Bhai
// console.log(friend.name); // Hitesh Bhai
