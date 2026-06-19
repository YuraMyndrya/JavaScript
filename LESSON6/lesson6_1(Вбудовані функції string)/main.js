let str = 'HeLLo oktenL';
console.log(str);

// ---1---- метод для з’єднання рядків
// let s = str.concat('!!!')    // -----concat---- ЦЕ метод для з’єднання рядків
// console.log(s);

// ---2---- перехід в Верхній та нижній регістр
// console.log(str.toUpperCase()); // -----toUpperCase---- перевод у  Верхній регістр
// console.log(str.toLowerCase());// -----toUpperCase---- перевод у нижній Верхній регістр


// ---3---- перевірка на точне  співпадіння символів початку рядка та кінець рядка
// console.log(str.startsWith('HeL')); // початку рядка
// console.log(str.endsWith('enLL')); // кінець рядка

// ---4---- обрізає все до перших a-х індексів включно, та починаючи з b-го ... індексу все теж обрізає (a,b)
// console.log(str.substring(2,7));

// ---5---- щоб знайти індекс символу в рядку
// console.log(str.indexOf('L'));

// ---6---- щоб знайти індекс символу в рядку (якщо однакові символи то останній)
// console.log(str.lastIndexOf('L'));

// ---7---- щоб знайти індекс символу в рядку (починаючи з певної позиції)
// console.log(str.indexOf('o',5));

// ---8---- щоб знайти по індексу символ
// console.log(str.charAt(7)); //"k"

// ---9---- заміна першого входження 'e' міняється на '!'
// console.log(str.replace('e','!'));

// ---10---- заміна всіх входжень, всі 'e' міняються на '!'
// console.log(str.replaceAll('e','!'));
// console.log(str.replaceAll('eLL','!'));
// console.log(str.replaceAll('eLL','!qwedwrwqfe'));


// ---11---- розділяє все що в (' ') на окремі об'єкти
// console.log(str.split(' '));
// let some_split = str.split(' ');
// console.log(some_split);

