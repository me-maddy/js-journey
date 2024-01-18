// ********* First approach *********
// const isFibonacci = function (n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// };

// ********* Second approach ***********

const isFibonacci = function (n) {
  if (n <= 1) return n;
  return isFibonacci(n - 1) + isFibonacci(n - 2);
};

console.log(isFibonacci(6));
