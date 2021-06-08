

function CoffeeMachine(name,
    power) {
      this.name = name;
      this.power = power;
  }

  CoffeeMachine.prototype.on = function() {
    if (counter === 0) {
      console.log(`${this.name} power on`);
      myCoffeeMachine.makeCoffee();
      counter = 1;
      return;
    }
  }

  let counter = 0;




  CoffeeMachine.prototype.setPower = function (userPower){
    CoffeeMachine.power = userPower;
  }

  CoffeeMachine.prototype.makeCoffee = function() {
    let timer = setTimeout(function() {
      console.log(`Cup of coffee strength in ${CoffeeMachine.power}`)
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



  
const myCoffeeMachine = new CoffeeMachine('Ingrid',
    20);

 console.log(myCoffeeMachine.name);
 console.log(myCoffeeMachine.power);
 myCoffeeMachine.on();
 myCoffeeMachine.setPower(50);

 myCoffeeMachine.makeCoffee();

 myCoffeeMachine.off();
  

