const list = {
    1: 'Breaking Bad',
    2: 'Game of Thrones',
    3: 'Lost',
    4: 'петя',
    5: 'Vasya',
    6: 'Lena',
    7: 'lilya',
  
};



// function push (pushWord) {
//   if (pushWord !== undefined) {
//     let counter = 0;
//     for (let end in list){
//         counter++
//     }
//     list[counter+1] = pushWord;
//   }
// };

// push ('Eight Sense');



// function pop () {
//   let counter = 0;
//   for (let end in list){
//     counter++
//   }
//   delete list[counter];
// }

// pop ();



// function shift () {
//   let counter = 0;
//   for (let end in list) {
//     counter++
    
//     let i = counter;
//     if (i >= 1) {
//       list[i++] = list[i];
//     }
//   }
//   delete list[counter];
// }

// shift ();



function unshift (unshiftWord) {
  list[8] = '';
  let counter = 0;
  for (let end in list) {
    counter++
  }

  let i = counter;
  for (let end in list) {
    if (i >= 2) {
      list[i--] = list[i];
      console.log(i);
    }
  }
  
  list[1] = unshiftWord;
}

unshift ('lesya')



console.log(list);

