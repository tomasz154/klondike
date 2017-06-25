import {figures} from './constants';

const order = [
    figures.ACE,
    figures.NUMBER_2,
    figures.NUMBER_3,
    figures.NUMBER_4,
    figures.NUMBER_5,
    figures.NUMBER_6,
    figures.NUMBER_7,
    figures.NUMBER_8,
    figures.NUMBER_9,
    figures.NUMBER_10,
    figures.JACK,
    figures.QUEEN,
    figures.KING,
];

export default class Foundation {
    constructor() {
        this.cards = [];
    }

    hasCards() {
        return this.cards.length > 0;
    }

    getTopCard() {
        return this.cards[this.cards.length - 1];
    }

    getSuit() {
        return this.hasCards() ? this.getTopCard().suit : null;
    }

    canPush(card) {
        if (this.hasCards()) {
            return this.getTopCard().suit === card.suit && order.indexOf(card.figure) === order.indexOf(this.getTopCard().figure) + 1;
        } else {
            return card.figure === figures.ACE;
        }
    }

    pushCard(card) {
        this.cards.push(card);
    }

    toPile(pile) {
        pile.push(this.cards.pop());
    }

    isComplete() {
        return this.cards.length === 13;
    }
}
