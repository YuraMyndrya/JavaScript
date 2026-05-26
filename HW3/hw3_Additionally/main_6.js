//Дано 2 масиви з рівною кількістю об’єктів.

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .

// let usersWithCities = [];
//
// for (let user of usersWithId) {
//     for (let misto of citiesWithId) {
//         if (user.id === misto.user_id) {
//             user.address = misto.city;
//         }
//     }
//     usersWithCities.push(user);
// }
// console.log(usersWithCities);

let newArr = [];

for (let user of usersWithId) {
    for (let misto of citiesWithId) {
        if (user.id === misto.user_id) {
            user.adress = misto.city; // city: 'Portland' EXAMPLE
        }
    }
    newArr.push(user);
}
console.log(newArr);