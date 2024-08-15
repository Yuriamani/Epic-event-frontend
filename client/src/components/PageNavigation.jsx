import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "../Home.css";

function PageNavigation({ user }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!user); // Initialize based on user prop

  const handleLogout = () => {
    // Clear user authentication state
    setIsAuthenticated(false);
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="Page-Navigation">
      <Navbar bg="myBlueBackground" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav>

          {isAuthenticated ? (
            <>
              <Button
                variant="outline-warning"
                className="profile-button"
                onClick={() => window.location.href = '/profile'} // Redirect to profile page
              >
                <i className="bi bi-person-circle"></i> {user.username} ({user.email})
              </Button>
              <DropdownButton
                as={ButtonGroup}
                id="profile-options"
                variant="outline-warning"
                title="Options"
              >
                <Dropdown.Item href="/dashboard/host-events">Host Events</Dropdown.Item>
                <Dropdown.Item href="/dashboard/participated-events">Participated Events</Dropdown.Item>
                <Dropdown.Item href="/dashboard/personal-info">Personal Information</Dropdown.Item>
              </DropdownButton>
              <Button
                variant="outline-danger"
                onClick={handleLogout}
                className="logout-button"
              >
                Logout
              </Button>
            </>
          ) : (
            <DropdownButton
              as={ButtonGroup}
              id="profile-dropdown"
              variant="outline-warning"
              title={<i className="bi bi-person-circle"></i>}
            >
              <Dropdown.Item href="/login">Login</Dropdown.Item>
              <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
            </DropdownButton>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default PageNavigation;
