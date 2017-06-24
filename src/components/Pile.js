import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Subpile from './Subpile';

class Pile extends Component {
    render() {
        return <Subpile>{this.props.children}</Subpile>;
    }
}

Pile.propTypes = {
    // todo
};

export default Pile;
