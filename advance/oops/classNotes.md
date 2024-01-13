## All about classes and things that happened under the hood -

### Javascript is a prototype-based language and classes are syntactic sugar over prototype-chain.

- JavaScript classes still use the prototype chain for inheritance, and the class syntax is essentially a more concise way to create constructor functions and prototypes. It doesn't introduce a new object-oriented model but rather provides a more familiar and cleaner syntax for working with prototypes.

### Let's take some examples :-

```javascript
class CreateUser {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  getInfo() {
    console.log(`${this.username} is ${this.age} years old.`);
  }
}

console.log(CreateUser.prototype.getInfo()); // output :- undefined is undefined years old.
const user1 = new CreateUser("Madan", 23);

console.log(user1); // output :- CreateUser { username: 'Madan', age: 23 }
console.log(user1.getInfo()); // output :- Madan is 23 years old.
console.log(user1.__proto__ === CreateUser.prototype); // output :- true
console.log(user1.__proto__.hasOwnProperty("getInfo")); // output :- true

const user2 = new CreateUser("Manjeet", 21);
console.log(user2); // output :- CreateUser { username: 'Manjeet', age: 21 }
console.log(user2.getInfo()); // output :- Manjeet is 21 years old.

console.log(user1.__proto__.getInfo === user2.__proto__.getInfo); // output :- true
```

- Above same thing can be achieved by creating a function:-

```javascript
function CreateUser(username, age) {
  this.username = username;
  this.age = age;
}

CreateUser.prototype.getInfo = function () {
  console.log(`${this.username} is ${this.age} years old.`);
};

// CreateUser.prototype.getInfo(); // output :- undefined is undefined years old.

const user1 = new CreateUser("Madan", 23);
console.log(user1); // output :- CreateUser { username: 'Madan', age: 23 }
user1.getInfo(); // output :- Madan is 23 years old.

const user2 = new CreateUser("Manjeet", 21);
console.log(user2); // output :- CreateUser { username: 'Manjeet', age: 21 }
user2.getInfo(); // output :- Manjeet is 21 years old.
```

- This can show that classes are just a syntactic sugar and underneath javaScript classes still use the prototype chain for inheritance.

### Now, let's understand the inheritance:-

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  getUser() {
    console.log(`Your username is ${this.username}`);
  }
}

class Admin extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  getUserDetails() {
    console.log(
      `Your name is ${this.username} and your email is ${this.email} with ********** password.`
    );
  }
}

User.prototype.sayMyName = function () {
  console.log(`My name is ${this.username}`);
}; // it can possible

console.log(Admin.prototype.__proto__ === User.prototype); // output :- true
Admin.prototype.sayMyName(); it will work

const admin1 = new Admin("Madan", "care@google.com", "12345678");
console.log(admin1);
admin1.getUserDetails();
admin1.getUser();
admin1.__proto__.getUserDetails();
admin1.__proto__.getUser();

admin1.sayMyName(); // it will work output :- My name is Madan

// So, it means we can also define function outside the class.

const admin2 = new Admin("Manjeet", "gaga@meta.com", "1452335");
admin2.sayMyName(); // output :- My name is Manjeet
console.log(admin1 === admin2); // output :- false
console.log(admin1.__proto__ === admin2.__proto__); // output :- true

console.log(
  admin1.__proto__ === Admin.prototype && admin2.__proto__ === Admin.prototype
); // output :- true

console.log(
  admin1.__proto__.__proto__ === Admin.prototype.__proto__ &&
    admin2.__proto__.__proto__ === Admin.prototype.__proto__
); // true

console.log(admin1.__proto__.__proto__ === User.prototype); // true

const user1 = new User("Madan");
console.log(user1);
// user1.getUserDetails(); // throws an error because base class object(instances) can't able to access properties and methods of derived class.
user1.getUser(); // output :- Your username is Madan

```

- This same thing can also be achieved by creating a function

```javascript
function User(username) {
  this.username = username;
}

User.prototype.getUser = function () {
  console.log(`Your username is ${this.username}`);
};

function Admin(username, email, password) {
  User.call(this, username); // This syntax can be replaced by 'super' keyword in class.
  this.email = email;
  this.password = password;
}

Admin.prototype.getUserDetails = function () {
  console.log(
    `Your name is ${this.username} and your email is ${this.email} with ********** password.`
  );
};

const admin1 = new Admin("Madan", "care@google.com", "12345678");
console.log(admin1); // output :- Admin {username: 'Madan',email: 'care@google.com',password: '12345678'}
admin1.getUserDetails(); // output :- Your name is Madan and your email is care@google.com with ********** password.

admin1.getUser(); // throws an error because we havn't set proto of prototype of function admin

For accessing properties and methods of User function prototype, we can do the following thing :-

Admin.prototype.__proto__ = User.prototype;

Now, we can able to access this 'admin1.getUser();'

admin1.getUser(); // output :- Your username is Madan

// So, same inheritance(just like classes) can be achieved in function.

const admin2 = new Admin("Manjeet", "gaga@meta.com", "1452335");
console.log(admin2); // output :- Admin { username: 'Manjeet', email: 'gaga@meta.com', password: '1452335'}
admin2.getUserDetails(); // output :- Your name is Manjeet and your email is gaga@meta.com with ********** password.
admin2.getUser(); // output :- Your username is Manjeet

```

### Let's take another example:-

```javascript
class Car {
  getDetails() {
    console.log("Latest Car!");
  }

  getName() {
    return "Manjeet";
  }
}

class Tata extends Car {
  constructor(username) {
    super();
    super.username = username;
  }
  getDetails() {
    console.log("This is the latest car by Tata. " + super.getName());
  }
}

const carUser = new Car();
const carUser2 = new Tata("Ratan Tata");
const carUser3 = new Car();
console.log(carUser);
console.log(carUser2);
console.log(carUser3);
carUser.getDetails();
carUser2.getDetails();
```

- Now, have a look below example and compare this with above example:-

```javascript
function Car() {}
Car.prototype.getDetails = function () {
  console.log("Latest Car!");
};
Car.prototype.getName = function () {
  return "Manjeet";
};

function Tata(username) {
  this.username = username;
}

Tata.prototype.getDetails = function () {
  console.log("This is the lastest car by Tata.");
};

Tata.prototype.__proto__ = Car.prototype;

const car1 = new Tata("Madan");
console.log(car1); output :- Tata { username: 'Madan' }
car1.getDetails(); // output :- This is the lastest car by Tata.
console.log(car1.getName()); // output :- Manjeet

Tata.prototype.sayMyName = function () {
  console.log(Car.prototype.getName());
};

car1.sayMyName(); // output :- Manjeet

```
