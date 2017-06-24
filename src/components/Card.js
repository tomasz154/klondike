import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HiddenCard from './HiddenCard';

class Card extends Component {
    path(figure, color) {
        return `/cards/${figure}_of_${color}.svg`;
    }

    handleDoubleClick() {
        this.props.onDoubleClick(this.props.card);
    }

    render() {
        if (this.props.card.turnedUp) {
            return <div className="card" onDoubleClick={this.handleDoubleClick.bind(this)}>
                <img src={this.path(this.props.card.figure, this.props.card.color)} alt=""/>
            </div>;
        } else {
            return <HiddenCard/>
        }
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;
