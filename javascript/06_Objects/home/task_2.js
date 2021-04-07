const list = [
    'Breaking Bad',
    'Game of Thrones',
    'Lost',
];
  
  list.push('Eight Sense');
  console.log(list[3]); // Eight Sense
  
  list.pop();
  console.log(list[3]); // undefined
  console.log(list[2]); // Lost
  
  list.shift();
  console.log(list[0]); // 'Game of Thrones'
  console.log(list[1]); // 'Lost'
  
  list.unshift('Babylon 5');
  console.log(list[0]); // 'Babylon 5'
  console.log(list[1]); // 'Game of Thrones'