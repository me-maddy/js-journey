// function multiplyBy2(num) {
//   return num * 2;
// }

// multiplyBy2.set = "Setter";
// multiplyBy2.get = "Getter";
// console.log(multiplyBy2); // returns [Function: multiplyBy2] { set: 'Setter', get: 'Getter' }
// console.log(multiplyBy2.get); // returns "Getter"
// console.log(multiplyBy2.set); // returns "Setter"
/**
 * Function acts as a function but it can also act as an object.
 */
// console.log(multiplyBy2(5));
// console.log(multiplyBy2.prototype); //returns {}
// console.log(multiplyBy2.prototype.__proto__); // returns prototype of global Object.
// console.log(Object.prototype);
// console.log(Object.prototype === multiplyBy2.prototype.__proto__); // returns true

// *********************New function is created ***************************

function createUser(username, price) {
  this.username = username;
  this.price = price;
  //   return this;
}

createUser.prototype.increment = function () {
  //   console.log("Increment function");
  this.price++;
};

createUser.prototype.printMe = function () {
  //   console.log(this === createUser.prototype); // returns true
  console.log(`Price is ${this.price}`);
};

// createUser.increment(); // throws an error
// createUser.prototype.increment(); // it will work
// createUser.prototype.printMe(); // it will work

const userOne = new createUser("Madan", 25);
const userTwo = new createUser("Hemraj", 24);

// console.log(userOne.printMe()); // Price is 25
// console.log(userTwo.printMe()); // Price is 24

// console.log(userOne); // createUser { username: 'Madan', price: 25 }
// console.log(userTwo); // createUser { username: 'Hemraj', price: 24 }

// console.log(userTwo.__proto__);  // returns reference of prototype of createUser function
// console.log(userOne.__proto__); // returns reference of prototype of createUser function

// console.log(userOne.__proto__ === userTwo.__proto__); // returns true
// console.log(userOne.__proto__ === createUser.prototype); // returns true

// console.log(userOne.__proto__.__proto__); returns reference of prototype of global Object function

userOne.__proto__.trueLength = function () {
  console.log("True Length!");
};

// console.log(createUser.prototype.trueLength()); // True Length!
// console.log(userTwo.trueLength()); // True Length!
// console.log(createUser.prototype);
// console.log(userTwo.__proto__);

// console.log(userTwo.__proto__ === createUser.prototype); // true
