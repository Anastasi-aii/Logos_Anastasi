const age = prompt('Сколько Вам лет?');

let message;

message = (age >= 18)? '1':'0'; 

if (age >= 18) {
    message = '1';
} else {
    message = '0';
}