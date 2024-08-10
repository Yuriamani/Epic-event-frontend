import "../Home.css";
import Button from "react-bootstrap/Button";

import Navbar from "react-bootstrap/Navbar";

function HomeBanner() {
  return (
    <>
      <div className="home-banner">
        <div>
          <h3>One Stop</h3>
        </div>
        <div>
          <p>
            <em>Event Planner</em>
          </p>
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
            <Navbar.Brand href="/about-us"> About Us</Navbar.Brand>
          </Button>
          <Button variant="outline-success" size="lg">
            <Navbar.Brand href="/signup">Get Started</Navbar.Brand>
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
