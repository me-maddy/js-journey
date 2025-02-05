const printSubSequences = (index, originalArr, arr, n) => {
  if (index >= n) {
    console.log(arr);
    return;
  }
  arr.push(originalArr[index]);
  printSubSequences(index + 1, originalArr, arr, n);
  arr.pop(originalArr[index]);
  printSubSequences(index + 1, originalArr, arr, n);
};

const arr = [3, 5, 8, 7, 5];
printSubSequences(0, arr, [], arr.length);
