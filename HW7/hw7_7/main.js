class Car {
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key])
        }
    };

    increaseMaxSpeed(speedToAdd,) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };

    changeYear(YearToAdd) {
        if (YearToAdd > 1815) this.year = YearToAdd;
    };

    addDriver(driver) {
        if (driver) this.driver = driver;
    };
}

const car1 = new Car("bmw", "x5", 2020, 250, 50);

car1.drive();
car1.info();
car1.increaseMaxSpeed(70);
car1.changeYear(2025);
car1.addDriver({name: "Valeriy", age:27});
console.log(car1)

console.log('------------')

const car2 = new Car("audi", "s4", 2022, 350, 60);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(110);
car2.changeYear(2025);
car2.addDriver({name: "Anton", age:37});
console.log(car2);