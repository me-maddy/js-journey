function sort(arr, low, mid, high) {
  let right = mid + 1;
  let left = low;
  const tempArr = [];
  while (low <= mid && right <= high) {
    if (arr[low] <= arr[right]) {
      tempArr.push(arr[low]);
      low++;
    } else {
      tempArr.push(arr[right]);
      right++;
    }
  }

  while (low <= mid) {
    tempArr.push(arr[low]);
    low++;
  }

  while (right <= high) {
    tempArr.push(arr[right]);
    right++;
  }

  for (let i = left; i <= high; i++) {
    arr[i] = tempArr[i - left];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = parseInt((high + low) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  sort(arr, low, mid, high);
}

const arr = [5, 3, 4, 1, 2];
mergeSort(arr, 0, 4);
console.log(arr);
