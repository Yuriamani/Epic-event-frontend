// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileDashboard from './components/ProfileDashboard'
import HistoryPage from './pages/HistoryPage'
import PersonalInfoPage from './pages/PersonalInfoPage'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile/*" element={<ProfileDashboard />} />
                <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
                <Route path="/profile/history" element={<HistoryPage />} />
            </Routes>
        </Router>
    )
}

export default App
