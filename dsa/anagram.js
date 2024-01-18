// ************* First Approach *************
// const isAnagram = function (str1, str2) {
//   if (str1.length !== str2.length) return false;
//   for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i])) {
//       str2.replace(str1[i], "");
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// ************ Second approach ***********
// const isAnagram = function (str1, str2) {
//   if (str1.length !== str2.length) return false;
//   const string1 = str1.split("").sort().join("");
//   const string2 = str2.split("").sort().join("");
//   return string1 === string2;
// };

// ********** Third approach *************
const isAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram("silent talent", "listen talent"));
