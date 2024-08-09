import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-page-wrapper">
      <header className="header">
        <Navbar />
      </header>
      <div className="event-header">
      <main className="main-content">
        <h2 className="tagline">One Stop</h2>
        <h1 className="title">EVENT PLANNER</h1>
        <h2 className="subtitle">Every Event Should Be Perfect</h2>
        <div className="button-group">
          <button className="about-us-button">About Us</button>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
          </div>
      </main>
      </div>

      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-cards-container">
          <div className="event-card">
            <img
              src="https://i.pinimg.com/564x/39/14/12/39141219c2f92a43a4a22a0e4993be4a.jpg"
              alt="International Racing Flyer"
              className="event-image"
            />
            <h3 className="event-name">International Racing Flyer</h3>
           
            <a href="/events" className="learn-more-link">Learn More</a>
          </div>
          <div className="event-card">
            <img
              src="https://i.pinimg.com/564x/39/14/12/39141219c2f92a43a4a22a0e4993be4a.jpg"
              alt="Event Image"
              className="event-image"
            />
            <h3 className="event-name">Event Name</h3>
            
            <a href="/events" className="learn-more-link">Learn More</a>
          </div>
          <div className="event-card">
            <img
              src="https://i.pinimg.com/564x/39/14/12/39141219c2f92a43a4a22a0e4993be4a.jpg"
              alt="Event Image"
              className="event-image"
            />
            <h3 className="event-name">Event Name</h3>
           
            <a href="/events" className="learn-more-link">Learn More</a>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-cards-container">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Great experience! The event went off without a hitch."
            </p>
            <p className="testimonial-client">- Client Name</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="social-icons">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="social-icon"></div>
          ))}
        </div>
        <p className="footer-text">&copy; 2024 Event Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
