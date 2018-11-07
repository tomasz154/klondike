import React from 'react';
import HiddenCard from './HiddenCard';

function EmptyDeck() {
    return <div className="deck-empty"/>;
}

export default function Deck({deck, onClick}) {
    return <div className="deck" onClick={onClick}>
        {deck.hasCards() ? <HiddenCard/> : <EmptyDeck/>}
    </div>;
}
