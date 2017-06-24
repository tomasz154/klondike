export default class Waste {
    constructor() {
        this.cards = [];
    }

    hasCards() {
        return this.cards.length > 0;
    }

    getTopCard() {
        return this.cards[this.cards.length - 1];
    }

    pushCard(card) {
        card.reveal();

        this.cards = [
            ...this.cards,
            card
        ];
    }

    fromDeck(deck) {
        this.pushCard(deck.popCard());
    }

    toDeck(deck) {
        for (const card of this.cards.reverse()) {
            card.hide();
            deck.pushCard(card);
        }

        this.cards = []
    }

    toFoundation(foundation) {
        foundation.pushCard(this.cards.pop());
    }

    toPile(pile) {
        pile.push(this.cards.pop());
    }
}
