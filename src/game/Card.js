export default class Card {
    constructor(figure, suit) {
        this.figure = figure;
        this.suit = suit;
        this.turnedUp = false;
    }

    reveal() {
        this.turnedUp = true;
    }

    hide() {
        this.turnedUp = false;
    }
}
