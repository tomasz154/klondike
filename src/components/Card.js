import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HiddenCard from './HiddenCard';
import {ItemTypes} from '../dragAndDropConstants';
import {DragSource} from 'react-dnd';

const source = {
    canDrag(props) {
        return props.canDrag;
    },

    beginDrag(props) {
        return {
            card: props.card,
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        const dropResult = monitor.getDropResult();

        if (dropResult.targetType === ItemTypes.FOUNDATION && props.onDropOnFoundation) {
            props.onDropOnFoundation(dropResult.foundation);
        } else if (dropResult.targetType === ItemTypes.PILE && props.onDropOnPile) {
            props.onDropOnPile(dropResult.pile, 1);
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component {
    path(figure, suit) {
        return `/cards/${figure}_of_${suit}.svg`;
    }

    handleDoubleClick() {
        this.props.onDoubleClick(this.props.card);
    }

    render() {
        const {connectDragSource} = this.props;

        if (this.props.card.turnedUp) {
            return connectDragSource(
                <div className="card"
                     style={{backgroundImage: `url(${this.path(this.props.card.figure, this.props.card.suit)})`}}
                     onDoubleClick={this.handleDoubleClick.bind(this)}
                />
            );
        } else {
            return <HiddenCard/>
        }
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.CARD, source, collect)(Card);
