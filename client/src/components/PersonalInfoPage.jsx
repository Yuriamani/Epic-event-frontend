import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const PersonalInfoPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
    });
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
                if (!userId) {
                    throw new Error('User ID not found in local storage');
                }

                const response = await axios.get(`https://epic-event-backend.onrender.com/users/users/${userId}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleSaveChanges = async () => {
        try {
            const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
            if (!userId) {
                throw new Error('User ID not found in local storage');
            }

            // Send updated data to the backend
            const updatedData = {
                username: newUsername || userData.username,
                email: newEmail || userData.email,
                password: newPassword || userData.password,
            };

            await axios.put(`https://epic-event-backend.onrender.com/users/users/${userId}`, updatedData);
            alert('User information updated successfully!');
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to update user information.');
        }
    };

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Personal Information
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    variant="outlined"
                    value={newUsername || userData.username}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    variant="outlined"
                    value={newEmail || userData.email}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Role"
                    variant="outlined"
                    value={userData.role}
                    disabled
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Current Password"
                    type="password"
                    variant="outlined"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="New Password"
                    type="password"
                    variant="outlined"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </Button>
            </form>
        </Box>
    );
};

export default PersonalInfoPage;
