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
    handleDropCardOnPile(pile) {
        this.props.onCardDropOnPile(pile);
    }

    render() {
        const {connectDropTarget, foundation} = this.props;

        return connectDropTarget(
            <div className="foundation">
                {foundation.hasCards() ? <Card
                    card={foundation.getTopCard()}
                    canDrag={true}
                    onDropOnPile={this.handleDropCardOnPile.bind(this)}
                /> : null}
            </div>
        );
    }
}

Foundation.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, target, collect)(Foundation);
