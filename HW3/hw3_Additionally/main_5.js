// 1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.

const numbers = [];
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        numbers.push(i);
    }
}
console.log(numbers);

console.log('--------------------------');

const numbers2 = [];
for (let a = 1; a < 101; a++) {
    if (a % 2 !== 0) {
        numbers2.push(a);
    }
}
console.log(numbers2);

// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
const numbers3 = [];
for (let i = 0; i < 20; i++) {
    numbers3.push(Math.floor(Math.random() * 100));
}
console.log(numbers3);


console.log('------------кожен третій елемент-------------');
// 2. Вивести за допомогою console.log кожен третій елемент
for (number = 2; number < numbers3.length; number += 3) {
    console.log(numbers3[number]);
}


console.log('------------кожен третій елемент парний-------------')
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
const numbers3_1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 101, 18, 45, 6, 2, 11, 44, 75, 25];
for (let k = 2; k < numbers3_1.length; k += 3) {
    if (numbers3_1[k] % 2 === 0) {
        console.log(numbers3_1[k]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
const numbers4 = [11, 22, 34, 44, 55, 66, 77, 88, 98];
let numbers4_new = [];
for (let l = 2; l < numbers4.length; l += 3) {
    if (numbers4[l] % 2 === 0) {
        numbers4_new.push(numbers4[l]);
    }
}
console.log(numbers4_new);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
const numbers5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let m = 0; m < numbers5.length; m++) {
    if (numbers5[m+1] % 2 === 0) {
        console.log(numbers5[m]);
    }
}

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

const numbers6 = [100,250,50,168,120,345,188];

let sum= 0;

for (let n = 0; n < numbers6.length; n++) {
    sum = sum + numbers6[n];
}

let averageSum = sum/numbers6.length;
console.log(Math.floor(averageSum));


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const numbers7 = [];
const numbersX5 = [];

console.log('----------Рандомні 10 чисел------------')
for (let p = 0; p < 10; p++) {
    numbers7.push(Math.floor(Math.random()* 100));
}
console.log(numbers7);

console.log('-----------X5------------')
const numbers8 = [];
for (const numb of numbers7) {
    numbersX5.push(numb*5);
}
console.log(numbersX5);
// //Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// const numbersRandom = [];
// const X5 = []
// for (let k = 0; k < 10; k++) {
//     numbersRandom.push(Math.floor(Math.random()*100));
// }
//
// console.log('------------------------------------------');
// console.log(numbersRandom);
//
// for ( const numb of numbersRandom) {
//     X5.push(numb*5);
// }
// console.log(X5);


// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.


const arr8 = [true,'anna' ,50,168,'oksana', false,120];
const newArr8_Numbers = [];
for (let numb of arr8) {
    if (typeof numb === 'number') {
        newArr8_Numbers.push(numb);
    }
}
console.log(newArr8_Numbers);