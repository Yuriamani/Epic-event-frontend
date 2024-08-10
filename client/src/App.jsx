import ProfileDashboard from "./components/ProfileDashboard";
import HistoryPage from "./pages/HistoryPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from "./pages/Home";

import MyEvents from "./pages/Events";

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
          <Route path="/profile/*" element={<ProfileDashboard />} />
          <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
          <Route path="/profile/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
