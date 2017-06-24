import Card from './Card';
import {colors, figures} from './constants';

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

    popCard() {
        return this.cards.pop();
    }

    static getNew() {
        const cards = [];

        for (const color of Object.values(colors)) {
            for (const figure of Object.values(figures)) {
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
