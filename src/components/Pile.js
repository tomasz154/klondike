import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pile extends Component {
    render() {
        return <div className="pile">{this.props.children}</div>;
    }
}

Pile.propTypes = {
    // todo
};

export default Pile;
