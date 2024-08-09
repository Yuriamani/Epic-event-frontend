
import Sidebar from './Sidebar'; // Adjust path as needed
import { Outlet } from 'react-router-dom'; // For nested routing

const MainLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flexGrow: 1, padding: '20px' }}>
                <Outlet /> {/* This will render the matched child routes */}
            </main>
        </div>
    );
};

export default MainLayout;
