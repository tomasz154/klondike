import React, {Component} from 'react';
import Pile from './Pile';
import Card from './Card';

export default class GameTable extends Component {
    render() {
        return <div>
            <Pile>
                <Card figure="queen" color="spades" turnedUp={false}/>
                <Card figure="king" color="hearts" turnedUp={false}/>
                <Card figure="ace" color="hearts" turnedUp={false}/>
                <Card figure="6" color="clubs" turnedUp={false}/>
                <Card figure="9" color="hearts" turnedUp={true}/>
                <Card figure="3" color="hearts" turnedUp={true}/>
            </Pile>

            <Pile>
                <Card figure="3" color="hearts" turnedUp={false}/>
                <Card figure="ace" color="hearts" turnedUp={false}/>
                <Card figure="king" color="hearts" turnedUp={false}/>
            </Pile>
        </div>;
    }
}
