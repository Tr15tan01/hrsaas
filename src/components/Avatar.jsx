import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Typography, AvatarGroup } from '@mui/material'

export default function ImageAvatars() {
    return (
        <>
            <Typography variant="h3">
                Top Wxponat
            </Typography>
            {/* <Stack direction="row" spacing={2} flexWrap="wrap"> */}
            <AvatarGroup max={3}>
                <Avatar sx={{ width: 36, height: 36 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <Avatar sx={{ width: 36, height: 36 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <Avatar sx={{ width: 36, height: 36 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <Avatar sx={{ width: 36, height: 36 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            </AvatarGroup>
        </>
    );
}