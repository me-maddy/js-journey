const obj1 = {
  username: "Madan",
  age: 23,
  getDetails() {
    console.log(this);
    console.log(`${this.username} is ${this.age} years old.`);
  },
};

const obj2 = {
  username: "Manjeet",
  age: 21,
};

// console.log(obj1);
// obj1.getDetails();

// obj1.getDetails.call(obj2);
const func = obj1.getDetails.bind(obj2);
// console.log(func);
func();
console.log(func === obj1.getDetails);
