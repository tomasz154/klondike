import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import GameTable from './components/GameTable';
import Game from './game/Game';
import Deck from './game/Deck';

const deck = Deck.getRandom();

new Game(deck, game => () =>
    ReactDOM.render(<GameTable game={game}/>, document.getElementById('root'))
);

registerServiceWorker();
