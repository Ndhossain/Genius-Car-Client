import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function PublicRoute({ children }) {
    const { currentUser } = useAuth();
    if (currentUser) {
        return <Navigate to="/" />;
    }
    return children;
}

export default PublicRoute;
