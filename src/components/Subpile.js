import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from '../dragAndDropConstants';
import {DragSource} from 'react-dnd';
import classNames from 'classnames';

const source = {
    canDrag(props) {
        return props.canDrag;
    },

    beginDrag(props) {
        return {
            number: props.number,
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        const dropResult = monitor.getDropResult();

        if (dropResult.targetType === ItemTypes.PILE && props.onDropOnPile) {
            props.onDropOnPile(dropResult.pile, monitor.getItem().number);
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Subpile extends Component {
    render() {
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div className={classNames({
                'subpile': true,
                'dragging': isDragging,
            })}
            >
                {this.props.children}
            </div>
        );
    }
}

Subpile.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.SUBPILE, source, collect)(Subpile);
