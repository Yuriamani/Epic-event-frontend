
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.token) {
        // If the user is not authenticated, redirect to the login page
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthenticatedRoute;
