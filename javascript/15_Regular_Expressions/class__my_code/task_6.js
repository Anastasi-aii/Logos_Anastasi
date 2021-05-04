

function parse(all) {
    let regexp = /-?(<a>\d+[\.\d+])?\s(<op>[/+/-/*//])\s-?(<b>\d+[\.\d+])?/;
    let result = all.match(regexp).result;

    
    return result;
}


console.log(parse("12 * 34"));

// console.log(num.matchAll.parse("1.2 * 3.4")); // 1.2
// console.log(op); // *
// console.log(b); // 3.4

