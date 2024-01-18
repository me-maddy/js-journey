//  ********** One way to solve problem ***********
// const isPalindrome = function (x) {
//   return x < 0 ? false : x === (+x.toString().split("").reverse().join(""));
// };

// ********** Second way to solve problem *************
const isPalindrome = function (x) {
  if (x < 0) return false;
  let str = "";
  for (let i = x.toString().length - 1; i >= 0; i--) {
    str += x.toString()[i];
  }

  return x === +str;
};

console.log(isPalindrome(144141));
