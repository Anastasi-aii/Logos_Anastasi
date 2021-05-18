function CreateUser(userName, userSurname) {
  this.name = userName;
  this.surname = userSurname;
}

CreateUser.prototype = {
  sayHello() {
    console.log(`Привет, ${this.name} ${this.surname}`)
  }
};

let user1 = new CreateUser('Anastasia', 'B.');

user1.sayHello();

