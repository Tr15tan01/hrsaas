import * as React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';

export default function InfoBox(props) {
    return (
        <Box
            sx={{
                bgcolor: 'secondary.light',
                boxShadow: 1,
                borderRadius: 1,
                p: 1,
                minWidth: '100%',
                m: 1
            }}
        >
            <Box sx={{ color: 'text.secondary' }}>{props.headline}</Box>
            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                {props.numberData}
            </Box>
            <Box
                component={TrendingUpIcon}
                sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
            />
            <Box
                sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'medium',
                    mx: 0.5,
                }}
            >
                18.77%
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
                vs. last week
            </Box>
        </Box>
    );
}