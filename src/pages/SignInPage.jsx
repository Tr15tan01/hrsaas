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
            password: ''
        }
    }


    render() {
        console.log('rendered')
        return (
            <div>Thi s is a signin page</div>
        );
    }
}