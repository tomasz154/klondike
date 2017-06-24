import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Card from './components/Card'
import Pile from "./components/Pile";

function App() {
    return <div>
        <Pile>
            <Card figure="queen" color="spades"/>
            <Card figure="king" color="hearts"/>
            <Card figure="ace" color="hearts"/>
            <Card figure="6" color="clubs"/>
            <Card figure="9" color="hearts"/>
            <Card figure="3" color="hearts"/>
        </Pile>

        <Pile>
            <Card figure="3" color="hearts"/>
            <Card figure="ace" color="hearts"/>
            <Card figure="king" color="hearts"/>
        </Pile>
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
