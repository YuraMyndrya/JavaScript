//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
// sum([1,2,10]) //->13

// const sumOfNumbers = (numbers) => {
//     let busket = 0;
//     for (const item of numbers) {
//         busket = busket + item;
//     }
//     return busket;
// }
//
// console.log(sumOfNumbers([55,100,120]));

// const sum = (arr)  =>{
//     let busket = 0;
//     for (item of arr){
//         busket = busket + item ;
//     }
//     return busket;
// }
//
// console.log(sum([1,2,10]));

const sum = (arr) => {
    let busket = 0;
    for (const item of arr) {
        busket = busket + item;
    }
    return busket;
}

console.log(sum([1, 2, 10]));