import React, {Component} from 'react';
import HiddenCard from './HiddenCard';

export default function Deck({deck, onClick}) {
    return <div className="deck" onClick={onClick}>
        {deck.hasCards() ? <HiddenCard/> : null}
    </div>;
}
