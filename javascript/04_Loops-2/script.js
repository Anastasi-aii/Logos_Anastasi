// //#1
// let sum = 7;


// while(true) {
//     let value = +prompt("Введите лисло которое делится на 7",' ');
    
//     if(value % sum === 0) {
//         alert('Верно');
//          break;
//     } else {
//         alert('Неверно');
//     }
// }







//#2

let counter = 1;
let product = 1;

while(counter <= 10) {
    counter++;
    if (counter % 2 !== 0) continue;

    product *= counter;
    alert(product);
}

