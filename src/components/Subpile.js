import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Subpile extends Component {
    render() {
        return <div className="pile">
            {this.props.children[0]}

            {this.props.children.length > 1 &&
            <Subpile>
                {this.props.children.slice(1)}
            </Subpile>}
        </div>;
    }
}

Subpile.propTypes = {
    // todo
};

export default Subpile;
