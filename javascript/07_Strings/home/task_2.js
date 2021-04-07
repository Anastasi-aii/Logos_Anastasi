function checkComment (from) {
    let firstCheck = from.indexOf('//');

    let secondCheck = from.indexOf('/*');

    if (firstCheck === -1 && secondCheck === -1) {
        console.log ('false');
    } else {
    console.log ('true');
    }
}

checkComment ('/*вапвкак');
