//– створити функцію, яка повертає найменше число з масиву

const minimal = (numbers) => {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minimal([9, 2, 3, 4, 5, 6, 7]));


// function minNumbers(numbers) {
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
//
// console.log(minNumbers([10, 12, 13, 14, 15, 16, 17]));


// const minValue = (numbers) => {
//     let min = numbers[0];
//     for (let i=0; i < numbers.length; i++) {
//         let number = numbers[i];
//         if ( number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
//
// console.log(minValue([6, 12, 13, 14, 15, 16, 17]));


// const minValue = (numbers) => {
//     let max = numbers[0];
//     for (number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max;
// }
//
// console.log(minValue([4, 2, 3, 4, 5, 6, 567]));
