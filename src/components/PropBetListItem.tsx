import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider} from '@mui/material';
import styles from "./BetList.module.css";
import BetButtonGroup from './BetButtonGroup';
import ListItemBody from './ListItemBody';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PropData } from './types';


const BetListItem: React.FC<PropData> = (props) => {
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
            <BetButtonGroup overPct={props.overPct} underPct={props.underPct}></BetButtonGroup>
        </ListItem>
    )

    const body = expanded ? (
        <>
            <Divider orientation='horizontal' />
            <ListItemBody {...props} />
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
  
  