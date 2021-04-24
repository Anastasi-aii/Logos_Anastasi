let clientsArray = [];

clientsArray.push('John');
clientsArray.push('Peter');
clientsArray.push('Tom');
clientsArray.push('John');

// console.log(clientsArray.length); // 4
// console.log(clientsArray); //1,1,2,3

let clientsSet = new Set();

clientsSet.add('John');
clientsSet.add('Peter');
clientsSet.add('Tom');
clientsSet.add('John');

// console.log(clientsSet.size);
// console.log(clientsSet);

// // has, delete, clear

// clients.has('John'); // true
// clients.has('Jon'); // false

// clients.delete('John'); // true
// clients.has('John'); // false

// clients.clear();
// clientsSet.size; // 0

//Itterating

for (let elem of clientsSet) {
  console.log(elem);
}

