function calculator (){
    
    
    let read = function(num1, num2) {
        num1 = prompt('введите первое число')
        num2 = prompt('Введите второе число')

          
    this.num1 = num1;
    this.num2 = num2;
    }
        
    this.sum = num1 + num2;
    this.mul = num1 * num2;

};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );