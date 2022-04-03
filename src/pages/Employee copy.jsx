import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


import { checkData } from '../utils/firebase';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function EmployeePage(props) {

    const [data, setData] = useState('test')
    // const [adata, setAdata] = useState('atest')


    useEffect(() => {
        const readData = async () => {
            const data = await checkData(props.currentUser.id)
            // const display = data.employees.map(item => item.name + 'hi')
            const dataDisplay = data.employees.map((item) => {
                return <li key={item.id.toString()}>{item.name} - {item.address}</li>
            })
            console.log('display data', dataDisplay)

            setData(dataDisplay)
            // return data.employees[3].name
        }

        readData()

    }, [props.currentUser.id])



    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                        <Typography variant="h1" component="h2">
                            h1. Heading
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Typography variant="h2" component="h2">
                            h2. Heading
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Typography variant="h3" component="h2">
                            h3. Heading
                        </Typography>
                        <ol> {data} </ol>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <Typography variant="h3" component="h2">
                            h3. Heading
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
