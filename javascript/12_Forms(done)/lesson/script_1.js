const form = document.querySelector('#first-form');

form.elements.first.value = 'name';
form.elements.galochka.checked = true;

const list = form.list;
list.querySelector('option:last-child').remove();

list.selectedIndex = 1;

// console.log(list.form.id);