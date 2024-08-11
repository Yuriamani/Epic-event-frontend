import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageNavigation from '../components/PageNavigation';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BASE_URL } from './utils';

function MyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/events/events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch((err) => {
        console.error('Failed to load events:', err);
      });
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageNavigation />
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial Black', marginTop: '3.5vh', color: 'brown' }}>
        THE HOTTEST EVENTS
      </h1>
      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id}>
              <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ height: '370px', width: '280px', marginTop: '10px', objectFit: 'cover' }}>
                  <Card.Img variant="top" src={event.image} style={{ height: '370px', width: '280px' }} />
                  <Card.Body style={{ height: '152px' }}>
                    <Card.Title>
                      <p><em>{event.name}</em></p>
                    </Card.Title>
                    <Card.Text>
                      <i className="bi bi-calendar3">{event.datetime}</i>
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-geo-alt"> {event.location}</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MyEvents;
