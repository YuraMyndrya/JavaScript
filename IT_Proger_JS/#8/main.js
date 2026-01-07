
// ------------------------ ( if ,    else if ,   else ) ---------------------

// let age = 10;

// if (age <0 || age > 120) {
//      console.log ('Invalid');
// }

// else if (age <18) {
//     console.log ('prohibited');
// }

// else {
//      console.log ('allowed');
// };


// let hobbie = ('box');

//     if ( hobbie == 'football') {
//         console.log ('football');
//     }

//     // else if  (можна безліч  (else if =  що якщо) )

//     else {
//         console.log ('not football');
//     }


// ---------------------------- ( switch ) ---------------------------

// let some_number = 40;

// switch (some_number) {

//     case 15: console.log (15);
//     break;

//     case 50: console.log (50);
//     break;

//     case 41: console.log (41);
//     break;

//     default:
//          console.log ('case not found');
// }


// let xxl = 40;

// switch (xxl) {

//     case 73: console.log (73);
//     break;

//     default:
//     console.log ('incorrect');
// }


let numb = [5, 10, 15, 20, 25, 30, 40];

for (let i=0; i<numb.length; i++) {
    // numb[i] *= 10;
    console.log('number is: ' + numb [i] );
    document.write (`<h1> number is: ${numb[i]}</h1>`);
}