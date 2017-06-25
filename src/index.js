import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import GameTable from './components/GameTable';
import GameController from './game/GameController';

new GameController(controller => game => () =>
    ReactDOM.render(<GameTable game={game} onReset={() => controller.reset()}/>, document.getElementById('root'))
);

registerServiceWorker();
