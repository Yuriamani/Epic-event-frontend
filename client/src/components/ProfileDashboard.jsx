// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import HistoryPage from '../pages/HistoryPage';
import PersonalInfoPage from '../pages/PersonalInfoPage';
import { Box } from '@mui/material';

const ProfileDashboard = () => {
    return (
        <Box display="flex">
            <Sidebar /> {/* Sidebar will appear on all profile pages */}
            <Box flexGrow={1} padding="20px"> {/* Content area on the right side */}
                <Routes>
                    <Route path="personal-info" element={<PersonalInfoPage />} />
                    <Route path="history" element={<HistoryPage />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default ProfileDashboard;
