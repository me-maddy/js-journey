// ********* First Approach ***********
// const removeDuplicates = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log(i + " : " + arr);
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 1, "_");
//     }
//   }
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "_") arr.length = i;
//   }
//   return arr;
// };

// *********** Second Approach ************
// const removeDuplicates = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       i--;
//     }
//   }

//   return arr;
// };

// ********** Third Approach ***************
const removeDuplicates = function (arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  arr.length = 5;
  return arr;
};

const arr = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
