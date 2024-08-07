import React from 'react';
import './EventListing.css';

const events = [
  {
    id: 1,
    date: '2024-08-10',
    venue: 'Central Park',
    poster: 'https://example.com/central_park.jpg',
    name: 'Summer Music Festival'
  },
  {
    id: 2,
    date: '2024-08-15',
    venue: 'Madison Square Garden',
    poster: 'https://example.com/madison_square_garden.jpg',
    name: 'Rock Legends Reunion'
  },
  {
    id: 3,
    date: '2024-08-20',
    venue: 'Times Square',
    poster: 'https://example.com/times_square.jpg',
    name: 'Broadway Bonanza'
  },
  {
    id: 4,
    date: '2024-08-25',
    venue: 'Brooklyn Bridge',
    poster: 'https://example.com/brooklyn_bridge.jpg',
    name: 'Art Under the Bridge'
  },
  {
    id: 5,
    date: '2024-08-30',
    venue: 'Yankee Stadium',
    poster: 'https://example.com/yankee_stadium.jpg',
    name: 'Sports Extravaganza'
  },
  {
    id: 6,
    date: '2024-09-05',
    venue: 'Coney Island',
    poster: 'https://example.com/coney_island.jpg',
    name: 'Beach Party'
  },
  {
    id: 7,
    date: '2024-09-10',
    venue: 'Lincoln Center',
    poster: 'https://example.com/lincoln_center.jpg',
    name: 'Classical Music Gala'
  },
  {
    id: 8,
    date: '2024-09-15',
    venue: 'The Bronx Zoo',
    poster: 'https://example.com/bronx_zoo.jpg',
    name: 'Wildlife Encounter'
  },
  {
    id: 9,
    date: '2024-09-20',
    venue: 'New York Botanical Garden',
    poster: 'https://example.com/ny_botanical_garden.jpg',
    name: 'Garden Fair'
  },
  {
    id: 10,
    date: '2024-09-25',
    venue: 'Brooklyn Museum',
    poster: 'https://example.com/brooklyn_museum.jpg',
    name: 'Art Exhibition'
  }
];

const EventListing = () => {
  return (
    <div className="event-listing">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <img src={event.poster} alt={event.name} className="event-poster" />
          <h3 className="event-name">{event.name}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-venue">{event.venue}</p>
        </div>
      ))}
    </div>
  );
};

export default EventListing;







