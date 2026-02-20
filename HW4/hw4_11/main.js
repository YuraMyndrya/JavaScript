function sum(arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
return basket;
}
console.log(sum([1,2,10]));


// function sum2(arr) {
//     let result = 0;
//     for (const numer of arr) {
//         result = result + numer;
//     }
//     return result;
// }
//
// console.log(sum2([5,3,9,4,8,7,1]));
//
//
// function sum(arr) {
//     let result=0;
//     for (const numeric of arr) {
//         result= result + numeric;
//     }
//     return result;
// }
//
// console.log (sum([1,2,3,4,5,6,7,8,9,0]))

