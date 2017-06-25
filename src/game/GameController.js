import Game from './Game';
import Deck from './Deck';

class GameController {
    constructor(observer) {
        this.observer = observer;
        this.settings = {
            revealNumber: 1,
        };
        this.reset();
    }

    reset() {
        const deck = Deck.getRandom();
        this.game = new Game(deck, this.settings, this.observer(this));
    }

    changeSettings(settings) {
        this.settings = settings;
        this.reset();
    }
}

export default GameController;
