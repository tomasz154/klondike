import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import GameTable from './components/GameTable';
import Game from './game/Game';

const game = new Game();
ReactDOM.render(<GameTable game={game}/>, document.getElementById('root'));

registerServiceWorker();
