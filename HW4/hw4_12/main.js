//– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// ---------------
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr, i1, i2) {
    if (i1< arr.length && i2< arr.length) {
        let temp = arr[i1]; //11
        arr[i1]=arr[i2]; //22 записали замість i1 значення i2
        arr[i2]=temp; //в i2 записали значення 11 з тимчасової ячейки temp
        return arr;
    }
    return 'incorrect value'
}


console.log(swap([11,22,33,44],0,1));

