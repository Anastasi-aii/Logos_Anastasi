function CoffeeMachine(name, coffeeName,
    power) {
      this.name = name;
      this.coffeeName = coffeeName;
      this.power = power;
  }

  CoffeeMachine.prototype.on = function() {
    if (counter === 0) {
      console.log(`${this.name} power on`);
      espressoMachine.makeCoffee();
      counter = 1;
      return;
    }
  }

  let counter = 0;


  CoffeeMachine.prototype.makeCoffee = function() {
    let timer = setTimeout(function() {
      console.log(`Cup of ${espressoMachine.coffeeName}`)
    }, 2000);

    CoffeeMachine.prototype.off = function() {
      if (counter === 1) {
        counter = 0;
        clearTimeout(timer);
        console.log(`${this.name} power off`);
        return;
      } 
    }
  }




const espressoMachine = new CoffeeMachine('Emma',
'espresso', 35);

espressoMachine.on();

espressoMachine.makeCoffee();

espressoMachine.off();

