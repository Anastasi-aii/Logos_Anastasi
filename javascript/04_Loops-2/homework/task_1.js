
let sum = 0;

for(num = 1; num <= 60; num++) {

    if (num % 3 == 0 && num % 2 == 0) {

        sum += num;

        console.log(sum);
    }
}