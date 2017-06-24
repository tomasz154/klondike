import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Card from './components/Card'

function App() {
    return <Card figure="queen" color="spades"/>;
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
