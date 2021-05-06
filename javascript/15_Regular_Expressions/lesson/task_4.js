function parse(all) {
  let regexp = /(-?\d+[\.\d+]?)\s([\+\*\/-])\s(-?\d+[\.\d+]?)/;
  let result = all.match(regexp);

  const resultList = [result[1], result[2], result[3]];

  return resultList;
}


const [num1, op, num2] = parse("1 + 2");
console.log(num1);
console.log(op);
console.log(num2);