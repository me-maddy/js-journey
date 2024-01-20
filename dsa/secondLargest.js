// *********** First Approach *************
// const secondLargest = function (arr) {
//   const uniqueArr = Array.from(new Set(arr));
//   if (uniqueArr.length < 2) {
//     return -1;
//   }
//   const sortedArr = uniqueArr.sort((a, b) => b - a);
//   return sortedArr[1];
// };

// *********** Second Approach ************
const secondLargest = function (arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLarger = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarger = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLarger) {
      secondLarger = arr[i];
    }
  }

  return secondLarger;
};

// const arr = [5, 4, 12, 41, 35, 8, 10, 16, 21, 41, 35, 28, 30, 34];
const arr = [8, 15, 24, 1, 4, 25, 25];
console.log(secondLargest(arr));
