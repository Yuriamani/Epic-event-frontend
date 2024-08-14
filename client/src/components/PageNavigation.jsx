import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "../Home.css";

function PageNavigation() {
  // Example state for user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // You would typically determine authentication status from context, props, or a service
  // Example: const { isAuthenticated } = useAuth(); // Assuming useAuth is a custom hook

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
            <Button
              variant="outline-warning"
              onClick={() => window.location.href = '/profile'} // Redirect to profile page
              className="profile-button"
            >
              <i className="bi bi-person-circle"></i>
            </Button>
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
