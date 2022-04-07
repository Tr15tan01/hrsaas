import React from 'react'
import { Container, Grid, Box, Paper, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//local imports
import TopBar from '../components/TopBar';
import Chart from '../components/Chart'
import ImageAvatars from '../components/Avatar'

import ListComponent from '../components/List';
import InfoBox from '../components/InfoBox';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '300px'
}));

const url = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"

function MainPage() {
    console.log('location', window.location.href)
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
                        <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                            <Grid item xs={8}>
                                <Item>
                                    <Box sx={{ width: "100%", height: "60%", backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                        <Typography variant="h5">This is honna be a headline</Typography>

                                    </Box>
                                    <Typography variant="h5">This is honna be another headline headline</Typography>
                                    <Typography variant="p">This is honna be a paratraph abaouht it it it, This is honna be a paratraph abaouht it it it</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    {/* <Box sx={{ width: "100%", height: "100%", bgcolor: 'paper', boxShadow: 4 }}> */}
                                    <InfoBox />
                                    <InfoBox />


                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <ImageAvatars />
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item>
                                    <Chart />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            </Container>
        </div >
    );
}

export default MainPage;
