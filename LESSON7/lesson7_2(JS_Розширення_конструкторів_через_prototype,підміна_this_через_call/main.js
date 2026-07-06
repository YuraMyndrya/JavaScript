function User(name, age) {
    this.name = name;
    this.age = age;
}

// ----------apply--------- викликає функцію з іншим значенням this.береш функцію з одного об’єкта і запускаєш її так, ніби вона належить іншому об’єкту.-----------------


let user = new User('vasya5');
user.greeting = function (msg) {
    return `${msg}, my name is ${this.name}`;
};
console.log(user.greeting(['heeeelo']));


let user2 = new User('petya6', 66);
console.log(user.greeting.apply(user2, ['hiiii']));

