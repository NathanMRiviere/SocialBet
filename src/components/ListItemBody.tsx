import { Container, Skeleton, Divider } from '@mui/material';
import  { useState, useEffect  } from 'react';
import styles from "./BetList.module.css";
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid } from '@mui/x-data-grid';
import { PropData, AnalyticsData } from './types';
import Typography from '@mui/material/Typography';

interface PropType {
    analytics : AnalyticsData,
    info : PropData,
    loaded : boolean
}

const loadingContent = (
    <>
        <div className={styles.graphContainer}> 
            <Skeleton variant="rectangular" width="100%" height={300} sx={{
                marginBottom: "20px",
            }} />
            <Divider orientation='vertical' />
            <Skeleton variant="rectangular" width="70%" height={300} />
        </div>
    </>
)

const ListItemBody: React.FC<PropType> = (props) => {
    return (
        <Container sx={{
            minHeight : "500px"
        }}>
            {!props.loaded ? loadingContent
             : (  
                <>
                    <Typography variant="h6" sx={{
                        marginTop : "10px",
                    }}>
                        Line Trends
                    </Typography>        
                    <LineChart
                        title='Line Trends'
                        xAxis={[{data: props.analytics.lineData.timestamps, label : "timestamp"}]}
                        series={[{data: props.analytics.lineData.lines, label: "line"}]}
                        height={300}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </>
                )}
        </Container>
    )
}

export default ListItemBody;
