// let flag = true;

function getData() {
  console.log("Your data is here!");
}

// This is throttling - calling a function after a certain period of time.
// function handleSize() {
//   if (flag) {
//     getData();
//     flag = false;
//     setTimeout(() => {
//       flag = true;
//     }, 100);
//   }
// }

// Another way :-

const handleSize = throttle(getData, 200);

function throttle(func, limit) {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

window.addEventListener("resize", handleSize);
