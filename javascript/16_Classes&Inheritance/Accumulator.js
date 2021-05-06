function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Введите число которое нужно добавить');
    };
  
  }
  
  let accumulator = new Accumulator(5);

  accumulator.read();
  accumulator.read();

  alert(accumulator.value);