function getGCD(a, b) {
  for (let i = Math.min(a, b); i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

// Equidean Algorithm
function getGCDByEAlgo(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// const result = getGCD(7, 10);
const result = getGCDByEAlgo(8, 64);
console.log(result);
