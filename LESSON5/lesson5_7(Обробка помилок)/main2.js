// console.log('--------calc-------');
// function calc(a,b){
//     if (b === 0){
//         throw new Error(' b = 0 : на 0 ділити не можна! ')
//     }
//     return a/b;
// }


// Перехопити помилку можна так:
// Дані для обчислень
// const testCases = [[10, 2], [10, 0], [10, 1], [10, 5],];


// for (const [a, b] of testCases) {
//     try {
//         const result = calc(a, b);
//         console.log(`Result ${a}/${b}:`, result);
//     } catch (e) {
//         console.log(`Помилка:  ${a}/${b}:`, e.message);
//     } finally {
//         console.log(`Спроба ${a}/${b} завершена\n`);
//     }
// }
//
// console.log('Код продовжує виконання після всіх спроб');


// for (const [a, b] of testCases) {
//     try {
//         const result = calc(a, b);
//         console.log(`Result ${a}/${b}:`, result);
//     } catch (e) {
//         console.log(`Помилка:  ${a}/${b}:`, e.message);
//     }
//     // finally тут не потрібен
//     finally {
//         console.log(`calc ${a}/${b}: останнє , та завершено!`);
//     }
// }
// console.log(`calc done!`)


// Перехопити помилку можна так:
// Дані для обчислень
const testCases = [[10, 2], [10, 0], [10, 1], [10, 5],];

function calc(a, b) {

    try {
        if (b === 0) {
            throw new Error('b = 0 : на 0 ділити не можна!');
        }
        const result = a / b;
        console.log(`Result ${a}/${b} =`, result);

    } catch (e) {
        console.error(`Помилка у функції calc: ${a}/${b}:`, e.message);
    }

}

// можна просто вказати в цикл масив [a,b]
for (const [a, b] of testCases) {
    calc(a, b);
}

// можна з присвоєнням змінної кожному параметру [a,b]
// for (const pair of testCases) {
//     const a = pair[0];
//     const b = pair[1];
//     calc(a, b);
// }
