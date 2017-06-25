import Pile from './Pile';
import Foundation from './Foundation';
import Waste from './Waste';

export default class Game {
    constructor(deck, observer) {
        this.deck = deck;
        this.waste = new Waste();
        this.foundations = this.constructor.buildFoundations();
        this.piles = this.constructor.buildPiles(deck);

        this.emitChange = observer(this);
        this.emitChange();
    }

    revealNew() {
        if (this.deck.hasCards()) {
            this.waste.fromDeck(this.deck);
        } else if (this.waste.hasCards()) {
            this.waste.toDeck(this.deck);
        }
        this.emitChange();
    }

    moveFromWasteToFoundation() {
        const card = this.waste.getTopCard();
        const foundation = this.findFoundationForCard(card);
        this.moveFromWasteToSpecificFoundation(foundation);
    }

    moveFromWasteToSpecificFoundation(foundation) {
        const card = this.waste.getTopCard();

        if (foundation.canPush(card)) {
            this.waste.toFoundation(foundation);
        }

        this.emitChange();
    }

    moveFromWasteToPile(pile) {
        const card = this.waste.getTopCard();

        if (pile.canPush(card)) {
            this.waste.toPile(pile);
        }

        this.emitChange();
    }

    moveFromPileToPile(source, target, number) {
        const card = source.getCard(number);

        if (target.canPush(card)) {
            source.toPile(target, number);
        }

        this.emitChange();
    }

    moveFromPileToFoundation(pile) {
        const card = pile.getTopCard();
        const foundation = this.findFoundationForCard(card);

        this.moveFromPileToSpecificFoundation(pile, foundation);
    }

    moveFromPileToSpecificFoundation(pile, foundation) {
        const card = pile.getTopCard();

        if (foundation.canPush(card)) {
            pile.toFoundation(foundation);
        }

        this.emitChange();
    }

    moveFromFoundationToPile(foundation, pile) {
        const card = foundation.getTopCard();

        if (pile.canPush(card)) {
            foundation.toPile(pile);
        }

        this.emitChange();
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

        for (let i = 0; i < 7; i++) {
            piles[i] = new Pile();
        }

        for (let i = 0; i < 7; i++) {
            for (let j = i; j < 7; j++) {
                piles[j].pushCard(deck.popCard());
                if (i === j) {
                    piles[j].revealLast();
                }
            }
        }

        return piles;
    }

    findFoundationBySuit(suit) {
        return this.foundations.find(f => f.getSuit() === suit);
    }

    findEmptyFoundation() {
        return this.foundations.find(f => f.getSuit() === null);
    }

    findFoundationForCard(card) {
        let foundation = this.findFoundationBySuit(card.suit);
        if (!foundation) {
            foundation = this.findEmptyFoundation();
        }
        return foundation;
    }

    isFinished() {
        for (const foundation of this.foundations) {
            if (!foundation.isComplete()) {
                return false;
            }
        }

        return true;
    }
}
