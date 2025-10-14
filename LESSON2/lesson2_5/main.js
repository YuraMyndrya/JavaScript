


let users = [
    {skills: ['html', 'mysql', 'mongo'], id:1, name:'vasya', age:31, status:true},
    {skills: ['html', 'js'], id:2, name:'petya', age:33, status:false},
    {skills: ['html', 'js'], id:3, name:'anna', age:28, status:true},
    {skills: ['html', 'mysql', 'mongo'], id:4, name:'olya', age:29, status:false}
];


// таким чином менше навантаження
//звернення ло певної ячейки
// let user1 =users[1];
// console.log(user1);

// console.log(users);
// console.log(users[0].age);
// console.log(users[3].name);

//[2] - це 3-й об'єкт , тому що рахунок починається з нуля(0)

// let user2 = users[2];
// console.log(user2.name);

console.log(users[0].skills[2]);
//масив в якому є об'єкт в якому є масив
