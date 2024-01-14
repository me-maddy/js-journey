class CreateUser {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  getInfo() {
    console.log(`${this.username} is ${this.age} years old.`);
  }
}

console.log(CreateUser.prototype.getInfo()); // output :- undefined is undefined years old.
// const user1 = new CreateUser("Madan", 23);

// console.log(user1); // output :- CreateUser { username: 'Madan', age: 23 }
// console.log(user1.getInfo()); // output :- Madan is 23 years old.
// console.log(user1.__proto__ === CreateUser.prototype); // output :- true
// console.log(user1.__proto__.hasOwnProperty("getInfo")); // output :- true

// const user2 = new CreateUser("Manjeet", 21);
// console.log(user2); // output :- CreateUser { username: 'Manjeet', age: 21 }
// console.log(user2.getInfo()); // output :- Manjeet is 21 years old.

// console.log(user1.__proto__.getInfo === user2.__proto__.getInfo); // output :- true

/** ****************************************************************************************
 * **************** Above same thing can be achieved by creating function ******************
 * ******************************************************************************************/

function CreateUser(username, age) {
  this.username = username;
  this.age = age;
}

CreateUser.prototype.getInfo = function () {
  console.log(`${this.username} is ${this.age} years old.`);
};

// CreateUser.prototype.getInfo(); // output :- undefined is undefined years old.

const user1 = new CreateUser("Madan", 23);
console.log(user1); // output :- CreateUser { username: 'Madan', age: 23 }
user1.getInfo(); // output :- Madan is 23 years old.

const user2 = new CreateUser("Manjeet", 21);
console.log(user2); // output :- CreateUser { username: 'Manjeet', age: 21 }
user2.getInfo(); // output :- Manjeet is 21 years old.
