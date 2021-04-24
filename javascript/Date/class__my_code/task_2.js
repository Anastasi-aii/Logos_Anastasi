const DATE = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {
    const weekNum = date.getDay();
    let weekWord;
    
    switch (weekDay) {
        case '0':
        weekWord = 'ПН';
        break;
        case '0':
        weekWord = 'ВТ';
        break;

        case '0':
        weekWord = 'СР';
        break;

        case '0':
        weekWord = 'ЧТ';
        break;

        case '0':
        weekWord = 'ПТ';
        break;

        case '0':
        weekWord = 'ПТ';
        break;

        case '0':
        weekWord = 'ПТ';
        break;
            
    }

    if (weekDay = 0) weekWord = 'ПН';
    if (weekDay = 1) return('ВТ');
    if (weekDay = 2) return('СР');
    if (weekDay = 3) return('ЧТ');
    if (weekDay = 4) return('ПТ');
    if (weekDay = 5) return('СБ');
    if (weekDay = 6) return('ВС');
}

console.log( getWeekDay(date) );        // нужно вывести "ВТ"