function printNumbers(from, to) {
  if (from > to) return;
  console.log(from);
  return setTimeout(() => printNumbers(++from, to), 1000);
}

let counter = 0;

console.log(counter++); //0
console.log(counter); //1
console.log(counter++); //1