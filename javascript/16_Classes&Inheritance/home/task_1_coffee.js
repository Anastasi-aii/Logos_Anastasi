function CoffeeMachine(name,
    power) {
      this.name = name;
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
      console.log(`Cup of coffee strength in ${CoffeeMachine.power}`)
    }, 2000);
  },

  setPower (userPower) {
    CoffeeMachine.power = userPower;
  },
}
 
  
const myCoffeeMachine = new CoffeeMachine('Ingrid',
    20);

 console.log(myCoffeeMachine.name);
 console.log(myCoffeeMachine.power);
 myCoffeeMachine.on();
 myCoffeeMachine.setPower(50);

 myCoffeeMachine.makeCoffee();

 myCoffeeMachine.off();
  

