function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let didSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (didSwap === false) {
      break;
    }
  }
}

// Another Approach :-
function bubbleSort1(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (didSwap === false) {
      break;
    }
  }
}

// const arr = [4, 2, 5, 8, 3, 1];
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
bubbleSort1(arr);
console.log(arr);
