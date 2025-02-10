function checkForPrime(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (n / i !== i) {
        count++;
      }
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
}

console.log(checkForPrime(23));
