import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, adminOnly = false }) {
    const { user, loading, isAdmin } = useAuth();

    // If still loading, show a loading indicator
    if (loading) {
        return <div>Loading...</div>
    }

    // If user is not authenticated, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If route is admin only and user is not an admin, redirect to home page
    if (adminOnly && !isAdmin) {
        return <Navigate to="/" replace />;
    }

    // If user is authenticated (and has admin access if required), render the children components
    return children;
}

// Export the ProtectedRoute component for use in other parts of the application
export default ProtectedRoute;
