// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDashboard from './ProfileDashboard';
import HistoryPage from './pages/HistoryPage';
import PersonalInfoPage from './pages/PersonalInfoPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/profile/*" element={<ProfileDashboard />} />
                <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
                <Route path="/profile/history" element={<HistoryPage />} />
                
            </Routes>
        </Router>
    );
};

export default App;
