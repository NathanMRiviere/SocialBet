import { Container, Skeleton, Divider } from '@mui/material';
import  { useState, useEffect  } from 'react';
import styles from "./BetList.module.css";
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid } from '@mui/x-data-grid';


interface Data {
    timestamps : Array<number>,
    lines : Array<number>
}

const xData = [1, 2, 3, 4, 5, 6]
const yData = [255.5, 254.5, 254.5, 255.5, 255.5]

const exampleData : Data = {
    timestamps: xData,
    lines: yData
}

interface Props {
    id : number,
}

const ListItemBody: React.FC<Props> = (props) => {
    const [data, setData] = useState(exampleData)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
          }, 3000);
        });
    return (
        <Container sx={{
            minHeight : "500px"
        }}>
            {!loaded ? (
                <>
                    <div className={styles.graphContainer}> 
                        <Skeleton variant="rectangular" width={400} height={300} sx={{
                            marginRight: "20px",
                        }} />
                        <Divider orientation='vertical' />
                        <Skeleton variant="rectangular" width={300} height={300} />
                    </div>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                </>
            ) : (  
                <LineChart
                    xAxis={[{ data: data.timestamps, label : "timestamp"}]}
                    series={[{data: data.lines, label: "line"}]}
                    height={300}/>
            )}
        </Container>
    )
}

export default ListItemBody;
