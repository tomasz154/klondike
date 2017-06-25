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

    getVisibleCards() {
        return this.cards.slice(-this.visibleCards);
    }

    pushCard(card) {
        card.reveal();

        this.cards = [
            ...this.cards,
            card
        ];
    }

    popCard() {
        this.cards.pop();
        this.visibleCards--;
    }

    fromDeck(deck, number) {
        let i;
        for (i = 0; i < number && deck.hasCards(); i++) {
            this.pushCard(deck.popCard());
        }
        this.visibleCards = i;
    }

    toDeck(deck) {
        for (const card of this.cards.reverse()) {
            card.hide();
            deck.pushCard(card);
        }

        this.cards = [];
        this.visibleCards = 0;
    }

    toFoundation(foundation) {
        foundation.pushCard(this.popCard());
    }

    toPile(pile) {
        pile.pushCard(this.popCard());
    }
}
