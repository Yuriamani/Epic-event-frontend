import ProfileDashboard from "./components/ProfileDashboard";
import HistoryPage from "./components/HistoryPage";
import PersonalInfoPage from "./components/PersonalInfoPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import PurchasedEvent from "./components/PurchasedEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my_events" element={<MyEvents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProfileDashboard />} />
          <Route path="/dashboard/personal-info" element={<PersonalInfoPage />} />
          <Route path="/dashboard/history" element={<HistoryPage />} />
          <Route path="/purchased-event" element={<PurchasedEvent />} />
          {/* Uncomment this to handle 404 errors */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
