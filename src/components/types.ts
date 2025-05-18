
export interface PropData {
    id : number;
    name : string;      // player name
    type : string;      // moneyline, throwing yards etc...
    line : number;      // the over under line of throwing yards
    over : number;      // value of the over (i.e -250)
    under : number;     // value of the under
    overPct : number;   // Percentage of people that selected over
    underPct : number;   // Percentage of people that selected over
}

interface GameData {
    home : boolean,
    opponent : string,
    result : number,
}

export interface AnalyticsData {
    lineData : {
        timestamps : Array<number>,
        lines : Array<number>
    }
    playerData : Array<GameData>
}