// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             return sumUAH / currencyValues[i].value;
//         }
//     }
//     return 'incorrect format_cash';
// }
//
// console.log(exchange(10000, [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: 42}
//     ],
//     'USD'));

// const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             return sumUAH/ currencyValues[i].value;
//         }
//     }
//     return 'incorrect';
// }
//
// console.log(exchange(10000, [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: 42}
//     ],
//     'EUR'));



//– Написати функцію обміну валюти
// exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад

// exchange (10000,
// [{currency:’USD’,value:40},
// {currency:’EUR’,value:42}],
// ’USD’)

// => 250


const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH/ item.value;
        }
    }
    return 'incorrect value!!!';
}

console.log(exchange(10000, [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42}
    ],
    'USD'));


