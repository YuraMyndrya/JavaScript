// – Перевести до великого регістру наступні стрінгові значення
// 'Hello world'
// 'lorem ipsum'
// 'javascript is cool'


let s1 = 'Hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';

const s1_1 = s1.toUpperCase();
const s2_2 = s2.toUpperCase();
const s3_3 = s3.toUpperCase();
console.log(s1_1);
console.log(s2_2);
console.log(s3_3);

console.log('---------------------')

let str1 = 'Hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

const stringsUppercase = [str1, str2, str3];
for (const string of stringsUppercase) {
    console.log(string.toUpperCase());
}

