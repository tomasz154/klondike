import React, {Component} from 'react';
import Card from './Card';

export default function Waste({waste, onDoubleClick}) {
    return <div className="waste">
        {waste.hasCards() && <Card card={waste.getTopCard()} onDoubleClick={onDoubleClick}/>}
    </div>;
}
