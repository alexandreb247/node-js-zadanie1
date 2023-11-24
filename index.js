const { randomMinMax, randomString, randomArray } = require("./generator");

console.log('\x1b[32m%s\x1b[0m', 'Losowa liczba: ', randomMinMax(1, 1000));
console.log('\x1b[32m%s\x1b[0m', 'Losowy ciąg znaków: ', randomString(13));
console.log('\x1b[32m%s\x1b[0m', 'Losowa tablica: ', JSON.stringify(randomArray(1, 1000, 10)));