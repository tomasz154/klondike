import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    path(figure, color) {
        return `/cards/${figure}_of_${color}.svg`;
    }

    render() {
        return <img src={this.path(this.props.figure, this.props.color)} alt=""/>;
    }
}

Card.propTypes = {
    figure: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Card;
