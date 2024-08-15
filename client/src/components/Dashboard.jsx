import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EventList from './EventList';
import ParticipatedEvents from './ParticipatedEvents';
import HostEvent from './HostEvent';
import MyEvents from './MyEvents';

const Dashboard = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/all-events" replace />} />
          <Route path="all-events" element={<EventList />} />
          <Route path="participated-events" element={<ParticipatedEvents />} />
          <Route path="host-events" element={<HostEvent />} />
          <Route path="my-events" element={<MyEvents />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
