export default class Game {
    constructor() {
        this.piles = [
            [
                {figure: "queen", color: "spades", turnedUp: false},
                {figure: "king", color: "hearts", turnedUp: false},
                {figure: "ace", color: "hearts", turnedUp: false},
                {figure: "6", color: "clubs", turnedUp: false},
                {figure: "9", color: "hearts", turnedUp: true},
                {figure: "3", color: "hearts", turnedUp: true},
            ],
            [
                {figure: "3", color: "hearts", turnedUp: false},
                {figure: "ace", color: "hearts", turnedUp: false},
                {figure: "king", color: "hearts", turnedUp: false,}
            ]
        ];
    }

    getPiles() {
        return this.piles;
    }
}
