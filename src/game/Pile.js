export default class Pile {
    constructor() {
        this.cards = [];
    }

    push(card) {
        this.cards.push(card);
    }

    pushCards(cards) {
        this.cards = [
            ...this.cards,
            ...cards,
        ];
    }

    revealLast() {
        if (this.cards.length > 0) {
            this.cards[this.cards.length - 1].reveal();
        }
    }

    getTopCard() {
        return this.getCard(1);
    }

    getCard(number) {
        return this.cards[this.cards.length - number];
    }

    toFoundation(foundation) {
        foundation.pushCard(this.cards.pop());
        this.revealLast();
    }

    toPile(target, number) {
        const cardsToPush = this.cards.slice(-number);
        this.cards = this.cards.slice(0, this.cards.length - number );
        target.pushCards(cardsToPush);
        this.revealLast();
    }

    canPush() {
        // todo
        return true;
    }
}
