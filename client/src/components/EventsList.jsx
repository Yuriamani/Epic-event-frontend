// EventListing.jsx
// import React from 'react';
import './EventListing.css'; // Import custom CSS for additional styles
import Navbar from "./Navbar"


const events = [
  {
    id: 1,
    title: 'Concert in the Park',
    date: '2024-09-12',
    place: 'Central Park',
    imgSrc: 'https://via.placeholder.com/300',
    ticketsLink: '#'
  },
  {
    id: 2,
    title: 'Art Exhibition',
    date: '2024-10-05',
    place: 'Modern Art Gallery',
    imgSrc: 'https://via.placeholder.com/300',
    ticketsLink: '#'
  },
  // Add more events as needed
];


const EventCard = ({ event }) => (
  <div className="card mb-4 shadow-sm">
    <img className="card-img-top" src={event.imgSrc} alt={event.title} />
    <div className="card-body">
      <h5 className="card-title">{event.title}</h5>
      <p className="card-text">Date: {event.date}</p>
      <p className="card-text">Place: {event.place}</p>
      <a href={event.ticketsLink} className="btn btn-primary buy-tickets-btn">
        Buy Tickets
      </a>
    </div>
  </div>
);

const EventListing = () => (
  <div className="container mt-4">
    <div className="row">
      {events.map(event => (
        <div key={event.id} className="col-md-5 col-lg-3">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  </div>
);

export default EventListing;
