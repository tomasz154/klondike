export default class Pile {
    constructor() {
        this.cards = [];
    }

    push(card) {
        this.cards.push(card);
    }

    revealLast() {
        if (this.cards.length > 0) {
            this.cards[this.cards.length - 1].reveal();
        }
    }

    getTopCard() {
        return this.cards[this.cards.length - 1];
    }

    toFoundation(foundation) {
        foundation.pushCard(this.cards.pop());
        this.revealLast();
    }

    canPush() {
        // todo
        return true;
    }
}
