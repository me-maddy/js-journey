function countFrequency(arr) {
  const hashArr = new Array(arr.length).fill(0);

  //   Hashing
  for (let i = 0; i < hashArr.length; i++) {
    hashArr[arr[i]] += 1;
  }

  return hashArr;
}

const arr = [1, 2, 1, 4, 3, 4, 2, 1, 2];
console.log(countFrequency(arr));
