// function* cardsHolder() {
//     const cards = [
//         {value:6,suit:'diamond'},
//         {value:7,suit:'spade'},
//         {value:8,suit:'diamond'},
//         {value:9,suit:'spade'},
//     ]
//     for (const card of cards) {
//         yield card;
//     }
// }
//
// //обов'язково потрібно присвоїти змінну
// // const cardsHolderGenerator = cardsHolder();
// // ,не можна просто писати cardsHolder() кожного разу.
//
//
// const cardsHolderGenerator = cardsHolder();
// console.log(cardsHolderGenerator.next());//----1--виклик-cards1
// //= можна присвоїти змінну (як cards2 кожному кроку yield)
// const cards2 = cardsHolderGenerator.next();
// console.log(cards2);//------------------------cards2
// //......
// //......
// console.log(cardsHolderGenerator.next());//----3--виклик-cards3
// const cards4 = cardsHolderGenerator.next();
// console.log(cards4);//------------------------cards4


function* cardsHolder() {
    const cards = [
        {valuess:6,suit:'diamond'},
        {valuess:7,suit:'spade'},
        {valuess:8,suit:'diamond'},
        {valuess:9,suit:'spade'},
    ]
    for (const card of cards) {
        yield card;
    }
}

// потрібно зберегти генератор у змінну,
// інакше кожен виклик cardsHolder() створює новий генератор
// і він починає виконання з початку


const cardsHolderGenerator = cardsHolder();
console.log(cardsHolderGenerator.next());

const cards2Data = cardsHolderGenerator.next().value;
console.log(cards2Data);//---значення карти - тут value- це "7"

const cards3 = cardsHolderGenerator.next();
console.log(cards3.value);

const cards4Data = cardsHolderGenerator.next().value;
console.log(cards4Data);

console.log(cardsHolderGenerator.next());//закінчились карти