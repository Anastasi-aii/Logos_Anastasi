// Arrays

const primaryNumbers = [1, 2, 3, 5, 7, 11];

let [first, second, third, ...rest] = primaryNumbers;

console.log(first);
console.log(second);
console.log(third);
console.log(rest);

// Objects

const person = {
  name: 'John',
  surname: 'Smith',
  age: 42,
}

const { name } = person;
// const name = person.name;
// const surname = person.surname;

console.log(name);