let UserName = prompt('Как тебя зовут?');
let UserAge = prompt("Сколько тебе лет?");

let welcome = (UserAge < 18) ?
  () => alert(`Привет, ${UserName}. Иди учи уроки!`) :
  () => alert(`Привет, ${UserName}. Добро пожаловать!`);

welcome();