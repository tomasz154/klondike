import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import GameTable from './components/GameTable';
import Game from './game/Game';
import Deck from './game/Deck';

const deck = Deck.getRandom();
const game = new Game(deck);
game.revealNew();
ReactDOM.render(<GameTable game={game}/>, document.getElementById('root'));

registerServiceWorker();
