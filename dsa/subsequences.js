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

// printAllSubSequences(0, originalArr, [], originalArr.length, 0);

function printOneSubSequenceWhoseSumK(index, originalArr, arr, sum, K, n) {
  if (index === n) {
    if (sum === K) {
      console.log(arr);
      return true;
    }
    return false;
  }
  arr.push(originalArr[index]);
  if (
    printOneSubSequenceWhoseSumK(
      index + 1,
      originalArr,
      arr,
      sum + originalArr[index],
      K,
      n
    )
  )
    return true;

  arr.pop(originalArr[index]);
  if (printOneSubSequenceWhoseSumK(index + 1, originalArr, arr, sum, K, n))
    return true;

  return false;
}

// printOneSubSequenceWhoseSumK(0, originalArr, [], 0, 2, originalArr.length);

function countOfSubSequencesWhoseSumK(index, originalArr, sum, K, n) {
  if (index === n) {
    if (sum === K) {
      return 1;
    }
    return 0;
  }

  let l = countOfSubSequencesWhoseSumK(
    index + 1,
    originalArr,
    sum + originalArr[index],
    K,
    n
  );
  let r = countOfSubSequencesWhoseSumK(index + 1, originalArr, sum, K, n);
  return l + r;
}

const count = countOfSubSequencesWhoseSumK(
  0,
  originalArr,
  0,
  3,
  originalArr.length
);
console.log(count);
