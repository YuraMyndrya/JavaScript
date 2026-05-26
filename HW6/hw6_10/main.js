// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

// – знайти піковий туз
//
//  – знайти всі шістки
//
//  – знайти всі червоні карти
//
//  – знайти всі буби
//
//  – знайти всі трефи від 9 та більше




// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deckOfCards = [];

for (const suit of suits) {
    for (const value of values) {

        let color;

        if (suit === 'heart' || suit === 'diamond') {
            color = 'red';
        } else {
            color = 'black';
        }

        const card = {
            cardSuit: suit,
            value: value,
            color: color
        };

        deckOfCards.push(card);
    }
}
console.log(deckOfCards);

// //  -------------– знайти піковий туз
// const SpadeAce = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// console.log(SpadeAce);
//
// // ------------- – знайти всі шістки
// const cards6 = deckOfCards.filter(card => card.value === '6');
// console.log(cards6);
//
// // -------------- – знайти всі червоні карти
// const cardsRed = deckOfCards.filter(card => card.color === 'red');
// console.log(cardsRed);
//
// // -------------- – – знайти всі буби
// const cardsDiamond = deckOfCards.filter(card => card.cardSuit === 'diamond');
// console.log(cardsDiamond);
//
// // -------------- - найти всі трефи від 9 та більше
// const validValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
// const clubsMore9 = deckOfCards.filter(card => card.cardSuit === 'clubs' &&  validValues.includes(card.value));
// console.log(clubsMore9);