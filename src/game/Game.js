import Pile from './Pile';
import Foundation from './Foundation';
import Waste from './Waste';
import {colors} from './constants';

export default class Game {
    constructor(deck) {
        this.deck = deck;
        this.waste = new Waste();
        this.foundations = this.constructor.buildFoundations();
        this.piles = this.constructor.buildPiles(deck);
    }

    getDeck() {
        return this.deck;
    }

    getWaste() {
        return this.waste;
    }

    getPiles() {
        return this.piles;
    }

    revealNew() {
        this.waste.pushCards([this.deck.popCard()]);
    }

    static buildFoundations() {
        return [
            new Foundation(),
            new Foundation(),
            new Foundation(),
            new Foundation(),
        ];
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
