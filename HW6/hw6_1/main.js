// – Знайти та вивести довжину наступних стрінгових значень
// 'Hello world'
// 'lorem ipsum'
// 'javascript is cool'

let str1 = 'Hello world';
let str2 = 'lorem ipsum';
let str3= 'javascript is cool';

const stringsLength= [str1, str2, str3];
for (const string of stringsLength) {
    console.log(string.length);
}