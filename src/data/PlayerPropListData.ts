import PropType from "prop-types";

class PlayerPropListData {
    id : number;        // player ID
    name : string;      // player name
    type : string;      // moneyline, throwing yards etc...
    line : number;      // the over under line of throwing yards
    over : number;      // value of the over (i.e -250)
    under : number;     // value of the under
    overPct : number;   // Percentage of people that selected over
    underPct : number;   // Percentage of people that selected over


    constructor(id : number, name : string, type : string, line : number, over : number, under : number, overPct : number, underPct : number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.line = line;
        this.over = over;
        this.under = under;
        this.overPct = overPct;
        this.underPct = underPct;
    }
}

export default PlayerPropListData;

