import * as React from 'react';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



// import Button from '@mui/material/Button';


import { Button, Container } from "@mui/material";

// import { firestore } from '../utils/firebase'

import TopBar from '../components/TopBar';
import ListComponent from '../components/List';
// import BasicSelect from '../components/Select'
import CardComponent from '../components/CardComponent';

export default class TestPage extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     quantity: '',
        //     testValue: this.props.testValue,
        //     // userRef: firestore.doc('/users/CeFQjDORphqIwM74WDZM')
        // }

        this.state = {
        }
    }

    // handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };


    // handleSubmit = async (event) => {
    //     event.preventDefault()
    //     const { name, age } = this.state;
    //     console.log('submitted - ', name)
    //     console.log('testvalue', name, age, this.props.currentUser)
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('State is - ', this.state)
    //     // addToArray(this.state.name, this.state.age)
    // }

    // handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState(values => ({ ...values, [name]: value }))
    // }

    // handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState(values => ({ ...values, [name]: value }))
    //     console.log(this.state)
    // }

    // handleNameChange = e => {
    //     this.setState({ name: e.target.value })
    // }

    // handleAgeChange = e => {
    //     this.setState({ age: e.target.value })
    // }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log('State is - ', this.state, 'user is - ', this.props.currentUser)
        // addToArray(this.state.name, this.state.age)
    }
    handleChange = event => {
        const { value, name } = event.target;
        // this.setState({ [name]: value })
    }



    render() {

        return (
            <div className="App" >
                <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', p: 0, m: 0 }}>
                    <TopBar />
                </Container>
                <Container maxWidth="xl" sx={{ height: "100vh", color: "primary", display: "flex", flexDirection: "row", p: 0, m: 0 }}>

                    <Box sx={{ width: "300px", m: 0, p: 0 }}>
                        <ListComponent />
                    </Box>

                    <Box sx={{ width: 1, p: 2 }}>

                        <Box sx={{ width: 1, p: 2, display: 'flex', flexDirection: 'row' }}>
                            <CardComponent />
                            <CardComponent />
                        </Box>

                        <Typography variant="h3" color="text.secondary">Adding New Record</Typography>

                        <FormControl component="form" color="secondary" onSubmit={this.handleSubmit} focused fullWidth sx={{ m: 1 }}>
                            {/* <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Name"
                            /> */}
                            {/* <InputLabel htmlFor="outlined-adornment-age">age</InputLabel> */}
                            <TextField sx={{ mb: 2 }} value={this.state.name} onChange={this.handleChange} oid="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField value={this.state.age} onChange={this.handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
                            {/* <input
                                type="text"
                                name="age"
                                value={this.state.age || ""}
                                onChange={this.handleChange}
                            /> */}
                            <Button onClick={this.handleSubmit} sx={{ width: 1, m: 1, p: 2 }} color="primary" variant="contained" type="submit">Submit</Button>
                        </FormControl>



                        {/* <TextField fullWidth sx={{ m: 1 }} label="fullWidth" id="fullWidth" /> */}
                        {/* <Button variant="outlined" sx={{ width: 1, m: 1, p: 2 }} color="secondary">Outlined</Button> */}
                    </Box>

                </Container>

            </div>
        );
    }
}