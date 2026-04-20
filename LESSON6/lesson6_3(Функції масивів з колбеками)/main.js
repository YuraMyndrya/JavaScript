let users = [
    {name: 'vasya', age: 31, status: true},
    {name: 'petya', age: 30, status: false},
    {name: 'kolya', age: 29, status: false},
    {name: 'olya', age: 28, status: true},
    {name: 'max', age: 30, status: false},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: true},
    {name: 'andrey', age: 29, status: false},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: false},
];

// users.forEach(function (value) {
//     console.log(value);
// });
//
// //--------------forEach------------метод масиву, який перебирає кожен елемент і виконує функцію

// users.forEach(value => console.log(value));
// users.forEach((value, index) => console.log(value, index)); // ---без {} коли 1 дія
// users.forEach((value, index) => {
//     console.log(value);
//     console.log(index)
// }); // --- з {} коли більше 1 дії

//--------------filter------------метод масиву, який залишає тільки елементи, що підходять під умову
// // let filteredUsers = users.filter(function (value) {
// //     return value.age>30;
// // })
// // console.log(filteredUsers);
//
// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);
//
// // let filtUsrs = users.filter(function (value) {
// //     return value.age < 29;
// // });
// // console.log(filtUsrs);
//
// let filt = users.filter(value => value.age < 29);
// console.log(filt);

// //--------------map-------------- //  перетворює/щось
// додає(id наприклад)/змінює  кожен елемент масиву через колбек-функцію іповертає новий масив
//
// const newArrayUsers = users.map((value, index) => {
//     return {name: value.name, age: value.age, status: value.age, id: index + 1};
// });
// console.log(newArrayUsers);

// //--------------find-------------- // шукає перший об'єкт за умовою і повертає його
// const find = users.find(value => value.name === "max")
// console.log(find);

// //----------------every--------якщо всі елементи true , повернить true,а якщо хоч 1 елемент false , повернить false
// console.log(users.every(value => value.status));// якщо всі то true

//----------------some--------якщо хоч 1 елемент true , повернить true, якщо жодного  то  false , повернить false
// console.log(users.some(value => value.status)); // якщо хочаб один то  то false

//-----------sort-------сортує елементи масиву від > до < , та по name/
// users.sort((u1, u2) => {
//     return u1.age - u2.age;
// });
// console.log(users);
//
// users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// })
// console.log(users);

//------------reduce-------пройтись по масиву і зібрати один результат, або розділити на різнімасиви по якомусь
// значенню
// let reducebox = users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
// console.log(reducebox);
//
//
// // або можна одразу ---------console.log-------------
//
// console.log(users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []}));
