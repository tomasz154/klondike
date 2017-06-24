import Pile from './Pile';
import Foundation from './Foundation';
import Waste from './Waste';

export default class Game {
    constructor(deck, observer) {
        this.deck = deck;
        this.waste = new Waste();
        this.foundations = this.constructor.buildFoundations();
        this.piles = this.constructor.buildPiles(deck);

        this.observer = observer(this);
        this.emitChange();
    }

    emitChange() {
        this.observer();
    }

    revealNew() {
        if (this.deck.hasCards()) {
            this.waste.pushCards([this.deck.popCard()]);
        } else if (this.waste.hasCards()) {
            this.waste.toDeck(this.deck);
        }
        this.observer();
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
