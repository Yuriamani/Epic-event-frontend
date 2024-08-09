import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageNavigation from "../components/PageNavigation";
import HomeBanner from "../components/HomeBanner";

import React, { useState, useEffect } from "react";
import { BASE_URL } from "./utils";
import { Container } from "react-bootstrap";

function Home() {
  const [events, setEvents] = useState([]);
  const lastFourEvents = events.slice(-4);

  useEffect(() => {
    fetch(`${BASE_URL}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
      });
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageNavigation />
      <HomeBanner />

      <h1
        style={{
          fontFamily: "sans-serif",
          fontStyle: "italic",
          color: "InactiveBorder",
          fontSize: "33px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Upcoming Events
      </h1>
      <Container>
        <Row>
          {lastFourEvents.map((event) => (
            <Col key={event.id}>
              <Card
                style={{
                  // height: "370px",
                  width: "280px",
                  marginTop: "10px",
                  objectFit: "cover",
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  style={{ height: "370px", width: "280px" }}
                />
                <Card.Body style={{ height: "152px" }}>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.datetime}</Card.Text>
                  <Card.Text>{event.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
