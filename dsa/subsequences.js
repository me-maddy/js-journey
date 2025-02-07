const printSubSequences = (index, originalArr, arr, n) => {
  if (index === n) {
    console.log(arr);
    return;
  }
  arr.push(originalArr[index]);
  printSubSequences(index + 1, originalArr, arr, n);
  arr.pop(originalArr[index]);
  printSubSequences(index + 1, originalArr, arr, n);
};

const originalArr = [1, 5, 2, 7, 1];
// printSubSequences(0, originalArr, [], originalArr.length);

const printAllSubSequences = (index, originalArr, arr, n, sum) => {
  if (index === n) {
    if (sum === 2) {
      console.log(arr);
    }
    return;
  }
  arr.push(originalArr[index]);
  printAllSubSequences(
    index + 1,
    originalArr,
    arr,
    n,
    sum + originalArr[index]
  );
  arr.pop(originalArr[index]);
  printAllSubSequences(index + 1, originalArr, arr, n, sum);
};

printAllSubSequences(0, originalArr, [], originalArr.length, 0);
