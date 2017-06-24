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
    render() {
        const {game} = this.props;

        return <div className="table">
            <div className="top">
                <Deck deck={game.deck} onClick={() => game.revealNew()}/>
                <Waste waste={game.waste}
                       onDoubleClick={() => game.moveFromWasteToFoundation()}
                       onDropOnFoundation={(foundation) => game.moveFromWasteToSpecificFoundation(foundation)}
                       onDropOnPile={(pile) => game.moveFromWasteToPile(pile)}
                />
                <div className="foundations">
                    {game.foundations.map((foundation, i) => <Foundation key={i} foundation={foundation}
                                                                         onCardDrop={() => game.moveFromPileToFoundation()}/>)}
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
