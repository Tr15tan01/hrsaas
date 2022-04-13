import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Grid, Box, Paper, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

// import { getStorage } from "firebase/storage";
//local imports
import TopBar from '../components/TopBar';
// import Chart from '../components/Chart'
import { checkData } from '../utils/firebase';

import ListComponent from '../components/List';
// import InfoBox from '../components/InfoBox';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90px'
}));

// const url = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"

function EmployeesPage(props) {
    const [data, setData] = useState('test')

    useEffect(() => {
        const readData = async () => {

            const data = await checkData(props.currentUser.id)
            //check if there are any records, if not display message
            if (await !data.employees || data.employees.length <= 0) {
                setData('Sorry no records yet testing...')
                console.log('length is p ')
                return
            }

            //if there are records display them
            const dataDisplay = data.employees.map((item) => {

                return (
                    <div key={item.id}>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" sx={{ bgcolor: 'purple' }}>{item.name.charAt(0)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.email} - Birthday - {item.birthDay}
                                        </Typography>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.email} - Birthday - {item.birthDay}
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                        <Link to='/employee' state={{ name: item.name, imageUrl: item.photo }}>Test Llink</Link>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </div>)
            })
            // console.log('display data', dataDisplay)
            setData(dataDisplay)
        }

        readData()


    }, [props.currentUser.id])

    if (props.currentUser) {
        console.log('props os', props)
    }

    return (
        <div className="App">
            <CssBaseline />
            <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', p: 0, m: 0 }}>
                <TopBar />
            </Container>
            <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', height: "100vh", color: "primary", display: "flex", flexDirection: "row", p: 0, m: 0 }}>

                <Box sx={{ width: "300px", m: 0, p: 0, display: { xs: 'none', md: 'block' } }}>
                    <ListComponent />
                </Box>
                <Container maxWidth="lg" sx={{ height: "100vh", color: "primary", width: { md: '70%', xs: '100%' } }}>
                    <Box sx={{ flexGrow: 1, mt: 1, ml: 0 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>

                                <Item>
                                    {/* <img src={image} alt="test  url" /> */}
                                    <Typography variant="h5">This is honna be another headline headline</Typography>
                                    <Typography variant="p">This is honna be a paratraph abaouht it it it, This is honna be a paratraph abaouht it it it</Typography>
                                </Item>
                            </Grid>


                            <Grid item xs={12}>
                                <Item>

                                    <Typography variant="h5">This is honna be another headline headline</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>

                                <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                                    {data}
                                </List>


                            </Grid>
                        </Grid>

                    </Box>
                </Container>

            </Container>
        </div >
    );
}

export default EmployeesPage;
