const date = new Date(); //now
new Date(0); //1 Jan 1970 00:00
new Date('2017-01-26'); // datestring

// DATE GETTING METHODS

/* new Date(year, month, date, hours, minutes, seconds, ms) */
new Date(2021, 4, 20, 0, 0, 0, 5); //20 May 2021

date.getFullYear(); //2021
date.getMonth(); // 3 / E = [0, 11]
date.getDate(); // E = [1, 31]

/* getHours(), getMinutes(), getSeconds(), getMilliseconds() */

date.getDay(); // E = [0, 6]

/*  getUTCFullYear(), getUTCMonth(), getUTCDay() */

date.getTime(); // <=> +date

// DATE SETTING METHODS

const today = new Date();

let tomorrow = new Date();
tomorrow.setDate(today.getDay()++);

/*

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

*/

//AUTOCORRECTION
new Date(2021, 4, 32, 0, 0, 0, 5); //1 June 2021

//DATE.NOW()
const now = Date.now(); //current timestamp

//DATE.PARSE()

//YYYY-MM-DDTHH:mm:ss.sssZ
const date = Date.parse('2012-01-26T13:51:50.417-07:00');

