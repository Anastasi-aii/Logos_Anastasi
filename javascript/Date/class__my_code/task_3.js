// function printNumbers(from, to) {
//     let i = from; 
//     setInterval(() => { 
//         if(i > to) {
//             clearSetInerval();
//         }
//         i++;
//         console.log(i);

//     }, 1000);

    
// };

// printNumbers(4, 10);



function printNumbers(from, to) {
    let i = from;
  
    setInterval(() => (function next() {
      console.log (i);
      if (i < to) {
        setTimeout(next, 1000);
      }
      i++;
    }),1000);
  }
  
  printNumbers(4, 10);