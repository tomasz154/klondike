import React, {Component} from 'react';
import Pile from './Pile';
import Card from './Card';
import Waste from './Waste';
import Deck from './Deck';
import Foundation from './Foundation';

function GamePile({pile, onCardDoubleClick}) {
    return <Pile>
        {pile.cards.map((card, i) => <Card key={i} card={card} onDoubleClick={() => onCardDoubleClick(card)}/>)}
    </Pile>;
}

export default class GameTable extends Component {
    render() {
        const {game} = this.props;

        return <div>
            <div>
                <Deck deck={game.deck} onClick={() => game.revealNew()}/>
                <Waste visibleCards={game.waste.visibleCards} onDoubleClick={() => game.moveFromWasteToFoundation()}/>
                <div className="foundations">
                    {game.foundations.map((foundation, i) => <Foundation key={i} foundation={foundation}/>)}
                </div>
            </div>
            <div className="piles">
                {game.piles.map((pile, i) =>
                    <GamePile key={i} pile={pile} onCardDoubleClick={() => game.moveFromPileToFoundation(pile)}/>
                )}
            </div>
        </div>;
    }
}
