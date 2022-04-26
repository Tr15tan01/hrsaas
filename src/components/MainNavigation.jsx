import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';

const MainNavigationComponent = () => {
    return (
        <>
            <GlobalStyles styles={{ a: { color: 'white', margin: '6px 18px', textDecoration: 'none' } }} />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: 'secondary.main' }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
                        HRSaaS
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            to="/hrsaas"
                            sx={{ my: 1, mx: 1.5, color: 'white' }}
                        >
                            Homepage
                        </Link>
                        <Link
                            variant="button"
                            // color="text.primary"
                            to="/pricing"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Pricing
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            to="/instruction"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Enterprise
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            to="/signin"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Signin
                        </Link>
                        {/* <Link
                            variant="button"
                            color="text.primary"
                            to="/signup"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Signup
                        </Link> */}
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default MainNavigationComponent;