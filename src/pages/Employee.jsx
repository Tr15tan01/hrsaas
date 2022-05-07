import React from 'react'
import { useState } from 'react';
import { Container, Grid, Box, Paper, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom'

import { getStorage, ref, getDownloadURL } from "firebase/storage";
//local imports
import TopBar from '../components/TopBar';
// import Chart from '../components/Chart'


import ListComponent from '../components/List';
// import InfoBox from '../components/InfoBox';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'auto'
}));

function EmployeePage(props) {

    const location = useLocation()

    const [data, setData] = useState('test')
    const [image, setImage] = useState('')
    // const [adata, setAdata] = useState('atest')
    const storage = getStorage();
    async function checkImage(url) {
        // const spaceRef = await ref(storage, 'images/chatbot.jpg');
        getDownloadURL(ref(storage, url))
            .then((url) => {
                setImage(url)
                return url
            })
            .catch((error) => {
                // Handle any errors
                console.log(error)
            });
    }
    const url = location.state.imageUrl
    checkImage(url)

    const { name, surname, email, birthday, address, gender, children, info, experience } = location.state
    return (
        <div className="App">
            <CssBaseline />

            <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', p: 0, m: 0 }}>
                <TopBar />
            </Container>
            <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', height: "100vh", color: "primary", display: "flex", flexDirection: "row", p: 0, m: 0 }}>

                <Box sx={{ width: "30%", m: 0, p: 0, display: { xs: 'none', md: 'block' } }}>
                    <ListComponent />
                </Box>
                <Container maxWidth="lg" sx={{ height: "100vh", width: { md: '70%', xs: '100%' }, color: "primary" }}>
                    <Box sx={{ flexGrow: 1, mt: 1, ml: 0 }}>
                        <Paper variant="outlined" sx={{
                            overflow: 'hidden',
                            height: 300
                        }}>
                            <Box
                                component="img"
                                sx={{
                                    width: 350,
                                    borderRadius: 6,
                                    m: 3
                                    // maxHeight: { xs: 233, md: 167 }
                                    // maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="The house from the offer."
                                // src={personUrl}
                                src={image}
                            />
                        </Paper>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>

                                <Item>
                                    <Typography variant="h6">Name and Surname: {name}  {surname}</Typography>
                                    <Typography variant="h6">Birthday: {birthday}</Typography>
                                    <Typography variant="p">More info see below</Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12}>
                                <Item>
                                    <Typography variant="h6">ASddress: {address}</Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12}>
                                <Item>
                                    <Typography variant="h6">Gender: {gender}</Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12}>
                                <Item>
                                    <Typography variant="h6">Email: {email}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>
                                    <Typography variant="h6">Info: {info}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>

                                    <Typography variant="h5">Testing: {location.state ? location.state.infinity : 'Not set'}, Favorite Food: {location.state !== null ? location.state.favoriteFood : 'Not set'}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>

                                <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>


                                    <Divider variant="inset" component="li" />

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

export default EmployeePage;
