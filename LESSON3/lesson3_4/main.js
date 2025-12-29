let users = [
    {name: 'vasya', age: 31, status: true},
    {name: 'petya', age: 33, status: false},
    {name: 'anna', age: 28, status: true},
    {name: 'olya', age: 29, status: false},
    {name: 'emma', age: 25, status: true},
    {name: 'nadya', age: 27, status: false},
    {name: 'stas', age: 30, status: true},
    {name: 'taras', age: 32, status: false},
    {name: 'dmytro', age: 26, status: true},
    {name: 'yura', age: 34, status: false},
    {name: 'vova', age: 24, status: true},
];

for (const user of users) {
    for (const fieldName in user) {
        console.log (fieldName, user[fieldName]);
    }
}