// --------------------------------------------------------1---------
// function add (x,y) {
//     if (x !== null || y !== null) {
//         let res = Number(x) + Number(y);
//         print('Результат: ' + res);
//     } else
//         alert('error');
//
// }
//
// let numb1 = prompt( 'enter first number', 0);
// let numb2 =prompt('enter second number', 0);
//
//
// add(numb1 ,numb2);


//--------------------------------------------------------2--------------------



// //---1
// let arr1 = [5,4,2,6];
// let summ1 =0;
// for (let i = 0; i < arr1.length; i++)
//     summ1 += arr1[i];
// console.log('сумма: ' + summ1);
//
//
// //---2
// let arr2 = [5,4,2,6,10];
// let summ2 =0;
// for (let i = 0; i < arr2.length; i++)
//     summ2 += arr2[i];
// console.log('сумма: ' + summ2);



//---0  ---console.log
// function arrSum (arr) {
//     let summ =0;
//     for (let i = 0; i < arr.length; i++)
//         summ += arr[i];
//     console.log('сумма: ' + summ);
// }
//
// let arr1 = [5,4,2,6];
// arrSum(arr1);
// let arr2 = [5,4,2,6,10];
// arrSum(arr2);



//------------------------return --------- повернення результату з функції
// function arrSum (arr) {
//     let summ =0;
//     for (let i = 0; i < arr.length; i++)
//         summ += arr[i];
//
//     return summ;
// }
//
// let arr1 = [5,4,2,6];
// let res1 = arrSum(arr1);
//
// let arr2 = [5,4,2,6,10];
// let res2 = arrSum(arr2);
//
// if (res1 > res2)
//     console.log(res1);
// else console.log(res2);





//--------------Простір видимості -----------до змінної можна звернутись будь де
// let some =5;
//
// function arrSum(arr) {
//     let summ =0;
//     for (let i = 0; i < arr.length; i++)
//         summ += arr[i];
// console.log(some);
//     return summ;
// }
//
// let arr1 = [5,4,2,6];
// let res1 = arrSum(arr1);
//
// let arr2 = [5,4,2,6,10];
// let res2 = arrSum(arr2);
//
// if (res1 > res2)
//     console.log(res1);
// else console.log(res2);


function arrSum(a) {
    let summ =0;
    for (let i = 0; i < a.length; i++)
        summ += a[i];
    console.log ('сума: ' + summ);
}

let arr1 = [5,4,2,6];
arrSum(arr1);

let arr2 = [5,4,2,6,10];
arrSum(arr2);

let arr3 = [4,8,3,7,19];
arrSum(arr3);
