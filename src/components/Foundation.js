import React, {Component} from 'react';
import Card from './Card';

export default function Foundation({foundation}) {
    return <div className="foundation">
        {foundation.hasCards() ? <Card card={foundation.getTopCard()}/> : null}
    </div>;
}
