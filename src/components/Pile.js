import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

function Subpile({children}) {
    return <SubpileDraggable>
        {children[0]}
        {children.length > 1 &&
        <Subpile>
            {children.slice(1)}
        </Subpile>}
    </SubpileDraggable>;
}

class Pile extends Component {
    render() {
        const {connectDropTarget, isOver} = this.props;

        return connectDropTarget(
            <div className="pile">
                {this.props.children.length > 0 && <Subpile>{this.props.children}</Subpile>}
            </div>
        );
    }
}

Pile.propTypes = {
    // todo
};

export default DropTarget(ItemTypes.CARD, target, collect)(Pile);
