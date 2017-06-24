import React, {Component} from 'react';

class HiddenCard extends Component {
    render() {
        return <div className="card turnedDown">
            <img src="/card-background.png" alt=""/>
        </div>;
    }
}

export default HiddenCard;
