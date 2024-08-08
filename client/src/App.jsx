import Navbar from './components/Navbar'; // Adjust the path if needed
import ProfileDashboard from './components/ProfileDashboard';
import HistoryPage from './pages/HistoryPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './components/Home';
import EventListing from './components/EventsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/*" element={<ProfileDashboard />} />
          <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
          <Route path="/profile/history" element={<HistoryPage />} />
          <Route path="/events" element={<EventListing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;