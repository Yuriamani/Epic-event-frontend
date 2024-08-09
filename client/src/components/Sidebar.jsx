import { Link } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemText, Typography, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 280px; /* Adjust the width as needed */
  height: 100vh; /* Full height of the viewport */
  background-color: #fafafa; /* Light background color */
  padding: 20px; /* Padding around the content */
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  position: fixed; /* Fixed position on the side */
  top: 0; /* Align at the top */
  left: 0; /* Align at the left */
  z-index: 1000; /* Ensure it's above other elements */
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Space below the avatar */
`;

const StyledAvatar = styled(Avatar)`
  width: 70px;
  height: 70px;
  margin-right: 15px; /* Space between avatar and text */
`;

const StyledListItem = styled(ListItem)`
  border-radius: 8px; /* Rounded corners */
  margin-bottom: 15px; /* Space between list items */
  transition: background-color 0.3s ease; /* Smooth background transition */

  &:hover {
    background-color: #e0e0e0; /* Light background color on hover */
  }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <AvatarContainer>
                <StyledAvatar alt="Levis Munene" src="path_to_profile_image" />
                <Typography variant="h6">Levis Munene</Typography>
            </AvatarContainer>
            <List component="nav">
                <StyledListItem button component={Link} to="/profile/personal-info">
                    <ListItemText primary="Personal Information" />
                </StyledListItem>
                <StyledListItem button component={Link} to="/profile/history">
                    <ListItemText primary="History" />
                </StyledListItem>
                <StyledListItem button component={Link} to="/logout">
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </StyledListItem>
            </List>
        </SidebarContainer>
    );
};

export default Sidebar;
