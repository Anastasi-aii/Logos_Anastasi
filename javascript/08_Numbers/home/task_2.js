

function sum (a, b) {
    a = String(a);
    b = String(b);

    const unit1 = getUnit(a);
    const unit2 = getUnit(b);

    if(!(unit1 && unit2) || unit1 !== unit2) {
        return 'Error';
    } 

    const unit = getUnit(a);
    const result = parseInt(a) + parseInt(b);

    return result + unit;

    function getUnit(str) {
        const UNITS = ['em', 'px', '%'];
        let currentUnit;

        for(let unit of UNITS) {
            if(str.includes(unit)) currentUnit = unit;
        }
        return currentUnit;
    }
}

console.log(sum('100px', '50px')) // 150px
console.log(sum('10%', '50%')) // 60%
console.log(sum('10%', '100px')) // Error
console.log(sum('10', 1)) // Error