import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from '../dragAndDropConstants';

const target = {
    drop(props, monitor) {
        return {
            targetType: ItemTypes.FOUNDATION,
            foundation: props.foundation,
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
}

class Foundation extends Component {
    render() {
        const {connectDropTarget, isOver, foundation} = this.props;

        return connectDropTarget(
            <div className="foundation">
                {isOver ? 'jest over' : 'nie jest over'}
                {foundation.hasCards() ? <Card card={foundation.getTopCard()}/> : null}
            </div>
        );
    }
}

Foundation.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, target, collect)(Foundation);
