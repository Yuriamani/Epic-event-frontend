import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../Home.css";

function PageNavigation() {
  return (
    <div className="Page-Navigation">
      <Navbar bg="myBlueBackground" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>

          <DropdownButton
            as={ButtonGroup}
            id="profile-dropdown"
            variant="outline-warning"
            title={<i className="bi bi-person-circle"></i>}
          >
            <Dropdown.Item eventKey="3">Login</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </div>
  );
}

export default PageNavigation;
