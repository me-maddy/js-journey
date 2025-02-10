function lcm(a, b) {
  let max = Math.max(a, b);
  for (let i = max; i <= a * b; i++) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}

function getLCMByEAlgo(a, b) {
  let a1 = a,
    b1 = b;
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return (a1 / a) * b1;
}

// const result = lcm(8, 0);
const result = getLCMByEAlgo(8, 8);
console.log(result);
