import React, {Component} from 'react';
import Pile from './Pile';
import Card from './Card';
import Waste from './Waste';
import Deck from './Deck';
import Foundation from './Foundation';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function GamePile({pile, onCardDoubleClick, onDropOnFoundation, onDropOnPile}) {
    return <Pile pile={pile} onDropOnPile={onDropOnPile}>
        {pile.cards.map((card, i) =>
            <Card key={i} card={card}
                  canDrag={i === pile.cards.length - 1}
                  onDoubleClick={() => onCardDoubleClick(card)}
                  onDropOnFoundation={(foundation) => onDropOnFoundation(foundation)}
                  onDropOnPile={onDropOnPile}
            />)}
    </Pile>;
}

class GameTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            revealNumber: props.game.revealNumber,
        };
    }

    handleReset() {
        this.props.onReset();
    }

    handleRevealNumberChange(e) {
        this.setState({
            revealNumber: Number(e.target.value),
        }, () => this.props.onSettingsChange({
            revealNumber: this.state.revealNumber,
        }));
    }

    render() {
        const {game} = this.props;

        return <div className="table">
            <div className="controls">
                <button onClick={this.handleReset.bind(this)}>Nowa gra</button>
                <div>
                    Rozdawaj:
                    <label><input type="radio" value={1} checked={this.state.revealNumber === 1}
                                  onChange={this.handleRevealNumberChange.bind(this)}/>1 kartę</label>
                    <label><input type="radio" value={3} checked={this.state.revealNumber === 3}
                                  onChange={this.handleRevealNumberChange.bind(this)}/>3 karty</label>
                </div>
            </div>
            <div className="top">
                <Deck deck={game.deck} onClick={() => game.revealNew()}/>
                <Waste waste={game.waste}
                       onDoubleClick={() => game.moveFromWasteToFoundation()}
                       onDropOnFoundation={(foundation) => game.moveFromWasteToSpecificFoundation(foundation)}
                       onDropOnPile={(pile) => game.moveFromWasteToPile(pile)}
                />
                <div className="foundations">
                    {game.foundations.map((foundation, i) => <Foundation key={i} foundation={foundation}
                                                                         onCardDropOnPile={(pile) => game.moveFromFoundationToPile(foundation, pile)}
                    />)}
                </div>
            </div>
            <div className="bottom">
                {game.piles.map((pile, i) =>
                    <GamePile key={i} pile={pile}
                              onCardDoubleClick={() => game.moveFromPileToFoundation(pile)}
                              onDropOnFoundation={(foundation) => game.moveFromPileToSpecificFoundation(pile, foundation)}
                              onDropOnPile={(targetPile, number) => game.moveFromPileToPile(pile, targetPile, number)}
                    />
                )}
            </div>
        </div>;
    }
}

export default DragDropContext(HTML5Backend)(GameTable);
