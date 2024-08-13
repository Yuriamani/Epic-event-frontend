import React from 'react';
import { Navbar, Container, Nav, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PageNavigation() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/PersonalInfoPage');
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

          <DropdownButton
            as={ButtonGroup}
            id="profile-dropdown"
            variant="outline-warning"
            title={<i className="bi bi-person-circle"></i>}
          >
            <Dropdown.Item onClick={handleRedirect}>Personal Info</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </div>
  );
}

export default PageNavigation;

