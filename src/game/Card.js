import {suits, colors} from './constants';

const suitColors = {
    [suits.DIAMONDS]: colors.RED,
    [suits.HEARTS]: colors.RED,
    [suits.CLUBS]: colors.BLACK,
    [suits.SPADES]: colors.BLACK,
};

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

    getColor() {
        return suitColors[this.suit];
    }
}
