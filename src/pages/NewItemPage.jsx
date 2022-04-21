import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { addToArray, uploadImage } from '../utils/firebase';

import { Button, Container } from "@mui/material";

import TopBar from '../components/TopBar';
import ListComponent from '../components/List';
import CustomTextField from '../components/TextField';

export default class NewItemPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            email: '',
            address: '',
            birthDay: '',
            children: 0,
            info: '',
            gender: '',
            experience: ''
        }
    }




    handleSubmit = (event) => {
        event.preventDefault();
        const { id, name, surname, email, address, birthDay, children, gender, info, experience, photo } = this.state;
        console.log('State is - ', this.state, 'user is - ', this.props.currentUser.id)
        addToArray(id, name, surname, email, address, birthDay, children, gender, info, experience, photo, this.props.currentUser.id)
        this.setState({ name: '', surname: '', email: '', address: '', birthDay: '', children: 0, gender: '', info: '', experience: '' })
        const file = this.state.selectedFile
        const fileName = this.state.fileName;
        const folderName = this.state.folderName;
        uploadImage(file, folderName, fileName)
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        // this.setState({ [name]: value }, () => console.log('state from hchange', this.state))
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
        // console.log('props - ', this.props)
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

                        </Box>

                        <Typography variant="h3" color="text.secondary">Adding New Record</Typography>

                        <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
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
                                value={this.state.surname}
                                margin="normal"
                                required
                                fullWidth
                                id="surname"
                                label="Surname"
                                name="surname"
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
                                required
                                type="date"
                                value={this.state.birthDay}
                                onChange={this.handleChange}
                                // defaultValue="2000-05-24"
                                sx={{ width: '100%', marginTop: 2 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                sx={{ marginTop: 2 }}
                                onChange={this.handleChange}
                                value={this.state.children}
                                margin="normal"
                                required
                                fullWidth
                                name="children"
                                label="Children"
                                type="number"
                                id="children"
                                autoComplete="off"
                            />

                            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="Gender"
                                    value={this.state.gender}
                                    defaultValue={'Female'}
                                    id="demo-simple-select"
                                    required
                                    name="gender"
                                    label="Gender"
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            <CustomTextField name="info" label="info" id="info" value={this.state.info} handleChange={this.handleChange} />
                            <CustomTextField name="experience" label="experience" multiline id="experience" value={this.state.experience} handleChange={this.handleChange} />
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