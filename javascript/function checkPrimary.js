function checkPrimary(number) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(i);
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

console.log(checkPrimary(1001));