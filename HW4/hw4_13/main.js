// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


//------------------------------------------------------------1-----------------------------//
function exchange1(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
    return 'incorrect exchangeCurrency';
}


console.log(exchange1(30000,
    [
        {currency: 'USD', value: 25},
        {currency: 'EUR', value: 42},
        {currency: 'PLN', value: 12},
        {currency: 'CZK', value: 2},
    ],
    'CZK')
);

//------------------------------------------------------------2-----------------------------//
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
    return 'incorrect exchangeCurrency';
}

console.log(exchange(10000,
    [
        {currency: 'USD', value: 25},
        {currency: 'EUR', value: 42},
        {currency: 'PLN', value: 12},
        {currency: 'CZK', value: 2},
    ],
    'EUR')
);