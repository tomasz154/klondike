import React, {Component} from 'react';

class HiddenCard extends Component {
    render() {
        return <div className="card turnedDown">
            <img src="/Card_back_06.svg" alt=""/>
        </div>;
    }
}

export default HiddenCard;
