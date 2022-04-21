import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import signInWithPopup from '../utils/firebaseAuth'
import { signInWithGoogle, auth } from '../utils/firebase'
import Copyright from '../components/Copyright'




// const theme = createTheme();

export default class SignInPage extends React.Component {
    constructor() {
        super()
        this.theme = createTheme();
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // eslint-disable-next-line no-console
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
            // console.log('state cleared?', email, password)
        } catch (error) {
            await this.setState({ errorMessage: error.code.toString().slice(5) })
        }

    }

    // handleChange = args => event => {
    //     const { value } = event.target;
    //     this.setState({ [args]: value })
    // }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        console.log('rendered')
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

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>


                            <Button onClick={signInWithGoogle}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2 }}
                            >
                                Sign In With Google
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" variant="body2">
                                        Don't have an account? Sign Up
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