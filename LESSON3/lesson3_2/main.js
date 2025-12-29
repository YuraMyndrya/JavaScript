// let users = [
//     {name: 'vasya', age: 31,status: true},
//     {name: 'petya', age: 33,status: false},
//     {name: 'anna', age: 28,status: true},
//     {name: 'olya', age: 29,status: false},
//     {name: 'emma', age: 25,status: true},
//     {name: 'nadiya', age: 27,status: false},
//     {name: 'stas', age: 26,status: true},
//     {name: 'taras', age: 24,status: false},
//     {name: 'dmytro', age: 23,status: true},
//     {name: 'yura', age: 22,status: false},
// ]

// debugger;
// for (let user of users ) {
//     if (!user.status) {
//         console.log(user)
//     }
// }
// ! - означає навпаки з true в false




// for ( let user of users) {
//     if (user.status === true) {
//         console.log(user)
//     }
// }


let users = [
    {name: 'vasya', age: 31,status: true,skills: 'JS,html'},
    {name: 'petya', age: 33,status: false,skills: 'JS'},
    {name: 'anna', age: 28,status: true,skills: 'JS,react'},
    {name: 'olya', age: 29,status: false,skills: 'JS'},
    {name: 'emma', age: 25,status: true,skills:'JS'},
    {name: 'nadiya', age: 27,status: false,skills: 'JS'},
    {name: 'stas', age: 26,status: true,skills: 'JS,react'},
    {name: 'taras', age: 24,status: false,skills: 'JS'},
    {name: 'dmytro', age: 23,status: true,skills: 'JS'},
    {name: 'yura', age: 22,status: false,skills: 'JS'}
]

//includes - фильтр = поиск по скилу react ----------------------------------------------------------------

debugger;
     for (let user of users) {
         if(user.skills.includes ('react')) {
             document.write(`<h1>${user.name} ${user.age} ${user.skills}</h1>`)
         }
     }


//!user.status   FALSE
//user.status   TRUE
// for (let user of users) {
//     if (!user.status) {
//     // console.log(user.name,user.age,user.status);
//         document.write( `<p>${user.name},${user.age},${user.status}</p>` )
//     }
// }

// for (let user of users) {
//     if (user.age<=25) {
//         console.log(user.name, user.age);
//     }
// }
