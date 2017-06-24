import React, {Component} from 'react';
import Pile from './Pile';
import Card from './Card';
import HiddenCard from './HiddenCard';

function GameDeck({deck}) {
    return <div className="deck">
        {deck.hasCards() ? <HiddenCard/> : null}
    </div>;
}

function GameWaste({waste}) {
    return <div className="waste">
        {waste.getVisibleCards().map((c, i) => <Card key={i} figure={c.figure} color={c.color} turnedUp={c.turnedUp}/>)}
    </div>;
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
            <div>
                <GameDeck deck={game.getDeck()}/>
                <GameWaste waste={game.getWaste()}/>
            </div>
            <div className="piles">
                {game.getPiles().map((pile, i) => <GamePile key={i} pile={pile}/>)}
            </div>
        </div>;
    }
}
