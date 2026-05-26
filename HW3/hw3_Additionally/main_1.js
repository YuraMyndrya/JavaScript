// ------------------------------1--–створити масив з:

// – з 5 числових значень
const numbers = [11, 22, 33, 44, 55,]
// const strings = [];
//
// for (let number of numbers) {
//     strings.push(number + "");
// }
// console.log(strings);
console.log(numbers);

// – з 5 стрінгових значень
const strings = ["A", "B", "C", "D", "E"];
console.log(strings);
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
console.log('--------1 revers---------');
strings.reverse();
console.log(strings);

console.log('--------2 revers---------');
reversed = [];
for (let s = strings.length - 1; s >= 0; s--) {
    reversed.push(strings[s])
}
console.log(reversed);

console.log ('--------5 arr reverse--------');
// – з 5 значень стрінгового, числового та булевого типу
const arr = [11, 22, 33, 44, 55, "A", "B", "C", "D", "E", true, false, true, false, true];
console.log(arr);
arr.reverse();
console.log(arr);

console.log('reversed_2 ');
reversed_2 = [];
for (let d = arr.length - 1; d >= 0; d--) {
    reversed_2.push(arr[d])
}
console.log(reversed_2);




// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
console.log('--------empty.reverse()-------revesed_3--------------')
const empty = [];
empty[0] = "F";
empty[1] = "G";
empty[2] = "H";
empty[3] = "I";
console.log(empty[1]);
empty.reverse();
console.log(empty);

console.log('--------for (let r = empty.length - 1-------revesed_3--------------')
revesed_3 =[];
for (let r = empty.length - 1; r >= 0 ; r--) {
    revesed_3.push(empty[r]);
}
console.log(revesed_3);

// -------------------------------------– є масив ---------------------------------------
// 1. перебрати його циклом while
const numbers_while = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let f = 0;
while (f < numbers_while.length) {
    console.log(numbers_while[f]);
    f++;
}

//     2. перебрати його циклом for
const numbers_for = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let v = 0; v < numbers_for.length; v++) {
    console.log(numbers_for[v]);
}

console.log('-------------перебрати циклом while та вивести  числа тільки з непарним індексом-------------------');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i < numbers_while.length) {
    if (i % 2 !== 0) {
        console.log(numbers_while[i]);
    }
    i++;
}

console.log('-----перебрати циклом for та вивести  числа тільки з непарним індексом-----');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let m = 0; m < numbers_for.length; m++) {
    if (m % 2 !== 0) {
        console.log(numbers_for[m]);
    }
}

console.log('-----перебрати циклом while та вивести  числа тільки парні  значення--------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
const numbers_2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let y = 0;
while (y < numbers_2.length) {
    if (numbers_2[y] % 2 === 0) {
        console.log(numbers_2[y]);
    }
    y++;
}

console.log('-----перебрати циклом for та вивести  числа тільки парні  значення--------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let y = 0; y < numbers_2.length; y++) {
    if (numbers_2[y] % 2 === 0) {
        console.log(numbers_2[y]);
    }
}

console.log('-----7. замінити кожне число, кратне 3, на слово “okten”-------');
// 7. замінити кожне число, кратне 3, на слово “okten”
const numbers_7 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let o = 0; o < numbers_7.length; o++) {
    if (numbers_7[o] % 3 === 0) {
        numbers_7[o] = "okten";
    }
}
console.log(numbers_7);

console.log('-----8 вивести масив у зворотньому порядку.------');
// 8. вивести масив у зворотньому порядку.
for (let x = numbers_7.length - 1; x >= 0; x--) {
    console.log(numbers_7[x]);
}
















