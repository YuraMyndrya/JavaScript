let user= {
     id: 1,
     name: 'vasya',
     status: true,
     skills: ['HTML', 'JS', 'React'],
}

for ( let fieldName in user) {
    console.log(fieldName, user[fieldName]);

}
console.log('---');


let users = [
    {name: 'vasya', age: 31,status: true},
    {name: 'petya', age: 33,status: false},
    {name: 'anna', age: 28,status: true},
    {name: 'olya', age: 29,status: false},
    {name: 'emma', age: 25,status: true},
    {name: 'nadiya', age: 27,status: false},
    {name: 'stas', age: 26,status: true},
    {name: 'taras', age: 24,status: false},
    {name: 'dmytro', age: 23,status: true},
    {name: 'yura', age: 22,status: false},
]

for (let user of users) {
    for (let fieldName in user) {
         console.log(fieldName, user[fieldName]);
     }
console.log('-------------');

}
