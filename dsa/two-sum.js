// ********* First approach *************
// const twoSum = function (arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] >= target) continue;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] >= target) continue;
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };

// ************ Second approach ************
const twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] >= 0) {
      console.log(obj);
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  return [];
};

const arr = [2, 6, 8, 10, 1, 5, 7, 4];
console.log(twoSum(arr, 5));
