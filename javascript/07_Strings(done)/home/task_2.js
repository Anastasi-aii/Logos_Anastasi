function checkComment (from) {
    let firstCheck = from.indexOf('//');

    let secondCheck = from.indexOf('/*');

    let thirdCheck = from.indexOf('*/');

    if (firstCheck === -1 && secondCheck === -1) {
        if(thirdCheck === -1) {
            console.log ('false');
        }
    
        if (thirdCheck > -1) {
            if(secondCheck === -1) {
                console.log ('false');
            }
        } 
        
        if (secondCheck > -1) {
            if(thirdCheck === -1) {
                console.log ('false');
            } 
        }
    } else {
        console.log ('true');
    }
}

checkComment ('');
