function fractionalPart (a){
    let b = a - Math.floor(a);
    return b;
};

console.log (fractionalPart (-10.9345));