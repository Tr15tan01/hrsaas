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
import { Button, Container } from "@mui/material";

import TopBar from '../components/TopBar';
import ListComponent from '../components/List';
import BasicSelect from '../components/Select'

export default function NewItemPage() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };


    return (
        <div className="App">
            <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', p: 0, m: 0 }}>
                <TopBar />
            </Container>
            <Container maxWidth="xl" sx={{ height: "100vh", color: "primary", display: "flex", flexDirection: "row", p: 0, m: 0 }}>

                <Box sx={{ width: "300px", m: 0, p: 0 }}>
                    <ListComponent />
                </Box>


                <Box sx={{ width: 1, p: 2 }}>
                    <Typography variant="h3" color="text.secondary">Adding New Record</Typography>

                    <FormControl color="secondary" focused fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Name"
                        />
                    </FormControl>
                    <FormControl color="warning" fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Surname</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Surname"
                        />
                    </FormControl>

                    <BasicSelect />

                    <FormControl color="primary" fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Surname</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Surname"
                        />
                    </FormControl>

                    <TextField fullWidth sx={{ m: 1 }} label="fullWidth" id="fullWidth" />
                    <Button sx={{ width: 1, m: 1, p: 2 }} color="primary" variant="contained">Submit</Button>
                    <Button variant="outlined" sx={{ width: 1, m: 1, p: 2 }} color="secondary">Outlined</Button>
                </Box>
            </Container>
        </div>
    );
}
