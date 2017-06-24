export default class Game {
    constructor(deck) {
        this.deck = deck;
        this.piles = [];

        for (let pile = 0; pile < 7; pile++) {
            const cards = [];

            for (let i = 0; i < pile + 1; i++) {
                cards.push(this.deck.popCard());
            }

            cards[cards.length - 1].reveal();

            this.piles.push(cards);
        }
    }

    getPiles() {
        return this.piles;
    }
}
