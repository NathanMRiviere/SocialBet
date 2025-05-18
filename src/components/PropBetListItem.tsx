import React, { useState, useEffect } from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider} from '@mui/material';
import styles from "./BetList.module.css";
import BetButtonGroup from './BetButtonGroup';
import ListItemBody from './ListItemBody';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PropData, AnalyticsData } from './types';

const exampleData : AnalyticsData = {
    lineData : {
        timestamps : [1, 2, 3, 4, 5, 6],
        lines : [255.5, 254.5, 254.5, 255.5, 255.5]
    },
    playerData : [{
        home : false,
        opponent : "",
        result : 300
    }]
}

const BetListItem: React.FC<PropData> = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [data, setData] = useState(exampleData)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
          }, 3000);
        });

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

    return (
        <div className={styles.container} >
            {header}
            { expanded && (
                <>
                    <Divider orientation='horizontal' />
                    <ListItemBody info={props} analytics={data} loaded={loaded}/> 
                </>
            )}
            
        </div>
    )
}


export default BetListItem;
  
  