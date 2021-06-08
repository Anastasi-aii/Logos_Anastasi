let select = document.getElementById('genres');

let thirdOption = document.createElement('option');

thirdOption.value = 'classic';
thirdOption.textContent = 'Классика';
thirdOption.selected = true;

select.append(thirdOption);

console.log (thirdOption);