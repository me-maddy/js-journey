// function createUser(username, age, qualification) {
//   const obj = {};
//   obj.username = username;
//   obj.age = age;
//   obj.qualification = qualification;
//   return obj;
// }

// const userOne = createUser("Madan", 23, "BCA");
// const userTwo = createUser("Manjeet", 21, "Btech");
// console.log(userOne); // { username: 'Madan', age: 23, qualification: 'BCA' }
// console.log(userTwo); // { username: 'Manjeet', age: 21, qualification: 'Btech' }
// console.log(userOne === userTwo); // false

// ****************** Understand the working of 'new' keyword by demonstrating the things :- ******************

// const user = {
//   username: "Madan",
// };

// const obj = Object.create(user); // creates new empty object{} and sets it's proto to the argument it takes.
// // Now, obj can able to access every property and method of user object.
// console.log(obj); // {}
// console.log(obj.username); // Madan

//  Now let's take same example with some additional things :-

// function createUser(username, age, qualification) {
//   const obj = {};
//   obj.username = username;
//   obj.age = age;
//   obj.qualification = qualification;
//   obj.getDetails = function () {
//     return `Your name is ${this.username} and you are ${this.age} years old. You are ${this.qualification} qualified.`;
//   };
//   return obj;
// }

// const userOne = createUser("Madan", 23, "BCA");
// const userTwo = createUser("Manjeet", 21, "Btech");
// console.log(userOne.getDetails());
// console.log(userTwo.getDetails());
// console.log(userOne);
// console.log(userTwo);
// console.log(createUser.prototype); // returns {}

/**  Everytime when we create a new object from createUser function, all the created objects will have getDetails function and this getDetails function has same signature in all the created objects.
 *  So, somehow this getDetails function covers some space in a memory and each time new object created, this getDetails function covers some space in a memeory.
 *  This can cause memory leaking problem if we are creating thousands of objects from one constructor function.
 *  This can be solved if we use prototype of constructor function.
 * When we create a new function, this created function has prototype property which is an empty object and may have constructor function(parent function).
 * We can use this prototype of function and can add new properties and methods inside this prototype.
 */

//  Now, let's get a example of same function :-

// function createUser(username, age, qualification) {
//   const obj = {};
//   obj.username = username;
//   obj.age = age;
//   obj.qualification = qualification;
//   return obj;
// }

// createUser.prototype.getDetails = function () {
//   return `Your name is ${this.username} and you are ${this.age} years old. You are ${this.qualification} qualified.`;
// };

// const userOne = createUser("Madan", 23, "BCA");
// const userTwo = createUser("Manjeet", 21, "Btech");
// console.log(createUser.prototype.getDetails()); //Your name is undefined and you are undefined years old. You are undefined qualified.

// Our goal is to attach all properties and methods of prototype of createUser function with the newly created instances of createUser function. So that, userOne and userTwo can have access of all properties and methods of prototype. But how can we do this,

// let's try to access getDetails function from userOne and userTwo.

// userOne.getDetails(); // obviously, will throw an error because userOne don't have access of this getDetails function. And userTwo will also throw an error if it tries to access this function.

// Then how can instances(let call userOne and userTwo instances) of createUser function can able to access those properties and methods :-

// Solution is :
// All the objects in js, has proto or [[Prototype]] which can be an object or null. When we access property or method of an object, first js access this property or method from object's own property. If js finds then return this property. Otherwise, js goes through the proto or [[Prototype]] of an object to search for that property and js searches this property until proto or [[Prototype]] of an object is linked with null. Js performs this behaviour only on objects. And everything in js is object(strings, arrays and objects, and even function can also act as an object).
// It can also be possible that we can set proto or [[Prototype]] of an object to object or null(explicitly).

// function createUser(username, age, qualification) {
//   const obj = {};
//   obj.username = username;
//   obj.age = age;
//   obj.qualification = qualification;
//   return obj;
// }

// createUser.prototype.getDetails = function () {
//   return `Your name is ${this.username} and you are ${this.age} years old. You are ${this.qualification} qualified.`;
// };

// const userOne = createUser("Madan", 23, "BCA");
// const userTwo = createUser("Manjeet", 21, "Btech");

// The [[Prototype]] or proto of an object :-
// console.log(userOne.__proto__); // returns an object
// console.log(userTwo.__proto__); // returns an object
// console.log(userTwo.__proto__ === userOne.__proto__); // returns true, means both objects have same reference

// What if we set proto of an object -
// userOne.__proto__ = createUser.prototype;

// Now, can userOne able to access property of an prototype of createUser function :
// console.log(userOne.getDetails()); // returns "Your name is Madan and you are 23 years old. You are BCA qualified."

// It means, proto of an userOne has reference of prototype of createUser function. And now, can able to access every properties and methods of prototype of createUser function.

// We can also do this, so that userTwo can be able to access every properties and methods of prototype of createUser function.

// userTwo.__proto__ = createUser.prototype;
// console.log(userTwo.getDetails()); // returns 'Your name is Manjeet and you are 21 years old. You are Btech qualified.'

// Now, If we change anything in the prototype of function then it will also reflect in the proto or [[Prototype]] of an object.

// createUser.prototype.sayMyName = function () {
//   return `My name is ${this.username}`;
// };

// console.log(userOne.sayMyName()); // returns "My name is Madan"
// console.log(userTwo.sayMyName()); // returns "My name is Manjeet"

// This thing is useful to save memory because, we have only one reference of prototype of function which is shared among any number of objects(userOne, userTwo).
// Remember, proto of an object gets reference of prototype of function. So, we have only one object(prototype of function) in a memory and all other objects can have reference of this prototype of function.

// This thing userOne.__proto__ = createUser.prototype can also be set by Object.setPrototypeOf(userOne, createUser.prototype) method
// Let's use this case :-

// Object.setPrototypeOf(userOne, createUser.prototype); // it replaces this syntax 'userOne.__proto__ = createUser.prototype'
// console.log(userOne.getDetails()); // returns "Your name is Madan and you are 23 years old. You are BCA qualified."

// Object.setPrototypeOf(userTwo, createUser.prototype); // it replaces this synatx 'userTwo.__proto__ = createUser.prototype'
// console.log(userTwo.getDetails()); // returns "Your name is Manjeet and you are 21 years old. You are Btech qualified."

// Now, userOne and userTwo can have access of same function getDetails but function getDetails covers the space in a memory only once. And it doesn't happen that function getDetails reserved space in memory evrytime when userOne and userTwo access this function. Because function getDetails come from prototype of createUser function and which shares only a reference of this prototype.
// And we don't need to create a new function inside a userOne and userTwo which can cover some space in a memory. Like we have done in above example.

// But now, the problem is,
// Everytime when we create a new object from createUser function, we need to set it's proto with the reference of prototype of createUser function explicitly.
// Is it possible to set object's proto inside a createUser function? So that, we don't need to set object's proto everytime when we create a new object from createUser function.

//Yes, it can be possible :-
// Let's do this -

// function createUser(username, age, qualification) {
//   const obj = {};
// //   obj.__proto__ = createUser.prototype; // sets obj's proto to the prototype of createUser function.
//     Object.setPrototypeOf(obj, createUser.prototype); //sets obj's proto to the prototype of createUser function.
//   obj.username = username;
//   obj.age = age;
//   obj.qualification = qualification;
//   return obj;
// }

// createUser.prototype.getDetails = function () {
//   return `Your name is ${this.username} and you are ${this.age} years old. You are ${this.qualification} qualified.`;
// };

// const userOne = createUser("Madan", 23, "BCA");
// const userTwo = createUser("Manjeet", 21, "Btech");

// console.log(userOne.getDetails()); // returns "Your name is Madan and you are 23 years old. You are BCA qualified."
// console.log(userTwo.getDetails()); // returns "Your name is Manjeet and you are 21 years old. You are Btech qualified."

// Object.create() :-
// const user = {
//   username: "Madan",
// };

// const obj = Object.create(user); // creates new empty object{} and sets it's proto to the argument it takes.
// // Now, obj can able to access every property and method of user object.
// console.log(obj); // returns {}
// console.log(obj.username); // Madan

// function createUser(username, age, qualification) {
//   const obj = Object.create(createUser.prototype); // it replaces this syntax :- const obj = {}; and obj.__proto__ = createUser.prototype;
//   //   Object.create(createUser.prototype); // creates a new empty object and sets this empty object's proto to the argument it takes.
//   obj.username = username;
//   obj.age = age;
//   obj.qualification = qualification;
//   return obj;
// }

// createUser.prototype.getDetails = function () {
//   return `Your name is ${this.username} and you are ${this.age} years old. You are ${this.qualification} qualified.`;
// };

// const userOne = createUser("Madan", 23, "BCA");
// const userTwo = createUser("Manjeet", 21, "Btech");

// console.log(userOne.getDetails()); // returns "Your name is Madan and you are 23 years old. You are BCA qualified."
// console.log(userTwo.getDetails()); // returns "Your name is Manjeet and you are 21 years old. You are Btech qualified."

// These all things that are happen inside a createUser function are done by 'new' keyword and this happen under the hood.

// Working of 'new' keyword -
// With the same exaple :-

function createUser(username, age, qualification) {
  this.username = username;
  this.age = age;
  this.qualification = qualification;
}

createUser.prototype.getDetails = function () {
  return `Your name is ${this.username} and you are ${this.age} years old. You are ${this.qualification} qualified.`;
};

const userOne = new createUser("Madan", 23, "BCA");
const userTwo = new createUser("Manjeet", 21, "Btech");

console.log(userOne.getDetails()); // returns "Your name is Madan and you are 23 years old. You are BCA qualified."
console.log(userTwo.getDetails()); // returns "Your name is Manjeet and you are 21 years old. You are Btech qualified."

// Now, we don't need to create object inside a createUser function and not to set it's proto to the prototype of createUser function. And even, we don't need to return object from the createUser function. Everything is done by 'new' keyword. Things that we have talked in earlier examples are performed under the hood by the 'new' keyword.
// And this is the working of 'new' keyword. The createUser function called after 'new' keyword is the constructor function to create objects(instances);
// 'new' keyword also sets proto of newly created object to the prototype of createUser function.
