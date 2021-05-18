let coffee = {
  power: 50
};

function CoffeeMachine(name,
    power) {
      this.name = name;
      this.power = power;
      this.__proto__= coffee;

      this.on() {
        console.log(this.name + 'power on');
      }

   
  }
  
  let  coffeeMachine = new CoffeeMachine('Ingrid',
    20);
  
console.log(coffeeMachine.name); 
console.log(coffeeMachine.power); 

coffeeMachine.on();
coffeeMachine.power.setPower(70);

coffeeMachine.makeCoffe();

coffeeMachine.off();