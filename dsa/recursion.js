// const multiply = function (nums) {
//   let product = 1;
//   for (let i = 0; i < nums.length; i++) {
//     product *= nums[i];
//   }
//   return product;
// };

// Implement Recursion on multiply :-

// const multiply = function (nums) {
//   if (nums.length <= 0) return 1;
//   return nums[nums.length - 1] * multiply(nums.slice(0, nums.length - 1));
// };

// const arr = [2, 5, 3, 4, 1];
// console.log(multiply(arr));

// Do factorial using Recursion :-

// const factorial = function (n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(4));

// One function calls itself is called Recursive function.

// Create an array with range of numbers

// const rangeOfNumbers = function (start, end) {
//   if (end < start) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(start, end - 1);
//     numbers.push(end);
//     return numbers;
//   }
// };

// console.log(rangeOfNumbers(0, 3));

// Reverse a string :-

// const reverseString = function (string) {
//   if (string.length <= 0) return "";
//   return (
//     string[string.length - 1] +
//     reverseString(string.slice(0, string.length - 1))
//   );
// };

const reverseString = function (string) {
  if (string.length <= 1) return string;
  return reverseString(string.substr(1)) + string[0];
};

console.log(reverseString("hello"));
