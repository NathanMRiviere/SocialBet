import React, { useState } from 'react'
import { Button, ButtonGroup } from '@mui/material';
import styles from "./BetList.module.css";

interface Props {
    overPct : number,
    underPct : number
}

interface Dictionary<T> {
    [Key: string]: T;
}

const overButtonStyle = {
    width: "50px",
    height: "50px",
    color: "green",
    borderColor: "green",
    marginRight: "7px"
}

const underButtonStyle = {
    width: "50px",
    height: "50px",
    color: "red",
    borderColor: "red"
}

const BetButtonGroup: React.FC<Props> = (props) => {
    const [selected, setSelected] = useState<number>(0);

    let overStyle : Dictionary<string> = {...overButtonStyle}
    let underStyle : Dictionary<string> = {...underButtonStyle}

    if (selected === 0) {
        return (
            <div className={styles.betButtonGroup}>
                <Button variant="outlined" sx={overButtonStyle} onClick={() => setSelected(1)}>
                    <p>Over</p>
                </Button>
                <Button variant="outlined" sx={underButtonStyle} onClick={() => setSelected(2)}><p>Under</p></Button>
            </div>
        );
    }
    else if (selected === 1) {
        overStyle['background'] =`linear-gradient(to right, rgba(0, 128, 0, 0.5) ${props.overPct}%, rgba(39, 38, 40, 0.8) 0%)`;
    }
    else {
        underStyle['background'] = `linear-gradient(to right, rgba(255, 0, 0, 0.5) ${props.underPct}%, rgba(39, 38, 40, 0.5) 0%)`;
    }
    return (
        <div className={styles.betButtonGroup}>
            <Button variant="outlined" sx={overStyle} onClick={() => setSelected(selected === 1 ? 0 : 1)}><p className={styles.buttonText}>{props.overPct}%</p></Button>
            <Button variant="outlined" sx={underStyle} onClick={() => setSelected(selected === 2 ? 0 : 2)}><p className={styles.buttonText}>{props.underPct}%</p></Button>
        </div>
    )
}

export default BetButtonGroup;