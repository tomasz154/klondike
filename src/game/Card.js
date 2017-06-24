export default class Card {
    constructor(figure, color) {
        this.figure = figure;
        this.color = color;
        this.turnedUp = false;
    }

    reveal() {
        this.turnedUp = true;
    }

    hide() {
        this.turnedUp = false;
    }
}
