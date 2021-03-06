import React, {Component} from 'react';
import SubpileDraggable from './Subpile';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from '../dragAndDropConstants';

const target = {
    drop(props, monitor) {
        return {
            targetType: ItemTypes.PILE,
            pile: props.pile,
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

function Subpile({children, onDropOnPile}) {
    return <SubpileDraggable onDropOnPile={onDropOnPile} number={children.length} canDrag={children[0].props.card.turnedUp}>
        {children[0]}
        {children.length > 1 &&
        <Subpile onDropOnPile={onDropOnPile}>
            {children.slice(1)}
        </Subpile>}
    </SubpileDraggable>;
}

class Pile extends Component {
    handleDropSubpileOnPile(pile, number) {
        this.props.onDropOnPile(pile, number);
    }

    render() {
        const {connectDropTarget} = this.props;

        return connectDropTarget(
            <div className="pile">
                {this.props.children.length > 0 &&
                <Subpile onDropOnPile={this.handleDropSubpileOnPile.bind(this)}>{this.props.children}</Subpile>}
            </div>
        );
    }
}

Pile.propTypes = {
    // todo
};

export default DropTarget([ItemTypes.CARD, ItemTypes.SUBPILE], target, collect)(Pile);
