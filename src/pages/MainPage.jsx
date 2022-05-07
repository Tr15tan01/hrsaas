import React from 'react'
import { Container, Grid, Box, Paper, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//local imports
import TopBar from '../components/TopBar';
import Chart from '../components/Chart'
import ImageAvatars from '../components/Avatar'

import ListComponent from '../components/List';
import InfoBox from '../components/InfoBox';

import { DataContext } from '../App';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '300px'
}));

const url = "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"

function MainPage() {
    return (
        <DataContext.Consumer>
            {value => (
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

                                                <Typography variant="h5" color="white" p={1} sx={{ backgroundColor: 'secondary.light' }}>Monthly Reports</Typography>

                                            </Box>
                                            <Typography variant="h5">Check reports for the last month</Typography>
                                            <Typography variant="p">Working reports and customizable reports</Typography>
                                            <br />
                                            <Typography variant="p">To see charts go to the charts sections</Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>
                                            <InfoBox headline={'Employees'} numberData={value.count} />
                                            <InfoBox headline={'Revenue'} numberData={120 + 'k'} />


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
                </div >)
            }
        </DataContext.Consumer>);
}

export default MainPage;
