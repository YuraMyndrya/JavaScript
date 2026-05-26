//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.

const numbers7 = [];
for (let i = 0; i < 10; i++) {
    numbers7.push(Math.floor(Math.random() * 100));
}
console.log(numbers7);

for (let i = 0; i < numbers7.length; i++) {
    if (numbers7[i] % 2 === 0) {
        console.log(numbers7[i]);
    }
}


console.log('---------');
const numbers7_1 = [11, 22, 33, 44, 55, 66, 77, 88, 89, 100];
for (let t = 0; t < numbers7_1.length; t++) {
    if (numbers7_1[t] % 2 === 0) {
        console.log(numbers7_1[t]);
    }
}


console.log('---------');
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const numbers7_2 = [101, 202, 303, 453, 545, 66, 77, 88, 89, 190];
const numbers7_2Copy = [];
for (const number7_2 of numbers7_2) {
    numbers7_2Copy.push(number7_2);
}
console.log(numbers7_2Copy);

console.log('----через--- [...numbers7_3]');
const numbers7_3 = [101, 202, 303, 453, 545, 66, 77, 88, 89, 190];
const copyArr = [...numbers7_3];// [...arr]; spread
console.log(copyArr);


// Дано масив: ['a', 'b','c'] . За допомогою циклу for зібрати всі букви в слово.
const arr7_4 = ['a', 'b', 'c'];
let word = [];// [] + 'a' = 'abc' перетворює на стрінгу
for (let f = 0; f < arr7_4.length; f++) {
    word = word + arr7_4[f];
}
console.log(word);

const arr7_5 = ['a', 'b', 'c'];
let word5 = '';
for (let f = 0; f < arr7_5.length; f++) {
    word5 = word5 + arr7_5[f];
}
console.log(word5);


console.log('----while----');
// За допомогою циклу while зібрати всі букви в слово.
const arr7_4While = ['a', 'b', 'c'];

let word6 = '';
let v = 0;

while (v < arr7_4While.length) {
    word6 = word6 + arr7_4While[v];
    v++;
}
console.log(word6);

console.log('----ForOf----');
// За допомогою циклу for of зібрати всі букви в слов
const arrForOf = ['a', 'b', 'c'];
let word7 = '';
for (let part of arrForOf) {
    word7 = word7 + part;
}
console.log(word7);













