import "../Home.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

function HomeBanner() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login"); // Redirects to the login page
  };
  return (
    <>
      <div className="home-banner">
        <div>
          <h3>One Stop</h3>
        </div>
        <div>
          <h1>Event Planner</h1>
        </div>
        <div>
          <h2>Every Event Is Toptear</h2>
        </div>
        <div className="mb-2">
          <Button
            variant="outline-info"
            size="lg"
            style={{ marginRight: "45vh" }}
          >
            <Navbar.Brand href="/about"> About Us</Navbar.Brand>
          </Button>
          <Button variant="outline-success" size="lg">
            <Navbar.Brand onClick={handleGetStartedClick}>
              Get Started
            </Navbar.Brand>
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
