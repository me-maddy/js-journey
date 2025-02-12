function maximumFrequency(arr, k) {
  arr.sort();
  let maxFreq = 0;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while ((right - left + 1) * arr[right] - sum > k) {
      sum -= arr[left];
      left++;
    }
    maxFreq = Math.max(maxFreq, right - left + 1);
  }
  return maxFreq;
}

const k = 5;
// const arr = [4, 2, 5, 6];
const arr = [1, 2, 4, 4];
console.log(maximumFrequency(arr, k));
