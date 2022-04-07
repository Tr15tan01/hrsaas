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

import { getStorage, ref, getDownloadURL } from "firebase/storage";
//local imports
import TopBar from '../components/TopBar';
// import Chart from '../components/Chart'
import { checkData, checkImage } from '../utils/firebase';

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
    const [image, setImage] = useState('')
    // const [adata, setAdata] = useState('atest')
    const storage = getStorage();
    async function checkImage(url) {
        // const spaceRef = await ref(storage, 'images/chatbot.jpg');
        getDownloadURL(ref(storage, url))
            .then((url) => {

                console.log('utl is', url)
                setImage(url)
                return url
            })
            .catch((error) => {
                // Handle any errors
                console.log(error)
            });
    }

    // checkImage()

    useEffect(() => {
        const readData = async () => {
            // const myUrl = await checkImage().then((url) => url)
            // console.log('myUrl is - ', myUrl)

            const data = await checkData(props.currentUser.id)
            const dataDisplay = data.employees.map((item) => {
                checkImage(item.photo)

                return (
                    <>
                        <Divider key={item.id} variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src={image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.email}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.name} - Age is - {item.age} - photo - {item.photo}
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                        <Link to='/employee' state={{ name: item.name, imageUrl: item.photo }}>Test Llink</Link>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </>)
            })
            console.log('display data', dataDisplay)
            setData(dataDisplay)
        }

        readData()


    }, [props.currentUser.id])


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
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={'test'} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Brunch this weekend?"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Ali Connors
                                                    </Typography>
                                                    {" — I'll be in your neighborhood doing errands this…"}
                                                    <Link to="/employee" state={{ infinity: 'This is infinite', favoriteFood: 'Lobio' }}>Click This Test Link</Link>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Summer BBQ"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        to Scott, Alex, Jennifer
                                                    </Typography>
                                                    {" — Wish I could come, but I'm out of town this…"}
                                                    <Link to="/employee" state={{ infinity: 'Whaterever you want', favoriteFood: 'Brinjis Flavi' }}>Click This Test Link</Link>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Sandra Adams
                                                    </Typography>
                                                    {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
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
