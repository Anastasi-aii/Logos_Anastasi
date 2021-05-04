const passports = new Map();

passports.set('John', 12345);
passports.set(10, 'id123');

let johnSmith = {
  name: 'John',
  surname: 'Smith'
};

console.log(passports.size);

passports.clear();

console.log(passports.has(10)); // false
console.log(passports.has('John')); // true
