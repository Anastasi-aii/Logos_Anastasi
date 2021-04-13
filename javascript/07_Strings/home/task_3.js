function checkCensorship (from) {
    let firstWord = from.indexOf('xxx');

    let secondWord = from.indexOf('bet');

    if (firstWord === -1 && secondWord === -1) {
        return false;
    } else {
    return true;
    }
}


console.log (checkCensorship ('gg bet gg'));

