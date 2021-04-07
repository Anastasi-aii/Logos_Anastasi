let num;

function readNumber () {
    do {
        num = +prompt("Введите число", 12);
      } while (isNaN(num));  
      return num;
}
readNumber ();