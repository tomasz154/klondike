import React, {Component} from 'react';
import Card from './Card';

export default function Waste({waste, onDoubleClick, onDropOnFoundation}) {
    return <div className="waste">
        {waste.hasCards() && <Card card={waste.getTopCard()}
                                   onDoubleClick={onDoubleClick}
                                   onDropOnFoundation={onDropOnFoundation}
        />}
    </div>;
}
