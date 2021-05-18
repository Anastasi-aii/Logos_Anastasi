class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} прячется!`);
  }

  run(speed) {
    super.run(speed);
    this.hide();
  }
}

let rabbit = new Rabbit("Не кролик", "Длинные ушки");
rabbit.run(100);

User.staticMethod