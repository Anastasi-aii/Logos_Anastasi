class CreateUser {
  constructor(userName, userSurname) {
    this.name = userName;
    this.surname = userSurname;
  }

  sayHello() {
    console.log(`Привет, ${this.name} ${this.surname}`)
  }
}

let user2 = new CreateUser('Anastasia', 'S.');
user2.sayHello();