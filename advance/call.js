function setUserName(username) {
  this.username = username;
  console.log(this);
}

function createUser(username, email, password) {
  setUserName.call(this, username); // call() function only changes the reference of 'this' inside a setUserName() with the first argument object.
  this.email = email;
  this.password = password;
}

const user1 = new createUser("Madan", "chakadbangdu@fb.com", "123456");
console.log(user1); // returns createUser { username: 'Madan', email: 'chakadbangdu@fb.com', password: '123456'}

// user1.setUserName("Manjeet"); // throws an error, setUserName is not a function because this function is defined in a proto-chain of user1 object.

// setUserName("Manjeet");
