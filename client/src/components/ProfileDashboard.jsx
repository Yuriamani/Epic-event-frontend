
import { Routes, Route, Navigate } from 'react-router-dom';
import PersonalInfoPage from './PersonalInfoPage';
import HistoryPage from './HistoryPage';
import AuthenticatedRoute from './AuthenticatedRoute'; // Import the AuthenticatedRoute component

const ProfileDashboard = () => {
  return (
    <AuthenticatedRoute>
      <div>
        <h2>Profile Dashboard</h2>
        <Routes>
          <Route path="/" element={<Navigate to="personal-info" replace />} />
          <Route path="personal-info" element={<PersonalInfoPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Routes>
      </div>
    </AuthenticatedRoute>
  );
};

export default ProfileDashboard;
