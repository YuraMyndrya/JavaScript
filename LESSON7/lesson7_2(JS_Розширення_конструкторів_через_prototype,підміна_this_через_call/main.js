// // ---------- prototype ------- це об'єкт, у якому зберігаються спільні методи та властивості для всіх
// // екземплярів, створених через конструктор. -----------------
// User.prototype.greeting = function () {
//     return `Hello, my name is ${this.name} , my age is ${this.age}`;
// };
// let user1 = new User('vasya', 11);
// // console.log(user1);
// console.log(user1.greeting());
//
// let user3 = new User('Taras', 55);
// // console.log(user3);
// console.log(user3.greeting());
//
// // --------- apply()------ — аргументи передаються масивом.------ викликає функцію з іншим значенням this.береш
// // функцію з одного об’єкта і запускаєш її так, ніби вона належить іншому об’єкту.-----------------
//
//
// console.log('----------apply---------');
//
// let user = new User('vasya5');
// user.greeting = function (msg, transcription) {
//     return `${msg}, ${transcription} my name is ${this.name}`;
// };
// console.log(user.greeting(['heeeelo'],['aaaaaa1']));
//
//
// let user2 = new User('petya6', 66);


// --------- apply()------ — аргументи передаються масивом.
// console.log(user.greeting.apply(user2, ['hiiii','gggggg2']));

/// ------call()-------------- — аргументи передаються через кому..------
// console.log(user.greeting.call(user2, 'olla', 'qwertewrqwethrtegrf'));

// --------- bind() --------- не викликає функцію одразу, а створює нову функцію, у якої this прив'язаний до вказаного
// об'єкта---


function User(name, age) {
    this.name = name;
    this.age = age;
}

let user = new User('vasya_bind', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name}`;
};

let user2 = new User('petyaaaaaaaaaaa', 123123);
// let greetingCopy = user.greeting.bind(user2, 'привіт');
// console.log(greetingCopy());
// або
let greetingCopy1 = user.greeting.bind(user2);
console.log(greetingCopy1('привііііт'));


let user3 = new User('yuraaaa', 33);
let greetingCopy2 = user.greeting.bind(user3, 'доброї ночі');
console.log(greetingCopy2());
