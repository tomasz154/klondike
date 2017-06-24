import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Subpile from './Subpile';

class Pile extends Component {
    render() {
        return <div className="pile">
            <Subpile>{this.props.children}</Subpile>
        </div>;
    }
}

Pile.propTypes = {
    // todo
};

export default Pile;
