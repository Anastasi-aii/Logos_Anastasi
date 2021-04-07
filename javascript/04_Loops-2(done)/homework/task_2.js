function num (num) {

  checkPrimary:
  for (let i = num; i = i; i++) {

    for (let j = 2; j < i; j++) {

      if (i % j == 0) continue checkPrimary;
    }

    return i;
  }
}

console.log (num (20));



  



