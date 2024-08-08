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
            <Nav.Link href="/my_events">Events</Nav.Link>
          </Nav>
        </Container>
        <DropdownButton
          as={ButtonGroup}
          id="profile-dropdown"
          variant="secondary"
          title="Profile"
        >
          {" "}
          title="Profile"
          <Dropdown.Item eventKey="1">Login</Dropdown.Item>
          <Dropdown.Item eventKey="2">Signup</Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </div>
  );
}

export default PageNavigation;
