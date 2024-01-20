// Rotate an array by k steps
// let arr = [2,45,7,12,8,9,15,6];  k = 3;
// rotatedArr = [9,15,6,2,45,7,12,8]

// ********* First Approach ***********
// const rotate = function (arr, k) {
//   let size = arr.length;
//   if (k > size) {
//     k = k % size;
//   }
//   const rotatedArr = arr.splice(size - k, k);
//   //   return rotatedArr.concat(arr);
//   arr.unshift(...rotatedArr);
//   return arr;
// };

const rotateOptimised = function (arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }
  reverse(arr, 0, size - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, size - 1);
  return arr;
};

function reverse(nums, left, right) {
  let temp = 0;
  while (left < right) {
    temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

const arr = [2, 45, 7, 12, 8, 9, 15, 6];
console.log(arr);
console.log(rotateOptimised(arr, 3));
