const isPalindrome = function (x) {
  const str = String(x);
  const subStr1 = str.slice(0, str.length / 2);
  const subStr2 = str
    .slice(str.length / 2)
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < subStr1.length; i++) {
    if (subStr1[i] !== subStr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("141441"));
