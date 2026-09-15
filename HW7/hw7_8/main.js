// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
console.log('HW DONE')

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('Olya', 22, 31),
    new Cinderella('Valya', 26, 32),
    new Cinderella('Tanya', 24, 33),
    new Cinderella('Vira', 25, 35),
    new Cinderella('Olena', 19, 36),
    new Cinderella('Iryna', 23, 37),
    new Cinderella('Tamila', 27, 38),
    new Cinderella('Katya', 28, 39),
    new Cinderella('Svitlana', 29, 40),
    new Cinderella('Nataliya', 21, 41),
]

const prince = new Prince('Olexandr', 32, 36);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;
console.log(prince)


// Створити клас Wheel з полями brand, model, wheelSize. Створити масив із 5 коліс.
//     Створити клас Driver з полями name, age, requiredWheelSize.
//     За допомогою циклу знайти розмір коліс, які підходять водієві за розміром.
//     Додатково: знайти потрібне колесо за допомогою find().
console.log('1 more place for practice DONE')


// Створити клас Wheel з полями brand, model, wheelSize
class Wheel {
    constructor(brand, model, wheelSize) {
        this.brand = brand;
        this.model = model;
        this.wheelSize = wheelSize;
    }
}

// Створити клас Driver з полями name, age, requiredWheelSize.
class Driver {
    constructor(name, age, requiredWheelSize) {
        this.name = name;
        this.age = age;
        this.requiredWheelSize = requiredWheelSize;
    }
}

//Створити масив із 5 коліс.
const wheels = [
    new Wheel('goodyear1', 'wh185', 15),
    new Wheel('goodyear2', 'wh190', 18),
    new Wheel('continental', 'hdc195', 16),
    new Wheel('continental', 'hdx225', 20),
    new Wheel('chinawheel', 'hdx185', 16),
];

const driver = new Driver('Sergiy', 42, 15);

//За допомогою циклу знайти розмір коліс, які підходять водієві за розміром.
// for (const wheel of wheels) {
//     if (wheel.wheelSize === driver.requiredWheelSize ) {
//         driver.sizeOk = wheel.wheelSize;
//     }
// }

// ---------------------------------------find
// find щоб вивести 1 модель яка підходить та зберегти в новий створений параметр 'sizeOk'
const wheeleSizeOk = wheels.find(wheel => wheel.wheelSize === driver.requiredWheelSize);
driver.sizeOk = wheeleSizeOk;


// ---------------------------------------filter
// filter щоб вивести все що підходить в масив
// const wheeleSizeOk = wheels.filter(wheel => wheel.wheelSize === driver.requiredWheelSize);
// driver.sizeOk = wheeleSizeOk;

console.log(driver);














