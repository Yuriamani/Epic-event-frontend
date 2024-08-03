// import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemText, Typography, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div style={{ width: '250px', padding: '20px', backgroundColor: '#f0f0f0', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <Avatar alt="Levis Munene" src="path_to_profile_image" sx={{ width: 56, height: 56, margin: '0 auto' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>Levis Munene</Typography>
            </div>
            <List component="nav">
                <ListItem button component={Link} to="/profile/personal-info">
                    <ListItemText primary="Personal information" />
                </ListItem>
                <ListItem button component={Link} to="/profile/history">
                    <ListItemText primary="History" />
                </ListItem>
                <ListItem button component={Link} to="/logout">
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
