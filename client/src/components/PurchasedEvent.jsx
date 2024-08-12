import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "./PageNavigation";
// import "./PurchasedEvent.css"; // Add custom styles if needed

function PurchasedEvent() {
  const location = useLocation();
  const { event } = location.state || {};

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
                <Card.Text>
                  <strong>Price: ${event.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PurchasedEvent;
