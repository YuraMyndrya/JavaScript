//-------------------------1----------(Function Declaration)
// (Оголошення функції)
function calc1(a, b) {
    return a + b;
}

console.log(calc1(1, 2));

//-------------------------2_1------Function Expression
// (функціональний вираз)
const calc2 = function (d, c) {
    return d + c;
}
console.log(calc2(3, 4));

//-------------------------2_2------Function Expression
// (функціональний вираз)
const calc2_2 = function (...rest_args) {
    return rest_args[0] + rest_args[1] + rest_args[2];
}
console.log(calc2_2(5, 6, 7));


//------------------------3------Arrow function (стрілкова функція).
let calc3 = (a, b) => a + b;
console.log(calc3(8, 9));

// (a, b) => a + b — це анонімна функція
// calc3 — це змінна, в яку ми зберігаємо функцію
// Тобто фактично створюємо функцію без імені й присвоюємо її змінній.



