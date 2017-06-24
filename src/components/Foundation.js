import React, {Component} from 'react';
import Card from './Card';

function CardWrapper(card) {
    return <Card figure={card.figure} color={card.color} turnedUp={card.turnedUp}/>;
}

export default function Foundation({foundation}) {
    return <div className="foundation">
        {foundation.hasCards() ? CardWrapper(foundation.getTopCard()) : null}
    </div>;
}
