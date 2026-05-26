//-Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// // конкретних індексів. Вивести в консоль всі його елементи в циклі.
const arr = [];
arr[0] = 'okten';
arr[1] = 'is';
arr[2] = 'cool';
arr[3] = 4;
arr[4] = 5;
arr[5] = true;
arr[6] = true;
arr[7] = false;
arr[8] = 'hello';
arr[9] = 10;

for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}

for (let item of arr) {
    console.log(item);
}

console.log('---через while--');
const arr2 = [];
arr2[0] = 'okten';
arr2[1] = 'is';
arr2[2] = 'cool';
arr2[3] = 4;
arr2[4] = 5;
arr2[5] = true;
arr2[6] = true;
arr2[7] = false;
arr2[8] = 'hello';
arr2[9] = 10;
let b = 0
while (b < arr2.length) {
    console.log(arr2[b]);
    b++;
}

console.log('---arr3--');
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
const arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110];
for (let c = 0; c < arr3.length; c++) {
    console.log(c + 1);
    document.write(c + 1 + "<br>");
}

document.write("<hr>")

for (let d = 1; d <= 10; d++) {
    console.log(d);
    document.write(d + "<br>");
}

console.log('---arr4--');
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i + '<br/>');
}

console.log('---arr5--');
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let f = 1; f <= 100; f += 2) {
    console.log(f);
    document.write(f + '<br/>');
}

console.log('---arr6--');
//– Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let g = 1; g <= 100; g++) {
    if (g % 2 === 0) {
        console.log(g);
        document.write(g + '<br/>');
    }

}

console.log('---arr7--');
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let h = 1; h <= 100; h++) {
    if (h % 2 !== 0) {
        console.log(h);
        document.write(h + '<br/>');
    }

}