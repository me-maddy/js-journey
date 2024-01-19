const secondLargest = function (arr) {
  const uniqueArr = Array.from(new Set(arr));
  if (uniqueArr.length < 2) {
    return -1;
  }
  const sortedArr = uniqueArr.sort((a, b) => b - a);
  return sortedArr[1];
};

// const arr = [5, 4, 12, 41, 35, 8, 10, 16, 21, 41, 35, 28, 30, 34];
const arr = [8, 15, 24, 1, 4, 25, 25];
console.log(secondLargest(arr));
