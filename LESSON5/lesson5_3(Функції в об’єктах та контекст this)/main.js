let user = {
    name: 'VASYA',
    age: 35,
    greeting: function (msg) {
        console.log(this);
        return (`${msg} my name is ${this.name}`);
    },
    vitannya: function (msg) {
        return (`${msg} my age is ${this.age}`);
    }
}
console.log(user.greeting('HI'));
console.log(user.vitannya('AND'));