import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './components/Home';
// import ProfileDashboard from './pages/ProfileDashboard'; // Ensure this is correct

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile/*" element={<ProfileDashboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
