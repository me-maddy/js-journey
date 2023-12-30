const obj = {
  name: "Madan",
  age: 24,
  detail: function () {
    console.log(this);
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    // console.log(`My name is ${name} and I am ${age} years old.`);// it will throw an error
  },
};

const info = obj.detail;
// info(); // Output - My name is undefined and I am undefined years old.
// obj.detail(); // Output - My name is Madan and I am 24 years old.
