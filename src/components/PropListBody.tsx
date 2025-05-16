import React, { Fragment, useState } from 'react';
import styles from './BetList.module.css'
import { Skeleton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'opp', headerName: 'Opponent', width: 130 },
    { field: 'home', headerName: 'Home', width: 130 },
    { field: "rushingYards", headerName: "Rushing Yards", width: 130},
  ];
  
  const rows = [
    { id: 1, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 2, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 3, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 4, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 5, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 6, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 7, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 8, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 9, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 10, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
    { id: 11, date: '2025-03-10', opp: 'Chicago Bears', home: 'False', rushingYards: 100 },
]  

const paginationModel = { page: 0, pageSize: 5 };


interface Props {
    id : number;
    expanded : boolean;
}

function loadData(setLoaded : Function) {
    setTimeout(() => {
        setLoaded(true);
    }, 3000)
}

const PropListBody: React.FC<Props> = (props) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    let cn;
    let body = <div></div>;
    if (props.expanded) {
        cn = styles.bodyExpanded;
        if (!loaded) {
            loadData(setLoaded);
            body = (
                <Fragment>
                    <Skeleton variant="text"></Skeleton>
                    <Skeleton variant="text"></Skeleton>
                    <Skeleton variant="text"></Skeleton>
                    <Skeleton variant="text"></Skeleton>
                    <Skeleton variant="text"></Skeleton>
                    <Skeleton variant="text"></Skeleton>
                    <Skeleton variant="text"></Skeleton>
                </Fragment>
            )
        }  else {
            body = (
                <Paper sx={{ height: 400}}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                  />
                </Paper>
              );    
        }  
    } else {
        cn = styles.body;
    }
    return ( 
        <div className={cn}>
            {body}
        </div>
    )
    
};

export default PropListBody;