// -----6_4---------
// function calc(a, b, callback) {
//     return callback(a, b);
// }
//
// console.log(calc(10, 20, (a, b) => {
//     return a + b;
// }));

// -----6_5---------
// function filter(arr, callback) {
//     let mass = [];
//     for (const item of arr) {
//         if (callback(item)) {
//             mass[mass.length] = item;
//         }
//     }
//     return mass;
// }
//
// console.log(filter([11, 22, 33, 44, 55],function (item) {
//     return item % 2 ===0;
// }));

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
];
// -----Універсальний фільтр / умови  if (callback(item)) - мається на увазі якщо  return user.age >30; дійсно так
// типу true то виведе в консоль, так можна запитати будь що
function filter(arr, callback) {
    let mass = [];
    for (const item of arr) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}

console.log(filter(users, function (user) {
    return user.age >30;
}));