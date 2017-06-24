import React, {Component} from 'react';
import Pile from './Pile';
import Card from './Card';

function GameCard({card}) {
    return <Card figure={card.figure} color={card.color} turnedUp={card.turnedUp}/>;
}

function GamePile({cards}) {
    return <Pile>{cards.map((card, i) => <GameCard key={i} card={card}/>)}</Pile>;
}

export default class GameTable extends Component {
    render() {
        return <div>
            {this.props.game.getPiles().map((cards, i) => <GamePile key={i} cards={cards}/>)}
        </div>;
    }
}
