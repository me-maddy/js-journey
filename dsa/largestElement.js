function largestElement(arr) {
  let largest = arr[0];
  let index = 1;
  while (index < arr.length) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
    index++;
  }
  return largest;
}

const arr = [1, 2, 47, 55, 3, 5, 8, 41, 99, 102];
console.log(largestElement(arr));
