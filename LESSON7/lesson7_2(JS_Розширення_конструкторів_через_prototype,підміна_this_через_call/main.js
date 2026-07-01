//User.prototype.greeting використовують одну й ту саму функцію, додай у спільне місце для всіх об'єктів

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greeting = function () {
    return `Hello, my name is ${this.name} , my age is ${this.age}`;
};
let user1 = new User('vasya', 11);
console.log(user1);
console.log(user1.greeting());

//-------------------------------------------user2
let user2 = new User('asd2', 22);
console.log(user2);
console.log(user2.greeting('OLeg'));

//---------------------------------user3
let user3 = new User('dima3', 33);
console.log(user3);
console.log(user3.greeting());

let user4 = new User('four', 44);
console.log(user4);
console.log(user4.greeting());

// ----------apply--------- викликає функцію з іншим значенням this.береш функцію з одного об’єкта і запускаєш її так, ніби вона належить іншому об’єкту.-----------------

let user5 = new User('vasya5', 55);
user5.greeting = function (){
    return `Hello, my name is ${this.name}`;
};
console.log(user5.greeting());


let user6 = new User('petya6', 66);
console.log(user5.greeting.apply(user6));
