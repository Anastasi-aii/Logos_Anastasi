function checkCensorship (from) {
    let firstWord = from.indexOf('xxx');

    let secondWord = from.indexOf('bet');

    if (firstWord === -1 && secondWord === -1) {
        console.log (from);
    } else {
    console.log ('так нельзя');
    }
}

checkCensorship ('gg gg bet');

