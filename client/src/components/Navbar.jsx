import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css'; // Optional: for custom styling

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Home
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/events">
          Events
        </Button>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="profile"
          component={Link}
          to="/profile"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
