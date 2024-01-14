// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }

//   set email(value) {
//     this._email = value + "laks";
//   }
// }

// const user1 = new User("Madan", "m@chai.com");
// console.log(user1.email); // output :- M@CHAI.COMLAKS
// user1.email = "ms@feb.com";
// console.log(user1.email);

//  Create getter and setter in function

// function User(username, email) {
//   this._username = username;
//   this._email = email;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });

//   Object.defineProperty(this, "username", {
//     get: function () {
//       return this._username.toUpperCase();
//     },
//     set: function (value) {
//       this._username = value;
//     },
//   });
// }

// const user2 = new User("Madan", "m@chau.com");
// console.log(user2.email);
// user2.email = "hem@googi.com";
// console.log(user2.email);
// console.log(user2.username);
// user2.username = "laks";
// console.log(user2.username);

const obj2 = {
  _username: "madan",
  email: "laks@chau.com",
  password: "namastey1234",
  //   get username() {
  //     return this._username.toUpperCase();
  //   },
  //   set username(value) {
  //     this._username = value;
  //   },
};

// Object.defineProperty(obj2, "username", {
//   get: function () {
//     return this._username.toUpperCase();
//   },
//   set: function (value) {
//     this._username = value;
//   },
// });
