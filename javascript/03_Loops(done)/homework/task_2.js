let num = 127;

let firstNumeralNum = Math.floor(num / 100);

let secondNumeralNum = Math.floor(num / 10) % 10;

let thirdNumeralNum = num % 10;


let result = firstNumeralNum + secondNumeralNum + thirdNumeralNum;

console.log (result);
    