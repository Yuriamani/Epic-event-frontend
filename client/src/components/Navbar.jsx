
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication state
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <div className="profile">
        <img src="path_to_profile_icon" alt="Profile Icon" />
        <span>{user.username}</span>
        <span>{user.email}</span>
      </div>
      <div className="dropdown">
        <button>Menu</button>
        <div className="dropdown-content">
          <button onClick={() => navigate('/dashboard/all-events')}>All Events</button>
          <button onClick={() => navigate('/dashboard/participated-events')}>Participated Events</button>
          <button onClick={() => navigate('/dashboard/host-events')}>Host Event</button>
          <button onClick={() => navigate('/dashboard/my-events')}>My Events</button>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
