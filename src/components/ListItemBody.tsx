import { Container, Skeleton, Divider } from '@mui/material';
import  { useState, useEffect  } from 'react';
import styles from "./BetList.module.css";
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid } from '@mui/x-data-grid';
import { PropData, AnalyticsData } from './types';

interface PropType {
    analytics : AnalyticsData,
    info : PropData,
    loaded : boolean
}

const loadingContent = (
    <>
        <div className={styles.graphContainer}> 
            <Skeleton variant="rectangular" width="100%" height={200} sx={{
                marginBottom: "20px",
            }} />
            <Divider orientation='vertical' />
            <Skeleton variant="rectangular" width="70%" height={300} />
        </div>
        <Skeleton variant="text"/>
        <Skeleton variant="text"/>
        <Skeleton variant="text"/>
        <Skeleton variant="text"/>
    </>
)

const ListItemBody: React.FC<PropType> = (props) => {
    return (
        <Container sx={{
            minHeight : "500px"
        }}>
            {!props.loaded ? loadingContent
             : (  
                    <LineChart
                        xAxis={[{ data: props.analytics.lineData.timestamps, label : "timestamp"}]}
                        series={[{data: props.analytics.lineData.lines, label: "line"}]}
                        height={300}/>
                )}
        </Container>
    )
}

export default ListItemBody;
