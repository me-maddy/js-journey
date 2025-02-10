function sumOfAllDivisors(n) {
  let sum = 0;
  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (n / i != i) {
        sum += n / i;
      }
    }
  }
  return sum;
}

const result = sumOfAllDivisors(10);
console.log(result);
