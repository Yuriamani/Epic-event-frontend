import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProfileDashboard from "./components/ProfileDashboard";
import HistoryPage from "./pages/HistoryPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";

function ProfileRoute() {
  return (
    <Router>

    <div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfileDashboard />} />
          <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
          <Route path="/profile/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default ProfileRoute;
