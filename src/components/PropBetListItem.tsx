import React, { Fragment, useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider, Container} from '@mui/material';
import styles from "./BetList.module.css";
import BetButtonGroup from './BetButtonGroup';
import ListItemBody from './ListItemBody';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


interface HeaderProps {
    id : number;
    expanded : boolean;
    setExpanded : Function;
    name : string;      // player name
    type : string;      // moneyline, throwing yards etc...
    line : number;      // the over under line of throwing yards
    over : number;      // value of the over (i.e -250)
    under : number;     // value of the under
    overPct : number;   // Percentage of people that selected over
    underPct : number;   // Percentage of people that selected over
}

const BetListItem: React.FC<HeaderProps> = (props) => {
    const [expanded, setExpanded] = useState(false)
    const header = (
        <ListItem key={props.id}>
            <ListItemIcon onClick={() => setExpanded(!expanded)}>
                { expanded ? 
                    <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>
                }
            </ListItemIcon>
            <ListItemText sx={{textAlign : "center"}} primary={props.name}></ListItemText>
            <Divider orientation="vertical" variant="middle" flexItem />
            <ListItemText sx={{textAlign : "center"}} primary={props.type}></ListItemText>
            <ListItemText sx={{textAlign : "center"}} className={styles.lineItem} primary={props.line}></ListItemText>
            <BetButtonGroup id={props.id}overPct={props.overPct} underPct={props.underPct}></BetButtonGroup>
        </ListItem>
    )

    const body = expanded ? (
        <>
            <Divider orientation='horizontal' />
            <ListItemBody id={props.id} />
        </>
        
    ) : null

    return (
        <div className={styles.container} >
            {header}   
            {body}
        </div>
    )
}


export default BetListItem;
  
  