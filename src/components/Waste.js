import React, {Component} from 'react';
import Card from './Card';

export default function Waste({waste}) {
    return <div className="waste">
        {waste.getVisibleCards().map((c, i) => <Card key={i} figure={c.figure} color={c.color} turnedUp={c.turnedUp}/>)}
    </div>;
}
