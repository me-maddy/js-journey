function lcm(a, b) {
  let max = Math.max(a, b);
  for (let i = max; i <= a * b; i++) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}

const result = lcm(8, 0);
console.log(result);
