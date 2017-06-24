import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HiddenCard from './HiddenCard';
import {ItemTypes} from '../dragAndDropConstants';
import {DragSource} from 'react-dnd';

const source = {
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
        if (dropResult.type === ItemTypes.FOUNDATION && props.onDropOnFoundation) {
            props.onDropOnFoundation(dropResult.foundation);
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
    path(figure, color) {
        return `/cards/${figure}_of_${color}.svg`;
    }

    handleDoubleClick() {
        this.props.onDoubleClick(this.props.card);
    }

    render() {
        const {connectDragSource} = this.props;

        if (this.props.card.turnedUp) {
            return connectDragSource(
                <div className="card" onDoubleClick={this.handleDoubleClick.bind(this)}>
                    <img src={this.path(this.props.card.figure, this.props.card.color)} alt=""/>
                </div>
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
