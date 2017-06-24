import Pile from './Pile';

export default class Game {
    constructor(deck) {
        this.deck = deck;
        this.piles = [];

        for (let pile = 0; pile < 7; pile++) {
            const cards = new Pile();

            for (let i = 0; i < pile + 1; i++) {
                cards.push(this.deck.popCard());
            }

            cards.revealLast();

            this.piles.push(cards);
        }
    }

    getPiles() {
        return this.piles;
    }
}
