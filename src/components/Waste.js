import React, {Component} from 'react';
import Card from './Card';

export default function Waste({visibleCards, onDoubleClick}) {
    return <div className="waste">
        {visibleCards.map((c, i) => <Card key={i} card={c} onDoubleClick={onDoubleClick}/>)}
    </div>;
}
