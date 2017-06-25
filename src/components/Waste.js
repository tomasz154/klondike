import React, {Component} from 'react';
import Card from './Card';

export default function Waste({waste, onDoubleClick, onDropOnFoundation, onDropOnPile}) {
    return <div className="waste">
        {waste.hasCards() && waste.getVisibleCards().map((card, i) =>
            <Card
                key={i}
                card={card}
                canDrag={waste.getVisibleCards().length - 1 === i}
                onDoubleClick={onDoubleClick}
                onDropOnFoundation={onDropOnFoundation}
                onDropOnPile={onDropOnPile}
            />)}
    </div>;
}
