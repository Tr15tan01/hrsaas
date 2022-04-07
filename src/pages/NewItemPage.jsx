import * as React from 'react';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { addToArray, uploadImage } from '../utils/firebase';

// import Button from '@mui/material/Button';


import { Button, Container } from "@mui/material";

// import { firestore } from '../utils/firebase'

import TopBar from '../components/TopBar';
import ListComponent from '../components/List';
// import BasicSelect from '../components/Select'
import CardComponent from '../components/CardComponent';

export default class NewItemPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            address: '',
            birthDay: '',
            age: 0
        }
    }




    handleSubmit = (event) => {
        event.preventDefault();
        console.log('State is - ', this.state, 'user is - ', this.props.currentUser.id)
        addToArray(this.state.id, this.state.name, this.state.email, this.state.address, this.state.birthDay, this.state.age, this.state.photo, this.props.currentUser.id)
        this.setState({ name: '', email: '', address: '', birthDay: '', age: 0 })
        const file = this.state.selectedFile
        const fileName = this.state.fileName;
        const folderName = this.state.folderName;
        uploadImage(file, folderName, fileName)
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value }, () => console.log('state from hchange', this.state))
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            const date = new Date()
            const fileName = date.getTime().toString()
            const photoPath = "/" + this.props.currentUser.id + "/" + fileName
            this.setState({
                id: fileName,
                image: URL.createObjectURL(img),
                selectedFile: img,
                folderName: this.props.currentUser.id,
                fileName: fileName,
                photo: photoPath
            }, () => console.log('this state is', this.state));

        }
    };


    render() {
        const Input = styled('input')({
            display: 'none',
        });
        console.log('props - ', this.props)
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

                        <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.name}
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="off"
                                autoFocus
                            />
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.email}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="off"
                                autoFocus
                            />
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.address}
                                margin="normal"
                                required
                                fullWidth
                                name="address"
                                label="address"
                                id="address"
                                autoComplete="off"
                            />
                            <TextField
                                id="date"
                                label="Birthday"
                                name="birthDay"
                                type="date"
                                value={this.state.birthDay}
                                onChange={this.handleChange}
                                // defaultValue="2000-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.age}
                                margin="normal"
                                required
                                fullWidth
                                name="age"
                                label="Age"
                                type="number"
                                id="age"
                                autoComplete="off"
                            />

                            <Stack direction="row" alignItems="center" spacing={2}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={this.onImageChange} />
                                    <Button variant="contained" component="span">
                                        Upload
                                    </Button>
                                </label>
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" onChange={this.onImageChange} />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                                <Typography variant="h6" component="h6">
                                    Upload An Image
                                </Typography>;
                            </Stack>
                            {/* <label> File Upload:
                                <input type="file" onChange={this.onImageChange} />
                            </label> */}
                            <img src={this.state.image} alt="hello there" width="300px" />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>


                        </Box>

                        {/* <TextField fullWidth sx={{ m: 1 }} label="fullWidth" id="fullWidth" /> */}
                        {/* <Button variant="outlined" sx={{ width: 1, m: 1, p: 2 }} color="secondary">Outlined</Button> */}
                    </Box>

                </Container>

            </div>
        );
    }
}