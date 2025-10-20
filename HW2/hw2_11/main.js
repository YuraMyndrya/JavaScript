// let x = 0;
// if (x === 0 || x === null || x === undefined || x === NaN || x === '' || x === false) {
//     x = 'default';
// }
// console.log(x);


//
// let x = NaN;
//
// if (!x) {
//     x = 'default';
// }
//
// console.log(x);


let x = 0 || null || undefined || NaN || '' || false;

if (!x) {
    x = 'default';
}

console.log(x);
