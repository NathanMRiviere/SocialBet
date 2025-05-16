import React, { useState } from 'react'
import { Button, ButtonGroup } from '@mui/material';
import styles from "./BetList.module.css";

interface Props {
    id : number;
    overPct : number,
    underPct : number
}

interface Dictionary<T> {
    [Key: string]: T;
}

const overButtonStyle = {
    width: "100px",
    color: "green",
    borderColor: "green",
    marginRight: "7px"
}

const underButtonStyle = {
    width: "100px",
    color: "red",
    borderColor: "red"
}

const BetButtonGroup: React.FC<Props> = (props) => {
    const [selected, setSelected] = useState<number>(0);

    let overStyle : Dictionary<string> = {...overButtonStyle}
    let underStyle : Dictionary<string> = {...underButtonStyle}

    if (selected === 1) {
        overStyle['background'] = "linear-gradient(to right, green " + props.overPct + "%,#272628 0%)";
    } else if (selected === 2) {
        underStyle['background'] = "linear-gradient(to right, red " + props.underPct + "%,#272628 0%)";
    }
    console.log(overStyle)
    if (selected !== 0) {
        return (
            <div className={styles.betButtonGroup}>
                <Button variant="outlined" sx={overStyle} onClick={() => setSelected(0)}><p className={styles.buttonText}>{props.overPct}%</p></Button>
                <Button variant="outlined" sx={underStyle} onClick={() => setSelected(0)}><p className={styles.buttonText}>{props.underPct}%</p></Button>
            </div>
        );
    } else {
        return (
            <div className={styles.betButtonGroup}>
                <Button variant="outlined" sx={overButtonStyle} onClick={() => setSelected(1)}>
                    <p>Over</p>
                </Button>
                <Button variant="outlined" sx={underButtonStyle} onClick={() => setSelected(2)}><p>Under</p></Button>
            </div>
        );
    }

}

export default BetButtonGroup;