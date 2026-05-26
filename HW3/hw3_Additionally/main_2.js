// --1--Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log("--1--");
const numbers3 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
for (let number of numbers3) {
    console.log(number);
}

console.log("--2--");
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
const strings3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let number of strings3) {
    console.log(number);
}

console.log("--3--");
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arr3 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let item of arr3) {
    console.log(item);
}

console.log("--4--");
// – Створити масив з 10 елементів числового, стрінгового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
const arr3_2 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let item of arr3_2) {
    if (typeof item === 'boolean') {
        console.log(item);
    }
}

const arr3_3 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let a = 0; a < arr3_3.length; a++) {
    if (typeof arr3_3[a] === 'boolean') {
        console.log(arr3_3[a]);
    }

}

//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
console.log("--5--");
const arr3_4 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let item of arr3_4) {
    if (typeof item === 'number') {
        console.log(item);
    }
}

const arr3_5 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let b = 0; b < arr3_5.length; b++) {
    if (typeof arr3_5[b] === 'number') {
        console.log(arr3_5[b]);
    }
}

console.log("--6--");
//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
const arr3_6 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let item of arr3_6) {
    if (typeof item === 'string') {
        console.log(item);
    }
}

const arr3_7 = [11, true, 'three', 'four', 'five', 66, 77, false, 88, true, 'ten'];
for (let c = 0; c<arr3_7.length; c++) {
    if (typeof arr3_7[c] === 'string') {
        console.log(arr3_7[c]);
    }
}





