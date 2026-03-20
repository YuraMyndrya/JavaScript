// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap = (arr, znachennya1 ,znachennya2) => {
//     if (znachennya1< arr.length && znachennya2<arr.length){
//         let temp = arr[znachennya1];
//         arr[znachennya1]=arr[znachennya2];
//         arr[znachennya2]= temp;
//         return arr;
//     }
//     return 'incorrect value'
// }
//
// console.log(swap([11,22,33,44],0,1));

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap2 = (arr, zn1, zn2) => {
//     if (zn1 < arr.length && zn2 < arr.length) {
//         let box = arr[zn1];
//         arr[zn1] = arr[zn2];
//         arr[zn2] = box;
//         return arr;
//     }
//     return 'incorrect data';
// }
//
// console.log(swap2([11,22,33,44],0,3));

//– створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


const swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];// 11 -> в змінну temp
        arr[i1] = arr[i2];// 22 записали замість 11(на перше місце)
        arr[i2] = temp;//11 записали в i2 з тимчасової ячейки temp
        return arr;
    }
    return ' incorrect value'
}

console.log(swap([11, 22, 33, 44], 0, 1));