//– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]


//-----------------------------------------------------------

function stringToarray(str) {
    if (str) {
        const splitbox = str.split(' ');
        return splitbox;
    }
    return ['not found'];
}

console.log(stringToarray('Ревуть воли як ясла повні'));

//
//
//
// ['привіт світ']
//
// function toFewElement(str2) {
//     if (str2) {
//         const splitbox2 = str2.split(' ');
//         return splitbox2;
//     }
//     return ['not found'];
// }
// console.log(toFewElement('привіт світ'));
//
//
// function stToArr(string) {
//     if (string) {
//         const divide = string.split(' ');
//         return divide;
//     }
//     return ['not found'];
// }
//
// console.log(stToArr('привіт світ hi world'));
//
// function  a(b) {
//     if (b) {
//         const c = b.split(' ');
//         return c;
//     }
//     return ['not found'];
// }
//
// console.log(a('ok lets go'))
//
// function nameOfFunction(parametr) {
//     if (parametr) {
//         const novaZminna = parametr.split(' ');
//         return novaZminna;
//     }
//     return ['not found'];
//
// }
//
// console.log(nameOfFunction('argumebt1 argumebt2 argumebt3'));
//
// function nm(p) {
//     if (p) {
//         const nw = p.split(' ');
//         return nw;
//     }
//     return ['not found'];
// }
// console.log(nm('arg1 arg2 arg3'));