let mainMenu = document.querySelector('.main-menu').innerHTML;

let footer = document.getElementsByTagName('footer').innerHTML;

// let newDiv = document.createElement('div');
// mainMenu.append(newDiv);
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.lastChild.append(div);


console.log (mainMenu);
console.log (footer);