import { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "./PageNavigation";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PurchasedEvent() {
  const location = useLocation();
  const { event } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handlePayment = () => {
    // Handle the payment processing with M-Pesa
    // This could involve sending a request to your server to initiate the payment process

    alert("Payment processing... Please wait for the prompt on your phone.");
    handleClose();
  };

  if (!event) {
    return <div>No event selected</div>;
  }

  return (
    <>
      <PageNavigation />
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={{ marginTop: "20px" }}>
              <Card.Img
                variant="top"
                src={event.image}
                style={{ height: "370px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  <i className="bi bi-calendar3">{event.datetime}</i>
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-geo-alt"> {event.location}</i>
                </Card.Text>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>
                  <strong>Price: ${event.price}</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Text className="text-muted">
                Payment will be processed using M-Pesa. A prompt will be sent to your phone for PIN entry.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Process Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PurchasedEvent;
