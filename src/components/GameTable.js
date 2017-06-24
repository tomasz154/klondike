import React, {Component} from 'react';
import Pile from './Pile';
import Card from './Card';
import HiddenCard from './HiddenCard';

function GameDeck({deck}) {
    return deck.hasCards() ? <HiddenCard/> : null;
}

function GameCard({card}) {
    return <Card figure={card.figure} color={card.color} turnedUp={card.turnedUp}/>;
}

function GamePile({pile}) {
    return <Pile>{pile.getCards().map((card, i) => <GameCard key={i} card={card}/>)}</Pile>;
}

export default class GameTable extends Component {
    render() {
        const {game} = this.props;
        
        return <div>
            <GameDeck deck={game.getDeck()}/>
            {game.getPiles().map((pile, i) => <GamePile key={i} pile={pile}/>)}
        </div>;
    }
}
