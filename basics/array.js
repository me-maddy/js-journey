// const arr = new Array(7);
// const arr = Array(5);
// const arr = ["Namste", "mitro", "Jai", "ho", "Prabhu"];

// ***********************fill method of Array*****************************
// console.log(arr.fill("5", 0, 3));
// console.log(arr.fill("5", 0, 4));

// ***********************Shallow copy of an Array*****************************
// const newArr = [].concat(arr).fill("5", 0, 4);
// const newArr = [...arr].fill("5", 0, 4);
// const newArr = arr.slice(0).fill("5", 0, 4);

// **************That shows the concept of reference**************************
// const newArr = arr;
// newArr[1] = "Sabhi ko";

// ****************** with() method of an Array****************************
// const newArr = arr.with(1, "Sabhi ko");
// const newArr = arr.with(-1, "Sabhi ko");

// ****************** at() method of an Array*****************************
// console.log(arr.at(2)); // Output :- Jai
// console.log(arr.at(-2));  // Output :- Jai

// *********************** copyWithin() ***********************************
// console.log(arr);
// const newArr = arr.copyWithin(0, 2);
// const newArr = arr.copyWithin(0, 2, 4);
// const newArr = arr.copyWithin(-5, 2, 4);
// const newArr = arr.copyWithin(-5, -3, 4);
// const newArr = arr.copyWithin(-5, -3);
// console.log(newArr);
// console.log(arr);

// Output :-
// ["Namste", "mitro", "Jai", "ho", "Prabhu"]
// ["Jai", "ho", "Prabhu", "ho", "Prabhu"]
// ["Jai", "ho", "Prabhu", "ho", "Prabhu"];

// ********************* entries() method ***********************
// const newArr = arr.entries();
// console.log(newArr); // retuns an iterable object
// console.log(newArr.length);  returns undefined
// console.log(Array.isArray(newArr));  Array.isArray() returns boolean value based on parameter.
// console.log(Array.from(newArr));  returns a new array that absolutely a true array
// console.log(Array.isArray(Array.from(newArr))); Array.isArray() returns boolean value based on parameter.
// console.log(newArr[0]);  Returms undefind because newArr is an iterable object (only iteration is applicable)
// console.log(arr);

// for (let [index, value] of newArr) {
//   console.log(index + " : " + value);
// } It will work on every iterable object

// newArr.forEach((element) => {
//   console.log(element);
// });
// forEach will not work on iterable objects. We need to convert iterable objects to Array using Array.from() and then use forEach loop.

// const trueArr = [];
// for (let item of newArr) {
//   const [index] = item;
//   trueArr[index] = item;
//   //   console.log(index);
// }

// for (let item of newArr) {
//   trueArr.push(item);
//   //   console.log(item[1]);
// }

// trueArr.forEach((element, index, arr) => {
//   //   console.log(element, index, arr);
//   //   console.log(element, index);
//   // console.log(index + " : " + element[1]);
// });

// console.log(trueArr);
// const trulyArr = Array.from(newArr);
// console.log(newArr);
// console.log(trulyArr);
// console.log(Array.from(newArr));

// const arr = [2, 4, 6, 8, 10];

// ***************** every() method *****************

// const pass = arr.every((item) => {
//   item++;
//   return item >= 3;
// });
// console.log(pass);

// ***************** filter() method *****************

// const filteredArr = arr.filter((item) => item > 4);
// console.log(filteredArr);

// ***************** find() method *****************
// const ele = arr.find((item) => item > 0);
// console.log(ele);

// ***************** findIndex() method *****************
// const index = arr.findIndex((item) => item > 4);
// console.log(index);

// ***************** findLast() method *****************
// const lastEle = arr.findLast((item) => item > 0);
// console.log(lastEle);

// ***************** findLastIndex() method *****************
// const lastIndex = arr.findLastIndex((item) => item > 4);
// console.log(lastIndex);

// ***************** keys() method *****************
// const keysArr = arr.keys();
// console.log(keysArr);
// console.log(Array.from(keysArr));

// ***************** values() method *****************
// const valueIterator = arr.values();
// console.log(valueIterator);
// console.log(Array.from(valueIterator));

// ***************** of() method *****************
// const newArr = Array.of(2, 5, 6);
// console.log(newArr);

// ***************** reduce() method *****************

// const result = arr.reduce((acc, current, index, array) => {
//   console.log(array);
//   return acc + current + index;
// }, -30);

// console.log(result);

// ***************** reduceRight() method *****************
// const result = arr.reduceRight((acc, current, index, array) => {
//   console.log(index);
//   return acc + current;
// }, 0);

// console.log(result);

// ***************** some() method *****************

// const result = arr.some((item) => item > 10);
// console.log(result);

// const arr = ["Hey", "there", "You", "Rock"];
// const arr = [2, 4, 12, 25, 50, 87, 14, 6, 8, 10];

// ***************** sort() method *****************
// const sortedArr = arr.sort((a, b) => b - a);
// const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);
