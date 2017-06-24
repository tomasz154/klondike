export default class Pile {
    constructor() {
        this.cards = [];
    }

    push(card) {
        this.cards.push(card);
    }

    revealLast() {
        this.cards[this.cards.length - 1].reveal();
    }

    getCards() {
        return this.cards;
    }
}
