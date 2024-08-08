// import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const PersonalInfoPage = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Personal Information
            </Typography>
            <form noValidate autoComplete="off">
                <TextField fullWidth margin="normal" label="First Name" variant="outlined" />
                <TextField fullWidth margin="normal" label="Last Name" variant="outlined" />
                <TextField fullWidth margin="normal" label="Username" variant="outlined" />
                <TextField fullWidth margin="normal" label="New Username" variant="outlined" />
                <TextField fullWidth margin="normal" label="Email" variant="outlined" />
                <TextField fullWidth margin="normal" label="Current Password" type="password" variant="outlined" />
                <TextField fullWidth margin="normal" label="New Password" type="password" variant="outlined" />
                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Save Changes
                </Button>
            </form>
        </Box>
    );
};

export default PersonalInfoPage;
