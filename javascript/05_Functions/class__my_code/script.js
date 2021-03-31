// function name() {
//     alert( 'Anastasiia' );
//   }


//   for (let i = 0; i < 10; i++) {
//     name();
//   }
 
  
// function logName () {
//     let i = ('Anastasia');
//     console.log(i);
// }

// lodName();





// let i = 12;
// function increaseI () { 
//     let g = 10;
//     i = i + g;
// }

// increaseI  ();
// console.log(i);








// function logFirst10Num (num) {
//     for (num; num >= 1; num--) {
//             console.log (num); 
//         }
//     }
//     logFirst10Num (100);








// let sum = 0;
// function logFirst10Num (num= 10) {
//     for (num; num >= 0; num--) {
//         sum += num;
//         console.log (sum);     
//     }
// }
//     logFirst10Num ();








// function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   let result = sum(1, 2, 4);
//   console.log(result);







// function checkAge (yourAge) {
//  if (yourAge > 18) {
//      console.log ('true');
//  } else {
//     console.log ('false');
//  }
// }
// checkAge(20);







function checkPrimary (num) {
let result = true;

 for (let i = 1; i < num; i--) {
     if (num % i !== 0) {
         result = num;
         
     } else {
        console.log('false'); 
     }
     
    }
    console.log('true');
    return result;
    }

checkPrimary (8);