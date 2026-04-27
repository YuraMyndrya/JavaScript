// – Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM' , 'JAVASCRIPT IS COOL'

//--------------------------------1------------------------------------
let s1 = 'HELLO WORLD';
const s1Lower = s1.toLowerCase();
let s2 = 'LOREM IPSUM';
const s2Lower = s2.toLowerCase();
let s3 = 'JAVASCRIPT IS COOL';
const s3Lower = s3.toLowerCase();
console.log(s1Lower + '\n' + s2Lower + '\n' + s3Lower);

//--------------------------------2------------------------------------

let str1 = 'HELLO WORLD';
let str2 = 'LOREM IPSUM';
let str3 = 'JAVASCRIPT IS COOL';

const strLower = [str1, str2, str3];
for (const str of strLower) {
    console.log(str.toLowerCase());
}


