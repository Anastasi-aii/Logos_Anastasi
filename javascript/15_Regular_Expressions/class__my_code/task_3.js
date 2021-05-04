const EMAIL = 'f_jv.j-f123@gmail.com-ua';

function testEMAIL (i) {
    const regexp = /^[\w\-\.]+\@(\w+\.+)+[\w-]+$/g;
    return regexp.test(i)
};

console.log(testEMAIL (EMAIL));