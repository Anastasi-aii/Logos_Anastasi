function CoffeeMachine(name, coffeeName,
    power) {
      this.name = name;
      this.coffeeName = () => {
          if (coffeeName = /\b{3,10}/) {
            this.coffeeName = coffeeName;
          } else {
              console.log('не то');
          }
      }
      this.power = power;
      this.isOn = 0;
  }

CoffeeMachine.prototype = {
  on() {
    if (this.isOn === 0) {
      console.log(`${this.name} power on`);
      this.isOn = 1;
      return;
    }
  },

  off() {
    const powerOff = () => {
      this.isOn = 0;
      clearTimeout(this.timeToCoffee);
      console.log(`${this.name} power off`);
    } 


    if(!this.timeToCoffee) {
      powerOff()
    } else {
      setTimeout(powerOff, 2000);
    }
  },

  makeCoffee() {
    this.timeToCoffee = setTimeout(function() {
      console.log(`Cup of coffee strength in ${espressoMachine.coffeeName}`)
    }, 2000);
  },
}
 
  
const espressoMachine = new CoffeeMachine('Emma',
'espresso', 35);


espressoMachine.on();
espressoMachine.makeCoffee();
espressoMachine.off();
  




