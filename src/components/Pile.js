import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SubpileDraggable from './Subpile';

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
        return <div className="pile">
            {this.props.children.length > 0 && <Subpile>{this.props.children}</Subpile>}
        </div>;
    }
}

Pile.propTypes = {
    // todo
};

export default Pile;
