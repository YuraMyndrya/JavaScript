// function userfactory(imya, age, el_adress) {
//     let user = {
//         name: imya,
//         age: age,
//         email: el_adress,
//     }
//     return user;
// }
//
// let us1 = userfactory('Olena', 22, 'olena@example.com');
// let us2 = userfactory('Igor', 34, 'Igor@example.com');
// let us3 = userfactory('Babatunde', 21, 'Babatunde@example.com');
// console.log(us1);
// console.log(us2);
// console.log(us3);


function mobile(model, vartist, brand_name) {

    let phone = {
        phone: model,
        price: vartist,
        brand: brand_name,
    }
    return phone;

}

let ph1 = mobile('S 25', '700$', 'Samsung');
let ph2 = mobile('Reno 15', '800$', 'Oppo');
let ph3 = mobile('IPhone 17', '1400$', 'Apple');
console.log(ph1);
console.log(ph2);
console.log(ph3);


console.log('----------------------------- function for (let user of users)----------------------------')

function userFilter(users) {
    for (let user of users) {
        console.log(user);
    }
}

let users22 = [
    {name: "Olena", age: 25, email: "olena@example.com"},
    {name: "Ivan", age: 30, email: "ivan@example.com"},
    {name: "Maria", age: 22, email: "maria@example.com"},
    {name: "Dmytro", age: 28, email: "dmytro@example.com"},
    {name: "Sofiya", age: 27, email: "sofiia@example.com"}
];
userFilter(users22);


console.log('----------------------------- function (with return) -----------------------------------')

function userFilter2(Imya, vik, poshta) {
    let user = {
        name: Imya,
        age: vik,
        email: poshta,
    }
    return user;
}

let user1 = userFilter2('Olena', 25, "olena@example.com");
let user2 = userFilter2('Ivan', 30, "ivan@example.com");
let user3 = userFilter2('Maria', 22, "maria@example.com");
let user4 = userFilter2('Dmytro', 33, "dmytro@example.com");
let user5 = userFilter2('Sofiya', 27, "sofiya@example.com");
console.log(user1, user2, user3, user4, user5);


function calc(a, b, c) {
    let sum = a + b + c;
    return sum;
}

let result1 = calc(10, 15, 40);
let result2 = calc(22, 33, 11);
console.log(result1, result2);


console.log('-------------- function in function (with return) //1 ---------------------------')

function persantage(cash, per) {
    return cash / 100 * per;
}

function tax(sum) {
    return sum - persantage(sum, 20) - persantage(sum, 1.5);
}

let some_qwe = tax(10000);
console.log(some_qwe);
console.log('-----------------------------------------------------------------------------------')

console.log('--------------- function in function (with return) //2 з наповненням масиву вже відфільтрованих' +
    ' користувачів' +
    ' -----------------------')

function userFilter(users) {
    let filterredUsers = [];
    for (user of users) {
        if (user.age >= 30) {
            filterredUsers.push(user);
        }

    }
    return filterredUsers;
}

let users = [
    {name: "Olena", age: 25, email: "olena@example.com"},
    {name: "Ivan", age: 30, email: "ivan@example.com"},
    {name: "Maria", age: 22, email: "maria@example.com"},
    {name: "Dmytro", age: 28, email: "dmytro@example.com"},
    {name: "Sofiya", age: 27, email: "sofiia@example.com"},
    {name: "na", age: 55, email: "o5a@example.com"},
    {name: "In", age: 50, email: "rfhty4@example.com"},
    {name: "Ma", age: 82, email: "tjyfia@example.com"},
    {name: "ytro", age: 48, email: "dndnhdtro@example.com"},
    {name: "fiya", age: 147, email: "dnyndna@example.com"},
    {name: "Itcvudthvn", age: 57, email: "rffjujd8y4@example.com"},
];
let filter = userFilter(users);
console.log(filter);
console.log('-----------------------------------------------------------------------------------')














































