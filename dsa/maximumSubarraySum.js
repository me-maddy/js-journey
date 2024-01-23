// We have an array, let [-2,-1,2,1,-1,4,-1]
// Now, find the subArray where it's sum is maximum

// Brute Force Strategy :-

// const maximumSum = function (nums) {
//   let maxSum = nums[0];
//   let startIndex = 0;
//   let endIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSum += nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }

//   return { maxSum: maxSum, subArr: nums.slice(startIndex, endIndex + 1) };
// };

// const maxSum = maximumSum([-2, -1, 2, 1, -1, 4, -1]);
// console.log(maxSum);

// Kadane's Algorithm :-

const maximumSum = function (nums) {
  let maxSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

const maxSum = maximumSum([-2, -1, 2, 1, -1, 4, -1]);
console.log(maxSum);
