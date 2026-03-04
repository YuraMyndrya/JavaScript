// function asd() {
//     let x = 10;
//
//     function inner() {
//         return  ++x;
//     }
//     return inner;
// }
// console.log(asd()());


// function asd() {
//     let x = 10;
//
//     function inner() {
//         return  ++x;
//     }
//     return inner;
// }
//
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());


// let user = {name:'John',age:55};
// user.age = -100500;


function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                return user.age = age;
            }
        },
        setName(name) {
            if (typeof name === "string") {
                return  user.name = name;
            }
        },
    }
}

let builder = userBuilder('vasya', 31);
console.log(builder);
console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(101);
console.log(builder.getAge());
builder.setName("Oleg");
console.log(builder.getName());

//
//
//
//
//
//
//
//---------------додатковий приклад -------------//
// console.log(`--------------------------`);
//
// const firstName = "Vitaliy";
//
// function sayHello() {
//     const lastName = "Savchuk";
//
//     return function () {
//         console.log(firstName);
//         console.log(lastName);
//     };
// }
//
// sayHello()();
//
// console.log(`   =   `);
//
// let insidefunct = sayHello();
// insidefunct();






