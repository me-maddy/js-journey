// function addOne(anyNum) {
//   const userName = "mdandev30";
//   console.log(anyNum + 1);
//   console.log(userName);
//   console.log(this.userName);
//   //   console.log(this);
// }

// function addOne(anyNum) {
//   return anyNum + 1;
// }

// console.log(this);
// addOne(8);

// const result = addOne(8);
// console.log(result);

// addTwo(); // function declaration can be called before initialisation

// function addTwo() {
//   console.log("Addtwo function is called");
// }

// addOne(); // Can't call function expression before initialisation.

// const addOne = function () {
//   console.log("Add one is invoked");
// };

// addOne();
// const addOne = () => {
//   console.log("Add one is invoked");
// };

// addOne();// it will work

// addTwo(); //

// *******************Arrow function*************************
// const sayMyName = () => {
//   console.log(this);
//   console.log("My Name is Madan");
//   return this;
// };

// const sayName = function () {
//   console.log(this);
// };

// sayMyName();
// const obj = sayMyName();
// console.log(obj);
// sayName();

// Immediately Invoked Function Expression (IIFE)
// (function sayMyName() {
//   console.log("My name is Madan Sharma");
//   console.log("Database connection is established");
// })();
