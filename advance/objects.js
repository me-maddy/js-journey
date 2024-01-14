// console.log(Math.PI); // output :- 3.141592653589793
// Math.PI = 5; // nothing happened with this
// console.log(Math.PI); // output :- 3.141592653589793

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// Object.defineProperty(Math, "PI", {
//   value: 5,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// }); // this will throw an error because can't redefine PI and PI was defined in a way so that it can't be redefine again and it has a fixed value.

// ************ Understand Object.defineProperty() and Object.getOwnPropertyDescriptor() ************

// const obj = {};
// Object.defineProperty(obj, "username", {
//   value: "Madan",
//   writable: false,
//   enumerable: false,
//   configurable: true,
// });

// console.log(obj); // output :- {}
// console.log(Object.hasOwnProperty(obj, "username")); // false

// Object.defineProperty(obj, "email", {
//   value: "M@chau.com",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(obj); // output :- {email: 'M@chau.com'}
// console.log(Object.hasOwnProperty(obj, "email")); // false

// console.log(obj.username); // output :- Madan
// obj.username = "Hemraj"; // writable is false that's why it will not change username property of obj object.
// console.log(obj.username); // output :- Madan

// console.log(obj.email); // output :- M@chau.com
// obj.email = "ter@googli.com"; // writable is true and hence it will change the email property of obj object.
// console.log(obj.email); // output :- ter@googli.com

// const user = {
//   username: "Madan",
//   email: "m@chai.com",
//   password: 19990730,
// };

// Object.defineProperty(user, "email", {
//   enumerable: false,
// });

// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key} : ${value}`);
// } // this loop will skip the email property of user object
