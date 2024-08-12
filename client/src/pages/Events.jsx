import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNavigation from "../components/PageNavigation";
import Card from "react-bootstrap/Card";
import { BASE_URL } from "./utils";
import "./MyEvents.css"; // Ensure this file includes the updated CSS

function MyEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/events/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Add random price to each event
          const updatedEvents = data.map((event) => ({
            ...event,
            price: generateRandomPrice(),
          }));
          setEvents(updatedEvents);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
      });
  }, []);

  const generateRandomPrice = () => {
    // Generate a random price between $10 and $100
    return (Math.random() * (100 - 10) + 10).toFixed(2);
  };

  const handleBuyClick = (event) => {
    navigate("/purchased-event", { state: { event } });
  };
  

  return (
    <>
      <PageNavigation />
      <p>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Arial Black",
            marginTop: "3.5vh",
            color: "brown",
          }}
        >
          THE HOTTEST EVENTS
        </h1>
      </p>

      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id}>
              <Card
                style={{
                  width: "280px",
                  marginTop: "10px",
                  objectFit: "cover",
                  position: "relative", // Ensure positioning for button
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  style={{ height: "370px", width: "280px" }}
                />
                <Card.Body style={{ height: "220px", position: "relative" }}>
                  <Card.Title>
                    <p>
                      <em>{event.name}</em>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <i className="bi bi-calendar3">{event.datetime}</i>
                  </Card.Text>
                  <Card.Text>
                    <i className="bi bi-geo-alt"> {event.location}</i>
                  </Card.Text>

                  {/* Display the price */}
                  <Card.Text>
                    <strong>Price: ${event.price}</strong>
                  </Card.Text>

                  {/* Add the Buy Tickets button here */}
                  <div className="button">
                    <a
                      id="buy"
                      href="#"
                      onClick={() => handleBuyClick(event)}
                    >
                      Buy Tickets
                    </a>
                    <div id="btn_back"></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MyEvents;
