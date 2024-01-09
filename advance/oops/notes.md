## Prototype ==> means function prototype

## [[Prototype]] or **proto** ==> refers to the object's( {} ) proto or prototype

```javascript
console.log(Array.fill()); // it will throw an error because it can only be available in Array.prototype.fill(). But, we can't access it directly as Array.fill();

console.log(Array.prototype.fill()); // returns an empty object
```

- Prototype, in function, is an object that we get when we create a new function or use built-in function. It can be empty or have properties and methods. It can only be accessed by FunctionName.prototype.
- We can also set properties and methods inside the prototype of function using FunctionName.prototype.newPropertyName.

## Now, let's understand this concept of prototype by demonstration :-

```javascript
const obj = {
  username: "Madan",
  age: 24,
  qualification: "BCA",
};

console.log(obj.prototype); // this function prototype is not available in objects and it only present in functions.

console.log(obj.__proto__); // This is present in objects which is a reference of prototype of it's parent Function.

console.log(obj.__proto__ === Object.prototype); // returns true
```

- obj.**proto** === Object.prototype returns true.
- When we create a new object, either by new keyword or using literal, [[Prototype]] or **proto** of newly created objects has get a reference of prototype of it's parent Function.
- When we access properties in object(obj), javascript starts accessing from object's own property, if the property is not present in object's own properties then javascript checks that property inside [[Prototype]] or **proto** of an object. If that property present inside **proto** od an object then it returns that property. Otherwise, it can also be possible that another **proto** or [[Prototype]] is present inside the **proto** or [[Prototype]] of an object and then js also check properties of that **proto**. If that property match with any of **proto** property then it access that property. Otherwise, this linking of [[Prototype]] or **proto** to another [[Prototype]] or **proto** keeps going untill we find [[Prototype]] of global Object function which further linked with null [[Prototype]].
- This is what we called Prototypal-inheritance.
- One object can inherits properties and methods of another object, function prototype.
- Remember, objects only inherits the properties and methods of an object. And Function prototype is also an object.
- The chain of linking one [[Prototype]] to another [[Prototype]] goes on until last [[Prototype]] linked with null [[Prototype]].
- object can access properties and methods of [[Prototype]] and this [[Prototype]] can be present anywhere in prototypal-chain.
- Let's say we have object 'obj' and it's demonstration be like :
- obj ====> [[Prototype]] ====> [[Prototype]] ====> null
- This chain can be long as it can but at last it should linked to a null.
- This is a behaviour of javascript to search properties inside a [[Prototype]].
- It can also be possible that we can set [[Prototype]] of an object by ourself. This is happened in inheritance which actually sets the [[Prototype]] of an object. Behind the scenes, it actually sets the [[Prototype]] of an object with an another object. So that, one object can able to access properties and methods of an another object.

## Important conceps in js :-

- All strings, objects, arrays and prototype of functions, all inherit properties of global Object function inside the [[Prototype]] chain.
- String and Array are a function which has prototype. Inside this prototype, already defined properties and methods are present and this prototype is an object so obviously it has [[Prototype]] which is linked with prototype of Object function. Prototype of Object function is an object and has defined properties and methods are present and further this has [[Prototype]] which is linked with null [[Prototype]].
- This is the reason behind all strings, objects and arrays can be able to access properties and methods of prototype of Object function.
- Strings, Arrays, Function's prototype ========> Object.prototype ========> null

## Functions in js

- Functions in js, acts as a function but it can also act as an object.

```javascript
function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.set = "Setter";
multiplyBy2.get = "Getter";
console.log(multiplyBy2); // returns [Function: multiplyBy2] { set: 'Setter', get: 'Getter' }
console.log(multiplyBy2.get); // returns "Getter"
console.log(multiplyBy2.set); // returns "Setter"

console.log(multiplyBy2(5)); // acts as a normal function
console.log(multiplyBy2.prototype); //returns {}
console.log(multiplyBy2.prototype.__proto__); // returns prototype of global Object.

console.log(Object.prototype);
console.log(Object.prototype === multiplyBy2.prototype.__proto__); // returns true
```

## Let's create a new function to demonstrate the work that happened under the hood!

```javascript
function createUser(username, price) {
  this.username = username;
  this.price = price;
  //   return this;
}

createUser.prototype.increment = function () {
  //   console.log("Increment function");
  this.price++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.price}`);
};

// createUser.increment(); // throws an error
createUser.prototype.increment(); // it will work
createUser.prototype.printMe(); // it will work

// This will create new instances
const userOne = new createUser("Madan", 25);
const userTwo = new createUser("Hemraj", 24);

console.log(userOne.printMe()); // It will work and output : Price is 25
console.log(userTwo.printMe()); // It will work and output : Price is 24

console.log(userOne); // returns createUser { username: 'Madan', price: 25 }
console.log(userTwo); // returns createUser { username: 'Hemraj', price: 24 }

console.log(userTwo.__proto__); // returns reference of prototype of createUser function
console.log(userOne.__proto__); // returns reference of prototype of createUser function

console.log(userOne.__proto__ === userTwo.__proto__); // returns true
console.log(userOne.__proto__ === createUser.prototype); // returns true

console.log(userOne.__proto__.__proto__); // returns reference of prototype of global Object function

userOne.__proto__.trueLength = function () {
  console.log("True Length!");
};

console.log(createUser.prototype.trueLength()); // True Length!
console.log(userTwo.trueLength()); // True Length!
console.log(createUser.prototype);
console.log(userTwo.__proto__);

console.log(userTwo.__proto__ === createUser.prototype); // returns true
```

### Working of new keyword that does under the hood while creating a new instance from function.

1. It creates new empty object{}.
