// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

function  sortNums(arrayOfNums,direction) {
    if(direction === 'ascending') return arrayOfNums.sort((a,b) => a - b);
    if(direction === 'descending') return arrayOfNums.sort((a,b) => b - a);
}
console.log(sortNums([11,21,3],'ascending'));
console.log(sortNums([11,21,3],'descending'));


// function sortOfNums2 (arr2,direction2) {
//     if (direction2 === 'ascending') return arr2.sort((a,b) => a - b);
//     if (direction2 === 'descending')  return arr2.sort((a,b) => b - a);
// }
// console.log(sortOfNums2([1,5,6,4,3,2,23,44,55,66],'ascending'));
// console.log(sortOfNums2([1,5,6,4,3,2,23,44,55,66],'descending'));
//
//
// function sortNums(arr, direction3) {
//     if (direction3 === 'ascending') return arr.sort((c,d) => c-d);
//     if (direction3 === 'descending') return arr.sort((c,d) => d-c);
// }
//
// console.log(sortNums([5,6,4,3,2,23,55,44,66],'ascending'));
// console.log(sortNums([5,6,4,3,2,23,55,44,66],'descending'));