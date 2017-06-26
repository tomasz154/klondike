import Card from './Card';
import {suits, figures} from './constants';

export default class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    hasCards() {
        return this.cards.length > 0;
    }

    shuffle() {
        for (let i = this.cards.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [this.cards[i - 1], this.cards[j]] = [this.cards[j], this.cards[i - 1]];
        }
    }

    pushCard(card) {
        this.cards.push(card);
    }

    popCard() {
        return this.cards.pop();
    }

    static getNew() {
        const cards = [];

        Object.keys(suits).forEach(i => {
            const suit = suits[i];

            Object.keys(figures).forEach(j => {
                const figure = figures[j];
                cards.push(new Card(figure, suit));
            });
        });

        return new Deck(cards);
    }

    static getRandom() {
        const deck = Deck.getNew();
        deck.shuffle();
        return deck;
    }
}
