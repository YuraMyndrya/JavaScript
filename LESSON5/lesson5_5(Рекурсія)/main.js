//-----------------------------1------------------
let arrr = [88,77,66];

function foo(x) {
    console.log('FOO');
// foo()
}

foo();

// //-----------------------------2-------------------
// function iterator(arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i)
//     }
// }
//
// iterator([11, 22, 33], 0);

//-----------------------------3-------------------
// let arr = [11,22,33,[44,55],[66,77]];
// let innerArray = [];
//
// function flatter(array) {
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArray.push(item);
//         }
//
//     }
// }
// flatter(arr)
// console.log(innerArray)


let arr = [11, 22, 33, [44, 55], [66, 77]];
let innerArray = [];

function flatter(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            flatter(item)
        } else {
            innerArray.push(item);
        }
    }
}

flatter(arr);
console.log(innerArray)





