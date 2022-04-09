import * as React from 'react';
// import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

import { Button } from "@mui/material";

const CardComponent = () => {

    return (
        <Card sx={{ maxWidth: '50%', m: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1627471035037-ba54b356589b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent;