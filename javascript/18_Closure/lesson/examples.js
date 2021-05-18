// Functions

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
    name = "Vasya";
  };
}

let name = "John"; // LexicalEnvironment.EnvironmentRecord.name

// create a function
let work = makeWorker(); // LexicalEnvironment.EnvironmentRecord.work

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

// Conditions

const age = 20;

if (age > 18) {
  let message = 'Hello!';
  console.log(message);

  {
    console.log(message);
  }
}

// Loops

for (let i = 0; i < 5; i++) {
  let basic = 5;
  basic++;
  console.log(basic);
}

//IIFE

(function () {
  let counter = 10;
})(); // ES5-

{
  "use strict"
  let counter = 10; //ES6+
}

// new Function()
let sayHi = new Function('alert("sayHi")'); // Не замыкание!