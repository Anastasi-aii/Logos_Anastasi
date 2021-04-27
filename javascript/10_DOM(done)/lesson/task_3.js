let mainMenu = document.querySelector('.main-menu');

let footerCollection = document.getElementsByTagName('footer');

let footer = footerCollection.item(0);

let nav = mainMenu.cloneNode(true);

footer.appendChild(nav);

console.log(footer);

