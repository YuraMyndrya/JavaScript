//примітивні типи змінних: просто копіюється значення
// Number
// String
// Boolean
let a = 100;
let b = a; //100
b = b + 10 ; //110
console.log(b);




//референціальні-ссилочні типи змінних: зсилається на значення
let user = { name: 'vasya'};
let user2 = user;
console.log(user);

user2.age = 31;
console.log(user2);






