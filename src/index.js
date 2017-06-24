import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Card from './components/Card'
import Pile from "./components/Pile";

function App() {
    return <div>
        <Pile>
            <Card figure="queen" color="spades" turnedUp={false}/>
            <Card figure="king" color="hearts" turnedUp={false}/>
            <Card figure="ace" color="hearts" turnedUp={false}/>
            <Card figure="6" color="clubs" turnedUp={false}/>
            <Card figure="9" color="hearts" turnedUp={true}/>
            <Card figure="3" color="hearts" turnedUp={true}/>
        </Pile>

        <Pile>
            <Card figure="3" color="hearts" turnedUp={false}/>
            <Card figure="ace" color="hearts" turnedUp={false}/>
            <Card figure="king" color="hearts" turnedUp={false}/>
        </Pile>
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
