// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт


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

const grupped = deckOfCards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
},{
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(grupped);