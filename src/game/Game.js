import Pile from './Pile';

export default class Game {
    constructor(deck) {
        this.deck = deck;
        this.piles = this.constructor.buildPiles(deck);
    }

    getPiles() {
        return this.piles;
    }

    static buildPiles(deck) {
        const piles = [];

        for (let pile = 0; pile < 7; pile++) {
            const cards = new Pile();

            for (let i = 0; i < pile + 1; i++) {
                cards.push(deck.popCard());
            }

            cards.revealLast();

            piles.push(cards);
        }

        return piles;
    }
}
