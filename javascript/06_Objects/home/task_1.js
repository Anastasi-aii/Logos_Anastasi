const smithObj = {
    name: '',
    surname: ''
}

function User (name, surname) {
    smithObj.name = name;
    smithObj.surname = surname;
    return (`Добро пожаловать, ${smithObj.name} ${smithObj.surname}!`);
}
alert (User ('Джон', 'Смит'));
