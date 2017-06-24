import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import GameTable from './components/GameTable';

ReactDOM.render(<GameTable />, document.getElementById('root'));

registerServiceWorker();
