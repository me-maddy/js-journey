# Prototype ==> means function prototype

# [[Prototype]] or **proto** ==> refers the object's( {} ) proto or prototype

```javascript
console.log(Array.fill()); // it will throw an error because it can only be available in Array.prototype.fill(). But, we can't access it directly as Array.fill();

console.log(Array.prototype.fill()); // returns an empty object
```

- Prototype, in function, is an object that we get when we create a new function or use built-in function. It can be empty or have properties and methods. It can only be accessed by FunctionName.prototype.
- We can also set properties and methods inside the prototype of function using FunctionName.prototype.newPropertyName.
