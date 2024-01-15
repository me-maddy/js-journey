// function makeCounter() {
//   let privateCounter = 0;
//   function changeCounter(value) {
//     privateCounter += value;
//   }

//   return {
//     decrement() {
//       changeCounter(-1);
//     },

//     increment() {
//       changeCounter(1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();
// counter1.increment();
// counter1.increment();
// console.log(counter1.value());
// console.log(counter2.value());
// counter2.increment();
// console.log(counter2.value());

// const counter = (function () {
//   let privateCounter = 0;
//   function changeCounter(value) {
//     privateCounter += value;
//   }

//   return {
//     decrement() {
//       changeCounter(-1);
//     },

//     increment() {
//       changeCounter(1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.value());

const funcArray = [];

function makeMyFunc() {
  const helpArray = ["Madan", "Monu", "Himan"];

  for (let i = 0; i < helpArray.length; i++) {
    funcArray[i] = (function () {
      var item = helpArray[i];
      return function () {
        console.log(item);
      };
    })();
  }
}

makeMyFunc();

for (let i = 0; i < funcArray.length; i++) {
  funcArray[i]();
}
