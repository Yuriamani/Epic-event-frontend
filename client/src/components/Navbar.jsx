// Navbar.jsx

import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for custom styling
import HomePage from './Home';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
