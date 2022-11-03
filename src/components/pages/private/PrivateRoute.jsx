import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function PrivateRoute({ children }) {
    const location = useLocation();
    const { currentUser, loading } = useAuth();
    if (loading) {
        return <div />;
    }
    if (currentUser && currentUser?.uid) {
        return children;
    }
    return <Navigate to="/login" replace state={{ from: location }} />;
}

export default PrivateRoute;
