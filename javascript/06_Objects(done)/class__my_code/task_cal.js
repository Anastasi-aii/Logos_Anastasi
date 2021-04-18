

let calculator = {
    first: 0,
    second: 0,

    read(first, second) {
        this.first = first;

        this.second = second;
           },

           sum() {
            return this.first + this.second;
           },

           mul() {
            return this.first * this.second;
           }
  };

  calculator.read(10, 2);
  console.log( calculator.sum() );
  console.log( calculator.mul() );