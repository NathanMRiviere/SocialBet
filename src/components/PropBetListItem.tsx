import React, { Fragment, useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider, Container} from '@mui/material';
import styles from "./BetList.module.css";
import BetButtonGroup from './BetButtonGroup';
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
            <div className={styles.listInfo}>
                <ListItemText primary={props.name}></ListItemText>
                <Divider orientation="vertical" variant="middle" flexItem />
                <ListItemText primary={props.type}></ListItemText>
            </div>
            <div className={styles.lineDiv}>
                <ListItemText className={styles.lineItem} primary={props.line}></ListItemText>
                <BetButtonGroup id={props.id}overPct={props.overPct} underPct={props.underPct}></BetButtonGroup>
            </div>
            </ListItem>
    )

    const body = (
        <Container className={styles.lineDataContainer}>

        </Container>
    )

    return (
        <div className={styles.container}>
            {header}   
            {expanded ? body : null}
        </div>
    )
}


export default BetListItem;
  
  