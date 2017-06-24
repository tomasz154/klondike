import Card from './Card';

export default class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    shuffle() {
        for (let i = this.cards.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [this.cards[i - 1], this.cards[j]] = [this.cards[j], this.cards[i - 1]];
        }
    }

    popCard() {
        return this.cards.pop();
    }

    static getNew() {
        const cards = [];

        for (const color of ['clubs', 'diamonds', 'hearts', 'spades']) {
            for (const figure of [2, 3, 4, 5, 6, 7, 8, 9, 10, 'ace', 'king', 'queen', 'jack']) {
                cards.push(new Card(figure, color));
            }
        }

        return new Deck(cards);
    }

    static getRandom() {
        const deck = Deck.getNew();
        deck.shuffle();
        return deck;
    }
}
