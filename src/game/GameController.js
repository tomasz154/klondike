import Game from './Game';
import Deck from './Deck';

class GameController {
    constructor(observer) {
        this.observer = observer;
        this.reset();
    }

    reset() {
        const deck = Deck.getRandom();
        this.game = new Game(deck, this.observer(this));
    }
}

export default GameController;
