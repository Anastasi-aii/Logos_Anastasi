

let pow = function (x, n) {
    let result = x;
       for (let i = 1; i < n; i++) {
           result *= x;  
       }
       console.log (result);
}

pow (4, 4);