//– створити функцію, яка приймає масив та виводить кожен його елемент

const nameOfArray = (array) => {

    for (const item of array) {
        console.log(item);
    }
}

nameOfArray(["a", "b", "c"]);
