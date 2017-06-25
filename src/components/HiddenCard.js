import React, {Component} from 'react';

class HiddenCard extends Component {
    render() {
        return <div
            className="card turnedDown"
            style={{backgroundImage: 'url(/Card_back_06.svg)'}}
        />;
    }
}

export default HiddenCard;
