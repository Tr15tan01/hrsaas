import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import signInWithPopup from '../utils/firebaseAuth'
import { auth, createUserProfileDocument } from '../utils/firebase'
import Copyright from '../components/Copyright'


export default class SignUpPage extends React.Component {
    constructor() {
        super()
        this.theme = createTheme();
        this.state = {
            email: '',
            displayName: '',
            password: '',
            passwordconfirm: '',
            errorMessage: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log('subnitted')
        const { email, displayName, password, passwordconfirm } = this.state;

        if (password !== passwordconfirm) {
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user, { displayName })
            this.setState({
                email: '',
                displayName: '',
                password: '',
                passwordconfirm: ''
            })
        } catch (error) {
            // console.log(error)
            this.setState({ errorMessage: error.code.toString().slice(5) })
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <ThemeProvider theme={this.theme} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                            <Typography variant="p" color="error">
                                {this.state.errorMessage}
                            </Typography>
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.email}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.displayName}
                                margin="normal"
                                required
                                fullWidth
                                id="displayName"
                                label="Display Name"
                                name="displayName"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.password}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.passwordconfirm}
                                margin="normal"
                                required
                                fullWidth
                                name="passwordconfirm"
                                label="Confirm Password"
                                type="password"
                                id="passwordconfirm"
                                autoComplete="current-password"
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" style={{ fontSize: '12px', color: 'dodgerblue' }}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signin" style={{ fontSize: '12px', color: 'dodgerblue' }}>
                                        {"Have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        );
    }
}