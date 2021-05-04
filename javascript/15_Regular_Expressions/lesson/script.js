const DOMEN = 'Hello mail.com';

function testDOMEN(DNSTitle) {
  const regexp = /^(\w+\.)+\w+\b$/;
  return regexp.test(DNSTitle);
}

console.log(testDOMEN(DOMEN));

// BASICS AND SYMBOL CLASSES

// \d - number
// \s - space
// \w - word ('буква')

// \D - not number
// \s - not space
// \w - not word ('буква')

// . - any symbol

// ANCHORS

// ^ - a start of the string
// $ - an end of the string

// \b - limit of word

// Quantifiers

// {1} - count
// {2,5} - interval
// + is {1,}
// ? is {0,1}
// * is {0,}

//GROUPS