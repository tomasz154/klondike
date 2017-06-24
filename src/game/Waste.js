export default class Waste {
    constructor() {
        this.cards = [];
        this.visibleCards = [];
    }

    hasCards() {
        return this.cards.length > 0;
    }

    getTopCard() {
        return this.cards[this.cards.length - 1];
    }

    pushCards(cards) {
        const revealedCards = cards.map(card => {
            card.reveal();
            return card
        });

        this.cards = [
            ...this.cards,
            ...revealedCards
        ];

        this.visibleCards = revealedCards;
    }

    toDeck(deck) {
        for (const card of this.cards) {
            card.hide();
            deck.pushCard(card);
        }

        this.visibleCards = [];
    }

    toFoundation(foundation) {
        foundation.pushCard(this.cards.pop());
        this.visibleCards.pop();
    }
}
