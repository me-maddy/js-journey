function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;

      j--;
    }
  }
}

const arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);
