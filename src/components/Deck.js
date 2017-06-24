import React, {Component} from 'react';
import HiddenCard from './HiddenCard';

export default function Deck({deck}) {
    return <div className="deck">
        {deck.hasCards() ? <HiddenCard/> : null}
    </div>;
}
