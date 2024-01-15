// ********** 1st example ****************

// function outer() {
//   const username = "Madan";
//   function inner() {
//     console.log("Inner : " + username); // It means inner function can have access of variables of outer function
//   }
//   inner();
// }

// outer();
// // console.log(username); // throws an error

// ********** 2nd example ****************

// const carName = "Yamaha";
// function init() {
//   console.log("Outer : " + carName); // This outer function has access of it's surrounding also.
//   function displayName() {
//     console.log("Inner : " + carName); // Inner function has access of it's surrounding variables
//   }
//   displayName();
// }

// init();

// *********** 3rd example **********************

function outer() {
  //   console.log("Outer : " + secret); // throws an error and state that secret is not defined. It means outer function can't have access of inner function variables.
  function inner1() {
    const secret = "vmlvkmvdl";
    console.log("Inner1 : " + secret);
    inner2(); // This will work
  }
  function inner2() {
    // console.log("Inner2 : " + secret); // throws an error and state that secret is not defined. It means sibling functions don't have access of each others properties.
    console.log("Inner2 function is called.");
  }
  inner1();
  //   inner2();
}

outer();
