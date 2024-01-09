/**
 * Prototype ==> means function prototype
 * [[Prototype]] or __proto__ ==> refers the object's( {} ) proto or prototype
 */

// console.log(Array.prototype);
// console.log(Object.prototype);
// console.log(Object.__proto__);
// console.log({}.__proto__);

// console.log(Array.fill()); // it will throw an error because it can only be available in Array.prototype.fill(). But, we can't access it directly as Array.fill();

// console.log(Array.prototype.fill()); // returns an empty object

/**
 * Prototype, in function, is an object that we get when we create a new function or use built-in function. It can be empty or have properties and methods. It can only be accessed by FunctionName.prototype.
 * We can also set properties and methods inside the prototype of function using FunctionName.prototype.newPropertyName.
 */

/**
 * Now, let's understand this concept of prototype by demonstration :-
 */

// const obj = {
//   username: "Madan",
//   age: 24,
//   qualification: "BCA",
// };

// console.log(obj);
// console.log(obj.prototype); // this function prototype is not available in objects and it only present in functions.

// console.log(obj.__proto__); // This is present in objects which is a reference of prototype of it's parent Function.

// console.log(obj.__proto__ === Object.prototype); // returns true
/**
 * obj.__proto__ === Object.prototype returns true.
 * When we create a new object, either by new keyword or using literal, [[Prototype]] or __proto__ of newly created objects has get a reference of prototype of it's parent Function.
 * When we access properties in object(obj), javascript starts accessing from object's own property, if the property is not present in object's own properties then javascript checks that property inside [[Prototype]] or __proto__ of an object. If that property present inside __proto__ od an object then it returns that property. Otherwise, it can also be possible that another __proto__ or [[Prototype]] is present inside the __proto__ or [[Prototype]] of an object and then js also check properties of that __proto__. If that property match with any of __proto__ property then it access that property. Otherwise, this linking of [[Prototype]] or __proto__ to another [[Prototype]] or __proto__ keeps going untill we find [[Prototype]] of global Object function which further linked with null [[Prototype]].
 * This is what we called Prototypal-inheritance.
 * One object can inherits properties and methods of another object, function prototype.
 * Remember, objects only inherits the properties and methods of an object. And Function prototype is also an object.
 * The chain of linking one [[Prototype]] to another [[Prototype]] goes on until last [[Prototype]] linked with null [[Prototype]].
 * object can access properties and methods of [[Prototype]] and this [[Prototype]] can be present anywhere in prototypal-chain.
 * Let's say we have object 'obj' and it's demonstration be like :
 * obj ====> [[Prototype]] ====> [[Prototype]] ====> null
 * This chain can be long as it can but at last it should linked to a null.
 * This is a behaviour of javascript to search properties inside a [[Prototype]].
 * It can also be possible that we can set [[Prototype]] of an object by ourself. This is happened in inheritance which actually sets the [[Prototype]] of an object. Behind the scenes, it actually sets the [[Prototype]] of an object with an another object. So that, one object can able to access properties and methods of an another object.
 */
