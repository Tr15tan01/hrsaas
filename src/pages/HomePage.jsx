import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

// import env from "react-dotenv";

//local
import ControlledAccordions from '../components/Accordion'
import MainNavigationComponent from '../components/MainNavigation';
import Copyright from '../components/Copyright';


const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

const bannerImageUrl = 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

// console.log('env is ', env)

export default function HomePage() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, nav: { textDecoration: 'none' } }} />
            <CssBaseline />
            <MainNavigationComponent />
            {/* Hero unit */}
            <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Homepage
                </Typography>
                <Box sx={{ position: 'relative' }}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: 300,
                            // borderRadius: 6,
                            p: 0,
                            m: 0
                        }}
                        alt="The house from the offer."
                        src={bannerImageUrl}
                    />
                    <Typography variant="h5" align="center" color="white" component="p" sx={{ position: 'absolute', top: '33%', left: '12%' }}>
                        HRSaaS is a program which allows to monitor your company's staff
                    </Typography>
                </Box>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Typography variant="h4" m={4}>
                    Frequently Asked Questions
                </Typography>
                <Typography variant="h5" m={4}>
                    (What is all this about)
                </Typography>
                <ControlledAccordions />
            </Container>
            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}

// export default function PricingPage() {
//     return <PricingContent />;
// }