/* Subsets (Backtracking Algorithm using Recursion
    Given an integer array nums of unique elements, return all possible subsets (the power set).
    The solution set must not contain duplicate subsets. Return the solution in any order.

    Input :- [1,2,3] ====> Output :- [[ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], []]
    Input :- [0]  =======> Output :- [[0], []]
    Input :- [1,2,3,4]  ======> Output :- [[ 1, 2, 3, 4 ],[ 1, 2, 3 ],[ 1, 2, 4 ],[ 1, 2 ],[ 1, 3, 4 ],[ 1, 3 ],     [ 1, 4 ],[ 1 ],[ 2, 3, 4 ],[ 2, 3 ],[ 2, 4 ],[ 2 ],[ 3, 4 ],[ 3 ],[ 4 ], []]
*/

function subsets(nums) {
  let temp = [];
  let result = [];

  function recursiveSubsets(nums, i) {
    if (nums.length === i) return result.push([...temp]);
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }

  recursiveSubsets(nums, 0);
  return result;
}

// const arr = [1, 2, 3];
// const arr = [0];
const arr = [1, 2, 3, 4];
console.log(subsets(arr));
