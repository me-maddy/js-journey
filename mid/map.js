// const myMap = new Map();
// // console.log(myMap); // Map(0) {}

// myMap.set("a", "first");
// myMap.set(NaN, "not a number");
// myMap.set(2, "Two");

// console.log(myMap); // Map(3) { 'a' => 'first', NaN => 'not a number', 2 => 'Two' }
// console.log(myMap.get(NaN)); //Output --> not a number
// console.log(myMap.get(5)); // undefined
// console.log(myMap.has(5)); // false
// console.log(myMap.has(2)); // true
// console.log(myMap.size); // 3
// console.log(myMap.delete(5)); // false
// console.log(myMap.delete(2)); // true
// console.log(myMap.size); // 2
// console.log(myMap.clear()); // returns undefined
// console.log(myMap.size); // 0

//  ***************** for of loop in Map*************************

// for (const item of myMap) {
//   console.log(item);
// }

// for (const [key, value] of myMap) {
//   console.log(`${key} : ${value}`);
// }

// ****************** forEach loop in Map******************************

// myMap.forEach((item) => {
//   console.log(item);
// });

// myMap.forEach((value, key, arr) => {
//   console.log(`${key} : ${value}`);
//   console.log(arr);
// });

// for (const key in myMap) {
//   console.log(key);
// }    // for in loop don't work on Map

//*****************entries() in Map************************ */
// const mapEntries = myMap.entries();
// console.log(mapEntries);

// for (const key in mapEntries) {
//   console.log(key);
// }   // ----------> not work

// for (const i of mapEntries) {
//   console.log(i);
// }

// mapEntries.forEach((element) => {
//   console.log(element);
// });  // throws an error

//********************values() in Map********************** */
// const mapValues = myMap.values();
// console.log(mapValues);

// for (const key in mapValues) {
//   console.log(key);
// } // ----------> not work

// for (const i of mapValues) {
//   console.log(i);
// }

// mapValues.forEach((element) => {
//   console.log(element);
// }); // throws an error

// ***************** keys() in Map******************** */
// const mapKeys = myMap.keys();
// console.log(mapKeys);

// for (const key in mapKeys) {
//   console.log(key);
// } // ----------> not work

// for (const i of mapKeys) {
//   console.log(i);
// }

// mapKeys.forEach((element) => {
//   console.log(element);
// }); // throws an error

// Array.from(mapKeys).forEach((item) => console.log(item));
// const iterable = [5, 8];

// const myMap = new Map([
//   ["a", "first"],
//   ["b", "second"],
//   [1, "one"],
//   [NaN, "not a number"],
//   iterable,
// ]);
// console.log(myMap);
// const aar = Array.from(myMap);
// console.log(aar);

// const myMap = new Map([
//   [1, "one"],
//   [2, "two"],
// ]);
// const myMap1 = new Map([
//   [5, { name: "Madan" }],
//   [3, "three"],
//   [4, "four"],
// ]);
// const myMap2 = new Map([...myMap, ...myMap1]);
// console.log(myMap2);
// console.log(myMap2.get(5));
// myMap2.get(5).name = "Manjeet";
// myMap2.set(5, { name: "Manjeet" });
// console.log(myMap2.get(5));
// console.log(myMap2);
// console.log(myMap1);
