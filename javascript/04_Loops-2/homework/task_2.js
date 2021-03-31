let num = 14;

checkPrimary:
for (let i = num; i++;) {

  for (let j = 2; j < i; j++) {

    if (i % j == 0) continue checkPrimary;
  }

  console.log(i);

  break;
}