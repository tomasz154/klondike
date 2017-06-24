import React, {Component} from 'react';
import Card from './Card';

export default function Waste({waste, onDoubleClick, onDropOnFoundation, onDropOnPile}) {
    return <div className="waste">
        {waste.hasCards() && <Card card={waste.getTopCard()}
                                   canDrag={true}
                                   onDoubleClick={onDoubleClick}
                                   onDropOnFoundation={onDropOnFoundation}
                                   onDropOnPile={onDropOnPile}
        />}
    </div>;
}
