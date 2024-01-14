// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//   }

//   getName() {
//     return this.username;
//   }

//   static age = 23;

//   static sayMyName() {
//     return this;
//   }

//   static myAge() {
//     return this.age;
//   }
// }

// const user1 = new User("Madan", "mshrma@gmail.com");
// console.log(user1); // output :- User { username: 'Madan', email: 'mshrma@gmail.com' }
// console.log(user1.sayMyName()); // throws an error and state that sayMyName is not a function
// console.log(user1.getName()); // output :- Madan
// console.log(User.sayMyName()); // output :- [class User] { age: 23 }
// console.log(User); // output :- [class User] { age: 23 }
// console.log(user1.myAge()); // throws an error and state that myAge is not a function
// console.log(User.myAge()); // output :- 23

// ******** Create a new class to demonstrate class inheritance

class Car {
  constructor(name) {
    this.name = name;
  }

  static price() {
    return 700000;
  }
}

class Thar extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  getDetails() {
    return `This is ${this.name} with ${this.model} model.`;
  }
}

const car1 = new Thar("Thar", "XUZ");
console.log(car1);
// console.log(car1.price()); // throws an error
console.log(Thar.price());
console.log(Car.price());
console.log(Car.__proto__); // output :- object{}
console.log(Thar.__proto__);
console.log(Car === Thar.__proto__); // output true;
