export default class Waste {
    constructor() {
        this.cards = [];
        this.visibleCards = [];
    }

    pushCards(cards) {
        const revealedCards = cards.map(card => {
            card.reveal();
            return card
        });

        this.cards = [
            ...this.cards,
            revealedCards
        ];

        this.visibleCards = revealedCards;
    }

    getVisibleCards() {
        return this.visibleCards;
    }
}
