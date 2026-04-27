// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map (number => number +'');
console.log(strings);

// const numbers1 = [11,22,33,44,77];
// const strings1 = numbers1.map (number => number + '');
// console.log(strings1);