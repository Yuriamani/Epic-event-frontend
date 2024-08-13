import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "./PageNavigation";
import { config } from "./config";
import "./PurchasedEvent.css"; // Ensure this file contains your button styles

function PurchasedEvent() {
  const location = useLocation();
  const { event } = location.state || {};

  if (!event) {
    return <div>No event selected</div>;
  }

  const handleBuyNow = () => {
    const payload = {
      OriginatorConversationID: "feb5e3f2-fbbc-4745-844c-ee37b546f627",
      InitiatorName: "testapi",
      SecurityCredential: "EsJocK7+NjqZPC3I3EO+TbvS+xVb9TymWwaKABoaZr/Z/n0UysSs..",
      CommandID: "BusinessPayment",
      Amount: "10",
      PartyA: "600996",
      PartyB: "254728762287",
      Remarks: "here are my remarks",
      QueueTimeOutURL: "https://mydomain.com/b2c/queue",
      ResultURL: "https://mydomain.com/b2c/result",
      Occassion: "Christmas",
    };

    fetch(`${config.apiUrl}/mpesa/b2c/v1/paymentrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.credentials.consumerKey}`, // Use sandbox token
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Payment successful:", data);
        // Handle the response from the API
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error from the API
      });
  };

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
                  <strong>Price: KES{event.price}</strong>
                </Card.Text>
                <button className="btn" onClick={handleBuyNow}>
                  <span className="btn__visible">Buy Now</span>
                  <span className="btn__invisible">
                    {event.ticketsLeft} {event.ticketsLeft === 1 ? "Ticket Left" : "Tickets Left"}
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PurchasedEvent;
