// const arr = new Array(7);
// const arr = Array(5);
const arr = ["Namste", "mitro", "Jai", "ho", "Prabhu"];

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
const newArr = arr.entries();
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

const trueArr = [];
// for (let item of newArr) {
//   const [index] = item;
//   trueArr[index] = item;
//   //   console.log(index);
// }

for (let item of newArr) {
  trueArr.push(item);
  //   console.log(item[1]);
}

trueArr.forEach((element, index, arr) => {
  //   console.log(element, index, arr);
  //   console.log(element, index);
  console.log(index + " : " + element[1]);
});

// console.log(trueArr);
// const trulyArr = Array.from(newArr);
// console.log(newArr);
// console.log(trulyArr);
// console.log(Array.from(newArr));
