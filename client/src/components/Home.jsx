import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link to="/" className="text-white text-2xl font-bold">EventPlanner</Link>
      <div>
        <Link to="/" className="text-white mx-2">Home</Link>
        <Link to="/events" className="text-white mx-2">Events</Link>
        <Link to="/login" className="text-white mx-2">Login</Link>
      </div>
    </nav>
  );
};

// HomePage component
const HomePage = () => {
  const navigate = useNavigate();
  
  const handleGetStartedClick = () => {
    navigate('/login'); // Redirects to the login page
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <header>
        <Navbar />
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-60">
        <h2 className="text-4xl font-light mb-2 text-white drop-shadow-lg">One Stop</h2>
        <h1 className="text-6xl font-bold mb-2 text-white drop-shadow-lg">EVENT PLANNER</h1>
        <h2 className="text-2xl font-light mb-8 text-white drop-shadow-lg">Every Event Should Be Perfect</h2>
        <div className="space-x-4 flex justify-center mt-4">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white transform hover:scale-110 transition-transform duration-300 mx-2 shadow-lg">
            About Us
          </button>
          <button 
            className="px-8 py-3 rounded-full border-2 border-white text-white transform hover:scale-110 transition-transform duration-300 mx-2 shadow-lg"
            onClick={handleGetStartedClick}
          >
            Get Started!
          </button>
        </div>
      </main>

      <section className="bg-gray-800 py-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Example Event Card */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg w-80">
            <img src="/path/to/event-image.jpg" alt="Event Name" className="w-full h-48 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold mt-4">Event Name</h3>
            <p className="mt-2">Brief description of the event. Don't miss out!</p>
            <Link to="/events" className="text-blue-500 mt-4 inline-block">Learn More</Link>
          </div>
          {/* You can repeat this div for more event cards */}
        </div>
      </section>

      <section className="bg-blue-900 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Example Testimonial */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-80">
            <p className="text-lg italic">"Great experience! The event went off without a hitch."</p>
            <p className="mt-4 font-semibold">- Client Name</p>
          </div>
          {/* You can repeat this div for more testimonials */}
        </div>
      </section>

      <footer className="p-5 bg-black bg-opacity-70">
        <div className="flex justify-center space-x-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-10 h-10 bg-gray-700 rounded-full transform hover:bg-gray-600 transition-colors duration-300"></div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;