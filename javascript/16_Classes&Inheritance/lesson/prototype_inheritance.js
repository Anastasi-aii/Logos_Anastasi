let animal = {
  sayRough() {
    console.log('rough!');
  }
};

let rabbit = {
  name: 'rabbit',
};

let rabbitWhite = {
  name: 'rabbit',
};

rabbit.__proto__ = animal;
rabbitWhite.__proto__ = rabbit;
//[[Prototype]]

let dog = {
  name: 'dog'
};

let cat = {
  name: 'cat'
};

rabbitWhite.sayRough();