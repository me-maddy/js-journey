// Initialisation of an object

// const obj = {};
// const obj1 = Object("Object Hai Re");
// const obj2 = Object(true);
// const obj3 = Object({
//   name: "Madan",
//   age: 24,
//   fullname: { first: "Madan", last: "Sharma" },
// });

// const obj4 = new Object();

// console.log(obj1);
// console.log(obj2);
// console.log(typeof obj1);
// console.log(obj);
// console.log(obj3);
// console.log(obj4);

// *************** instanceof keyword **********************
// console.log(obj1 instanceof Object);

// **************** getPrototypeof() method *******************
// console.log(Object.getPrototypeOf(obj3));
// console.log(Object.getPrototypeOf(obj4));

// Initialisation of new object ****************************

// const obj = { name: "Madan", age: 24, qualification: "Graduation" };
// console.log(obj);
// const objString = obj.toString();
// console.log(obj.toString());
// const newObj = Object(objString);
// console.log(typeof objString);
// console.log(newObj);
// console.log(obj);

// ***********************Object.assign() method ***********************
// const obj = { name: "Madan", age: 24, qualification: "Graduation" };
// const obj1 = { name1: "Manjeet", age1: 23, qualification: "Graduation" };
// const newObj = Object.assign({ name: "Manjeet", last: "Sharma" }, obj);
// const newObj = Object.assign(obj1, obj);
// console.log(newObj);
// console.log(obj1);
// console.log(obj);

// ***********************Object.create() method ***********************
// const newObj = Object.create(obj);

// const newObj = Object.create(obj, {
//   name1: { value: "Manjeet", enumerable: true },
//   age1: { value: 23, enumerable: true },
// });

// console.log(newObj.name, newObj.age);
// console.log(newObj);

// ***********************Object.defineProperties() method ***********************
// const obj = {};
// Object.defineProperties(obj, {
//   name: { value: "Madan", enumerable: true },
//   age: { value: 24, enumerable: true, writable: true },
//   profession: { value: "Coding", enumerable: true, writable: true },
// });
// Object.defineProperties(obj, { name: "Madan" }); // =======> throws an Error
// obj.name = "Manjeet"; // It will not override name property of obj until writable is not true

// ***********************Object.defineProperty() method ***********************
// Object.defineProperty(obj, "name", {
//   value: "Madan",
//   enumerable: true,
//   writable: true,
// });
// Object.defineProperty(obj, "age", {
//   value: 24,
//   enumerable: true,
//   writable: true,
// });
// console.log(obj);
// console.log(obj.name);

// ***************************Object.entries()*************************
// const obj = { name: "Madan", age: 24, qualification: "Graduation" };
// const entries = Object.entries(obj);
// console.log(entries);
// console.log(entries[0]);
// obj.name = "Manjjet";
// console.log(obj);

// ***************************Object.freeze()*************************
// Object.freeze(obj);
// console.log(Object.freeze(obj));
// obj.name = "Manjeet"; ============> Not work when object frozen
// obj.first = "Ram";   ============> Not work when object frozen
// delete obj.age;   ============> Not work when object frozen
// console.log(obj);

// / ***************************Object.fromEntries()*************************
// const newObj = Object.fromEntries(entries);
// console.log(newObj);

// ***************************Object.getOwnPropertyDescriptor()*************************
// const obj = { name: "Madan", age: 24, qualification: "Graduation" };
// const desc1 = Object.getOwnPropertyDescriptor(obj, "name");
// console.log(desc1);

// ***************************Object.getOwnPropertyDescriptors()*************************
// const obj = { name: "Madan" };
// const desc2 = Object.getOwnPropertyDescriptors(obj);
// console.log(desc2);

// ***************************Object.getOwnPropertyNames()*************************
// const propertyNames = Object.getOwnPropertyNames(obj);
// console.log(propertyNames);

// ***************************Object.getOwnPropertyNames()*************************
// const propertySymbols = Object.getOwnPropertySymbols(obj);
// console.log(propertySymbols);

// ***************************Object.hasOwn()*************************
// console.log(Object.hasOwn(obj, "name"));
// console.log(Object.hasOwn(obj, "toString"));

// ***************************Object.prototype.hasOwnProperty()*************************
// console.log(obj.hasOwnProperty("name"));
// console.log(obj.hasOwnProperty("toString"));
